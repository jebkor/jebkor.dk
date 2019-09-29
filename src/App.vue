<template>
  <v-app>
    <v-content>
      <Header />
      <router-view />

      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/organisms/Header.vue'
import Footer from '@/components/organisms/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
