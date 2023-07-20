<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conteo físico y registro de inventarios
    
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color: #57DBD8")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En realidad, muchas herramientas han intentado reemplazar el contexto del inventario físico y lo han logrado con buenos comentarios, pero hasta ahora una de las mejores opciones para hacer que todo funcione tiene que ver con el conteo, y es hacer un conteo de buena calidad de manera manual con personal capacitado para ello como lo verá a continuación en este punto del componente formativo.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1 Conceptos generales 
    
    p(data-aos="fade-right") El conteo físico es el procedimiento por el cual se verifican las existencias físicas en una bodega como medida de control a pérdidas o desviaciones en los procesos que permitirá determinar sus causas y establecer los correctivos necesarios para que no vuelvan a ocurrir, considerando productos en proceso, materias primas, insumos, productos terminados, activo fijo, etc.

    p.mb-5(data-aos="fade-right") Los conteos físicos se deben hacer con frecuencia y con la participación de personal independiente para ejercer mayor control, buscando, además de verificar y comprobar lo que hay físico en el almacén los siguientes objetivos:

    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 400px;" data-aos="fade-right")
      .col-md-7.col-lg-8.ps-md-4(data-aos="fade-left")
        ul.lista-ul--separador
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Determinar si los costos están correctamente determinados.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Verificar la rotación y tomar decisiones sobre obsoletos, productos en mal estado o con poco movimiento.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Comprobar reportes de producción y ventas.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Evaluar la infraestructura donde se encuentren almacenados los productos si cumple con los requisitos para que no se afecte la calidad de los productos.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Verificar los registros contables.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Organizar las existencias.
    
    .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #E9F0FE")
      p.mb-0 Con toda esta información se logra tener un inventario actualizado y con registros confiables lo que permite una mejor evaluación y conocimiento de la situación de las existencias e implementar estrategias que contribuyan a prestar un mejor servicio al cliente.

    p.mb-5.text-center.fw-bold Algunos aspectos a tener en cuenta antes, durante y después de la realización de un inventario son: 

    .mx-auto.col-xl-11.mb-5.d-none.d-lg-block
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 4
        span.d-block Aspectos del inventario
      img.mx-auto(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 1040px;" data-aos="fade-left")

    .d-flex.flex-wrap.d-lg-none.justify-content-center
      .col-12.col-md-6.col-lg-4.px-md-2.px-xl-3.d-flex.mb-4(data-aos="fade-right")
        .tarjeta-introduccion(style="background-color: #C4F2F1")
          h5 ANTES
          p.mb-0 Organizar la bodega.
            br              
            |Recopilar la información de todos los movimientos de entradas y salidas de los productos.
            br                
            |Capacitación al personal.
            br                
            |Distribuya funciones.
            br                
            |Identificar riesgos inherentes y de control.
      .col-12.col-md-6.col-lg-4.px-md-2.px-xl-3.d-flex.mb-4(data-aos="flip-up")
        .tarjeta-introduccion(style="background-color: #D8E4FD")
          h5 DURANTE
          p.mb-0 No deben existir movimientos del inventario.
            br          
            |Hacer corte del inventario, teniendo en cuenta todos los movimientos.
            br            
            |Realizar pruebas de conteo para verificar datos.
            br            
            |La persona que coordina el inventario debe verificar el proceso.
      .col-12.col-md-6.col-lg-4.px-md-2.px-xl-3.d-flex.mb-4(data-aos="fade-left")
        .tarjeta-introduccion(style="background-color: #C4F2F1")
          h5 DESPUÉS
          p.mb-0 Se deben cruzar los resultados del conteo físico con la información que existe en el sistema para obtener faltantes o sobrantes.
            br            
            |Determinar las causas de los faltantes.
            br              
            |Elaboración del acta del inventario con todo el procedimiento del inventario.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_2 2.2 Ejecución de inventarios físicos
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      .order-2.order-lg-1.col-lg-8.col-xl-7.pe-lg-4
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 El objetivo de toda administración de una empresa es tener el control de sus inventarios, una forma de hacerlo es realizar inventarios de forma eficiente que arrojen resultados reales y que permitan conocer y analizar el estado de sus bienes.
        p.mb-0(data-aos="fade-right") Para llevar a cabo un inventario se debe tener en cuenta toda la información y datos que se tengan de los productos como rotación (entradas y salidas), ventas, producto en tránsito, etc., todo esto permitirá conocer la realidad permitiendo efectuar una buena evaluación del inventario que lleve a encontrar pérdidas o desviaciones en los procesos y que servirán como base para diseñar estrategias para mejorar o corregir desviaciones.
      img.order-1.order-lg-2.col-lg-4.col-xl-5.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-4.png" style="max-width: 505px;" data-aos="fade-right")
    p.mb-5(data-aos="fade-right") Para la realización del inventario la empresa debe elegir de acuerdo con su contexto, el método que más le favorezca para lograr los resultados esperados, además, se asignarán los recursos necesarios (personas, material, espacio, software) que se tendrán para llevarlo a cabo de la forma más eficiente, para hacer un inventario se debe tener en cuenta:

    LineaTiempoD.color-secundario.mb-5(data-aos="fade-right")
      p.text-small(numero="1" titulo="Definir qué se va a inventariar") Lo primero que la alta dirección debe definir es: ¿cuáles bienes son los que se van a inventariar? Puede ser alguna línea o referencia específica, o si corresponden a materias primas, insumos, productos en proceso o producto terminado; o si la empresa tiene varios almacenes o bodegas se podrían inventariar todas las referencias que hay en un determinado almacén, teniendo en cuenta si el inventario corresponde a alguna auditoría, o si se presentó algún fraude dentro de la empresa o es un inventario por término de un periodo contable. Es de gran importancia tener todos estos aspectos claros, ya que permiten una buena planificación y programación y evitar que se presenten errores.
      p.text-small(numero="2" titulo="Identificar los lugares a inventariar") Se deben tener identificados todos los lugares donde se encuentren los artículos a inventariar para que no queden por fuera del conteo. Es conveniente hacer una preparación de los lugares con anticipación recorrerlos y ordenarlos para trazar el recorrido a realizar. Como ejemplo se puede tratar de una empresa comercial que tenga varios puntos de ventas, es importante planificar la ruta a todos los puntos.
      p.text-small(numero="3" titulo="Equipo de trabajo") Es de gran ayuda y hará más eficiente el trabajo contar con personal que conozca el almacén o el lugar donde están los productos a inventariar, en lo posible hacer una reunión previa con el equipo de trabajo para que conozcan el objetivo del inventario. 
      p.text-small(numero="4" titulo="Seleccionar las herramientas de control del inventario") Hoy en día existe gran variedad de herramientas <em>online</em> o automatizadas que permiten agilizar el proceso desde la clasificación hasta el control final, se debe elegir la que más se adapte a las necesidades de la organización. Para realizar el conteo físico de las existencias se podrá hacer de dos formas: manual o a través de un lector de código de barras el cual agilizará el conteo.
      p.text-small(numero="5" titulo="Metodología y recorrido del inventario") Se fija la fecha, la manera cómo se realizará el conteo físico (manual o con un lector), la ruta a seguir para llegar a todos los puntos donde se encuentren los productos a inventariar, y todas las acciones a tener en cuenta para evitar posibles errores que se puedan presentar como, por ejemplo, contar más de una vez el mismo producto, para este caso se podrá optar por marcar con alguna seña o cambiar de posición el producto que ya ha sido contado. 
      p.text-small(numero="6" titulo="Recuento y registro") Se va registrando cada producto inventariado, se pueden realizar reconteos en grupos pequeños de productos para detectar cualquier posible falla y tomar correcciones de inmediato, ya que es más fácil detectarlas en grupos pequeños, una vez terminado el conteo se hace verificación de la información recopilada, que todas las referencias estén dentro del conteo.
      p.text-small(numero="7" titulo="Análisis de la información") Una vez terminado el conteo se realiza la verificación de los datos del conteo versus información previa de las existencias, detectando, en primera instancia, los posibles faltantes que se estén presentando para realizar una nueva verificación y encontrarlos de lo contrario representan pérdidas que se puedan estar dando por errores en los procesos, por algún fraude, etc., es aquí donde la alta dirección debe tomar decisiones importantes sobre la gestión de los inventarios como cambio en algún procedimiento, implementación de herramientas tecnológicas, capacitación al personal, etc.
      p.text-small(numero="8" titulo="Acta final") Se debe elaborar un acta del inventario donde quede consignado todo el procedimiento del inventario hora de inicio, hora fin, participantes, resultados del conteo, diferencias, observaciones, etc. 

    p.mb-5.fw-bol.text-center Para tener una buena planificación en la realización de un inventario se debe tener respuesta a las siguientes preguntas:

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-repeat: no-repeat; background-position: center; background-size: contain"
    )
      .mx-auto.col-lg-8.col-xl-6
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 5
          span.d-block Planificación inventario 
        img.mx-auto(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 610px;" data-aos="fade-left")

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_3 2.3 Control de pérdidas 
    
    p.mb-5(data-aos="fade-right") Las pérdidas en las existencias dentro de una empresa se pueden dar por diversas circunstancias: robos de personas externas, fraude del personal que labora para la entidad, vencimiento de productos perecederos, daño en la calidad de los productos, errores administrativos, etc., teniendo en cuenta que en cualquier caso que se presenten tendrán un impacto negativo en las finanzas de la empresa la alta dirección debe centrar sus esfuerzos en diseñar estrategias para controlar el riesgo que estas circunstancias ocurran.

    .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          h5 ¿Cómo evitar las pérdidas?
          p.mb-0.order-2.order-md-1.pe-md-4(data-aos="fade-right") Una organización puede implementar medidas que permitan minimizar el riesgo a que se presenten pérdidas en los inventarios, aunque no garantiza que no se presenten se tendrá un mayor control de las existencias.
    
    .col-xl-10.mx-auto
      .tabla-a.color-primario.mb-5(data-aos="fade-left")
        table.d-flex.flex-wrap
          thead.w-100
            tr.d-flex(style="background-color: #E9F0FE")
              th.col-12.py-4(colspan="2") Medidas de control
          tbody.w-100
            tr.d-flex.col-12
              td.col-4.d-flex.align-items-center
                p.w-100.mb-0.fw-bold.text-center Robo de personas externas
              td.col-8
                ul
                  li.pb-2.mb-2(style="border-bottom-style: dashed")
                    i.fas.fa-angle-right.pe-2(style="color: #FE7062; font-size: 20px")
                    | Instalación de sistemas de seguridad como cámaras de video.
                  li.pb-2.mb-2(style="border-bottom-style: dashed")
                    i.fas.fa-angle-right.pe-2(style="color: #FE7062; font-size: 20px")
                    | Contratación de personal de vigilancia.
                  li.pb-2.mb-2
                    i.fas.fa-angle-right.pe-2(style="color: #FE7062; font-size: 20px")
                    | Implementación de sistemas de alarma que estén conectados con las autoridades.
            tr.d-flex(style="background-color: #F9FBFF")
              td.col-12.py-4(colspan="2")
                .tarjeta-introduccion.mx-auto(style="background-color: #18F518; max-width: 495px")
                  p.fw-bold.text-center.mb-0 Estilo de tabla de muestra, sacar la info del documento
      
    .d-flex.flex-wrap.align-items-start.position-relative
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 295px;" data-aos="fade-right")
      .col-md-7.col-lg-8.col-xl-9.ps-md-4(data-aos="fade-left")
        p La falta de registros en los movimientos de los productos desde que ingresan hasta que son entregados a los clientes también maximizan las probabilidades de pérdidas, ya que no se cuenta con datos precisos de lo que se compra y sus movimientos dentro de la cadena de abastecimiento permitiendo que la mercancía desaparezca no solo por fraude o robo, sino por desorganización en la gestión de los inventarios; además, las pérdidas se dan porque al no conocer el valor real de las existencias se puede pedir inventario en exceso o fallas por escasez de productos.

        p.mb-0 El éxito de toda empresa es analizar y saber con exactitud dónde, cómo y por qué se están presentando las pérdidas para aplicar estrategias que permitan actuar ante los diferentes riesgos que implica toda operación comercial, ya que estos pueden traer consecuencias negativas sobre la rentabilidad, la estabilidad operativa y hasta de imagen de las organizaciones.

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_4 2.4 Auditoría a las existencias
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #91B3FA")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-7.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Una auditoria es un procedimiento que se realiza para revisar, analizar y evaluar cómo se está haciendo un determinado proceso, detectar posibles desviaciones o fallas y tomar las acciones correctivas, preventivas o de mejora necesarias para lograr el óptimo funcionamiento de la compañía.

    P(data-aos="fade-right") Las auditorías en los inventarios son de gran importancia, ya que ayudan a verificar el correcto registro, gestión y evaluación de las existencias, también permiten determinar si los métodos y técnicas aplicadas en la administración del inventario están cumpliendo con los objetivos esperados y si están siendo aplicados correctamente, ya que el costo de los inventarios son un factor determinante en el cálculo de las utilidades. 

    P.mb-5(data-aos="fade-right") Controlar las existencias es una actividad estratégica para una organización ya que implica encontrar la forma de mantener mínimos los costos del stock, pero asegurando que existan en el tiempo justo los productos que se requieren para dar cumplimiento a los procesos y como resultado tener a los clientes satisfechos; además, permite:

    .row
      .col-md-6.col-xl.mb-5.d-flex
        .w-100.tarjeta-numerada.color-primario.ps-5.p-3.d-flex.align-items-center(data-aos="fade-right" style="box-shadow: 0 0 3px 4px #00000010")
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0.fw-bold(style="font-size: 15px") Disminuir el riesgo de fraudes.

      .col-md-6.col-xl.mb-5.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.ps-5.p-3.d-flex.align-items-center(data-aos="fade-right" style="box-shadow: 0 0 3px 4px #00000010")
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0.fw-bold(style="font-size: 15px") Evitar pérdidas por cambios en los precios.

      .col-md-6.col-xl.mb-5.d-flex
        .w-100.tarjeta-numerada.color-primario.ps-5.p-3.d-flex.align-items-center(data-aos="fade-left" style="box-shadow: 0 0 3px 4px #00000010")
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0.fw-bold(style="font-size: 15px") Evitar tener cantidades excesivas de inventario que generan costos elevados por almacenamiento y manejo.
      
      .col-md-6.col-xl.mb-5.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.ps-5.p-3.d-flex.align-items-center(data-aos="fade-left" style="box-shadow: 0 0 3px 4px #00000010")
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0.fw-bold(style="font-size: 15px") Evitar incumplimiento a clientes por inexistencias en los productos.
    
    p.mb-5(data-aos="fade-right") Una auditoría bien realizada permite detectar faltantes y, lo más importante, determinar sus causas para que la alta gerencia tome decisiones y planes de acción que fortalezcan todo el proceso de la gestión de inventarios en la cadena de abastecimiento que eviten que estas fallas se vuelvan a presentar.

    h4.text-center(data-aos="fade-left") ¿Cómo se realiza una auditoría?
    p.mb-5.text-center(data-aos="fade-right") Luego de entender qué es una auditoría se hace necesario implementarla y para ello se debe revisar el siguiente recurso:     

    .container-100.py-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      figure.col-xl-10.mx-auto(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_5 2.5 Indicadores de gestión aplicados a inventarios
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      .order-2.order-lg-1.col-lg-8.col-xl-7.pe-lg-4
        p(data-aos="fade-right") Los indicadores de gestión son una herramienta de referencia que permiten medir el cumplimiento a la gestión realizada para el logro de los objetivos propuestos en un periodo de tiempo determinado, es importante, entonces, fijar indicadores que reflejen datos concretos del funcionamiento de la organización ya que se puede hacer el análisis de una situación y, con base en ellos, tomar decisiones importantes para el presente o el futuro que contribuyan al cumplimiento de la misión de la empresa.
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E9F0FE")
          p.mb-0 Los indicadores son definidos por la alta dirección según los objetivos que se ha trazado, con ellos buscan medir y analizar si los procesos, políticas, procedimientos que se han definido en la cadena de abastecimiento están teniendo éxito o de lo contrario deben ser ajustados en alguna parte del proceso para lograr el cumplimiento del desempeño o lograr los resultados esperados.
      img.order-1.order-lg-2.col-lg-4.col-xl-5.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-8.png" style="max-width: 505px;" data-aos="fade-right")

    p.mb-5(data-aos="fade-right") Los indicadores son esenciales en el funcionamiento de una empresa, ya que todo proceso se debe medir para poder controlar lo que se está y cómo se está haciendo, al tener control de las operaciones se pueden detectar fallas o condiciones a mejorar, los indicadores se caracterizan por:

    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-9.svg" style="max-width: 400px;" data-aos="fade-right")
      .col-md-7.col-lg-8.ps-md-4
        ul.lista-ul--separador(data-aos="fade-left")
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permitir a la alta gerencia analizar y evaluar el desempeño de la empresa frente a sus metas y objetivos.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Evaluar el grado de cumplimiento de cada área a sus objetivos.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Detectar posibles fallas o desviaciones en los procesos o procedimientos en el cumplimiento de las metas.
          li.pb-2.mb-2(style="border-bottom-style: dashed")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permitir conocer la eficiencia o ineficiencia del funcionamiento de la empresa y tomar decisiones con base en datos reales.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Analizar situaciones de riesgo para la empresa y direccionar planes financieros.

    p.mb-5(data-aos="fade-right") Los indicadores buscan determinar si los procesos son eficientes, si la manera de hacer las cosas hace más competitiva a la empresa y qué aspectos se deben mejorar, con lo que se puede conocer el estado real de la organización y dejar de tomar decisiones sobre supuestos, y estos deben ser :

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.png')})`}"
      style="background-repeat: no-repeat; background-position: center; background-size: contain"
    )
      .mx-auto.col-lg-10.col-xl-8.mb-5
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 6
          span.d-block Indicadores procesos 
        img.d-none.d-lg-flex.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 1040px;" data-aos="fade-left")
        img.d-flex.d-lg-none.mx-auto(src="@/assets/curso/temas/tema2/img-10_1.svg" style="max-width: 257px;" data-aos="fade-left")

    p.col-xl-10.mx-auto.mb-5(data-aos="fade-right") Para elegir los indicadores que más se ajusten a las necesidades de la empresa, es necesario conocer el rendimiento interno, es decir, qué tan eficientes son los procesos y qué costos tienen, así como saber el rendimiento externo y establecer si los clientes están satisfechos; para ello existen indicadores de: 

    .container-100.py-5.mb-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      .col-xl-9.mx-auto
        .row.justify-content-center.mb-4
          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema2/tj-1.jpg")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h4.mb-3.text-center Cumplimiento
                p.mb-0 Mide el grado de cumplimiento con la finalización de una tarea o actividad, ejemplo: cumplimiento del plan de producción.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema2/tj-2.jpg")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h4.mb-3.text-center Evaluación
                p.mb-0 Están relacionados con el rendimiento que se tiene de una actividad o proceso. Ejemplo: evaluación en la gestión de los pedidos.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema2/tj-3.jpg")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h4.mb-3.text-center Eficiencia
                p.mb-0 Mide la capacidad de llevar a cabo una actividad con el mínimo de recursos. Ejemplo: tiempo de fabricación de un producto, piezas / hora.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema2/tj-4.jpg")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h4.mb-3.text-center Eficacia
                p.mb-0 Están relacionados con la capacidad de acierto en la consecución de actividades. Ejemplo: pedidos entregados a tiempos y clientes satisfechos. 

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema2/tj-5.jpg")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h4.mb-3.text-center Gestión
                p.mb-0 Se relacionan con la administración y las acciones que se ejecutan para llevar a cabo una actividad programada. 

    p.text-center.fw-bold.mb-5(data-aos="fade-left") Algunos ejemplos de los indicadores que son usados en las organizaciones son los que se indican en la siguiente tabla.

    .col-xl-10.mx-auto
      .tabla-a.color-primario.mb-5(data-aos="fade-right")
        table.d-flex.flex-wrap
          thead.w-100
            tr.d-flex(style="background-color: #E9F0FE")
              th.col-2.py-4 Nombre
              th.col-5.py-4 Descripción
              th.col-5.py-4 Fórmula
          tbody.w-100
            tr.d-flex.col-12
              td.col-2.d-flex.align-items-center
                p.w-100.mb-0.fw-bold.text-center Rotación de <em>stock</em> o de inventario
              td.col-5
                p.w-100.mb-0 Es uno de los principales indicadores, muestra cuántas veces ha salido e ingresado al almacén la mercancía; con este indicador se identifica si hay mercancía detenida o con poco movimiento y cuál es la de mayor venta.
              td.col-5
                p.w-100 <b>Rotación de inventarios</b> = Ventas totales / stock promedio.
                p.w-100.mb-0 <b>Stock promedio</b> = stock inicial + stock final / 2
            tr.d-flex(style="background-color: #F9FBFF")
              td.col-12.py-4(colspan="2")
                .tarjeta-introduccion.mx-auto(style="background-color: #18F518; max-width: 495px")
                  p.fw-bold.text-center.mb-0 Estilo de tabla de muestra, sacar la info del documento

    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los indicadores de gestión permiten analizar y conocer la situación de la compañía para tomar decisiones de estrategias que lleven al éxito del negocio.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema2/img-11.svg" style="max-width: 197px;" data-aos="fade-left")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-edit-5_1
  position: relative
  width: 80%
  display: flex
  justify-content: center
  align-items: center
  min-height: 73px
  background-color: #E6F4FF
  margin: auto
  margin-bottom: 3rem
  &::after
    content: ''
    position: absolute
    border-left: 20px solid #E6F4FF
    border-right: 20px solid transparent
    border-top: 36px solid transparent
    border-bottom: 36px solid transparent
    right: -40px
  &::before
    content: ''
    position: absolute
    border-left: 20px solid transparent
    border-right: 20px solid #90C9F8
    border-top: 36px solid transparent
    border-bottom: 36px solid transparent
    left: -40px
  p
    font-size: 18px
    font-weight: bold
    padding-left: 2rem
    position: relative
    z-index: 1
  span
    position: absolute
    top: -21px
    left: -20px
    width: 57px
    height: 57px
    display: flex
    font-size: 24px
    font-weight: bold
    align-items: center
    justify-content: center
    background-color: #00BCD4
    color: white
.pasos-a
  .pasos-a__item
    .pasos-a__numero
      .pasos-a__circle
        .h2
          color: white
</style>
