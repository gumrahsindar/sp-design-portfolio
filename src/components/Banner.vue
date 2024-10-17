<script setup lang="ts"></script>

<template>
  <div class="banner">
    <h1 class="title-lg">Design solutions made easy</h1>
    <p class="text-base">
      With over ten years of experience in various design disciplines, I’m your
      one-stop shop for your design needs.
    </p>
  </div>
</template>

<style scoped>
.banner {
  margin-block: 64px 80px;
  text-align: center;

  @media (max-width: 64rem) {
    margin-block: 64px 64px;
  }

  @media (max-width: 40rem) {
    margin-block: 32px 32px;
  }

  .title-lg {
    margin-bottom: 24px;
    margin-inline: auto;

    @media (max-width: 40rem) {
      max-width: 15ch;
      margin-bottom: 16px;
    }
  }
  .text-base {
    margin-inline: auto;
    line-height: 26px;

    @media (max-width: 64rem) {
      text-wrap: pretty;
      max-width: 44ch;
    }

    @media (max-width: 40rem) {
      max-width: 35ch;
    }
  }
}
</style>
