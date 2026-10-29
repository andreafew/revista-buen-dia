// ============================================================
//  TODOS LOS TEXTOS DE LA REVISTA
//  Para corregir o cambiar un texto, se modifica solo este archivo.
// ============================================================

// Arma la ruta a un dibujo de la carpeta public/dibujos
export const dibujo = (nombre) => `${import.meta.env.BASE_URL}dibujos/${nombre}.webp`

export const revista = {
  nombre: 'Buen Día',
  bajada: 'Desayunos y meriendas que recomendamos',
  investigacion: 'Alimentación y nutrición',
  edicion: 'Edición N.º 1 · Octubre 2026',
  alumnos: ['Lara Moyano', 'Luciano Leichner'],
  curso: '3° C',
  materia: 'Construcción de la Ciudadanía',
  escuela: 'Instituto Almafuerte Pilar',
}

// ------------------------------------------------------------
//  ARTÍCULO 1
// ------------------------------------------------------------
export const articulo1 = {
  numero: 1,
  titulo: 'Arrancar el día con energía',
  bajada: 'Por qué el desayuno y la merienda importan, y qué no les puede faltar.',
  paginas: [
    {
      dibujos: ['tostada-huevo', 'licuado'],
      secciones: [
        {
          pregunta: 'Dos comidas que suman',
          contenido: [
            'Después de muchas horas sin comer, el desayuno es la primera oportunidad del día para cargar energía y nutrientes. La merienda, por la tarde, ayuda a repartir la alimentación a lo largo de la jornada y a completar lo que no aportaron las otras comidas.',
            { destacado: 'No existe un desayuno ideal para todos: depende de la edad, las actividades, los horarios y las costumbres de cada persona.' },
          ],
        },
        {
          pregunta: 'La fórmula de un buen desayuno',
          contenido: [
            'Un desayuno completo combina distintos grupos de alimentos:',
            {
              formula: [
                { dibujo: 'leche', texto: 'Una bebida' },
                { dibujo: 'pan', texto: 'Hidratos de carbono' },
                { dibujo: 'queso', texto: 'Proteínas' },
                { dibujo: 'palta', texto: 'Frutas o vegetales' },
              ],
            },
            'Por ejemplo: leche o yogur con avena y una fruta, o una tostada con queso y una fruta, acompañada de agua o leche.',
          ],
        },
      ],
    },
    {
      dibujos: ['cereal', 'agua'],
      secciones: [
        {
          pregunta: '¿Qué podemos elegir?',
          contenido: [
            {
              etiquetas: [
                'Leche', 'Yogur', 'Queso', 'Frutas frescas', 'Avena', 'Pan',
                'Cereales con poco azúcar', 'Frutos secos', 'Semillas', 'Huevo', 'Agua',
              ],
            },
            'Cada alimento aporta algo distinto: los lácteos, proteínas y calcio; las frutas, vitaminas, fibra y agua; la avena y el pan, hidratos de carbono; los frutos secos y las semillas, grasas y minerales.',
            'Las frutas merecen un lugar especial. Se pueden comer enteras, en trozos o en preparaciones, y conviene ir cambiándolas, porque cada una aporta nutrientes diferentes.',
          ],
        },
        {
          pregunta: 'Comer bien para rendir mejor',
          contenido: [
            'En la escuela, el cuerpo necesita energía para estudiar, concentrarse y moverse. Una buena alimentación ayuda, pero el rendimiento también depende de otros factores:',
            { etiquetas: ['Descanso', 'Hidratación', 'Alimentación', 'Ambiente de estudio'] },
            { destacado: 'Ningún alimento por sí solo mejora el rendimiento: lo que cuenta son los hábitos saludables en conjunto.' },
          ],
        },
      ],
    },
  ],
}

