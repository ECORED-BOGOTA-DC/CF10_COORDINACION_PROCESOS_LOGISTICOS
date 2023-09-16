export default {
  global: {
    componenteFormativo: 'Elaboración de los inventarios',
    descripcionCurso:
      'La elaboración de los inventarios son prioridad para cualquier organización, es por esto que siempre se tiene en cuenta lo que implica hacerlos y cada vez que se hace se intenta que la empresa no cierre sus puertas por muchos días porque el inventario no debe generar pérdidas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Elaboración del inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia del control de inventarios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios del control de inventarios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Conteo cíclico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'El inventario y otras áreas de control',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Planificación de los requerimientos de material (MRP)',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Valoración de inventarios',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Importancia de los sistemas de información (software) para el control de inventarios',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Equipos de sistematización rápida de información',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conteo físico y registro de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos generales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ejecución de inventarios físicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control de pérdidas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Auditoría a las existencias',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Indicadores de gestión aplicados a inventarios',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF10_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Indicador de gestión',
      significado:
        'herramienta que permite medir el cumplimiento de los objetivos propuestos en un periodo de tiempo determinado.',
    },
    {
      termino: 'Inventario',
      significado:
        'conjunto de mercancías o artículos que tiene la empresa para comerciar con aquellos, permitiendo la compra y venta o la fabricación primero antes de venderlos, en un periodo económico determinado. Deben aparecer en el grupo de activos circulantes (Escolme, S. F.).',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'proceso en el cual una vez verificada la mercadería se dispone a ubicarla en un espacio físico de acuerdo con su tamaño, peso, fragilidad, rotación y fecha de expiración.',
    },
    {
      termino: 'Alta dirección',
      significado:
        'persona o conjunto que tienen la responsabilidad de tomar las decisiones de la organización, establecer los objetivos y diseñar las estrategias para la consecución de los resultados que generen rentabilidad.',
    },
    {
      termino: 'Costos',
      significado:
        'valor monetario de los gastos que se generan en la producción, fabricación o procesamiento de un producto o servicio como materias primas, insumos, mano de obra, servicios, infraestructura, equipos y maquinaria, etc.',
    },
    {
      termino: 'Control de Inventario',
      significado:
        'proceso por el cual una empresa administra las mercancías que mantiene en almacén. Esto, con el objetivo de recopilar información de la entrada y salida de los productos, buscando además el ahorro de costes (Economipedia, 2020).',
    },
    {
      termino: 'Materia prima',
      significado:
        'materia extraída de otros materiales y que se utiliza o transforma para elaborar otros materiales que más tarde se convertirán en bienes de consumo.',
    },
    {
      termino: 'Productos en proceso',
      significado:
        'productos que están en el proceso de fabricación o producción.',
    },
    {
      termino: 'Productos terminados',
      significado:
        'productos que han pasado completamente el ciclo de producción en una empresa determinada, han sido totalmente completados, han pasado el control técnico y se han entregado en el almacén o se han enviado al consumidor (revendedor).',
    },
    {
      termino: 'Recepción',
      significado:
        'proceso mediante el cual se realiza la verificación y control físico y documental de la mercadería que ingresa al almacén desde una importación o compra local hasta la logística inversa (devoluciones).',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'conjunto de aplicaciones informáticas que automatiza operaciones de los negocios.',
    },
  ],
  referencias: [
    {
      referencia: 'Economipedia (2020). <em>Control de inventario.</em>',
      link: 'https://economipedia.com/definiciones/control-de-inventario.html',
    },
    {
      referencia: 'Escolme (s. F). <em>Inventario.</em>',
      link:
        'https://www.escolme.edu.co/almacenamiento/tecnicos_oei/Contabilidad/Unidad%202/Inventario.pdf',
    },
    {
      referencia:
        'Rivera, J. M., Ortega, E. y Pereyra, J. (2014). Diseño e implementación del sistema MRP en las pymes. <em>Industrial Data</em>, 17(2) 48-55.',
      link: 'https://www.redalyc.org/pdf/816/81640856006.pdf',
    },
    {
      referencia:
        'Vidal, J. (2018). <em>Fundamentos de gestión de Inventarios.</em>',
      link:
        'https://xdocs.net/documents/fundamentos-de-gestion-de-inventarios-carlos-julio-vidal-5cb8d759e5584',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mónica María Cárdenas Carrillo',
          cargo: 'Experta Temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios SENA - CIES - Regional Norte de Santander.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la industria de la comunicación gráfica CENIGRAF - Regional Distrito Capital.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y metrología - Regional Distrito Capital.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander.',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Centro para la industria de la Comunicación Gráfica - Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital.',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
