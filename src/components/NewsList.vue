<template>
  <div class="list-container">
      <news-card v-for="(np, idx) in news" :key="idx" :newsPiece="np"/>
  </div>
</template>

<script>
import NewsCard from './NewsCard.vue'

export default {
  components: { NewsCard },
  props: ['news']
}
</script>

<style scoped>
.list-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>
