<template>
   <div class="input-container">
        <input
            @keypress.enter="submitQuery"
            @keypress="getSuggestions"
            type="text"
            placeholder="Search Something..."
            v-model="query">
        <button @click="submitQuery">SEARCH</button>
        <div v-if="!isSuggestionsEmpty" class="suggestion-box">
            <div v-for="(title, index) in suggestions" :key="index" @click="() => selectSuggestion(title)">{{title}}</div>
        </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            query: "",
            suggestions: []
        }
    },
    methods: {
        submitQuery() {
            this.$emit("search", this.query)
            this.suggestions = []
        },
        getSuggestions() {
            this.suggestions = this.$store.getters.getQuery(this.query)
        },
        selectSuggestion(title) {
            console.log(title)
            this.query = title
            this.submitQuery()
        }
    },
    computed: {
        isSuggestionsEmpty() {
            return this.suggestions.length === 0
        }
    },
    watch: {
        query(val) {
            if (!val || val === "") this.submitQuery()
        }
    }
}
</script>

<style scoped>
input {
    border: none;
    outline: none;
    flex: 1;
}

button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
}

.input-container {
    position: relative;
    display: flex;
    border: darkgray 1px solid;
    padding: .4rem;
    width: 80%;
}

.suggestion-box {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 20rem;
    overflow: auto;
    background: white;
    border: black 1px solid;
}

.suggestion-box > div {
    padding: .4rem;
    cursor: pointer;
}

.suggestion-box > div:hover {
    background: rgba(0, 0, 0, .1);
}
</style>
