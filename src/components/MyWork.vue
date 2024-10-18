<script setup lang="ts">
import ImageSlide1 from '../assets/images/image-slide-1.jpg'
import ImageSlide2 from '../assets/images/image-slide-2.jpg'
import ImageSlide3 from '../assets/images/image-slide-3.jpg'
import ImageSlide4 from '../assets/images/image-slide-4.jpg'
import ImageSlide5 from '../assets/images/image-slide-5.jpg'

import emblaCarouselVue from 'embla-carousel-vue'
import { EmblaOptionsType } from 'embla-carousel'
import SlideButton from './SlideButton.vue'

const options: EmblaOptionsType = {
  loop: true,
  align: 'center',
  startIndex: 2,
}

const [emblaRef, emblaApi] = emblaCarouselVue(options)

type Direction = 'previous' | 'next'

function slideChange(direction: Direction): void {
  if (emblaApi.value) {
    direction === 'previous'
      ? emblaApi.value.scrollPrev()
      : emblaApi.value.scrollNext()
  }
}
</script>

<template>
  <section id="my-work" aria-labelledby="my-work-title">
    <h3 id="my-work-title" class="title-sm">My Work</h3>
    <div
      class="embla"
      ref="emblaRef"
      role="region"
      aria-roledescription="carousel"
      aria-label="My Work Carousel"
    >
      <div class="embla-container" role="list">
        <div class="embla-slide" role="listitem">
          <img :src="ImageSlide1" alt="Slide 1" />
        </div>
        <div class="embla-slide" role="listitem">
          <img :src="ImageSlide2" alt="Slide 2" />
        </div>
        <div class="embla-slide" role="listitem">
          <img :src="ImageSlide3" alt="Slide 3" />
        </div>
        <div class="embla-slide" role="listitem">
          <img :src="ImageSlide4" alt="Slide 4" />
        </div>
        <div class="embla-slide" role="listitem">
          <img :src="ImageSlide5" alt="Slide 5" />
        </div>
      </div>
      <div class="embla-buttons">
        <SlideButton
          @slideChange="slideChange"
          direction="previous"
          class="prev"
        />
        <SlideButton @slideChange="slideChange" direction="next" class="next" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#my-work {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 88px;

  img {
    border-radius: 8px;
  }

  @media (max-width: 64rem) {
    margin-block: 120px;
  }

  @media (max-width: 40rem) {
    margin-block: 100px;

    img {
      width: 270px;
      height: 180px;
    }
  }

  .title-sm {
    text-align: center;
  }

  .embla {
    overflow: hidden;
    width: 1440px;

    @media (max-width: 64rem) {
      width: 100%;
    }

    @media (max-width: 40rem) {
      width: 100%;
    }

    .embla-container {
      margin-block: 56px;
      display: flex;
      gap: 30px;

      @media (max-width: 40rem) {
        margin-block: 32px;
        gap: 8px;
      }

      .embla-slide {
        flex: 0 0 540px;

        @media (max-width: 40rem) {
          flex: 0 0 280px;
        }

        &:first-child {
          margin-left: 30px;

          @media (max-width: 40rem) {
            margin-left: 8px;
          }
        }
      }
    }
    .embla-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      padding-block: 2px;
    }
  }
}
</style>
