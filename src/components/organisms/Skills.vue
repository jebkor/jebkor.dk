<template>
  <v-row
    class="skills__section"
  >
    <v-col
      cols="12"
      sm="8"
      offset-sm="2"
      class="mt-12"
    >
      <v-row class="table elevation-4">
        <v-col
          cols="12"
          lg="4"
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
          lg="4"
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
          lg="4"
          class="text-center"
        >
          <h2>Dabbler</h2>
          <p>Subjects in development I play around with, from time to time.</p>

          <h3>Languages</h3>
          <p>CSS, SASS, JavaScript, TypeScript</p>

          <h3>Technologies</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Node.js backend</li>
            <li>User-Authorization</li>
            <li>Cookies</li>
            <li>Sessions</li>
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
  background-color: #fff;

  > .col-12 {
    margin-bottom: -100px;
  }

  .row.table {
    border-radius: $border-radius;
    position: relative;
    top: -250px;



    .col-12 {
      padding: 70px 50px;
      border: 1px solid $border-color;
      background-color: #fff;

      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;

        @media only screen and (max-width: 960px) {
          border-top-right-radius: $border-radius;
          border-bottom-left-radius: 0;


          border-right: 0;

          border-left: 0;
          border-bottom: 0;
        }
      }

      &:nth-child(2) {
        border-right: 0;
        border-left: 0;
      }

      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;

        @media only screen and (max-width: 960px) {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: $border-radius;

          border-top: 0;
          border-right: 0;

          border-left: 0;
        }
      }

      h2 {
        color: $primary;
        font-size: 28px;
      }

      h3 {
        color: $primary;
        font-size: 17px;
        margin-top: 45px;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0 30px;
  }
}
</style>
