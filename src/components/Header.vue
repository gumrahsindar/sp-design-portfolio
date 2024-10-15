<script setup lang="ts">
import Button from './Button.vue'
import Logo from './Logo.vue'
</script>

<template>
  <header>
    <div class="container">
      <div class="header-top">
        <Logo />
        <Button />
      </div>
      <div class="header-bottom">
        <h1 class="title-lg">Design solutions made easy</h1>
        <p class="text-base">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-block: 34px 80px;

  @media (max-width: 40rem) {
    margin-bottom: 64px;
  }
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  @media (max-width: 40rem) {
    margin-bottom: 32px;
  }
}
.header-bottom {
  text-align: center;
}
.title-lg {
  margin-bottom: 24px;

  @media (max-width: 40rem) {
    margin-bottom: 16px;
  }
}
.header-bottom p {
  max-width: 53ch;
  margin-inline: auto;
  line-height: 26px;

  @media (max-width: 64rem) {
    text-wrap: balance;
  }
}
</style>
