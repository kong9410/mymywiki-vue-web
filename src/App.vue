<template>
    <NavBar />
    <router-view/>
</template>

<script>
import NavBar from "./components/common/NavBar.vue";

export default {
    name: "App",
    components: { NavBar },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    margin: 0;
}
</style>
