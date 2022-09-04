<template>
    <div class="nav-bar">
        <MenuButton @click="$router.push('/')"> HOME </MenuButton>
        <MenuButton @click="$router.push('/sign-up')"> SIGN-UP </MenuButton>
        <MenuButton @click="$router.push('/sign-in')"> SIGN-IN </MenuButton>

        <SearchBox class="float-right"></SearchBox>
    </div>
</template>

<script>
import MenuButton from "./MenuButton.vue";
import SearchBox from "./SearchBox.vue";
export default {
    name: "NavBar",
    components: { MenuButton, SearchBox },
    data() {
        return {
            searchValue: "",
        };
    },
    methods: {
        search() {},
    },
};
</script>

<style scoped>
.nav-bar {
    width: 100%;
    height: 50px;
    background-color: rgb(67, 126, 121);
}

.float-right {
    float: right;
}
</style>
