<template>
  <div>
    <GrowCard :loading="loading" class="enter-y" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import GrowCard from './GrowCard.vue';
  const loading = ref(true);
  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
