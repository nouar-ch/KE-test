<template>
  <div class="root">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
.root  {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
