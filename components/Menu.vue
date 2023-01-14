<template>
    <div class="SideMenu">
        <div role="list" class="MenuList v-sheet">
            <div role="listbox" class="MenuList__group">
                <div
                    v-if="isSubMenu"
                    @click="$emit('popMenu')"
                    :tabindex="props.menu.length"
                    role="option"
                    aria-selected="false"
                    class="MenuList__item MenuList__item--back"
                >
                    <div class="MenuList__item__icon">
                        <Icon name="mdi:chevron-left" size="30px" />
                    </div>
                    <div class="MenuList__item__content">
                        <div class="MenuList__item__title">Go back</div>
                    </div>
                </div>
                <template
                    v-for="(item, index) of props.menu"
                    :key="item.name"
                >
                    <div
                        v-if="item.subMenu"
                        :tabindex="index"
                        role="option"
                        aria-selected="false"
                        class="MenuList__item"
                        @click="$emit('pushMenu', item.subMenu)"
                    >
                        <div class="MenuList__item__content">
                            <div class="MenuList__item__title">{{ item.name }}</div>
                        </div>
                        <div class="MenuList__item__icon">
                            <Icon name="mdi:chevron-right" size="30px" />
                        </div>
                    </div>
                    <div
                        v-else
                        tabindex="0"
                        role="option"
                        aria-selected="false"
                        class="MenuList__item"
                    >
                        <div class="MenuList__item__content">
                            <div class="MenuList__item__title">{{ item.name }}</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { CollectionMenu } from '~~/utils/types';

    interface Props {
        menu: CollectionMenu[],
        isSubMenu: boolean,
        index: number,
    }
    const props = defineProps<Props>();
    defineEmits(['pushMenu', 'popMenu']);
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
    .MenuList__item:not(.MenuList__item--back):hover {
        @apply bg-black text-white;
    }
    .MenuList__item__title {
        @apply text-sm sm:text-base uppercase font-bold;
    }
</style>