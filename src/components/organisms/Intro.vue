<template>
  <v-row class="intro__section">
    <v-col
      md="8"
      offset-md="2"
      class="text-center"
    >
      <h1 class="intro__section-headline mt-12 mb-7">
        Hi, I'm Jesper. Nice to meet you.
      </h1>

      <p class="intro__section-body">
        I started my frontend career about 5 years ago, in 2014 and since then I've strived to make the web a better place with my designs. I've worked at different companies with work ranging from commercial websites, data-driven user interfaces and User Experience upgrades. I take pride in what I do and keep a passionate curiosity about the latest trends.
      </p>
    </v-col>

    <v-col
      cols="6"
      class="text-center"
    >
      <i>wizard_hat</i>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <h3>Random facts</h3>

      <ul>
        <li>I like to cook</li>
        <li>I drink tea</li>
        <li>I've run a marathon</li>
        <li>I play Dungeons & Dragons</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Intro'
  }
</script>

<style lang="scss" scoped>
.intro__section {
  background-color: #999999;
  padding-bottom: 200px;

  img {
    max-width: 640px;
    width: 100%;
  }
}
</style>
