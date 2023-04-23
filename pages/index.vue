<template>
    <div class="flex flex-row justify-between my-8 mx-auto text-indigo-blue dark:text-white">
        <Categories />
        <Content />
        <Tags />
    </div>
</template>

<script setup>
import Tags from '~/layouts/Tags.vue';
import Categories from '~/layouts/Categories.vue';
import Content from '~/layouts/Content.vue';
</script>
