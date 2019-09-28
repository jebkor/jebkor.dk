<template>
  <v-row class="resume__section">
    <v-col cols="12" sm="8" offset-sm="2" class="text-center">
      <h1>My resume</h1>

      <p>If you like what you see, you have the chance to get a detailed look at my experience. <br/> If you click the button under here, you can download my <i>(danish)</i> resume.</p>

      <v-btn href="https://onedrive.live.com/download?cid=8F60794BE0F27BB5&resid=8F60794BE0F27BB5%2136254&authkey=AJk8TXx0mB851i4&em=2" target="_blank" color="primary" download>Download resumé</v-btn>
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
