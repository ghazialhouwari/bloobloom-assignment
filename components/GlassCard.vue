<template>
    <div
        class="SiteGlass__card"
        :class="{
            'xl:border-l xl:border-r': props.index % 3 === 1,
            'md:border-r xl:border-0': props.index % 2 === 0,
        }"
    >
        <h3 class="SiteGlass__card--title">{{ props.glass.name }}</h3>
        <!-- TODO: image carousel -->
        <img class="SiteGlass__card--img" :src="props.glass.glass_variants[0].media[0].url" alt="glass.name"/>
    </div>
</template>

<script setup lang="ts">
    import { Glass } from '~~/utils/types';

    interface Props {
        glass: Glass,
        index: number,
    }

    const props = withDefaults(defineProps<Props>(), {});
</script>

<style>
    .SiteGlass__cards {
        @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3;
    }
    .SiteGlass__card {
        @apply relative border-b;
    }
    .SiteGlass__card:last-of-type {
        @apply border-r;
    }
    .SiteGlass__card--img {
        @apply object-cover;
    }
    .SiteGlass__card--title {
        @apply absolute top-5 w-full text-center text-base lg:text-xl xl:text-2xl z-10;
    }
</style>