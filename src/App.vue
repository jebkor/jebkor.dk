<template>
  <v-app>
    <v-content>
      <Header />
      <router-view />

      <Footer />
    </v-content>

    <Snowfall v-if="isItTime"/>
  </v-app>
</template>

<script>
// libraries
import dayjs from 'dayjs'

// components
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'
import Snowfall from '@/components/molecules/Snowfall/Snowfall.vue'

// app
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Snowfall
  },
  computed: {
    isItTime () {
      return dayjs().month() == 11
    }
  }
}
</script>
