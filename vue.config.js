module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/global/_unused.sass"`
      },
      scss: {
        data: `@import "@/styles/global/_colors.scss";`
      }
    }
  }
}
