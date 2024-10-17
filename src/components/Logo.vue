<script setup lang="ts">
import Logo from '../assets/images/logo.svg'
</script>

<template>
  <a href="/">
    <img :src="Logo" alt="Amy's portfolio page logo" width="64" height="64" />
  </a>
</template>

<style scoped>
@media (width < 40rem) {
  img {
    width: 48px;
    height: 48px;
  }
}
</style>
