<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-base shadow-shadow border-2 border-border bg-main text-mtext',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
