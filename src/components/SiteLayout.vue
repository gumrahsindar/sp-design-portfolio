<script setup lang="ts">
import Banner from './Banner.vue'
import HeaderFooter from './HeaderFooter.vue'
</script>

<template>
  <header>
    <HeaderFooter>
      <Banner />
    </HeaderFooter>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <HeaderFooter />
  </footer>
</template>

<style scoped>
header {
  padding-top: 34px;

  @media (max-width: 40rem) {
    padding-top: 16px;
  }
}

footer {
  padding-bottom: 64px;

  @media (max-width: 40rem) {
    padding-bottom: 32px;
  }
}
</style>