// ------------------------------------------------------------
//  ARTÍCULO 2
// ------------------------------------------------------------
export const articulo2 = {
  numero: 2,
  titulo: 'Variar es la clave',
  bajada: 'Ideas para la merienda, qué tomar y cómo elegir mejor.',
  paginas: [
    {
      dibujos: ['tostada-palta', 'marcianito'],
      secciones: [
        {
          pregunta: 'Una merienda simple',
          contenido: [
            'No tiene que ser abundante ni complicada: yogur con fruta y avena, una tostada con queso, una fruta con frutos secos o algo casero. La cantidad depende de cada persona y del tiempo que pasó desde la última comida.',
          ],
        },
        {
          pregunta: 'Cambiar para sumar',
          contenido: [
            'Comer siempre lo mismo limita los nutrientes que recibimos. Variar no significa empezar de cero cada día: alcanza con cambiar la fruta, alternar cereales o usar los mismos alimentos de otra manera.',
            { destacado: 'La variedad permite descubrir nuevos sabores y sumar nutrientes.' },
          ],
        },
        {
          pregunta: '¿Qué tomamos?',
          contenido: [
            'El agua es la mejor opción para hidratarse, y la leche también puede acompañar. Las gaseosas y bebidas azucaradas no deberían reemplazar al agua, y los jugos, aunque sean de fruta, tienen más azúcar y menos fibra que la fruta entera.',
          ],
        },
      ],
    },
    {
      dibujos: ['pan', 'leche'],
      secciones: [
        {
          pregunta: 'Golosinas, con moderación',
          contenido: [
            'Galletitas, alfajores y cereales azucarados pueden comerse de vez en cuando, pero no deberían ser la única opción: suelen tener mucho azúcar, grasas y sodio. Leer las etiquetas ayuda a elegir mejor.',
          ],
        },
        {
          pregunta: '¿Lo casero es mejor?',
          contenido: [
            'Cocinar en casa permite conocer los ingredientes y ajustar las cantidades: un budín de avena y frutas, pan casero o yogur con frutas son buenas opciones.',
            { destacado: 'Que algo sea casero no significa que sea saludable: también importan los ingredientes y las cantidades.' },
          ],
        },
        {
          pregunta: 'Antes de cocinar',
          contenido: [
            {
              checklist: [
                'Lavarse las manos',
                'Utensilios y superficies limpios',
                'Refrigerar lo que lo necesita',
                'Mantenerse hidratado',
                'Variar los grupos de alimentos',
                'Evitar el exceso de azúcar',
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: 'ejemplos',
    },
  ],
}

// Ejemplos de desayunos y meriendas (página especial del artículo 2)
export const ejemplos = {
  desayunos: {
    titulo: 'Desayunos',
    intro: 'Seis combinaciones posibles:',
    opciones: [
      { texto: 'Yogur natural con avena, banana y frutos secos.', dibujo: 'avena' },
      { texto: 'Tostadas con queso y una fruta.', dibujo: 'queso' },
      { texto: 'Leche con avena y una fruta.', dibujo: 'leche' },
      { texto: 'Tostadas con huevo y una fruta.', dibujo: 'tostada-huevo' },
      { texto: 'Yogur con frutas y semillas.', dibujo: 'licuado' },
      { texto: 'Pan casero con queso y una fruta.', dibujo: 'pan' },
    ],
    cierre: 'No hace falta repetirlas todos los días: son solo ideas.',
  },
  meriendas: {
    titulo: 'Meriendas',
    intro: 'Seis opciones fáciles:',
    opciones: [
      { texto: 'Yogur con fruta y avena.' },
      { texto: 'Una fruta con un puñado de frutos secos.' },
      { texto: 'Tostadas con queso.' },
      { texto: 'Un sándwich pequeño con alimentos nutritivos.' },
      { texto: 'Leche o yogur con una fruta.' },
      { texto: 'Un budín o pan casero con una fruta.' },
    ],
    cierre: 'La cantidad depende de cada persona.',
  },
}

// ------------------------------------------------------------
//  RECETAS
// ------------------------------------------------------------
export const recetasIntro = {
  titulo: 'Meriendas saludables',
  bajada: 'Cuatro preparaciones simples, ricas y caseras para la tarde.',
}

export const recetas = [
  {
    id: 'marcianitos',
    nombre: 'Marcianitos',
    descripcion: 'Fruta licuada y congelada, para tomar el jugo y la pulpa mientras se derrite.',
    dibujos: ['marcianito'],
    etiquetas: ['Se hace en el freezer', 'Sin azúcar agregada'],
    ingredientes: [
      'Una fruta de tu preferencia',
      'Bolsitas para marcianitos',
    ],
    pasos: [
      'Licuar una fruta de tu preferencia hasta que tenga una consistencia aterciopelada.',
      'Colocar la fruta licuada en las bolsitas. Puedes comprarlas en cualquier heladería como bolsas para marcianitos.',
      'Congelar en el freezer y mover de vez en cuando para que no se peguen entre sí por el frío.',
      'Cortar la esquina de abajo para tomar el jugo y la pulpa mientras se derrite.',
    ],
  },
  {
    id: 'licuado',
    nombre: 'Licuado de fruta',
    descripcion: 'Fruta, semillas y leche o agua: una porción balanceada de antioxidantes, potasio, fibra y fructosa.',
    dibujos: ['licuado'],
    etiquetas: ['Listo en minutos', 'Con semillas'],
    ingredientes: [
      'Media manzana',
      'Media banana',
      '2 o 3 frutillas u otra fruta',
      'Semillas de chía y/o lino',
      '1 taza de leche o agua',
      'Hielo',
    ],
    pasos: [
      'Cortar media manzana, media banana y 2 o 3 frutillas u otra fruta, y agregar semillas de chía y/o lino para tener una porción balanceada de antioxidantes, potasio, fibra y fructosa.',
      'Poner la fruta en la licuadora con una taza de leche o agua y añadir hielo.',
      'Licuar todo y servir.',
    ],
  },
  {
    id: 'tazon',
    nombre: 'Tazón de avena y fruta',
    descripcion: 'Avena, cereal, almendras u otro fruto seco para aportar textura, fruta y yogur.',
    dibujos: ['avena', 'cereal'],
    etiquetas: ['Crocante', 'Sin cocción'],
    ingredientes: [
      'Manzana',
      '1 puñado de avena',
      '1 puñado de maní o almendras',
      'Cereal (medio puñado si es azucarado o un puñado si es sin azúcar)',
      'Yogur',
    ],
    pasos: [
      'Cortar manzana en cubos pequeños para añadir crocancia.',
      'En un tazón, añadir un puñado de avena y otro de maní o almendras para mejorar la textura.',
      'Añadir la manzana que cortaste al tazón.',
      'Colocar medio puñado de cereal si es azucarado o un puñado si es sin azúcar.',
      'Verter yogur y mezclar para que sea más fácil de comer y digerir.',
    ],
  },
  {
    id: 'tostada',
    nombre: 'Tostada de palta y pollo',
    descripcion: 'Pollo desmenuzado con limón y palta sobre pan tostado.',
    dibujos: ['tostada-palta', 'palta'],
    etiquetas: ['Con proteínas', 'Salada'],
    ingredientes: [
      '¼ de palta si es grande o ½ si es pequeña',
      'Sal a gusto',
      'Un chorrito de limón',
      '1 rebanada de pan',
      'Pollo desmenuzado',
      'Para acompañar: una fruta y un café con leche',
    ],
    pasos: [
      'Hacer puré ¼ de palta si es grande o ½ si es pequeña.',
      'Añadirle sal a gusto y un chorrito de limón.',
      'Tostar una rebanada de pan.',
      'Untar la tostada con el puré de palta.',
      'Colocar el pollo desmenuzado por encima y acompañar con una fruta y un café con leche.',
    ],
  },
]
