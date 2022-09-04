<template>
    <div class="search-box">
        <div class="search-box-items">
            <input class="search-input" v-model="searchValue"/>
            <button class="search-button" @click="search()">검색</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    data() {
        return {
            searchValue: ""
        }
    },
    methods: {
        search() {
            this.$router.push(`/${this.searchValue}`);
        }
    }
}
</script>

<style>
.search-box {
    height: 100%;
    justify-content: center;
    align-items: center;
    display:flex;
}

.search-box-items {
    height: 60%;
}

.search-input {
    height: 100%;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0 5px;
}

.search-button {
    height: 100%;
    background-color: cadetblue;
    color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 0 8px;
}
</style>