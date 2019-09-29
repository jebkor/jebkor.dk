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
