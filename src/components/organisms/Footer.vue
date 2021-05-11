<template>
  <v-row class="footer">
    <v-col xs="12" class="logo text-center">
      <ul>
        <li>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <a href="https://twitter.com/b1nary1nput" target="_blank" v-on="on">
                <font-awesome-icon :icon="['fab', 'twitter']" class="fa-icon" />
              </a>
            </template>
            <span>Go to Twitter</span>
          </v-tooltip>
        </li>

        <li>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <a href="https://github.com/b1nary1nput" target="_blank" v-on="on">
                <font-awesome-icon :icon="['fab', 'github']" class="fa-icon" />
              </a>
            </template>
            <span>Go to Github</span>
          </v-tooltip>
        </li>

        <li>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <a
                href="https://www.linkedin.com/in/jesper-korsbakke/"
                target="_blank"
                v-on="on"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="fa-icon"
                />
              </a>
            </template>
            <span>Go to LinkedIn</span>
          </v-tooltip>
        </li>

        <li>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <a
                href="mailto:jesper@jebkor.dk?subject=I'm interested in learning more!"
                v-on="on"
              >
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="fa-icon"
                />
              </a>
            </template>
            <span>Send me a mail</span>
          </v-tooltip>
        </li>
      </ul>

      <p>Crafted by hand © {{ currentYear }}</p>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    computed: {
      currentYear() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        return year;
      }
    },

    mounted () {
      console.log('heyo');
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  background: $secondary;
  padding-top: 30px;
  padding-bottom: 16px;

  ul {
    display: inline-flex;
    list-style: none;
    padding: 0;
    padding: 35px 0;

    li {
      padding: 0 15px;
      font-size: 24px;
      color: #fff;
      opacity: 0.4;
      transition: all 0.2s ease;

      a {
        color: inherit;
      }

      &:hover {
        opacity: 1;
        transition: all 0.2s ease;
      }
    }
  }

  p {
    color: #fff;
    font-size: 12px;
    opacity: 0.4;
    margin: 0;
  }
}
</style>
