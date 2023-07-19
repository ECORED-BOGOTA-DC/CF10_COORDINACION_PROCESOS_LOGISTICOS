<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conteo físico y registro de inventarios
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En realidad, muchas herramientas han intentado reemplazar el contexto del inventario físico y lo han logrado con buenos comentarios, pero hasta ahora una de las mejores opciones para hacer que todo funcione tiene que ver con el conteo, y es hacer un conteo de buena calidad de manera manual con personal capacitado para ello como lo verá a continuación en este punto del componente formativo.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1 Conceptos generales 
    
    p El conteo físico es el procedimiento por el cual se verifican las existencias físicas en una bodega como medida de control a pérdidas o desviaciones en los procesos que permitirá determinar sus causas y establecer los correctivos necesarios para que no vuelvan a ocurrir, considerando productos en proceso, materias primas, insumos, productos terminados, activo fijo, etc.

    p.mb-5 Los conteos físicos se deben hacer con frecuencia y con la participación de personal independiente para ejercer mayor control, buscando, además de verificar y comprobar lo que hay físico en el almacén los siguientes objetivos:

    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 400px;" data-aos="fade-right")
      .col-md-7.col-lg-8.ps-md-4
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
      p Con toda esta información se logra tener un inventario actualizado y con registros confiables lo que permite una mejor evaluación y conocimiento de la situación de las existencias e implementar estrategias que contribuyan a prestar un mejor servicio al cliente.

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
