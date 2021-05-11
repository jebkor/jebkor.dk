<template>
  <v-container fluid>
    <Hero id="hero" />
    <Intro id="intro" />
    <Skills id="skills" />
    <Work id="work" />
    <Resume id="resume" />
  </v-container>
</template>

<script>
  import Hero from '@/components/organisms/Hero.vue';
  import Intro from '@/components/organisms/Intro.vue';
  import Skills from '@/components/organisms/Skills.vue';
  import Work from '@/components/organisms/Work.vue';
  import Resume from '@/components/organisms/Resume.vue';

  export default {
    components: {
      Hero,
      Intro,
      Skills,
      Work,
      Resume
    },
    data: () => ({})
  }
</script>
