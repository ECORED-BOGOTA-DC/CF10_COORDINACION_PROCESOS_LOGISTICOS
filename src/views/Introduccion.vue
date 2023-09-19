<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right") Hoy en día las empresas deben mostrar su capacidad de implementar estrategias que les permita ser más competitivas y marcar diferencia frente a sus rivales para hacer rentable su negocio. Una gran parte de estas estrategias deben ir enfocadas a la gestión de los inventarios, ya que representan un activo importante y de gran impacto en los estados financieros de las organizaciones. 

    p.mb-5(data-aos="fade-left") Los inventarios son una oportunidad para las empresas, por esto que siempre se tiene en cuenta lo que implica hacerlos y cada vez que se hace se intenta que la empresa no cierre sus puertas por muchos días siguiendo los siguientes aspectos:

    .d-flex.flex-wrap.justify-content-center
      .col-12.col-md-6.col-lg-4.px-md-2.px-xl-3.d-flex.mb-4(data-aos="fade-right")
        .tarjeta-introduccion(style="background-color: #57DBD8")
          img(src="@/assets/curso/temas/img-1.svg" style="max-width: 135px" alt="Imagen decorativa")
          p.mb-0 Las estrategias estan diseñadas según las necesidades de operación del negocio donde su objetivo es mantener un mínimo de costos en las existencias, pero garantizando el abastecimiento de insumos, materias primas o productos terminados que se requieran en el tiempo justo para cumplir con los requerimientos de los clientes.
      .col-12.col-md-6.col-lg-4.px-md-2.px-xl-3.d-flex.mb-4(data-aos="flip-up")
        .tarjeta-introduccion(style="background-color: #91B3FA")
          img(src="@/assets/curso/temas/img-2.svg" style="max-width: 135px" alt="Imagen decorativa")
          p.mb-0 Un correcto control de los inventarios permite detectar las fallas que se estén presentando en los procedimientos, pérdidas en los inventarios, escasez en los productos, y determinar las causas para implementar acciones que permitan un proceso de mejora continua.
      .col-12.col-md-6.col-lg-4.px-md-2.px-xl-3.d-flex.mb-4(data-aos="fade-left")
        .tarjeta-introduccion(style="background-color: #57DBD8")
          img(src="@/assets/curso/temas/img-3.svg" style="max-width: 135px" alt="Imagen decorativa")
          p.mb-0 Existen herramientas tecnológicas que apoyan la gestión de inventarios permitiendo contar con registros reales y actualizados, reduciendo las operaciones manuales lo que permitirá minimizar la posibilidad de errores manuales haciendo más eficiente las actividades.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
