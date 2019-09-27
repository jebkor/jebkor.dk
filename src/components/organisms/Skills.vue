<template>
  <v-row
    class="skills__section"
    no-gutters
  >
    <v-col
      md="8"
      offset-md="2"
      class="mt-12 mb-12"
    >
      <v-row class="table elevation-4">
        <v-col
          cols="12"
          md="4"
          class="text-center"
        >
          <h2>Designer</h2>
          <p>I like solving problems through design and keep in mind the end-user.</p>

          <h3>Things I enjoy designing:</h3>
          <p>UX, UI, Web, Mobile</p>

          <h3>Design Tools:</h3>
          <ul>
            <li>Figma</li>
            <li>Pen & Paper</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="text-center"
        >
          <h2>Developer</h2>
          <p>I enjoy coding and bringing things to life in the browser, is my passion.</p>

          <h3>Languages I speak:</h3>
          <p>HTML, CSS, LESS, SASS, JavaScript</p>

          <h3>Dev Tools:</h3>
          <ul>
            <li>Vue.js</li>
            <li>Github</li>
            <li>VSCode</li>
            <li>Vuetify</li>
            <li>Bootstrap</li>
            <li>Azure DevOps</li>
            <li>Zurb Foundation</li>
            <li>Windows Terminal</li>
          </ul>

        </v-col>

        <v-col
          cols="12"
          md="4"
          class="text-center"
        >
          <h2>Some category</h2>
          <p>Elit non laborum laborum eiusmod elit culpa enim excepteur sint et esse.</p>

          <h3>Some subcategory</h3>
          <p>List of stuff</p>

          <h3>Bullet list</h3>
          <ul>
            <li>Bullet 1</li>
            <li>Bullet 2</li>
            <li>Bullet 3</li>
            <li>Bullet 4</li>
          </ul>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Skills'
  }
</script>

<style lang="scss" scoped>
$border-radius: 10px;
$border-color: #dfdfdf;

.skills__section {
  background-color: #fefefe;

  .row.table {
    border-radius: $border-radius;
    position: relative;
    top: -150px;

    .col-12 {
      padding: 30px 50px;
      border: 1px solid $border-color;
      background-color: #fff;

      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }

      &:nth-child(2) {
        border-right: 0;
        border-left: 0;
      }

      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0 30px;
  }
}
</style>
