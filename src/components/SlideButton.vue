<script setup lang="ts">
import { useAttrs } from 'vue'

const props = defineProps<{
  direction: 'previous' | 'next'
}>()

const attrs = useAttrs()
const emit = defineEmits(['slideChange'])

function handleSlideClick() {
  emit('slideChange', props.direction)
}
</script>

<template>
  <div class="embla-buttons">
    <button
      :aria-label="`${direction} slide`"
      class="embla-button"
      :class="attrs.class"
      @click="handleSlideClick"
    >
      <span class="sr-only">{{ direction }} slide</span>
    </button>
  </div>
</template>

<style scoped>
.embla-button {
  border: none;
  border-radius: 50%;
  background-color: var(--clr-black);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  width: 64px;
  height: 64px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-purple);
  }

  &.prev {
    background-image: url('../assets/images/icon-arrow-left.svg');
  }

  &.next {
    background-image: url('../assets/images/icon-arrow-right.svg');
  }
}
</style>
