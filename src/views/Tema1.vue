<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Elaboración del inventario
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Elaborar un inventario es una realidad que cada industria tiene que tomar en algún momento de su vida útil, y al momento de hacerlo se tendrá mucha información que manejar y si se quiere hacer bien se deben tener en cuenta varios aspectos como los que se muestran a lo largo de este contenido de formación.

    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_1 1.1 Importancia del control de inventarios
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-md-5.col-lg-4.col-xl-3.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.col-xl-9.ps-md-4
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El control de los inventarios es uno de los temas más importantes en los que se enfoca la alta dirección, ya que los problemas frecuentes a los que se enfrentan son varios como el que expresa Vidal (2018) “tenemos bastantes productos de las referencias que menos rotan, o estamos incumpliendo a nuestros clientes en las entregas porque no hay las materias primas o insumos que se requieren en producción para la elaboración del producto”. Esta situación se puede presentar en cualquier tipo de empresa: comercial, de producción o de servicios; y en diferentes etapas del proceso: materias primas, insumos, productos en proceso o productos terminados, es por esto que se vuelve tan importante mantener las existencias que se requieren para el desarrollo de la operación, ya que existen fluctuaciones de la demanda y en los tiempos de reposición, a este fenómeno se le conoce como <em>lead times</em>.

    p.fw-bold.mb-5.mx-auto.text-center(style="max-width: 726px" data-aos="fade-right") La alta dirección debe velar que estos posibles inconvenientes no se presenten diseñando e implementando estrategias que permitan el control adecuado de las existencias:

    .container-100.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      SlyderF.slyder-f-edit.justify-content-center(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
        .p-4(style="box-shadow: 0 0 3px 4px #00000010; background-color: white")
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/sf-1.svg' style="max-width: 146px" alt="Imagen decorativa")
          p.text-center Tener con exactitud el <em>lead times</em> o tiempos de reposición y sus posibles cambios.
        .p-4(style="box-shadow: 0 0 3px 4px #00000010; background-color: white")
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/sf-2.svg' style="max-width: 146px" alt="Imagen decorativa")
          p.text-center Establecer una cadena de abastecimiento con soluciones ágiles que trabaje de manera constante a bajos costos.
        .p-4(style="box-shadow: 0 0 3px 4px #00000010; background-color: white")
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/sf-3.svg' style="max-width: 146px" alt="Imagen decorativa")
          p.text-center Definir los puntos críticos dentro de la cadena de abastecimiento, donde se deben mantener existencias y en qué cantidades.
        .p-4(style="box-shadow: 0 0 3px 4px #00000010; background-color: white")
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/sf-7.svg' style="max-width: 146px" alt="Imagen decorativa")
          p.text-center Establecer tiempos de duración de cada uno de los procesos en toda la cadena de abastecimiento y, por tanto, tiempos de entrega a los clientes.
        .p-4(style="box-shadow: 0 0 3px 4px #00000010; background-color: white")
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/sf-8.svg' style="max-width: 146px" alt="Imagen decorativa")
          p.text-center Identificar las áreas donde hay mayor flujo de entrada y salida de material.
        .p-4(style="box-shadow: 0 0 3px 4px #00000010; background-color: white")
          .row.justify-content-center.mb-3
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/sf-9.svg' style="max-width: 146px" alt="Imagen decorativa")
          p.text-center Conocer muy bien a sus proveedores.

    .d-flex.flex-wrap.mb-5
      img.col-md-5.col-lg-4.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.ps-md-4(data-aos="fade-left")
        p Los inventarios tienen gran importancia en las organizaciones, pues de ellos dependen en gran medida el éxito financiero en las empresas; y a continuación se muestran algunos elementos que marcan el porqué:
        ul.lista-ul--separador
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Los activos de las empresas en gran parte están representados por los inventarios.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Mantener, manejar y controlar los inventarios requieren una gran inversión en las organizaciones.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Los inventarios impactan directamente los estados financieros de la empresa, en el balance general y en el estado de pérdidas y ganancias, así como algunos indicadores financieros, ejemplo: relación entre activos corrientes y pasivos corrientes, y el ROI (retorno sobre la inversión).
    
    p.mb-5(data-aos="fade-right") Además, los inventarios permiten la flexibilidad en la programación de la producción, ya que con las existencias del material requerido se garantizará que los productos estarán listos en la cantidad exacta en los tiempos pactados cubriendo así la demanda; esta planeación permitirá tener un flujo en la operación y reducir la probabilidad de que se presenten fenómenos como el cuello de botella que se da cuando en algún punto de la cadena de suministros hace falta algún elemento que impide la producción con calidad en el tiempo establecido.

    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los inventarios representan un activo importante y es por ello que tener una correcta administración y control de las existencias impactara de forma positiva los resultados financieros de una empresa.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 169px;" data-aos="fade-left" alt="Imagen decorativa")
    Separador

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_2 1.2 Principios del control de inventarios
    
    p.mb-5(data-aos="fade-right") El control de inventarios es una técnica que permite mantener las existencias de los productos de acuerdo con las necesidades de producción o de ventas de la empresa, teniendo en cuenta que los inventarios representan una inversión importante la alta dirección debe encontrar en la gestión de inventarios un aliado en el control de costos, para esto los controles deben ser:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-primario.p-5.py-4(data-aos="fade-right")
          .tarjeta-numerada__numero
            .h2 1
          h3 Oportunos
          p.mb-0 Los controles deben realizarse antes de que se presenten los errores para poder tomar acciones correctivas oportunas. 

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-acento-contenido.p-5.py-4(data-aos="flip-up")
          .tarjeta-numerada__numero
            .h2 2
          h3 Constantes
          p.mb-0 Para determinar los cambios que se presenten frente a lo planificado deben ser analizados para conocer las causas que las originaron y tomar medidas que no afecten las metas.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
        .tarjeta-numerada.color-primario.p-5.py-4(data-aos="fade-left")
          .tarjeta-numerada__numero
            .h2 3
          h3 Representativos
          p.mb-0 El control debe enfocarse principalmente a las actividades más representativas, afín de reducir costos y tiempo.
    
    p.mb-5(data-aos="fade-right") La administración de inventarios se basa en políticas que permitan decidir cuándo y cuánto se debe reabastecer para mantener el material disponible, además, se debe contar con información precisa de las existencias disponibles en bodega, la cantidad de producto que está pendiente por llegar o en tránsito, para esto requiere de información precisa para tomar buenas decisiones, la cual se centra en cuatro aspectos básicos:

    img.mx-auto.mb-5.col-lg-10.col-xl-8(src="@/assets/curso/temas/tema1/img-6.svg" style="max-width: 811px;" data-aos="fade-left" alt="Imagen que indica los cuatro pilares en la administración de inventarios que son: 1. Cantidad de productos en producción. 2. Tiempo de producción y reabastecimiento. 3. Artículos con mayor demanda o que impliquen mayor tiempo de reabastecimiento. 4. Variaciones en los costos de los artículos por inventario.")

    p.mb-5(data-aos="fade-right") Para tener una correcta gestión de los inventarios se deben analizar las principales variables que afectan su operación como lo son sus entradas y salidas, y los procesos que pueden presentar múltiples desviaciones que requieren ser tenidas en cuenta para su control conforme se muestra en la figura 1.

    .mx-auto.col-lg-10.col-xl-8
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 1.
        span Control inventarios
      img.mx-auto(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 823px;" data-aos="fade-left" alt="Figura 1. Muestra el mapa conceptual de nomenclatura que contiene: Entradas como la recepción de compras, la devolución de clientes y la recepción de traslados luego viene el almacén y luego las salidas que son las ventas y las devoluciones proveedores y en la franja baja viene las áreas de apoyo que son las compras, producción, comercial, logística y financiera.")
    Separador

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_3 1.3 Conteo cíclico
    
    p.mb-5(data-aos="fade-right") Este sistema de inventario evita en la gran mayoría de los casos cerrar la empresa, por eso, es fundamental revisar al detalle el siguiente recurso.

    .d-flex.flex-wrap.mb-5
      .col-lg-8.ps-md-4.order-2.order-lg-1.pe-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-right")
          p.text-small(numero="1" titulo="Conteo cíclico") El conteo cíclico es aquel inventario que se realiza por grupos de productos que son organizados según criterios establecidos. El conteo se hará por segmentos de tal forma que cada día se abarquen más productos buscando la exactitud en los resultados; de esta manera, se pueden realizar conteos de forma periódica en algunas referencias espaciales que requieren atención especial, en vez de hacer un único inventario físico anual, logrando mayor control en las existencias.
          p.text-small(numero="2" titulo="<em>SKUs Stock-keeping Units</em>") Las referencias o <em>SKUs (stock-keeping units)</em> se organizan en grupos que son definidos de acuerdo con la importancia para la organización, es decir, los productos que representan un alto valor se deberán contar con mayor frecuencia, ya que las pérdidas en este caso representarán un gran impacto en las finanzas de la organización. Las referencias con alta rotación también se deberán contar de forma constante, pues por su constante movimiento hay mayores probabilidades de que se presenten errores en los registros del inventario.
          p.text-small(numero="3" titulo="Conteos programados") Estos conteos son programados según los recursos disponibles (personas y tiempo) de manera que cada vez se abarque un grupo diferente y después de un número de días se tendrá todo el inventario realizado, pudiendo, de estar forma, repetir el ciclo en el grupo de referencias que son más importantes para la empresa. El número de veces que una referencia es contada se llama <em>frecuencia de conteo</em>.
          p.text-small(numero="4" titulo="Objetivo") El objetivo de los conteos cíclicos, además de corroborar las existencias reales con las registradas en los sistemas de información, es detectar posibles fallas o desviaciones en los procesos, analizar de forma más precisa sus posibles causas y establecer estrategias de mejora continua, con la finalidad de que los errores no se presenten logrando tener un control de inventarios cada vez más eficiente sin que se registren pérdidas para la empresa. 
          p.text-small(numero="5" titulo="Ventajas") Las ventajas de implementar conteos cíclicos es que se logra mayor exactitud y confianza en los resultados, porque se abarca un grupo pequeño de referencias y los conteos pueden ser más frecuentes, evitando que las pérdidas o desviaciones no sean detectadas a tiempo y que luego se hace más difícil establecer una trazabilidad del inventario; además, se obtiene mayor rentabilidad, productividad y mejor capacidad de respuesta a los clientes. 
          p.text-small(numero="6" titulo="Frecuencia de conteo") Se puede decir que los grandes conteos que se realizan en los almacenes donde se deben cerrar al público por varios días, dejando de generar ingresos para la empresa y teniendo que contratar más personal para esta tarea, no se harán con la implementación de los conteos cíclicos, pues al finalizar el año el conteo total estará listo y de las referencias más importantes se podrá tener frecuencia de conteo.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-8.svg" style="max-width: 400px;" data-aos="fade-left" alt="Imagen decorativa")

    h4.text-center(data-aos="fade-right") ¿Cómo se puede implementar un conteo cíclico?
    p.text-center(data-aos="fade-right") La forma recomendada para aplicar un conteo cíclico es la siguiente:

    PasosA.color-primario.mb-5.col-xl-10.mx-auto(tipo="n")
      .row
        .col-lg.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
          h4 Primero separe por grupos
          p Para implementar un conteo cíclico en una empresa se seleccionará un grupo pequeño de referencias que sirvan como modelo para perfeccionar el método, allí se podrán incluir algunas referencias con alta rotación, baja rotación y referencias con gran volumen.
        img.mb-4.mb-lg-auto.order-1.order-lg-2.mx-auto(src='@/assets/curso/temas/tema1/img-9.svg' style="max-width: 271px" data-aos="fade-left" alt="Imagen decorativa")

      .row
        img.mb-4.mb-lg-auto.mx-auto(src='@/assets/curso/temas/tema1/img-10.svg' style="max-width: 271px" data-aos="fade-left" alt="Imagen decorativa")
        .col-lg.ps-lg-4(data-aos="fade-left")
          h4 Cuente lo que hay en esos grupos de referencia
          p Con estos grupos de referencia se podrán hacer conteos cíclicos a pequeña escala donde se podrán completar el ciclo varias veces detectando errores, desviaciones, inexactitud en los resultados analizando las causas e implementando mejoras que llevará al ciclo a tener los resultados confiables, logrado esto se podrá implementar a todas las referencias de la empresa, asignando la frecuencia para cada grupo de referencias.

      .row
        .col-lg.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
          h4 Organice para contar y no cerrar la empresa
          p Con la implementación del conteo cíclico se podrá destinar jornadas del día con bajo flujo de clientes, por ejemplo, al iniciar el día, donde se le indicará al personal que labora en el almacén cuáles y qué ubicación tienen las referencias a las que se realizará el conteo; de esta forma, se evitará la pérdida de ventas o la contratación de personal adicional; los artículos se pueden clasificar por categorías, por zonas o de forma aleatoria. 
        img.mb-4.mb-lg-auto.order-1.order-lg-2.mx-auto(src='@/assets/curso/temas/tema1/img-11.svg' style="max-width: 271px" data-aos="fade-left" alt="Imagen decorativa")
    
    .d-flex.flex-wrap.mb-5
      img.col-md-5.col-lg-4.mx-auto.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.ps-md-4
        p.fw-bold Las principales ventajas de implementar conteos cíclicos: 
        ul.lista-ul--separador
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Se pueden hacer sin afectar la operación del negocio.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permite detectar rápidamente las diferencias encontradas en el inventario y eliminar la causa.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Se selecciona previamente un segmento de productos que requiera especial atención.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Los conteos son frecuentes, por tanto, se mantienen.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Lo realiza personal que conozca la operación y particularidades de las referencias a contar.
          li.pb-2.mb-2(data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Por ser grupos pequeños hay menor probabilidad de errores en el conteo.

    p.mb-5(data-aos="fade-right") El conteo cíclico no solo tiene como objetivo encontrar diferencias en un inventario y ajustarlas, sino establecer las causas que las producen para implementar acciones que aseguren que las diferencias no se van a volver a presentar, por tanto, cada vez que se realice nuevamente el inventario los errores tendrán que tender a cero, es decir, es un proceso de mejora continua.

    img.mx-auto(src='@/assets/curso/temas/tema1/img-13.svg' style="max-width: 609px" data-aos="fade-left" alt="Imagen del conteo cíclico donde se encuentra la mejora continua en el centro y al rededor haciendo un ciclo se encuentra encontrar error, buscar fuentes de error, identificar causas del error y eliminar las causas del error.")
    
    Separador
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_4 1.4 El inventario y otras áreas de control 
    
    p.mb-5(data-aos="fade-right") Los inventarios son fundamentales en toda la cadena de abastecimiento, pero para que se dé una buena gestión debe existir una buena comunicación entre todas las áreas ya que de alguna manera juegan un papel importante en el proceso, desde que llegan a la bodega de materias primas hasta la distribución final al cliente como lo puede ver en el siguiente recurso:

    .d-flex.flex-wrap.mb-5.mb-lg-4
      TabsA.color-acento-contenido.col-lg-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        .tarjeta.p-4(titulo="Producción" style="background-color: #E6FAF9")
          p.mb-0 Es donde se realiza el proceso de transformación de las materias primas en productos terminados y requiere contar las existencias necesarias para su operación, ya que de lo contrario se podrían dar tiempos muertos o paradas en maquinaria, equipos o mano de obra.
        .tarjeta.p-4(titulo="Compras" style="background-color: #E6FAF9")
          p.mb-0 Es el área encargada de realizar el proceso de reabastecimiento de las materias primas requeridas para todo el proceso y juega un papel importante en la cadena de abastecimiento, ya que de ella depende que las existencias se encuentren en el lugar requerido en el tiempo indicado.
        .tarjeta.p-4(titulo="Contabilidad" style="background-color: #E6FAF9")
          p.mb-0 Es el área que lleva todos los registros contables del inventario, entradas, salidas, pedidos, ventas, proveedores, en esta área se generan los estados financieros, resultados de pérdidas y ganancias, etc. Por lo general, también se encarga de las auditorías y controles a los inventarios.
        .tarjeta.p-4(titulo="Comercial y/o ventas " style="background-color: #E6FAF9")
          p.mb-0 Es el área que está al tanto de lo que pasa en el mercado, tendencias, gustos, etc., qué productos se deben tener en existencias por aumento de la demanda en alguna temporada de promoción.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-14.svg" style="max-width: 400px;" data-aos="fade-left" alt="Imagen decorativa")

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
      TabsA.color-acento-contenido.col-lg-8.ps-md-4(data-aos="fade-left")
        .tarjeta.p-4(titulo="Control de calidad" style="background-color: #E6FAF9")
          p.mb-0 Se encarga por velar que los productos siempre cumplan con los requisitos de calidad antes de que lleguen al cliente, que su forma de almacenamiento sea el adecuado y no sufra daño alguno que representen pérdidas para la compañía.
        .tarjeta.p-4(titulo="Finanzas" style="background-color: #E6FAF9")
          p.mb-0 En esta área se analizan las cifras contables y otros factores que afectan la rentabilidad de la compañía.
        .tarjeta.p-4(titulo="Logística y/o almacén" style="background-color: #E6FAF9")
          p.mb-0 Es el área que más interviene en la operación de los inventarios, ya que es la que controla de forma física la gestión de los inventarios desde que llega al almacén, recepción, movimientos, control.
        .tarjeta.p-4(titulo="Distribución o transporte" style="background-color: #E6FAF9")
          p.mb-0 Es el área que se encarga de llevar los pedidos a los clientes.
    
    p.fw-bold.mb-5.text-center(data-aos="fade-right") El proceso de los bienes dentro de la cadena de abastecimiento se muestra en la figura 2.

    .mx-auto.col-lg-10.col-xl-8
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 2.
        span Proceso bienes
      img.mx-auto(src="@/assets/curso/temas/tema1/img-16.svg" style="max-width: 822px;" data-aos="fade-left" alt="Figura 2. Muestra el proceso de bienes que es en secuencia el siguiente: 1. recepción materias primas 2. Almacenamiento materia prima. 3. Recepción producción. 4. Productos en proceso. 5. Recepción bodega producto. 6. Almacenamiento productos terminados. 7. Venta 8. Distribución y entrega de productos terminados.")
    
    Separador
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_5 1.5 Planificación de los requerimientos de material (MRP)
    
    p(data-aos="fade-right") El MRP es un sistema que permite determinar las necesidades de materias primas, insumos, productos terminados, subconjuntos, etc., teniendo en cuenta los tiempos de duración de producción, compras, etc., permitiendo planificar en el tiempo el reabastecimiento de los componentes requeridos para la siguiente etapa del proceso.

    p.fw-bold.mb-5(data-aos="fade-left") En la figura 3, la Planificación de Necesidades de Material (Material Requirements Planning, MRP) permite conocer :

    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 3.
        span MRP
      img.mx-auto(src="@/assets/curso/temas/tema1/img-17.svg" style="max-width: 822px;" data-aos="fade-left" alt="Figura 3. Describe lo que se denomina MRP que es la planificación de las necesidades y viene en el centro lo que se debe producir a mano izquierda el interrogante de cuanto? y a su mano derecha cuando? y al final la pregunta de ¿que se necesita para producir?")

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #E9F0FE")
      p.mb-0 El sistema MRP (MRP proviene de la traducción del inglés de planeación de requerimiento de materiales) previene fallas de aprovisionamiento de materiales, pues permite programar y planear las necesidades de reabastecimiento de acuerdo con el programa de producción que debe contener las fechas y contenidos a fabricar, logrando la articulación de todas las áreas de la empresa, producción, compras, financiera, etc., para dar cumplimiento al proceso de fabricación y garantizando las existencias de una fase a otra.
    
    p.mb-5.fw-bold(data-aos="fade-right") Entre los beneficios del sistema MRP se puede encontrar que: 

    .d-flex.flex-wrap.mb-5.mb-lg-4
      .col-lg-8.pe-lg-4.order-2.order-lg-1
        ul.lista-ul--separador
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Hay incremento en la productividad, ya que no se tendrán tiempos muertos o cuellos de botella por escasez que generan pérdidas en la mano de obra o maquinaria en la producción.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Se optimiza el uso de los recursos de la empresa evitando el desperdicio de materias primas, insumos, maquinaria, mano de obra, etc.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permite el control de los inventarios evitando tener existencias descontroladas.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Se optimizan las horas trabajadas del personal evitando o reduciendo el pago de horas extras o la contratación de mano de obra adicional.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Cumplimiento con los requerimientos a tiempo de la demanda, por lo tanto, tendremos clientes satisfechos.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Disminución de las existencias que no se requieren y por ende reducción de los costos de almacenamiento, manejo y mantener los inventarios.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Se pueden conocer anticipadamente el impacto financiero de la planificación.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-18.png" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
    p.fw-bold.mb-5.text-center.mx-auto(style="max-width: 744px" data-aos="fade-right") Rivera, Ortega y Pereyra (2014) hablan de tres elementos en los que los MRP (planeación de requerimiento de materiales) ayudan a cualquier empresa, estos tres elementos son:

    .tarjeta--container.row
      .col-md.tarjeta.color-primario.p-4.p-xl-5(style="background-color: #C4F2F1" data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-19.svg' alt="Imagen decorativa")
        p.mb-0 Este modelo funciona a través de un sistema de órdenes donde se especifican las materias primas e insumos y el uso de los productos en cada uno de los procesos de fabricación.

      .col-md.tarjeta.color-acento-botones.p-4.p-xl-5(style="background-color: #D8E4FD" data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-20.svg' alt="Imagen decorativa")
        p.mb-0 Es utilizado en empresas de fabricación y se basa en el control de la producción determinando la capacidad de disponibilidad.

      .col-md.tarjeta.color-acento-contenido.p-4.p-xl-5(style="background-color: #C4F2F1" data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-21.svg' alt="Imagen decorativa")
        p.mb-0 El tercer modelo no solo tiene en cuenta los inventarios, sino que planifica todos los recursos como el presupuesto, la mano de obra, equipos o maquinaria disponible, etc. 

    Separador
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_6 1.6 Valoración de inventarios
    
    p.mb-5(data-aos="fade-right") Los métodos de valoración de inventarios son técnicas aplicadas para valorar las unidades en términos monetarios, es decir, permiten determinar el valor monetario de cada unidad de materia prima que sale para producción, o el valor monetario de cada producto terminado con destino a la venta teniendo en cuenta que los valores fluctúan y las unidades se van adquiriendo a distintos precios.

    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-22.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las empresas deben conocer el valor de su inventario, pues representan dinero inmovilizado que se debe contabilizar, además, determinar sus costos de operación, el valor de sus productos terminados y el precio de venta al público, ya que todos estos valores hacen parte del balance general y el estado de resultados de la empresa. 
  
    p.text-center.mb-5.fw-bold(data-aos="fade-right") Los métodos de valoración permiten determinar el valor de las unidades que están almacenadas, entre los que podemos encontrar: 

    img.mx-auto.col-xl-10(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-left" alt="Imagen decorativa")

    Separador
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_7 1.7 Importancia de los sistemas de información (<em>software</em>) para el control de inventarios 

    .d-flex.flex-wrap.mb-5.mb-lg-4
      .col-lg-9.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La tecnología avanza cada vez más y con ella se crean nuevas alternativas para el manejo y control de los inventarios que permitirán mayor control y manejo de las existencias en una organización, optimizando el manejo de los tiempos en las líneas de producción, reduciendo tiempos muertos, lo que permitirá ser productivos y por ende más competitivos en el mercado.

        p Una vez que son identificadas las necesidades y las dificultades que tienen actualmente las empresas en la gestión de inventarios, es necesario la elección de un modelo óptimo que se ajuste a las condiciones reales que serán de gran ayuda, estos sistemas de información detallan los registros de las existencias y el flujo o movimientos de las mercancías lo que permitirá tener la trazabilidad en tiempo real con datos confiables, minimizando los errores que se puedan presentar por las escasez de los productos.
      img.col-lg-3.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-24.svg" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
    
    .cajon.color-secundario.p-4.mb-5(data-aos="fade-left" style="background-color: #E9F0FE")
      p.mb-0 La implementación de un <em>software</em> para el control de los inventarios permitirá a las organizaciones optimizar los recursos ya que contará con la información de las existencias detalladas y actualizadas, con su seguimiento rutinario, detectando a tiempo las necesidades de reabastecimiento para tener una planeación eficaz del trabajo, además, es una herramienta importante en las decisiones de la alta gerencia. 
    
    .d-flex.flex-wrap.mb-5.mb-lg-4
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-25.png" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        p.fw-bold(data-aos="fade-left") Con esta implementación se busca lograr los siguientes beneficios:
        ul.lista-ul--separador
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Alianzas con proveedores para la reducción de tiempos de reposición.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Cumplir con los tiempos de entrega de los productos pactados con los clientes.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Mayor información sobre la demanda, tendencias.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permite una planeación eficaz de las actividades tanto administrativas como operativas.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Estandarización de productos para reducir los costos por mantenimiento de ítems parecidos.
          li.pb-2.mb-2(data-aos="fade-left")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Evitar tiempos muertos a lo largo de la cadena de abastecimiento por escasez de los productos.
    
    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los sistemas de información permiten optimizar las actividades de control de inventarios ya que se tienen datos precisos, reales y actualizados, disminuyendo las operaciones manuales y la probabilidad de que ocurran errores.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-26.svg" style="max-width: 120px;" data-aos="fade-left" alt="Imagen decorativa")

    Separador
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_8 1.8 Equipos de sistematización rápida de información 
    
    p.mb-5(data-aos="fade-right") Hoy en día existen herramientas tecnológicas que facilitan y agilizan las operaciones de administración de los inventarios permitiendo mayor control en todos los movimientos y con información precisa en tiempo real optimizando las actividades relacionadas con el manejo de las existencias; entre sus objetivos se encuentra:

    .d-flex.flex-wrap.mb-5.mb-lg-4
      .col-lg-8.pe-lg-4.order-2.order-lg-1
        ul.lista-ul--separador
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Mantener la información actualizada.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Disminuir los tiempos en operaciones manuales.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Tener más exactitud en el control de inventarios.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Contar con trazabilidad en los inventarios.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Conocer todos los movimientos de entradas y salidas de los productos.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Saber con exactitud el lugar donde se encuentra.
          li.pb-2.mb-2(style="border-bottom-style: dashed" data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Tener información adicional de los productos, lote, fecha de vencimiento, destino, etc.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Contar con información real que apoya los procesos de auditorías y permite tomar decisiones acertadas de mejora.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-27.png" style="max-width: 400px;" data-aos="fade-left" alt="Imagen decorativa")

    p.text-center.fw-bold.mb-5(data-aos="fade-right") Algunas herramientas tecnológicas que se encuentran para la gestión de los inventarios son:

    .d-flex.flex-wrap.mb-5.mb-lg-4
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-28.svg" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-left")
          p.text-small(numero="1" titulo="<em>Software</em> de alerta de <em>restock</em>") Cuando se alcanzan niveles determinados de stock, este sistema de información avisa el momento en el que se debe reabastecer algunos productos, teniendo en cuenta información como fechas de vencimiento, ventas, ofertas, etc.
          p.text-small(numero="2" titulo="<em>Software</em> de reporte de inventario") Este <em>software</em> permite consolidar toda la información de los inventarios generando informes de ventas, compras, pérdidas, etc. Además, permite determinar la cantidad óptima de productos.
          p.text-small(numero="3" titulo="Códigos de barra") Es una herramienta bastante utilizada hoy en día ya que permite la recolección de información a través de los códigos de barra disminuyendo así la probabilidad de errores manuales de registro, permitiendo tener información con mayor precisión.
          p.text-small(numero="4" titulo="<em>Dashboards</em> (tableros)") Muestra gráficos con datos en una pantalla, permite la categorización de la información de acuerdo a las necesidades de la organización, como por ejemplo las ventas del mes, el nivel de inventario por área, etc. 
          p.text-small(numero="5" titulo="NCR <em>Counterpoint</em>") Este <em>software</em> mantiene la información alojada en la nube y entre las funciones que se pueden ejecutar automatizadas están las órdenes de compra, pagos, etc.
          
    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6" alt="Imagen decorativa")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Las herramientas tecnológicas se deben escoger de acuerdo con las necesidades de operación de las organizaciones.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-29.svg" style="max-width: 120px;" data-aos="fade-left" alt="Imagen decorativa")
</template>

<script>
import SlyderF from '../components/SlyderF.vue'
import TabsA from '../components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { SlyderF, TabsA },
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
.tarjeta-edit-1
  border-radius: 20px
  border-bottom-right-radius: 0
  background-color: #CDEDFC
  margin-right: -4rem
  margin-left: auto
  position: relative
  @media (max-width: 991px)
    margin-right: auto
    border-radius: 20px
    margin-bottom: 1rem
.container-tabsc-1
  display: flex
  align-items: center
  p
    background-color: #E4F2F8
    padding: 6rem 7rem
    margin-bottom: 0
  img
    position: relative
  @media (max-width: 991px)
    flex-wrap: wrap
    p
      text-align: center
      padding: 4rem 1rem
    img
      margin: auto !important
      margin-bottom: 1rem !important
.tarjeta--azul-edit
  position: relative
  border-radius: 3px
  &::after
    content: ''
    position: absolute
    right: 0
    top: 0
    width: 8px
    height: 90%
    background-color: #7E5EE3
.bloque-texto-d
  border-top: 0
  &::before
    background-color: #EFFAFE
.acordion
  .tarjeta
    background-color: #E4DEF4
  .acordion__activo
    background-color: #CFE3E5
</style>
