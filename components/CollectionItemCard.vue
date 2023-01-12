<template>
    <div
        class="siteCollection__item"
        :class="{'border-l border-r': props.index % 3 === 1}"
    >
        <h3 class="siteCollection__item--title">{{ props.collectionItem.name }}</h3>
        <img class="siteCollection__item--img" :src="props.collectionItem.image" alt="collectionItem.name"/>
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