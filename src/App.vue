<script setup lang="ts">
import AboutMe from './components/AboutMe.vue'
import ContactMe from './components/ContactMe.vue'
import MyWork from './components/MyWork.vue'
import SiteLayout from './components/SiteLayout.vue'
import Skills from './components/Skills.vue'
</script>

<template>
  <SiteLayout>
    <Skills />
    <AboutMe />
    <MyWork />
    <ContactMe />
  </SiteLayout>
</template>
