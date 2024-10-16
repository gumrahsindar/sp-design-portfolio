<script setup lang="ts">
import { skills } from '../lib/constants'
</script>

<template>
  <section id="skills">
    <div class="container">
      <ul class="skills-grid-layout">
        <li
          class="skills-grid-item"
          :class="skill.class"
          v-for="skill in skills"
          :key="skill.title"
        >
          <img
            :src="skill.image"
            :alt="skill.title"
            :width="skill.width"
            :height="skill.height"
          />
          <p>{{ skill.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
#skills {
  margin-bottom: 136px;

  @media (max-width: 64rem) {
    margin-bottom: 120px;
  }

  @media (max-width: 40rem) {
    margin-bottom: 100px;
  }

  .skills-grid-layout {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 182px 158px;
    grid-template-areas:
      'purple purple orange pink teal teal'
      'purple purple red red dark-purple dark-purple';
    gap: 24px;

    @media (max-width: 64rem) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 182px 158px 182px;
      grid-template-areas:
        'purple purple orange pink'
        'purple purple red red'
        'teal teal dark-purple dark-purple';
    }

    @media (max-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 364px 182px 158px 182px 182px;
      grid-template-areas:
        'purple purple'
        'orange pink'
        'red red'
        'teal teal'
        'dark-purple dark-purple';
    }

    .skills-grid-item {
      padding: 24px;
      border-radius: 8px;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      img {
        align-self: flex-end;
      }

      &.purple {
        background-color: var(--clr-purple);
        grid-area: purple;
      }
      &.orange {
        background-color: var(--clr-orange);
        grid-area: orange;
      }
      &.pink {
        background-color: var(--clr-pink);
        grid-area: pink;
      }
      &.red {
        background-color: var(--clr-red);
        grid-area: red;
      }
      &.teal {
        background-color: var(--clr-teal);
        grid-area: teal;
      }
      &.dark-purple {
        background-color: var(--clr-dark-purple);
        grid-area: dark-purple;
      }
    }
  }
}
</style>
