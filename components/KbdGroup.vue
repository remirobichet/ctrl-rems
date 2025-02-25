<script setup lang="ts">
defineProps<{
  keys: Array<string>
}>()
</script>

<template>
  <div
    v-for="(key, $i) in keys"
    :key="key"
    class="inline"
  >
    <kbd
      class="inline-block min-w-[30px] h-[30px] text-sm text-center text-[#333] bg-[#f8f8f8] border rounded shadow-[0_2px_0_#bbb,0_3px_3px_rgba(0,0,0,0.2)] transition-all px-2.5 py-[5px] border-solid border-[#ccc]"
    >
      <Icon
        v-if="key.includes(':')"
        :name="key"
        class="relative top-[2px]"
      />
      <span v-else>{{ key }}</span>
    </kbd>
    <span
      v-if="$i + 1 < keys.length"
      class="mx-1"
    >+</span>
  </div>
</template>
