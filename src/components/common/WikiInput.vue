<template>
    <input
        class="wiki-input"
        :placeholder="placeholder"
        :type="type"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    name: "WikiInput",
    props: {
        placeholder: {
            type: String,
        },
        type: {
            type: String,
        },
    },
};
</script>

<style scoped>
.wiki-input {
    width: 80%;
    height: 50px;
    border-radius: 1em;
    border: 1px solid lightgray;
    padding: 0px 20px;
    margin-top: 10px;
}
</style>
