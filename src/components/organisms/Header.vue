<template>
  <v-row class="header">
    <v-col xs="12" class="logo text-center">
      <img src="assets/img/logo.png" alt="jebkor logo">
    </v-col>
  </v-row>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;
  position: sticky;
  top: 0;

  @media only screen and (max-width: 600px) {
    top: 12px; // When scrolling on mobile device, leave a little top padding for the logo to not touch address bar
  }

  .logo {
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;

    img {
      max-width: 170px;
    }
  }
}
</style>
