<template>
  <v-row class="hero__section">
    <v-col xs="12" md="6" offset="3" class="hero__section-greetings text-center">
      <h1>I'm Jesper, a frontend developer with an interest in UI- and UX design</h1>
    </v-col>

    <v-col xs="12" class="hero__section-next text-center">
      <p>Scroll down to read more</p>
      <p>V</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero__section {
  height: 100vh;
  background-color: #f9f9f9;
  background-image: url('../../assets/img/frontpage-image.jpg');
  background-size: cover;
  background-position: center center;
  position: relative;

  &-greetings {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    font-size: 22px;
  }

  &-next {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
    color: #fff;

    p:last-child {
      margin-top: -15px;
    }
  }
}
</style>
