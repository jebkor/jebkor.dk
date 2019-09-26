<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      dark
      absolute
      height="64"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  })
}
</script>
