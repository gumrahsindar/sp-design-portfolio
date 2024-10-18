<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <section id="contact-me" aria-labelledby="contact-me-title">
    <div class="container">
      <div class="contact-wrapper">
        <div class="flex-container">
          <div class="flex-item">
            <h2 class="title-md" id="contact-me-title">Book a call with me</h2>
            <p class="text-base">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>
          <div class="flex-item">
            <Button class="altered" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrapper {
  margin-bottom: 56px;
  border-radius: 10px;
  background-color: var(--clr-black);
  padding: 80px 95px 80px 65px;

  @media (max-width: 64rem) {
    padding: 56px 75px 64px 75px;
  }

  @media (max-width: 40rem) {
    padding: 48px 24px;
  }

  .flex-container {
    color: var(--clr-light-beige);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;

    @media (max-width: 64rem) {
      flex-direction: column;
      gap: 24px;
      text-align: center;
    }

    .flex-item {
      max-width: 46ch;
    }

    .title-md {
      margin-bottom: 24px;
      color: var(--clr-light-beige);
    }
  }
}
</style>
