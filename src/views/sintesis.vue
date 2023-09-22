<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La elaboración de los inventarios se refiere al proceso mediante el cual una empresa recopila, registra y organiza la información sobre los bienes y productos que posee en su inventario. Este proceso implica contar físicamente los artículos, registrar sus características y valores, y mantener un seguimiento actualizado de las existencias.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis que resume todos los temas abordados dentro de este componente formativo como es: el control de los inventarios y su implementación, esto con el fin de que la organización tenga pleno conocimiento de los bienes y productos que posee y mantener un seguimiento de sus existencias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
