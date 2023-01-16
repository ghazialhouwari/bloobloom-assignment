<template>
    <div class="SideMenu">
        <div class="MenuList v-sheet">
            <ul class="MenuList__group" area-label="Navigate collections">
                <li
                    v-if="isSubMenu"
                    tabindex="0"
                    class="MenuList__item MenuList__item--back"
                    @click="$emit('popMenu')"
                    @keydown.space.prevent="$emit('popMenu')"
                >
                    <div class="MenuList__item__icon">
                        <Icon name="mdi:chevron-left" size="30px" />
                    </div>
                    <div class="MenuList__item__content">
                        <div class="MenuList__item__title">Go back</div>
                    </div>
                </li>
                <template
                    v-for="item of props.menu"
                    :key="item.name"
                >
                    <li
                        v-if="item.subMenu.length"
                        tabindex="0"
                        class="MenuList__item"
                        @click="$emit('pushMenu', item.subMenu)"
                        @keydown.space.prevent="$emit('pushMenu', item.subMenu)"
                    >
                        <div class="MenuList__item__content">
                            <div class="MenuList__item__title">{{ item.name }}</div>
                        </div>
                        <div class="MenuList__item__icon">
                            <Icon name="mdi:chevron-right" size="30px" />
                        </div>
                    </li>
                    <li
                        v-else
                        tabindex="0"
                        class="MenuList__item"
                        @click="selectCollection(item.link)"
                        @keydown.space.prevent="selectCollection(item.link)"
                    >
                        <div class="MenuList__item__content">
                            <div class="MenuList__item__title">{{ item.name }}</div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Collection } from '~~/utils/types';

    interface Props {
        menu: Collection[],
        isSubMenu: boolean,
        index: number,
        showMenu: boolean,
    }
    const props = defineProps<Props>();

    const selectCollection = (link: string): void => {
        navigateTo(`/${link}`);
    };

    defineEmits(['pushMenu', 'popMenu']);
    defineExpose({
        selectCollection,
    })
</script>

<style>
    .SideMenu {
        @apply absolute bg-white w-full h-full border-r border-y;
        transform: translateX(0);
        will-change: transform;
    }
    .SiteMain__menu--active .SideMenu--active {
        transform: translateX(0);
    }
    .SideMenu__slide-enter-from,
    .SideMenu__slide-leave-to {
        transform: translateX(-100%);
    }
    .SideMenu__slide-enter-active,
    .SideMenu__slide-leave-active {
        transition: all 400ms ease;
    }
    .MenuList__item {
        @apply h-[60px] flex items-center justify-between px-5 border-b cursor-pointer transition-colors duration-75 ease-in;
    }
    .MenuList__item:not(.MenuList__item--back):hover,
    .MenuList__item:not(.MenuList__item--back):focus {
        @apply bg-black text-white;
    }
    .MenuList__item__title {
        @apply text-sm sm:text-base uppercase font-bold;
    }
</style>