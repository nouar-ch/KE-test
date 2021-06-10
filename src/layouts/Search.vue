<template>
  <div class="main-container">
      <div class="search-container">
          <search-input @search="search" />
      </div>
      <div class="news-container">
          <news-list :news="news" />
      </div>
  </div>
</template>

<script>
import NewsList from '../components/NewsList.vue'
//import axios from 'axios';
import SearchInput from '../components/SearchInput.vue';
//import {mapGetters} from 'vuex'

export default {
    components: { NewsList, SearchInput },
    data() {
        return {
            query: ""
        }
    },
    computed: {
        news() {
            const news = this.$store.state.news
            if (this.query === undefined || this.query === "") return news
            return news.filter(np => np.title.includes(this.query))
        }
    },
    mounted() {
        // axios.get(
        //     "https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/covid-news.json"
        // ).then(res => {
        //     console.log(res)
        //     this.news = res.data
        // })
        this.$store.dispatch("requestNews")
        console.log(this.news)
    },
    methods: {
        search(query) {
            this.query = query
        }
    }

}
</script>

<style scoped>
.main-container {
    width: 100%;
    background: rgb(245, 245, 245);
}

.news-container {
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: calc(100% - 2rem);
}

.search-container {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background: white;
}
</style>
