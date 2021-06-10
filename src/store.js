import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        news: []
    },
    mutations: {
        setNews(state, news) {
            state.news = news
        }
    },
    actions: {
        async requestNews() {
            const res = await axios.get(
                "https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/covid-news.json"
            )
            //console.log(res)
            this.commit('setNews', res.data)        
        }
    },
    getters: {
        getQuery: (state) => (query) => {
            //console.log(query)
            return state.news.filter(np => np.title.includes(query)).map(np => np.title)
        }
    }
})

export default store;
