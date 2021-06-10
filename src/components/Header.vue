<template>
  <div class="header">
      <div></div>
      <nav>
          <div>
              <router-link to="/">Home</router-link>
          </div>
          <div>
              <router-link to="/search">Search</router-link>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    min-height: 8vh;
    background: green;
    color: white;
    padding: 0 1rem;
    width: calc(100% - 2rem);
    box-shadow: 0 .1rem 1rem .2rem rgba(20, 20, 20, .3);
    z-index: 1000;
}

.header > nav {
    display: flex;
}

.header > nav > div {
    cursor: pointer;
    padding: 1rem .5rem;
}

.header > nav > div > a {
    color: white;
    text-decoration: none;
}
</style>>
