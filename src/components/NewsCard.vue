<template>
  <div class="card">
      <img :src="newsPiece.image" alt="Image">
      <h3 class="title">{{newsPiece.title}}</h3>
      <div>
          <span class="author">{{newsPiece.author}}</span>
          <span class="date">{{newsPiece.date}}</span>
      </div>
      <p class="body">{{newsPiece.body}} - <a :href="newsPiece.url">view source</a></p>
  </div>
</template>

<script>
export default {
    props: ['newsPiece']
}
</script>

<style scoped>

.card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    padding-bottom: 1rem;
    box-shadow: 0 .1rem .3rem .05rem rgba(0, 0, 0, .2);
}

.card > h3, .card > div, .card > p {
    margin: 0 1rem;
}

img {
    max-width: 100%;
}

</style>
