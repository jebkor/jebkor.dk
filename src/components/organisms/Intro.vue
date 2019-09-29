<template>
<div class="row intro__section">
  <v-row class="intro__section-welcome">
    <v-col
      cols="12"
      md="6"
      offset-md="3"
      class="text-center"
    >
      <h1 class="intro__section-headline mt-12 mb-7">
        Hi, I'm Jesper. Nice to meet you.
      </h1>

      <p class="intro__section-body">
        I started my frontend career about 5 years ago, in 2014 and since then I've strived to make the web a better place with my designs. I've worked at different companies with work ranging from commercial websites, data-driven user interfaces and User Experience upgrades. I take pride in what I do and keep a passionate curiosity about the latest trends.
      </p>
    </v-col>

  </v-row>

  <v-row class="intro__section-random">
    <v-col
      cols="12"
      sm="4"
      align-self="center"
      order-sm="2"
    >
      <h3>Random facts</h3>

      <ul>
        <li>I like to cook</li>
        <li>I drink tea</li>
        <li>I play Dungeons & Dragons</li>
        <li>I've run a marathon</li>
      </ul>
    </v-col>

    <v-col
      cols="12"
      sm="4"
      offset-sm="2"
      class="text-center"
      order-sm="1"
    >
      <img src="../../assets/img/totoro.png" alt="">
    </v-col>
  </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Intro'
  }
</script>

<style lang="scss" scoped>
.intro__section {
  background-color: #f1d1b5;

  &-welcome {
    padding: 100px 15px 90px 15px;
  }

  &-random {
    padding: 0px 15px 325px 15px;

    img {
      max-width: 420px;
      width: 100%;
    }

    h3 {
      font-size: 26px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 1.1rem;

        &:first-child {
          margin-top: 5px;
        }
        + li {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
