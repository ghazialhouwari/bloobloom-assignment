<template>
    <div
        class="SiteCollection__item"
        :class="{
            'xl:border-l xl:border-r': props.index % 3 === 1,
            'md:border-r xl:border-0': props.index % 2 === 0,
        }"
    >
        <h3 class="SiteCollection__item--title">{{ props.collectionItem.name }}</h3>
        <img class="SiteCollection__item--img" :src="props.collectionItem.image" alt="collectionItem.name"/>
    </div>
</template>

<script setup lang="ts">
    import { CollectionItem } from '~~/utils/types';

    interface Props {
        collectionItem: CollectionItem,
        index: number,
    }

    const props = withDefaults(defineProps<Props>(), {});
</script>

<style>
    .SiteCollection__items {
        @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3;
    }
    .SiteCollection__item {
        @apply relative border-b;
    }
    .SiteCollection__item:last-of-type {
        @apply border-r;
    }
    .SiteCollection__item--img {
        @apply object-cover;
    }
    .SiteCollection__item--title {
        @apply absolute top-5 w-full text-center text-base lg:text-xl xl:text-2xl z-10;
    }
</style>