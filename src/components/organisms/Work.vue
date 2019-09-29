<template>
  <v-row class="work__section" align="center">
    <v-col md="8" offset-md="2" class="text-center">

      <h2>My Recent Work</h2>
      <p class="mb-12">These projects are just a small selection of things I've had my hands on.</p>

      <v-row>
        <!-- Spain Holiday -->
        <v-col cols="12" md="4" class="text-center">
          <div>
            <img src="assets/img/spain-holiday.jpg" alt="">

            <div class="overlay">
              <h2>Spain Holiday</h2>
              <p>Worked on UI, UX, visual update and development of new features</p>

              <v-btn outlined href="https://spain-holiday.com" target="_blank" color="white">Visit website ></v-btn>
            </div>
          </div>
        </v-col>

        <!-- Insero A/S -->
        <v-col cols="12" md="4" class="text-center">
          <div>
            <img src="assets/img/insero.jpg" alt="">

            <div class="overlay">
              <h2>Insero A/S</h2>
              <p>Built data-driven User Interfaces for IoT solutions</p>

              <v-btn outlined href="https://insero.com" target="_blank" color="white">Visit website ></v-btn>
            </div>
          </div>
        </v-col>

        <!-- Pulsure -->
        <v-col cols="12" md="4" class="text-center">
          <div>
            <img src="assets/img/pulsure.jpg" alt="">

            <div class="overlay">
              <h2>Pulsure.dk</h2>
              <p>Worked on updating their storefront with a new visual language</p>

              <v-btn outlined href="https://pulsure.dk" target="_blank" color="white">Visit website ></v-btn>
            </div>
          </div>
        </v-col>

        <!-- Energi Ikast -->
        <v-col cols="12" md="4" class="text-center">
          <div>
            <img src="assets/img/energi-ikast.jpg" alt="">

            <div class="overlay">
              <h2>Energi Ikast</h2>
              <p>Built their entire website, using Umbraco CMS</p>

              <v-btn outlined href="https://energi-ikast.dk" target="_blank" color="white">Visit website ></v-btn>
            </div>
          </div>
        </v-col>

        <!-- Miljøservice -->
        <v-col cols="12" md="4" class="text-center">
          <div>
            <img src="assets/img/miljoeservice.jpg" alt="">

            <div class="overlay">
              <h2>Miljøservice</h2>
              <p>Built their entire website in Umbraco CMS</p>

              <v-btn outlined href="http://miljoeservice.dk" target="_blank" color="white">Visit website ></v-btn>
            </div>
          </div>
        </v-col>

        <!-- Frimodt P -->
        <v-col cols="12" md="4" class="text-center">
          <div>
            <img src="assets/img/frimodt.jpg" alt="">

            <div class="overlay">
              <h2>Frimodt P</h2>
              <p>Built their entire website in Umbraco CMS</p>

              <v-btn outlined href="https://frimodt-p.dk" target="_blank" color="white">Visit website ></v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <p class="mt-12 mb-12">If you're interested in seeing more of my work, feel free to send me a <a href="mailto:jesper@jebkor.dk?subject=I would like to hear more!">mail</a>.</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style lang="scss" scoped>
.work__section {
  background-color: #fff;
  padding-bottom: 100px;

  .col-12 > div {
    position: relative;
    display: block;
    overflow: hidden;

    &:hover {
      .overlay {
        opacity: 1;
        transition: all .2s ease;
      }

      img {
        filter: blur(4px);
      }
    }
  }
  img {
    border-radius: 15px;
    max-width: 100%;
  }

  .overlay {
    opacity: 0;
    border-radius: 15px;
    padding: 20px;
    position: absolute;
    width: 100%;
    height: calc(100% - 6px);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, .6);
    transition: all .2s ease;
    color: #fff;
    text-align: center;

    .v-btn {
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      max-width: 175px;
    }
  }
}
</style>
