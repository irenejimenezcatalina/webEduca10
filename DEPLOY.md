# Despliegue y mantenimiento de assets

Notas operativas de la web de Educa10. Escrito el 18 de agosto de 2026.

## Lo más importante

**Hacer push a GitHub NO despliega la web.** El proyecto de Cloudflare Pages es de
subida directa (`Git Provider: No`), no está conectado al repositorio. Cada
publicación hay que lanzarla a mano con `wrangler`.

| Dato | Valor |
| --- | --- |
| Proyecto de Pages | `educa10` |
| Dominio | https://educa10.pages.dev |
| Entorno de producción | rama `main` |
| Repositorio | https://github.com/MigVarona/educa10-web |
| Origen del despliegue | subida directa (sin integración Git) |

## Cómo desplegar

Se despliega **una carpeta limpia**, nunca la raíz del repositorio.

```bash
# 1. Preparar la carpeta con lo que va publicado
DIST=$(mktemp -d)
cp *.html "$DIST"/
cp -R assets "$DIST"/assets
find "$DIST" -name ".DS_Store" -delete

# 2. Publicar en producción
npx wrangler@latest pages deploy "$DIST" \
  --project-name educa10 --branch main --commit-dirty=true
```

Por qué una carpeta limpia y no `.`:

- `docs/` guarda los vídeos originales sin comprimir (90 MB y 52 MB). Cloudflare
  Pages **rechaza cualquier fichero de más de 25 MB**, así que subir la raíz haría
  fallar el despliegue entero.
- `docs/` también contiene material interno (copys, capturas, el `.docx` de la
  cláusula de privacidad) que no debe quedar accesible en la web pública.

### Comprobar que ha subido de verdad

Un 200 no basta: si un fichero no existe, Pages devuelve **200 con el HTML de la
página** en lugar de un 404. Hay que mirar el `content-type`.

```bash
curl -sI https://educa10.pages.dev/assets/video/educa10-academia.mp4 | grep -i content-type
# correcto -> content-type: video/mp4
# mal      -> content-type: text/html   (el fichero NO está desplegado)

# Y que el JS servido es el nuevo:
curl -s https://educa10.pages.dev/assets/js/app.js | grep -c "educa10-academia.mp4"
```

### Comandos útiles

```bash
npx wrangler@latest whoami                                   # sesión activa
npx wrangler@latest pages project list                       # proyectos
npx wrangler@latest pages deployment list --project-name educa10
```

Si algún día se quiere que el push a `main` despliegue solo: dashboard de
Cloudflare → Workers & Pages → `educa10` → Settings → conectar el repositorio de
GitHub. A partir de ahí este documento deja de aplicar.

## Vídeos

Los originales van a `docs/` (ignorado por git vía `docs/*.mp4`) y **solo la
versión comprimida** entra en `assets/video/`.

```bash
# Horizontal 720p (ej. 90 MB -> 13,7 MB)
ffmpeg -i "docs/original.mp4" -c:v libx264 -profile:v high -preset slow \
  -crf 26 -maxrate 1700k -bufsize 3400k -pix_fmt yuv420p \
  -c:a aac -b:a 96k -ac 2 -movflags +faststart assets/video/nombre.mp4

# Vertical 9:16, reescalado a 720 de ancho (ej. 52 MB -> 9 MB)
ffmpeg -i "docs/original.mp4" -vf "scale=720:-2" -c:v libx264 -profile:v high \
  -preset slow -crf 27 -maxrate 2000k -bufsize 4000k -pix_fmt yuv420p \
  -c:a aac -b:a 96k -ac 2 -movflags +faststart assets/video/nombre.mp4

# Póster (elegir un segundo con un plano bueno)
ffmpeg -ss 12 -i assets/video/nombre.mp4 -frames:v 1 -q:v 4 \
  assets/images/nombre-poster.jpg
```

Reglas:

- `-movflags +faststart` es **obligatorio**: mueve el índice al principio del
  fichero para que empiece a reproducirse sin descargarlo entero.
- En el HTML, siempre `preload="none"` más `poster`. Si no, cada visita se
  descarga los megas del vídeo aunque nadie le dé al play.
- Mantener los ficheros por debajo de 25 MB.

**Limitación conocida:** Cloudflare Pages no sirve *range requests* en estos
ficheros (devuelve 200 en lugar de 206 y no anuncia `accept-ranges`). La
reproducción funciona gracias a `+faststart`, pero saltar hacia adelante en la
barra puede ir lento. Si llega a molestar, la solución es Cloudflare Stream o R2.

## Imágenes

Las fotos de stock se descargan de Unsplash a 1600 px de ancho y se recomprimen:

```bash
ffmpeg -i original.jpg -q:v 5 -pix_fmt yuvj420p assets/images/nombre.jpg
```

Objetivo: 70–280 KB por imagen. No usar `sips` para recomprimir, sube el peso en
vez de bajarlo.

### Licencias

Cuidado al buscar en Unsplash: **muchos resultados son Unsplash+ (Getty), de
pago**, y no se distinguen en los listados de búsqueda. Hay que abrir la ficha de
la foto y confirmar que pone *"Free to use under the Unsplash License"*. Las URL
que empiezan por `plus.unsplash.com` son siempre de pago.

### Atribución

Cada página de programa define su imagen en `pageMedia`, dentro de
`assets/js/app.js`, con este formato:

```js
clave: ["ruta/imagen.jpg", "texto alternativo", "Nombre del autor", "IdDeUnsplash"]
```

El cuarto valor es el ID de la foto en Unsplash: con él se construye el enlace del
pie de foto, así que tiene que corresponder con la imagen real. Al cambiar una
foto hay que actualizar los cuatro campos.

### No repetir fotos

Cada página debe tener su propia imagen. En agosto de 2026 había siete
repeticiones (la misma foto en cuatro páginas distintas) y hubo que sustituirlas.
Para comprobarlo:

```bash
grep -o 'assets/images/[a-z0-9._-]*' assets/js/app.js | sort | uniq -c | sort -rn
```

Solo deberían aparecer repetidas las fotos propias del centro (fachada y equipo),
que salen a propósito en la home y en "Quiénes somos".

## Probar en local

```bash
python3 -m http.server 8791 --directory .
# http://127.0.0.1:8791/index.html
```

Las páginas son cascarones HTML y todo el contenido lo pinta `assets/js/app.js`,
así que abrir un `.html` con doble clic (`file://`) no sirve: hace falta servidor.
