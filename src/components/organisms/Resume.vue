<template>
  <v-row class="resume__section">
    <v-col cols="12" sm="8" offset-sm="2" class="text-center">
      <h1>My resume</h1>

      <p>If you like what you see, you have the chance to get a detailed look at my experience. <br/> If you click the button under here, you can download my resume.</p>

      <v-btn color="primary">Download resumé</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style lang="scss" scoped>
.resume__section {
  background-color: #f1d1b5;
  padding-top: 100px;
  padding-bottom: 100px;

  .v-btn {
    margin-top: 50px;
  }
}
</style>
