<script setup lang="ts"></script>

<template>
  <a href="#">Free Consultation</a>
</template>

<style scoped>
a {
  border-radius: 28px;
  background-color: var(--clr-black);
  padding: 14px 45px;
  font-size: var(--fs-base);
  color: var(--clr-light-beige);
  line-height: 1.75;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-purple);
  }

  &.altered {
    background-color: var(--clr-red);

    &:hover {
      background-color: var(--clr-orange);
    }
  }
}
</style>
