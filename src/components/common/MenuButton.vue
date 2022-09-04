<template>
    <div class="nav-button">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "NavButton",
    props: {
        buttonName: {
            type: String,
        },
    }
};
</script>

<style scoped>
.nav-button {
    cursor: pointer;
    height: 100%;
    width: 100px;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    color:rgb(239, 238, 247);
}
</style>
