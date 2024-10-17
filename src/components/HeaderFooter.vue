<script setup lang="ts">
import Button from './Button.vue'
import Logo from './Logo.vue'
</script>

<template>
  <div class="container">
    <div class="flex-container">
      <Logo />
      <Button />
    </div>
    <slot />
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
