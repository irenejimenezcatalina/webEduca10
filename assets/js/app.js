(function () {
  "use strict";

  const pageId = document.body.dataset.page || "inicio";
  const email = "info@academiaeduca10.com";
  const address = "Calle Cala de Bou 50, 07829 Sant Josep de sa Talaia";
  const fiscalAddress = "S’Hort d’en Serral s/n, 07829 Sant Agustí des Vedrà (Sant Josep)";
  const mobilePhone = "608 687 486";
  const landlinePhone = "971 345 511";

  const icons = {
    arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chevron: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 10 5 5 5-5"/></svg>',
    menu: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    crumb: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>'
  };

  const socialProfiles = [
    { label: "WhatsApp", href: "https://wa.me/34608687486", external: true, icon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z"/><path d="M8.6 8.5c.4 2.8 2.2 4.6 5 5.1"/></svg>' },
    { label: "Instagram", href: "https://www.instagram.com/educa.10/", external: true, icon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></svg>' },
    { label: "Facebook", href: "https://www.facebook.com/educa10ibz/", external: true, icon: '<svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M14.2 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H8V13h2.8v8h3.4Z"/></svg>' },
    { label: "YouTube", href: "https://www.youtube.com/watch?v=wdb3w7GIZSU", external: true, icon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5.5" width="18" height="13" rx="4"/><path fill="currentColor" stroke="none" d="m10 9 5 3-5 3Z"/></svg>' },
    { label: "Email", href: `mailto:${email}`, external: false, icon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>' }
  ];

  const navigation = [
    { label: "Inicio", href: "index.html", id: "inicio" },
    { label: "Quiénes somos", href: "quienes-somos.html", id: "quienes-somos" },
    {
      label: "Inglés",
      href: "ingles.html",
      id: "ingles",
      children: [
        { label: "Inglés para niños", href: "ingles-ninos.html", id: "ingles-ninos" },
        { label: "Método GLP", href: "metodo-glp.html", id: "metodo-glp" },
        { label: "Cambridge", href: "cambridge.html", id: "cambridge" },
        { label: "Inglés para adultos", href: "ingles-adultos.html", id: "ingles-adultos" }
      ]
    },
    {
      label: "Refuerzo escolar",
      href: "refuerzo-escolar.html",
      id: "refuerzo-escolar",
      children: [
        { label: "Primaria", href: "primaria.html", id: "primaria" },
        { label: "ESO", href: "eso.html", id: "eso" },
        { label: "Técnicas de estudio", href: "tecnicas-estudio.html", id: "tecnicas-estudio" }
      ]
    },
    {
      label: "Talleres",
      href: "talleres.html",
      id: "talleres",
      children: [{ label: "Musibaby", href: "musibaby.html", id: "musibaby" }]
    },
    { label: "Escuela de verano", href: "escuela-verano.html", id: "escuela-verano" }
  ];

  const pages = {
    ingles: {
      title: "Clases de inglés para todas las edades",
      eyebrow: "Inglés en Educa10",
      lead: "Grupos desde los 3 años hasta el nivel B2 para aprender a comprender, comunicarse y utilizar el inglés con confianza.",
      tags: ["Desde 3 años", "Hasta B2", "Cambridge", "Método GLP"],
      introTitle: "Aprender inglés para utilizarlo",
      intro: [
        "Contamos con grupos de lunes a viernes, de 16:00 a 20:30. El recorrido comienza a los 3 años con Great Little People y continúa por diferentes edades y niveles hasta B2.",
        "Nuestros profesores integran el idioma mediante distintas metodologías para que su uso resulte cada vez más natural. También somos centro formador para los exámenes Cambridge desde Pre A1 Starters hasta B2 First for Schools."
      ],
      highlights: ["Grupos por edad y nivel", "De lunes a viernes", "Aprendizaje dinámico y participativo"],
      sideTitle: "Consulta grupos y plazas",
      sideText: "Indícanos la edad y el nivel aproximado para informarte sobre las opciones y la disponibilidad actual.",
      sections: [
        { title: "Objetivos de las clases", text: "Trabajamos para que el alumnado use el inglés de forma oral y escrita, comprenda textos y mensajes, amplíe su vocabulario y conozca aspectos de la cultura inglesa.", items: ["Comunicarse oralmente y por escrito con mayor fluidez.", "Comprender textos escritos, orales y visuales.", "Aprender jugando y mediante actividades dinámicas.", "Adquirir vocabulario e interpretar palabras nuevas por el contexto.", "Conocer la cultura inglesa para comunicarse mejor."] }
      ],
      related: ["ingles-ninos", "metodo-glp", "cambridge", "ingles-adultos"]
    },
    "ingles-ninos": {
      title: "Inglés para niños",
      eyebrow: "Clases por edades y niveles",
      lead: "Una forma activa de aprender inglés, desde los primeros años hasta los niveles más avanzados de la etapa escolar.",
      tags: ["Desde 3 años", "Juego", "Comunicación", "Hasta B2"],
      parent: { label: "Inglés", href: "ingles.html" },
      introTitle: "Aprender jugando y comunicándose",
      intro: [
        "En Educa10 los niños comienzan a relacionarse con el inglés desde los 3 años y pueden continuar su aprendizaje por edades y niveles hasta B2.",
        "Las actividades lúdicas y los recursos audiovisuales ayudan a trasladar el aprendizaje al uso real del idioma, manteniendo la motivación y favoreciendo la participación en el aula."
      ],
      highlights: ["Grupos adaptados a la edad", "Comprensión oral y escrita", "Vocabulario y comunicación"],
      sideTitle: "Encuentra su grupo",
      sideText: "Cuéntanos su edad y experiencia previa. Te informaremos de los grupos y plazas disponibles.",
      sections: [
        { title: "Qué queremos conseguir", text: "El objetivo es que el alumnado se comunique con mayor fluidez, comprenda mensajes escritos, orales y visuales, y amplíe su vocabulario de forma progresiva.", items: ["Usar el inglés de forma oral y escrita.", "Aprender de forma dinámica y participativa.", "Comprender el significado de nuevas palabras por el contexto.", "Ganar confianza al expresarse."] },
        { title: "Inglés desde los 3 años", text: "Para las edades de 3 a 7 años incorporamos Great Little People, una metodología íntegramente en inglés basada en el juego, el movimiento, los materiales sensoriales y el aprendizaje por rincones." }
      ]
    },
    "metodo-glp": {
      title: "Método Great Little People",
      eyebrow: "Nuevo método de inglés",
      lead: "Aprendizaje 360, íntegramente en inglés y basado en el juego para niños y niñas de 3 a 7 años.",
      tags: ["3–7 años", "100% en inglés", "Juego", "Material sensorial"],
      parent: { label: "Inglés", href: "ingles.html" },
      introTitle: "Una metodología para el aula y para casa",
      intro: [
        "Great Little People ofrece una metodología efectiva para enseñar inglés durante una etapa especialmente importante. Está diseñada para mantener a los niños motivados y participativos tanto en clase como en casa.",
        "La adquisición del idioma se realiza 100% en inglés a través de materiales sensoriales, movimiento, diversión y una organización por corners o rincones de aprendizaje."
      ],
      highlights: ["De 3 a 7 años", "Metodología 360", "Seguimiento para las familias"],
      sideTitle: "Conoce el método",
      sideText: "Te explicamos los niveles, los materiales y cómo continuar la rutina de inglés desde casa.",
      sections: [
        { title: "Aprender de forma natural", text: "Comenzar desde pequeños favorece un aprendizaje natural del idioma. La interacción y el juego ayudan a que los niños ganen confianza y autoestima mientras aprenden." },
        { title: "Juego, movimiento y sentidos", text: "Los materiales sensoriales y los rincones convierten vocabulario, fonética y habilidades lingüísticas en experiencias activas y significativas." },
        { title: "Las familias también participan", text: "El seguimiento continuo permite conocer la evolución, los contenidos y los objetivos de cada nivel, con propuestas para seguir aprendiendo y disfrutando en casa." }
      ]
    },
    cambridge: {
      title: "Exámenes de Cambridge",
      eyebrow: "Centro formador",
      lead: "Preparación desde Pre A1 Starters hasta B2 First for Schools para demostrar el nivel de inglés con una titulación reconocida internacionalmente.",
      tags: ["Pre A1–B2", "Título internacional", "Cuatro destrezas", "No caduca*"],
      parent: { label: "Inglés", href: "ingles.html" },
      introTitle: "Mucho más que un certificado",
      intro: [
        "Las titulaciones Cambridge English Qualifications acreditan una base sólida y continua en el aprendizaje del inglés. Cada examen se centra en un nivel del Marco Común Europeo de Referencia para las Lenguas (MCER).",
        "La preparación trabaja comprensión, expresión oral y escrita de forma efectiva y amena. Los exámenes evalúan las cuatro destrezas: hablar, escribir, leer y escuchar."
      ],
      highlights: ["Reconocimiento mundial", "Un objetivo concreto de aprendizaje", "Confianza y seguridad"],
      sideTitle: "Consulta el nivel adecuado",
      sideText: "Te informamos sobre los niveles, los grupos disponibles y el recorrido de preparación.",
      sections: [
        { title: "Ventajas de una titulación Cambridge", text: "Los certificados permiten demostrar el nivel de inglés ante empresas, universidades y organizaciones públicas y privadas.", items: ["Reconocimiento internacional.", "Un reto con principio, objetivos y fecha de finalización.", "Desarrollo de las cuatro habilidades lingüísticas.", "Mayor confianza, seguridad y autoestima."] },
        { title: "Pre A1 Starters", text: "Una introducción al inglés cotidiano para que los niños comiencen a desarrollar sus destrezas comunicativas. Duración aproximada: 45 minutos." },
        { title: "A1 Movers", text: "El siguiente paso del aprendizaje infantil, centrado en situaciones reales e instrucciones básicas. Duración aproximada: 1 hora." },
        { title: "A2 Flyers", text: "Permite demostrar comprensión del idioma en situaciones del día a día y potenciar el habla y la escritura a nivel básico. Duración aproximada: 1 hora y 15 minutos." },
        { title: "A2 Key for Schools (KET)", text: "Para alumnado con nivel A2 que ya puede utilizar el idioma en situaciones sencillas. Duración aproximada: 2 horas." },
        { title: "B1 Preliminary for Schools (PET)", text: "Acredita el dominio de los conceptos fundamentales del inglés y el desarrollo de las cuatro destrezas para el uso cotidiano. Duración aproximada: 2 horas y 20 minutos." },
        { title: "B2 First for Schools (FCE)", text: "Demuestra que el alumno cuenta con recursos para comunicarse en países de habla inglesa. Es una titulación de reconocimiento internacional. Duración aproximada: 3 horas y 30 minutos." },
        { title: "Sobre la vigencia", text: "Las certificaciones de inglés general no tienen fecha de caducidad. No obstante, cada empresa, universidad o entidad puede establecer sus propios requisitos sobre la antigüedad del resultado." }
      ]
    },
    "ingles-adultos": {
      title: "Inglés para adultos",
      eyebrow: "Grupos reducidos",
      lead: "Clases de inglés por las mañanas para mejorar el idioma en un grupo cercano y participativo.",
      tags: ["Adultos", "Mañanas", "Grupos reducidos", "Comunicación"],
      parent: { label: "Inglés", href: "ingles.html" },
      introTitle: "Mejora tu inglés en grupo",
      intro: [
        "Educa10 ofrece clases de inglés para adultos en grupos reducidos durante las mañanas. El trabajo en grupo permite practicar, compartir dudas y avanzar acompañado.",
        "Las sesiones se orientan al uso oral y escrito del idioma, la comprensión y la ampliación de vocabulario, adaptándose al nivel del grupo."
      ],
      highlights: ["Horario de mañana", "Práctica del idioma", "Atención cercana"],
      sideTitle: "Consulta horarios y plazas",
      sideText: "Cuéntanos tu nivel y tu objetivo para informarte sobre el grupo disponible.",
      sections: [
        { title: "Qué trabajamos", text: "Comprensión oral y escrita, expresión, vocabulario y estrategias para comunicarse con más seguridad." },
        { title: "Por qué en grupos reducidos", text: "El formato facilita la participación, el seguimiento y la adaptación de las actividades a las necesidades del grupo." }
      ]
    },
    "refuerzo-escolar": {
      title: "Refuerzo escolar",
      eyebrow: "Clases de repaso",
      lead: "Sesiones individuales o en grupos de hasta seis alumnos para resolver dudas, comprender las materias y recuperar la confianza.",
      tags: ["Primaria", "ESO", "Hábitos", "Técnicas de estudio"],
      introTitle: "Comprender, ganar seguridad y mejorar",
      intro: [
        "Disponemos de sesiones de refuerzo de lunes a viernes, de 16:00 a 20:00. Las clases pueden realizarse de forma individual o en grupos de un máximo de seis alumnos.",
        "Las actividades y estrategias se orientan a corregir dificultades de aprendizaje. Nuestro propósito es que el alumnado entienda lo que estudia, aprenda a buscar soluciones y afronte los exámenes con más eficacia."
      ],
      highlights: ["Lunes a viernes, 16:00–20:00", "Individual o máximo 6 alumnos", "Refuerzo positivo"],
      sideTitle: "Consulta las plazas disponibles",
      sideText: "Indícanos el curso y las asignaturas que necesitan apoyo para poder orientarte.",
      sections: [
        { title: "Objetivos del refuerzo", text: "El trabajo académico se acompaña con objetivos personales que ayudan a cambiar la relación con el aprendizaje.", items: ["Resolver dudas y comprender lo que parecía difícil.", "Recuperar la motivación y el gusto por la asignatura.", "Ganar seguridad y potenciar la autoestima.", "Entender, razonar y aprender a buscar soluciones.", "Rendir con mayor eficacia en exámenes.", "Mejorar y avanzar hacia el objetivo de aprobar."] },
        { title: "Cuatro bases para estudiar mejor", text: "Además del contenido, atendemos a la motivación, la fijación de conceptos, el lugar de estudio y unos hábitos físicos y de alimentación que favorezcan el aprendizaje." }
      ],
      related: ["primaria", "eso", "tecnicas-estudio"]
    },
    primaria: {
      title: "Refuerzo en Primaria",
      eyebrow: "Clases de repaso",
      lead: "Apoyo para resolver dudas, afianzar conceptos y ayudar a que cada alumno gane seguridad en su aprendizaje.",
      tags: ["Primaria", "Comprensión", "Motivación", "Confianza"],
      parent: { label: "Refuerzo escolar", href: "refuerzo-escolar.html" },
      introTitle: "Un refuerzo que empieza por comprender",
      intro: [
        "En las sesiones de refuerzo trabajamos las dudas y dificultades que aparecen durante el curso. Comprender un concepto y ser capaz de explicarlo con sus propias palabras es esencial para fijar el aprendizaje.",
        "El refuerzo positivo ayuda a recuperar la motivación, mejorar la autoconfianza y afrontar las tareas con una actitud más segura."
      ],
      highlights: ["Sesiones individuales", "Grupos de máximo 6", "De lunes a viernes"],
      sideTitle: "Busca su mejor opción",
      sideText: "Cuéntanos el curso y las áreas que necesitan refuerzo para informarte de las plazas disponibles.",
      sections: [
        { title: "Qué buscamos", text: "Resolver dudas, comprender y razonar, ganar seguridad, potenciar la autoestima y mejorar el rendimiento ante las tareas y los exámenes." },
        { title: "Hábitos que ayudan", text: "Un lugar de estudio cómodo, horarios estables, descanso, ejercicio y una alimentación saludable también influyen positivamente en el aprendizaje." }
      ]
    },
    eso: {
      title: "Refuerzo en ESO",
      eyebrow: "Clases de repaso",
      lead: "Apoyo académico para comprender las asignaturas, preparar los exámenes y afrontar la etapa con mayor seguridad.",
      tags: ["ESO", "Asignaturas", "Exámenes", "Autonomía"],
      parent: { label: "Refuerzo escolar", href: "refuerzo-escolar.html" },
      introTitle: "Entender y razonar antes de memorizar",
      intro: [
        "El objetivo del refuerzo no es únicamente aprobar. Trabajamos para que el alumno comprenda las explicaciones, aprenda a buscar soluciones y utilice herramientas que le permitan rendir con más eficacia.",
        "Las sesiones permiten resolver dudas, fijar conceptos y entrenar antes de los exámenes. El acompañamiento y el refuerzo positivo favorecen la motivación, la seguridad y la autoestima."
      ],
      highlights: ["Sesiones individuales", "Grupos de máximo 6", "De lunes a viernes"],
      sideTitle: "Consulta grupos y horarios",
      sideText: "Indícanos el curso, las asignaturas y las principales dificultades para informarte.",
      sections: [
        { title: "Objetivos académicos y personales", text: "Resolver dudas y mejorar los resultados se combina con otros objetivos: recuperar la motivación, ganar determinación y reforzar la confianza en las propias capacidades." },
        { title: "Fijar los conceptos", text: "Comprender un contenido y ser capaz de expresarlo con palabras propias es la base para consolidarlo y aplicarlo en situaciones nuevas." }
      ]
    },
    "tecnicas-estudio": {
      title: "Técnicas de estudio",
      eyebrow: "Aprender a aprender",
      lead: "Herramientas para adoptar una actitud activa ante el estudio, facilitar el aprendizaje y mejorar los resultados.",
      tags: ["Planificación", "Comprensión", "Memoria", "Repaso"],
      parent: { label: "Refuerzo escolar", href: "refuerzo-escolar.html" },
      introTitle: "Desarrollar una forma propia de estudiar",
      intro: [
        "Las técnicas de estudio buscan una actitud activa y el desarrollo de herramientas que faciliten el trabajo y ayuden a mejorar los logros académicos.",
        "La motivación activa la conducta necesaria para alcanzar una meta. A partir de ella trabajamos la comprensión, la fijación de conceptos y la creación de condiciones adecuadas para estudiar."
      ],
      highlights: ["Motivación", "Comprensión", "Organización", "Hábitos saludables"],
      sideTitle: "Mejorar la forma de estudiar",
      sideText: "Cuéntanos qué dificultades aparecen al organizar, comprender o preparar los exámenes.",
      sections: [
        { title: "Motivación", text: "Trabajamos metas concretas que ayuden a activar y mantener el esfuerzo necesario para avanzar." },
        { title: "Fijación de conceptos", text: "Comprender un contenido y expresarlo con palabras propias permite asimilarlo de forma más sólida." },
        { title: "Lugar de estudio", text: "Buscamos un espacio cómodo y protegido, adecuado para concentrarse y convertir el trabajo en una rutina." },
        { title: "Estado físico y alimentación", text: "Los horarios, el ejercicio, dormir las horas necesarias y una alimentación saludable favorecen el estudio." }
      ]
    },
    talleres: {
      title: "Talleres infantiles",
      eyebrow: "Creatividad y diversión",
      lead: "Actividades para disfrutar, experimentar y aprender en un espacio seguro acompañado por profesionales.",
      tags: ["Creatividad", "Juego cooperativo", "Autonomía", "Motricidad fina"],
      introTitle: "La creatividad es la inteligencia divirtiéndose",
      intro: [
        "En Educa10 organizamos diferentes actividades con un objetivo común: que los niños aprendan y sonrían a través del placer y la diversión.",
        "Cuidamos la elección de cada propuesta para que, además de resultar divertida y apasionante, se desarrolle en un espacio seguro y esté dirigida por profesionales."
      ],
      highlights: ["Compañerismo", "Imaginación", "Comunicación", "Exploración"],
      sideTitle: "Consulta los próximos talleres",
      sideText: "Te informamos sobre la programación, las edades, los horarios y las plazas disponibles.",
      sections: [
        { title: "Qué fomentamos", text: "Los talleres favorecen el compañerismo, el juego cooperativo y el aprendizaje mediante la experiencia.", items: ["Creatividad e imaginación.", "Autonomía y comunicación.", "Estimulación de la motricidad fina.", "Exploración de técnicas artísticas y procesos creativos."] },
        { title: "Un espacio para experimentar", text: "Los niños pueden probar, crear y desarrollar su imaginación mientras comparten la actividad con el grupo." }
      ],
      related: ["musibaby"]
    },
    musibaby: {
      title: "Musibaby",
      eyebrow: "Música en familia",
      lead: "Un programa artístico, educativo y familiar de estimulación musical para niños y niñas de 0 a 4 años.",
      tags: ["0–4 años", "45 minutos", "Tres idiomas", "En familia"],
      parent: { label: "Talleres", href: "talleres.html" },
      introTitle: "Música, arte y expresión corporal en familia",
      intro: [
        "Musibaby no es solo un programa artístico y educativo. Es, sobre todo, un programa familiar que ofrece a madres y padres herramientas para acercar a sus hijos los estímulos de la música, el arte y la expresión corporal.",
        "En las sesiones aprendemos un repertorio musical propio en castellano, catalán e inglés. Cada encuentro dura 45 minutos y, aunque está planificado y estructurado, puede adaptarse a las situaciones espontáneas del grupo."
      ],
      highlights: ["Niños de 0 a 4 años", "Repertorio en tres idiomas", "Sesiones de 45 minutos"],
      sideTitle: "Consulta el próximo grupo",
      sideText: "Te informamos sobre calendario, plazas y condiciones de participación.",
      sections: [
        { title: "Un programa familiar", text: "La participación de las familias permite continuar fuera del aula los estímulos musicales, artísticos y corporales descubiertos en cada sesión." },
        { title: "Una estructura abierta", text: "Las actividades siguen una planificación, pero dejan espacio para responder a la curiosidad y a las situaciones espontáneas que aparecen durante el encuentro." }
      ]
    },
    "escuela-verano": {
      title: "Escuela de Verano 2026",
      eyebrow: "Verano en Educa10",
      lead: "Una propuesta educativa y divertida para que los niños disfruten, aprendan y vivan una experiencia inolvidable.",
      tags: ["3–9 años", "7:45–16:00", "Catering", "Cala de Bou"],
      introTitle: "Aprendizaje y ocio en un entorno seguro",
      intro: [
        "La Escuela de Verano 2026 está dirigida a niños y niñas de 3 a 9 años y se desarrollará del 22 de junio al 9 de septiembre en Cala de Bou, en un entorno dinámico y adaptado a sus necesidades.",
        "El programa combina actividades educativas y de ocio con el acompañamiento de un equipo profesional que cuida cada detalle de la experiencia."
      ],
      highlights: ["Del 22 de junio al 9 de septiembre", "De 7:45 a 16:00", "Guardia y catering incluidos"],
      sideTitle: "Inscripciones abiertas",
      sideText: "Las plazas son limitadas. Consulta modalidades, disponibilidad y documentación necesaria.",
      sections: [
        { title: "Actividades", text: "El programa combina aprendizaje, creatividad, movimiento y tiempo al aire libre.", items: ["Talleres creativos y excursiones.", "Inglés y matemáticas divertidas.", "Psicomotricidad y deportes.", "Playa, parque infantil y juegos al aire libre.", "Yoga kids, música y cuentacuentos."] },
        { title: "Horario para facilitar la conciliación", text: "El horario amplio y flexible va de 7:45 a 16:00, con servicio de guardia y catering incluidos." },
        { title: "Modalidades de inscripción", text: "Las familias pueden elegir inscripción mensual, quincenal, semanal o por días sueltos, según sus necesidades." }
      ]
    }
  };

  const pageMedia = {
    ingles: ["assets/images/english-book.jpg", "Libro de inglés apoyado sobre una mesa", "Ivan Shilov", "ucUB9wxkPgY"],
    "ingles-ninos": ["assets/images/preschool-class.jpg", "Niños escuchando en un aula de educación infantil", "Anna Zwiefel", "LgPGzbVmD-o"],
    "metodo-glp": ["assets/images/creative-class.jpg", "Niños aprendiendo y creando en el aula", "Ahmadreza Rezaie", "FxzoAr9QBKw"],
    cambridge: ["assets/images/kids-writing.jpg", "Dos niños escribiendo concentrados durante una clase", "Santi Vedrí", "O5EMzfdxedg"],
    "ingles-adultos": ["assets/images/adult-learning.jpg", "Grupo de adultos aprendiendo y colaborando", "Brooke Cagle", "g1Kr4Ozfoac"],
    "refuerzo-escolar": ["assets/images/child-study.jpg", "Alumno leyendo con concentración", "Michał Parzuchowski", "BPXSTl_HBhk"],
    primaria: ["assets/images/child-reading.jpg", "Niña leyendo en una biblioteca", "Arthur Tseng", "Wv4_uJ0zlTw"],
    eso: ["assets/images/teens-study.jpg", "Estudiantes leyendo y tomando apuntes alrededor de una mesa", "Alexis Brown", "omeaHbEFlN4"],
    "tecnicas-estudio": ["assets/images/study-notes.jpg", "Apuntes subrayados con rotulador junto a libros y notas", "Yen Vu", "3Hcz2zvPqBI"],
    talleres: ["assets/images/kids-crafts.jpg", "Manos de un niño manchadas de pintura azul en un taller creativo", "Phil Hearing", "cylPETXS7is"],
    musibaby: ["assets/images/baby-music.jpg", "Bebé jugando con un xilófono de colores", "Jelleke Vanooteghem", "bNUGJD3gO94"],
    "escuela-verano": ["assets/images/summer-activities.jpg", "Grupo de niños jugando con un paracaídas de colores al aire libre", "Artem Kniaz", "DqgMHzeio7g"]
  };

  const relatedLabels = {
    "ingles-ninos": ["Inglés para niños", "Grupos desde los 3 años y por diferentes edades y niveles.", "ingles-ninos.html"],
    "metodo-glp": ["Great Little People", "Inglés de 3 a 7 años con juego, movimiento y materiales sensoriales.", "metodo-glp.html"],
    cambridge: ["Cambridge", "Preparación desde Pre A1 Starters hasta B2 First for Schools.", "cambridge.html"],
    "ingles-adultos": ["Inglés para adultos", "Grupos reducidos de inglés por las mañanas.", "ingles-adultos.html"],
    primaria: ["Primaria", "Comprensión, motivación y refuerzo positivo.", "primaria.html"],
    eso: ["ESO", "Resolución de dudas y preparación de exámenes.", "eso.html"],
    "tecnicas-estudio": ["Técnicas de estudio", "Herramientas para facilitar el estudio y mejorar los logros.", "tecnicas-estudio.html"],
    musibaby: ["Musibaby", "Estimulación musical de 0 a 4 años en tres idiomas.", "musibaby.html"]
  };

  function brand(variant) {
    const logo = variant === "footer" ? "assets/images/logo-educa10-blanco.webp" : "assets/images/logo-educa10.webp";
    return `<a class="brand" href="index.html" aria-label="Educa10, ir al inicio"><img class="brand__logo" src="${logo}" alt="Educa10" width="600" height="152"></a>`;
  }

  function renderSocialLinks(modifier = "") {
    const links = socialProfiles.map((profile) => `<a class="social-link" href="${profile.href}" ${profile.external ? 'target="_blank" rel="noopener"' : ""} aria-label="${profile.label}">${profile.icon}<span>${profile.label}</span></a>`).join("");
    return `<div class="social-links ${modifier}" aria-label="Redes sociales y contacto de Educa10">${links}</div>`;
  }

  function groupIsActive(item) {
    return item.id === pageId || (item.children || []).some((child) => child.id === pageId);
  }

  function desktopNav() {
    return navigation.map((item) => {
      if (!item.children) {
        return `<a href="${item.href}" class="${item.id === pageId ? "is-active" : ""}" ${item.id === pageId ? 'aria-current="page"' : ""}>${item.label}</a>`;
      }

      const children = item.children.map((child) => `<a href="${child.href}" class="${child.id === pageId ? "is-active" : ""}" ${child.id === pageId ? 'aria-current="page"' : ""}>${child.label}</a>`).join("");
      return `<details class="nav-dropdown ${groupIsActive(item) ? "is-active" : ""}"><summary>${item.label}${icons.chevron}</summary><div class="nav-dropdown__menu">${children}</div></details>`;
    }).join("");
  }

  function mobileNav() {
    return navigation.map((item) => {
      if (!item.children) {
        return `<a href="${item.href}" class="${item.id === pageId ? "is-active" : ""}" ${item.id === pageId ? 'aria-current="page"' : ""}>${item.label}</a>`;
      }

      const children = item.children.map((child) => `<a href="${child.href}" class="${child.id === pageId ? "is-active" : ""}" ${child.id === pageId ? 'aria-current="page"' : ""}>${child.label}</a>`).join("");
      return `<details ${groupIsActive(item) ? "open" : ""}><summary>${item.label}${icons.chevron}</summary><div class="mobile-nav__children">${children}</div></details>`;
    }).join("");
  }

  function renderHeader() {
    document.getElementById("site-header").innerHTML = `
      <header class="site-header" id="header">
        <div class="container nav-shell">
          ${brand()}
          <nav class="desktop-nav" aria-label="Navegación principal">${desktopNav()}</nav>
          <a class="button button--aqua nav-cta" href="contacto.html">Contactar ${icons.arrow}</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Abrir menú">${icons.menu}</button>
        </div>
        <nav class="mobile-nav" id="mobile-navigation" aria-label="Navegación móvil">${mobileNav()}<a class="button button--aqua" href="contacto.html">Contactar ${icons.arrow}</a></nav>
      </header>`;
  }

  function renderFooter() {
    document.getElementById("site-footer").innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">${brand("footer")}<p>Aprender para disfrutar y disfrutar aprendiendo, en Cala de Bou.</p><p class="footer-social-title">Síguenos y escríbenos</p>${renderSocialLinks("social-links--footer")}</div>
            <div class="footer-col"><h3>Aprender</h3><a href="ingles.html">Inglés</a><a href="refuerzo-escolar.html">Refuerzo escolar</a><a href="tecnicas-estudio.html">Técnicas de estudio</a></div>
            <div class="footer-col"><h3>Descubrir</h3><a href="talleres.html">Talleres</a><a href="musibaby.html">Musibaby</a><a href="escuela-verano.html">Escuela de verano</a></div>
            <div class="footer-col"><h3>Estamos aquí</h3><address>${address}</address><a href="tel:+34608687486">${mobilePhone}</a><a href="tel:+34971345511">${landlinePhone}</a><a href="mailto:${email}">${email}</a></div>
          </div>
          <div class="footer-bottom"><span>© <span id="current-year"></span> Educa10 · Serral ESPJ</span><div class="footer-bottom__links"><a href="aviso-legal.html">Aviso legal</a><a href="privacidad.html">Privacidad</a><a href="cookies.html">Cookies</a></div></div>
        </div>
      </footer>
      <aside class="cookie-banner" id="cookie-banner" aria-labelledby="cookie-title" hidden>
        <h2 id="cookie-title">Tu privacidad importa</h2>
        <p>No utilizamos analítica ni publicidad propia. Algunos contenidos externos, como el mapa de Google, pueden aplicar su propia política de privacidad.</p>
        <div class="cookie-banner__actions"><button class="button button--aqua" type="button" data-cookie-choice="accepted">Entendido</button><button class="button button--outline" type="button" data-cookie-choice="rejected">Rechazar</button><a class="button button--outline" href="cookies.html">Saber más</a></div>
      </aside>`;
  }

  function breadcrumbs(page) {
    const parent = page.parent ? `${icons.crumb}<a href="${page.parent.href}">${page.parent.label}</a>` : "";
    return `<nav class="breadcrumbs" aria-label="Migas de pan"><a href="index.html">Inicio</a>${parent}${icons.crumb}<span aria-current="page">${page.title}</span></nav>`;
  }

  function pageHero(page) {
    const tags = page.tags.map((tag) => `<li>${tag}</li>`).join("");
    return `<section class="page-hero"><div class="container"><div class="page-hero__content">${breadcrumbs(page)}<p class="eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p class="lead">${page.lead}</p><ul class="tag-list" aria-label="Características">${tags}</ul></div></div></section>`;
  }

  function relatedCards(ids) {
    return ids.map((id) => {
      const [title, text, href] = relatedLabels[id];
      return `<a class="subpage-card reveal" href="${href}"><h3>${title}</h3><p>${text}</p><span class="text-link">Descubrir ${icons.arrow}</span></a>`;
    }).join("");
  }

  function renderGeneric(page) {
    const paragraphs = page.intro.map((text) => `<p>${text}</p>`).join("");
    const highlights = page.highlights.map((item) => `<li>${item}</li>`).join("");
    const sections = (page.sections || []).map((section) => {
      const items = (section.items || []).map((item) => `<li>${item}</li>`).join("");
      return `<section class="content-section"><h3>${section.title}</h3><p>${section.text}</p>${items ? `<ul>${items}</ul>` : ""}</section>`;
    }).join("");
    const media = pageMedia[pageId];
    const mediaBlock = media ? `<figure class="content-media"><img src="${media[0]}" alt="${media[1]}" loading="lazy"><figcaption>Foto: <a href="https://unsplash.com/photos/${media[3]}?utm_source=educa10&utm_medium=referral" target="_blank" rel="noopener">${media[2]} / Unsplash</a></figcaption></figure>` : "";
    const related = page.related ? `<section class="section section--paper-deep"><div class="container"><div class="section-heading"><div><p class="eyebrow">Encuentra tu camino</p><h2>Elige el programa que encaja contigo</h2></div><p class="lead">Cada propuesta conserva la misma mirada cercana y adapta la forma de aprender a su etapa y objetivo.</p></div><div class="subpage-grid">${relatedCards(page.related)}</div></div></section>` : "";

    return `${pageHero(page)}
      <section class="section"><div class="container content-grid">
        <article class="prose reveal"><h2>${page.introTitle}</h2>${paragraphs}${mediaBlock}<ul class="check-list">${highlights}</ul>${sections}</article>
        <aside class="info-card reveal"><span class="info-card__label">Te orientamos</span><h3>${page.sideTitle}</h3><p>${page.sideText}</p><a class="button button--aqua" href="contacto.html?interes=${encodeURIComponent(page.title)}">Pedir información ${icons.arrow}</a></aside>
      </div></section>
      ${related}
      ${renderCta()}`;
  }

  function renderHome() {
    const ticker = ["Inglés", "Refuerzo escolar", "Técnicas de estudio", "Musibaby", "Escuela de verano"].map((item) => `<span>${item}</span>`).join("");
    return `
      <section class="hero"><div class="container hero__grid">
        <div class="hero__copy"><p class="eyebrow">Centro multidisciplinar de aprendizaje</p><h1>Aprender para <span class="word-accent">disfrutar</span></h1><p class="lead">Ayudamos a cada alumno a ganar confianza, conocer sus fortalezas y convertir el aprendizaje en una experiencia educativa, creativa y divertida.</p><div class="button-row"><a class="button button--aqua" href="contacto.html">Cuéntanos qué necesitas ${icons.arrow}</a><a class="button button--outline" href="#programas">Ver programas</a></div><div class="hero__meta"><span>Calidad</span><span>Cercanía</span><span>Profesionalidad</span></div></div>
        <div class="hero__visual"><div class="hero__blob"></div><img class="hero__photo hero__photo--logo" src="assets/images/eduquito-logo.jpg" alt="Logo de Educa10 con su personaje Eduquito"></div>
      </div></section>
      <div class="ticker" aria-hidden="true"><div class="ticker__track"><div class="ticker__group">${ticker}</div><div class="ticker__group">${ticker}</div></div></div>
      <section class="section" id="programas"><div class="container"><div class="section-heading"><div><p class="eyebrow">Nuestra oferta educativa</p><h2>Diferentes disciplinas en un mismo centro</h2></div><p class="lead">Unificamos clases, talleres y actividades en las mismas instalaciones para ofrecer más comodidad y continuidad a las familias.</p></div>
        <div class="card-grid">
          <article class="service-card reveal" style="--card-color: var(--aqua-soft)"><span class="service-card__number">01</span><h3>Inglés</h3><p>Metodologías activas para integrar el idioma y utilizarlo de forma cada vez más natural.</p><a class="text-link" href="ingles.html">Explorar inglés ${icons.arrow}</a></article>
          <article class="service-card reveal" style="--card-color: #fff0c6"><span class="service-card__number">02</span><h3>Refuerzo escolar</h3><p>Actividades y estrategias para resolver dudas y trabajar las dificultades de aprendizaje.</p><a class="text-link" href="refuerzo-escolar.html">Ver refuerzo ${icons.arrow}</a></article>
          <article class="service-card reveal" style="--card-color: #ffe4dc"><span class="service-card__number">03</span><h3>Talleres</h3><p>Experimentación y creación infantil para explorar técnicas y desarrollar la imaginación.</p><a class="text-link" href="talleres.html">Descubrir talleres ${icons.arrow}</a></article>
          <article class="service-card reveal" style="--card-color: #e7e4ff"><span class="service-card__number">04</span><h3>Técnicas de estudio</h3><p>Una actitud activa y herramientas que facilitan el estudio y ayudan a mejorar los logros.</p><a class="text-link" href="tecnicas-estudio.html">Aprender a aprender ${icons.arrow}</a></article>
          <article class="service-card reveal" style="--card-color: #e4f4dc"><span class="service-card__number">05</span><h3>Escuela de verano</h3><p>Aprendizaje, juego y diversión para seguir potenciando sus fortalezas durante las vacaciones.</p><a class="text-link" href="escuela-verano.html">Preparar el verano ${icons.arrow}</a></article>
          <article class="service-card reveal" style="--card-color: #f0e7da"><span class="service-card__number">06</span><h3>Cambridge</h3><p>Preparación desde Pre A1 Starters hasta B2 First for Schools.</p><a class="text-link" href="cambridge.html">Ver niveles ${icons.arrow}</a></article>
        </div></div></section>
      <section class="section section--paper-deep" id="video"><div class="container"><div class="section-heading"><div><p class="eyebrow">En vídeo</p><h2>Conoce Educa10 en poco más de un minuto</h2></div><p class="lead">Las instalaciones, las aulas y las clases del centro, contadas en imágenes.</p></div><div class="video-feature reveal"><video src="assets/video/educa10-academia.mp4" poster="assets/images/video-academia-poster.jpg" controls playsinline preload="none">Tu navegador no puede reproducir este vídeo.</video></div></div></section>
      <section class="section section--aqua"><div class="container about-split"><div class="photo-frame reveal"><img src="assets/images/fachada-educa10.jpg" alt="Fachada del centro Educa10 en Sant Agustí"></div><div class="reveal"><p class="eyebrow">Quiénes somos</p><h2>Un equipo interdisciplinar</h2><p class="lead">Maestros, profesores de distintas materias y profesionales de la educación trabajan para ofrecer sesiones de calidad adaptadas a los diferentes niveles de aprendizaje.</p><ul class="check-list"><li>Calidad, cercanía y profesionalidad.</li><li>Desarrollo integral, autonomía y confianza.</li><li>Aprendizaje divertido, creativo y educativo.</li></ul><div class="button-row"><a class="button" href="quienes-somos.html">Conócenos ${icons.arrow}</a></div></div></div></section>
      <section class="section" id="equipo"><div class="container"><div class="section-heading"><div><p class="eyebrow">Conoce al equipo</p><h2>Personas que acompañan de verdad</h2></div><p class="lead">Calidad, cercanía y profesionalidad son los pilares del equipo interdisciplinar de Educa10.</p></div><div class="team-feature-grid"><article class="team-feature reveal"><img src="assets/images/team-rosa.jpg" alt="Rosa Portas, dirección y gerencia de Educa10" loading="lazy"><div><span>Dirección y gerencia</span><h3>Rosa Portas</h3></div></article><article class="team-feature reveal"><img src="assets/images/team-catina.jpg" alt="Catina Torres, jefa de estudios de Educa10" loading="lazy"><div><span>Jefa de estudios</span><h3>Catina Torres</h3></div></article></div><div class="button-row button-row--center"><a class="button button--outline" href="quienes-somos.html">Conocer a todo el equipo ${icons.arrow}</a></div></div></section>
      <section class="section section--ink"><div class="container"><div class="section-heading"><div><p class="eyebrow">Formatos de clase</p><h2>Atención individual y aprendizaje en grupo</h2></div><p class="lead">Elegimos el formato en función de las necesidades, el ritmo y los objetivos del alumnado.</p></div><div class="steps"><article class="step reveal"><span class="step__number">01 · Personalización</span><h3>Sesiones individuales</h3><p>Clases adaptadas al ritmo del estudiante, con resolución inmediata de dudas y un enfoque directo sobre sus necesidades.</p></article><article class="step reveal"><span class="step__number">02 · Cooperación</span><h3>Grupos reducidos</h3><p>Los alumnos reflexionan, buscan respuestas en común y se ayudan entre ellos en un entorno de participación.</p></article><article class="step reveal"><span class="step__number">03 · Adaptación</span><h3>Un plan para cada caso</h3><p>Las sesiones y los grupos se ajustan a las diferentes necesidades para favorecer la confianza y el progreso.</p></article></div></div></section>
      <section class="section section--paper-deep" id="verano"><div class="container summer-feature"><div class="summer-feature__image reveal"><img src="assets/images/summer-outdoor.jpg" alt="Grupo de niños jugando en equipo al aire libre en verano" loading="lazy"></div><div class="reveal"><p class="eyebrow">Escuela de verano 2026</p><h2>Este verano, aprender también es jugar</h2><p class="lead">Del 22 de junio al 9 de septiembre, para niños y niñas de 3 a 9 años, con actividades educativas, creativas y al aire libre.</p><div class="summer-facts"><span><strong>7:45–16:00</strong> horario flexible</span><span><strong>Catering</strong> incluido</span><span><strong>4 modalidades</strong> de inscripción</span></div><a class="button button--aqua" href="escuela-verano.html">Ver Escuela de Verano ${icons.arrow}</a></div></div></section>
      <section class="section"><div class="container"><div class="feature-band reveal"><div><p class="eyebrow">¿Empezamos?</p><h2>A veces, una buena conversación es el primer gran paso.</h2></div><div class="feature-band__aside"><p>Cuéntanos la edad, el curso o el objetivo. Te ayudaremos a encontrar la propuesta más adecuada.</p><a class="button" href="contacto.html">Contactar ${icons.arrow}</a></div></div></div></section>`;
  }

  function renderAbout() {
    const page = { title: "Quiénes somos", eyebrow: "Conoce Educa10", lead: "Un equipo interdisciplinar que ofrece una educación de calidad, adecuada a los diferentes niveles de aprendizaje y adaptada al futuro.", tags: ["Calidad", "Cercanía", "Profesionalidad", "Formación continua"] };
    return `${pageHero(page)}
      <section class="section"><div class="container about-split"><div class="prose reveal"><p class="eyebrow">Nuestro centro</p><h2>Educación de calidad para cada etapa</h2><p>Educa10 es un centro multidisciplinar y polivalente de estudios y aprendizaje. Nuestro equipo reúne a maestros, profesores de diferentes materias y profesionales del ámbito educativo.</p><p>El objetivo principal es el desarrollo integral del alumnado. En todas las actividades buscamos que los estudiantes aprendan de una forma divertida, creativa y educativa, potenciando su autonomía y su desarrollo personal.</p><p>El profesorado es una pieza fundamental del proceso de enseñanza y tiene la capacidad de mejorar el futuro del alumnado. Por eso consideramos clave su formación continua.</p></div><div class="photo-frame reveal"><img src="assets/images/fachada-educa10.jpg" alt="Entrada de Educa10, centro de estudios y aprendizaje"></div></div></section>
      <section class="section section--aqua"><div class="container about-split"><div class="video-frame reveal"><video src="assets/video/educa10-centro.mp4" poster="assets/images/video-poster.jpg" controls playsinline preload="none">Tu navegador no puede reproducir este vídeo.</video></div><div class="reveal"><p class="eyebrow">En vídeo</p><h2>Un paseo por Educa10</h2><p class="lead">Te enseñamos el centro por dentro: las aulas, los espacios de trabajo y el ambiente en el que aprenden cada día nuestros alumnos.</p><p>Estamos en Sant Agustí y la mejor forma de conocernos es venir a vernos, pero este vídeo es un buen primer paso.</p><div class="button-row"><a class="button" href="contacto.html">Ven a visitarnos ${icons.arrow}</a></div></div></div></section>
      <section class="section section--paper-deep"><div class="container"><div class="section-heading"><div><p class="eyebrow">Nuestros pilares</p><h2>Calidad, cercanía y profesionalidad</h2></div><p class="lead">Tres principios que están presentes en las clases, el acompañamiento y todas las actividades del centro.</p></div><div class="values-grid"><article class="value-card reveal"><h3>Calidad</h3><p>Velamos por una enseñanza y unas sesiones adecuadas a los diferentes niveles de aprendizaje.</p></article><article class="value-card reveal"><h3>Cercanía</h3><p>Un acompañamiento atento ayuda a conocer las necesidades, las fortalezas y el ritmo de cada alumno.</p></article><article class="value-card reveal"><h3>Profesionalidad</h3><p>Un equipo interdisciplinar y en formación continua coordina las distintas áreas y actividades.</p></article></div></div></section>
      <section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">Nuestro equipo</p><h2>Personas que enseñan y siguen aprendiendo</h2></div><p class="lead">Un equipo coordinado, interdisciplinar y en formación continua.</p></div><div class="team-grid"><article class="team-card reveal"><img src="assets/images/team-rosa.jpg" alt="Rosa Portas" loading="lazy"><div class="team-card__body"><span>Dirección y gerencia</span><h3>Rosa Portas</h3></div></article><article class="team-card reveal"><img src="assets/images/team-catina.jpg" alt="Catina Torres" loading="lazy"><div class="team-card__body"><span>Jefa de estudios</span><h3>Catina Torres</h3><p>Coordinación de profesorado, monitores y actividades.</p></div></article><article class="team-card reveal"><img src="assets/images/team-isabel.jpg" alt="Isabel, profesora de inglés" loading="lazy"><div class="team-card__body"><span>Profesora de inglés</span><h3>Isabel</h3><p>Licenciada en Filología Inglesa y Máster de Profesorado.</p></div></article><article class="team-card reveal"><img src="assets/images/team-carmen.jpg" alt="Carmen, profesora de inglés" loading="lazy"><div class="team-card__body"><span>Profesora de inglés</span><h3>Carmen</h3></div></article><article class="team-card reveal"><img src="assets/images/team-raquel.jpg" alt="Raquel, profesora de refuerzo" loading="lazy"><div class="team-card__body"><span>Profesora de refuerzo</span><h3>Raquel</h3><p>Graduada en Bellas Artes y Máster de Profesorado.</p></div></article></div></div></section>
      <section class="section"><div class="container about-split"><div class="editorial-card reveal"><img src="assets/images/prensa-educa10.png" alt="Artículo de prensa sobre Educa10 y sus actividades educativas"></div><div class="reveal"><p class="eyebrow">Nuestra mirada</p><h2>Aprender para disfrutar y disfrutar aprendiendo</h2><p class="lead">Queremos que el alumnado desarrolle confianza, sea feliz y aprenda a conocer y potenciar sus fortalezas.</p><p>En Educa10, aprender se convierte en una aventura de experiencias, conocimientos y diversión desde un punto de vista educativo.</p><a class="button button--aqua" href="contacto.html">Ven a conocernos ${icons.arrow}</a></div></div></section>
      <section class="section section--aqua"><div class="container quote-block reveal"><blockquote>“La educación es nuestro pasaporte para el futuro, porque el mañana pertenece a la gente que se prepara para el hoy.”</blockquote><cite>John Dewey</cite></div></section>${renderCta()}`;
  }

  function renderContact() {
    const page = { title: "Hablemos", eyebrow: "Contacto", lead: "Cuéntanos qué necesitas. Te orientaremos sobre programas, grupos y disponibilidad.", tags: ["Sant Agustí", "Atención cercana", "Sin compromiso"] };
    return `${pageHero(page)}
      <section class="section"><div class="container contact-layout"><div class="reveal"><p class="eyebrow">Estamos cerca</p><h2>Tu consulta, sin rodeos</h2><p class="lead">Puedes llamarnos, escribirnos por WhatsApp o enviar el formulario directamente. Recibirás una confirmación en esta misma página.</p><div class="contact-details"><div class="contact-detail"><span>Teléfonos</span><a href="tel:+34608687486">${mobilePhone}</a> · <a href="tel:+34971345511">${landlinePhone}</a><br><a class="text-link" href="https://wa.me/34608687486" target="_blank" rel="noopener">Escribir por WhatsApp ${icons.arrow}</a></div><div class="contact-detail"><span>Correo electrónico</span><a href="mailto:${email}">${email}</a></div><div class="contact-detail"><span>Dirección</span><p>${address}</p></div><div class="contact-detail"><span>Redes y contacto</span>${renderSocialLinks("social-links--contact")}</div></div></div>
        <form class="contact-form reveal" id="contact-form"><h3>¿En qué podemos ayudarte?</h3><div class="form-honeypot" aria-hidden="true"><label for="company-website">No rellenar este campo</label><input id="company-website" name="_honey" tabindex="-1" autocomplete="off"></div><div class="form-grid"><div class="form-field"><label for="name">Nombre *</label><input id="name" name="name" autocomplete="name" required></div><div class="form-field"><label for="contact-email">Correo electrónico *</label><input id="contact-email" name="email" type="email" autocomplete="email" required></div><div class="form-field form-field--full"><label for="interest">Me interesa</label><select id="interest" name="interest"><option value="">Selecciona una opción</option><option>Inglés para niños</option><option>Método GLP</option><option>Cambridge</option><option>Inglés para adultos</option><option>Refuerzo en Primaria</option><option>Refuerzo en ESO</option><option>Técnicas de estudio</option><option>Musibaby</option><option>Escuela de verano</option><option>Otra consulta</option></select></div><div class="form-field form-field--full"><label for="message">Mensaje *</label><textarea id="message" name="message" required placeholder="Cuéntanos brevemente la edad, el curso o el objetivo"></textarea></div></div><label class="checkbox-field"><input type="checkbox" name="privacy" required><span>He leído y acepto la <a href="privacidad.html" target="_blank">política de privacidad</a>. *</span></label><div class="form-actions"><button class="button button--aqua" type="submit">Enviar consulta ${icons.arrow}</button><button class="button button--whatsapp" id="whatsapp-form-button" type="button">Abrir WhatsApp ${icons.arrow}</button></div><p class="form-note" id="form-note" role="status" aria-live="polite"></p></form>
      </div></section>
      <section class="section section--paper-deep" id="ubicacion"><div class="container"><div class="map-card reveal"><iframe class="map-card__frame" src="https://www.google.com/maps?q=${encodeURIComponent(address)}&amp;output=embed" title="Mapa con la ubicación de Educa10" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><div class="map-card__pin"><span aria-hidden="true"><b>10</b></span><h3>Educa10</h3><p>${address}</p><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}" target="_blank" rel="noopener">Cómo llegar ${icons.arrow}</a></div></div></div></section>`;
  }

  function legalHero(title, eyebrow, lead) {
    return pageHero({ title, eyebrow, lead, tags: ["Serral ESPJ", "Educa10", "Información legal"] });
  }

  function legalNav(active) {
    return `<nav class="legal-nav" aria-label="Documentos legales"><a href="aviso-legal.html" class="${active === "aviso-legal" ? "is-active" : ""}">Aviso legal</a><a href="privacidad.html" class="${active === "privacidad" ? "is-active" : ""}">Privacidad</a><a href="cookies.html" class="${active === "cookies" ? "is-active" : ""}">Cookies</a></nav>`;
  }

  function renderLegal(type) {
    if (type === "aviso-legal") {
      return `${legalHero("Aviso legal", "Información legal", "Datos identificativos y condiciones generales de uso de academiaeduca10.com.")}<section class="section"><div class="container legal-layout">${legalNav(type)}<article class="legal-copy"><h2>Datos identificativos</h2><p>De acuerdo con el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los datos de la entidad responsable de este sitio web.</p><ul><li><strong>Razón social:</strong> Serral ESPJ</li><li><strong>CIF:</strong> E16632580</li><li><strong>Dirección fiscal:</strong> ${fiscalAddress}</li><li><strong>Correo electrónico:</strong> <a href="mailto:${email}">${email}</a></li><li><strong>Sitio web:</strong> www.academiaeduca10.com</li></ul><h2>Uso del sitio web</h2><p>El acceso y navegación por este sitio atribuye la condición de usuario e implica la aceptación de las condiciones publicadas en cada momento. El usuario se compromete a realizar un uso lícito y adecuado de los contenidos y servicios.</p><h2>Propiedad intelectual</h2><p>Los textos, imágenes, identidad visual y demás contenidos del sitio pertenecen a sus respectivos titulares. No está permitida su reproducción o distribución sin autorización, salvo en los supuestos legalmente previstos.</p><h2>Responsabilidad</h2><p>Educa10 procura que la información sea exacta y esté actualizada, pero no garantiza la inexistencia de errores puntuales. Los horarios, grupos, plazas y condiciones de las actividades deben confirmarse directamente con el centro.</p><h2>Legislación aplicable</h2><p>Estas condiciones se rigen por la legislación española. Para cualquier consulta puede escribir a <a href="mailto:${email}">${email}</a>.</p></article></div></section>`;
    }

    if (type === "privacidad") {
      return `${legalHero("Política de privacidad", "Protección de datos", "Cómo recogemos y tratamos los datos que nos facilitas al contactar con Educa10.")}<section class="section"><div class="container legal-layout">${legalNav(type)}<article class="legal-copy"><h2>Responsable del tratamiento</h2><p><strong>Serral ESPJ</strong>, con CIF E16632580 y domicilio en ${fiscalAddress}. Contacto: <a href="mailto:${email}">${email}</a>.</p><h2>Datos que tratamos</h2><p>Cuando escribes a Educa10 o completas el formulario de contacto podemos tratar los datos que proporcionas, como nombre, correo electrónico, programa de interés y contenido del mensaje.</p><h2>Finalidades</h2><p>Los datos se recogen para atender solicitudes de información y mantener las relaciones derivadas de la prestación de servicios educativos, refuerzo escolar, talleres y actividades complementarias. Cuando exista consentimiento o una base legal adecuada, también podrán utilizarse para comunicar avisos, ofertas e información educativa de interés.</p><h2>Base jurídica</h2><ul><li>El consentimiento del interesado para uno o varios fines específicos.</li><li>La aplicación de medidas precontractuales o la ejecución de un contrato.</li><li>El cumplimiento de obligaciones legales aplicables al responsable.</li></ul><h2>Conservación y destinatarios</h2><p>Los datos se conservarán durante el tiempo necesario para atender la solicitud y cumplir las obligaciones legales correspondientes. Para procesar los envíos del formulario utilizamos FormSubmit, un servicio externo que remite la consulta por correo electrónico. Según la información publicada por el proveedor, las solicitudes pueden conservarse durante un máximo de 30 días. Puedes consultar su <a href="https://formsubmit.co/privacy" target="_blank" rel="noopener">política de privacidad</a>.</p><h2>Derechos</h2><p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y a no ser objeto de decisiones individualizadas automatizadas.</p><p>Para ejercerlos, escribe a Serral ESPJ en ${fiscalAddress} o a <a href="mailto:${email}?subject=PROTECCION%20DE%20DATOS">${email}</a>, indicando en el asunto «PROTECCIÓN DE DATOS».</p><h2>Exactitud y seguridad</h2><p>El titular responde de la veracidad y vigencia de los datos proporcionados y debe comunicar cualquier modificación. Serral ESPJ se compromete a tratarlos de forma confidencial y a aplicar las medidas de seguridad legalmente exigibles.</p></article></div></section>`;
    }

    return `${legalHero("Política de cookies", "Privacidad y navegación", "Información clara sobre el almacenamiento utilizado por esta versión del sitio web.")}<section class="section"><div class="container legal-layout">${legalNav(type)}<article class="legal-copy"><h2>Qué son las cookies</h2><p>Las cookies son pequeños archivos que un sitio web puede guardar en el dispositivo para recordar información sobre la navegación. Pueden ser necesarias para prestar un servicio o utilizarse, con consentimiento, para personalización, análisis o publicidad.</p><h2>Uso en esta web</h2><p>Educa10 no utiliza herramientas propias de analítica ni publicidad. La web guarda en el almacenamiento local del navegador la elección realizada en el aviso de privacidad. Además, la página de contacto incorpora un mapa interactivo proporcionado por Google Maps. Al cargarlo, el navegador conecta con Google, que puede tratar información técnica y utilizar sus propias cookies conforme a su <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacidad</a>.</p><div class="cookie-table-wrap"><table class="cookie-table"><thead><tr><th>Clave o servicio</th><th>Tipo</th><th>Duración</th><th>Finalidad</th></tr></thead><tbody><tr><td>educa10_cookie_preference</td><td>Almacenamiento local</td><td>Hasta que el usuario lo elimine</td><td>Recordar la elección realizada en el aviso.</td></tr><tr><td>Google Maps</td><td>Contenido externo</td><td>Según Google</td><td>Mostrar el mapa interactivo y permitir consultar la ubicación.</td></tr></tbody></table></div><h2>Cómo eliminar la preferencia</h2><p>Puedes borrar los datos del sitio desde la configuración de privacidad de tu navegador. Al hacerlo, el aviso volverá a aparecer en la siguiente visita.</p><h2>Cambios y contacto</h2><p>Esta política puede actualizarse si cambian las tecnologías utilizadas en la web. Si tienes preguntas, escribe a <a href="mailto:${email}?subject=Pol%C3%ADtica%20de%20Cookies">${email}</a> indicando en el asunto «Política de Cookies».</p></article></div></section>`;
  }

  function renderCta() {
    return `<section class="section section--ink"><div class="container feature-band" style="background: transparent; padding: 0;"><div><p class="eyebrow">Más información</p><h2>Encuentra la opción adecuada</h2></div><div class="feature-band__aside" style="border-color: rgba(255,255,255,.2)"><p style="color: rgba(255,255,255,.7)">Contacta con Educa10 y te informaremos de los grupos, horarios y plazas disponibles.</p><a class="button button--light" href="contacto.html">Contactar ${icons.arrow}</a></div></div></section>`;
  }

  function renderPage() {
    const app = document.getElementById("app");
    if (pageId === "inicio") app.innerHTML = renderHome();
    else if (pageId === "quienes-somos") app.innerHTML = renderAbout();
    else if (pageId === "contacto") app.innerHTML = renderContact();
    else if (["aviso-legal", "privacidad", "cookies"].includes(pageId)) app.innerHTML = renderLegal(pageId);
    else if (pages[pageId]) app.innerHTML = renderGeneric(pages[pageId]);
    else app.innerHTML = renderHome();
  }

  function setupNavigation() {
    const header = document.getElementById("header");
    const toggle = document.querySelector(".menu-toggle");
    const mobile = document.querySelector(".mobile-nav");
    const closeMenu = () => {
      mobile.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      toggle.innerHTML = icons.menu;
    };

    toggle.addEventListener("click", () => {
      const open = !mobile.classList.contains("is-open");
      mobile.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      toggle.innerHTML = open ? icons.close : icons.menu;
    });

    mobile.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => { if (window.innerWidth > 1080) closeMenu(); });
    window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 10), { passive: true });

    document.addEventListener("click", (event) => {
      document.querySelectorAll(".nav-dropdown[open]").forEach((detail) => {
        if (!detail.contains(event.target)) detail.removeAttribute("open");
      });
    });

    document.querySelectorAll(".nav-dropdown").forEach((detail) => {
      detail.addEventListener("toggle", () => {
        if (!detail.open) return;
        document.querySelectorAll(".nav-dropdown[open]").forEach((other) => {
          if (other !== detail) other.removeAttribute("open");
        });
      });
    });
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const requestedInterest = params.get("interes");
    const interest = form.elements.interest;
    const whatsappButton = document.getElementById("whatsapp-form-button");
    if (requestedInterest) {
      const option = Array.from(interest.options).find((item) => item.text.toLowerCase() === requestedInterest.toLowerCase());
      if (option) interest.value = option.value;
    }

    whatsappButton.addEventListener("click", () => {
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const message = [
        "Hola, Educa10. Quiero solicitar información.",
        "",
        `Nombre: ${data.get("name")}`,
        `Correo: ${data.get("email")}`,
        `Me interesa: ${data.get("interest") || "Consulta general"}`,
        `Mensaje: ${data.get("message")}`
      ].join("\n");
      const whatsappUrl = `https://wa.me/34608687486?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const subject = `Consulta Educa10${data.get("interest") ? ` · ${data.get("interest")}` : ""}`;
      const note = document.getElementById("form-note");
      const button = form.querySelector('button[type="submit"]');
      const buttonLabel = button.innerHTML;
      const payload = new FormData();

      payload.append("Nombre", data.get("name"));
      payload.append("email", data.get("email"));
      payload.append("Interés", data.get("interest") || "Consulta general");
      payload.append("Mensaje", data.get("message"));
      payload.append("_subject", subject);
      payload.append("_template", "table");
      payload.append("_honey", data.get("_honey") || "");

      button.disabled = true;
      button.textContent = "Enviando…";
      note.className = "form-note";
      note.textContent = "Estamos enviando tu consulta…";

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: payload
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || result?.success === false) throw new Error(result?.message || "No se pudo enviar el formulario");

        form.reset();
        note.className = "form-note is-success";
        note.textContent = "¡Gracias! Tu consulta se ha enviado correctamente. Te responderemos lo antes posible.";
      } catch (error) {
        note.className = "form-note is-error";
        note.innerHTML = `No hemos podido enviar la consulta. Puedes <a href="https://wa.me/34608687486" target="_blank" rel="noopener">escribirnos por WhatsApp</a> o llamar al ${mobilePhone}.`;
      } finally {
        button.disabled = false;
        button.innerHTML = buttonLabel;
      }
    });
  }

  function setupCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    let choice = null;
    try { choice = window.localStorage.getItem("educa10_cookie_preference"); } catch (error) { choice = null; }
    if (!choice) banner.hidden = false;

    banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        try { window.localStorage.setItem("educa10_cookie_preference", button.dataset.cookieChoice); } catch (error) { /* The banner can still close. */ }
        banner.hidden = true;
      });
    });
  }

  function setupReveals() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
  }

  const titles = {
    inicio: "Educa10 · Centro de estudios y aprendizaje",
    "quienes-somos": "Quiénes somos · Educa10",
    contacto: "Contacto · Educa10",
    "aviso-legal": "Aviso legal · Educa10",
    privacidad: "Política de privacidad · Educa10",
    cookies: "Política de cookies · Educa10"
  };

  if (pages[pageId]) document.title = `${pages[pageId].title} · Educa10`;
  else if (titles[pageId]) document.title = titles[pageId];

  renderHeader();
  renderPage();
  renderFooter();
  document.getElementById("current-year").textContent = new Date().getFullYear();
  setupNavigation();
  setupContactForm();
  setupCookieBanner();
  setupReveals();
})();
