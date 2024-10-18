<script setup lang="ts">
import Button from './Button.vue'
import AmyImage from '../assets/images/image-amy.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#about-me',
        start: 'top 80%',
      },
    })
    .from('.image', {
      duration: 1,
      scale: 0,
      opacity: 0,
      ease: 'back',
    })
    .from(
      '.content h2',
      {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'back',
      },
      '-=0.5'
    )
    .from(
      '.content p',
      {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'back',
      },
      '-=0.5'
    )
    .from(
      '.content .altered',
      {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'back',
      },
      '-=0.5'
    )
})
</script>

<template>
  <section id="about-me" aria-labelledby="heading-aboutme">
    <div class="container">
      <div class="wrapper">
        <img class="image" :src="AmyImage" alt="Amy" width="445" height="445" />
        <div class="content">
          <h2 class="title-md" id="heading-aboutme">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p class="text-base">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <Button class="altered" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 125px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    gap: 0;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .content {
    align-content: center;

    @media (max-width: 40rem) {
      text-align: center;
    }
  }

  .image {
    @media (max-width: 1024px) {
      margin-right: 22vw;
    }

    @media (max-width: 40rem) {
      width: 300px;
      height: 300px;
      margin-right: 0;
    }
  }

  p {
    margin-block: 32px;

    @media (max-width: 1024px) {
      margin-block: 24px;
    }
  }
}
</style>
