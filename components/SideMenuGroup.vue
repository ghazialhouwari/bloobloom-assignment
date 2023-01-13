<template>
    <div 
        id="SideMenuGroup"
        class="SideMenu__group"
        @mouseleave="closeSideMenu"
    >
        <TransitionGroup
            name="SideMenu__slide"
            tag="div"
        >
            <Menu
                v-for="(menu, index) in sideMenus"
                :key="menu[0].name"
                :menu="menu"
                :index="index"
                :isSubMenu="index > 0"
                @pushMenu="pushMenu"
                @popMenu="popMenu"
            />
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
    import { reactive, watch } from 'vue';
    import { CollectionMenu } from '~~/utils/types';
    
    interface Props {
        showMenu: boolean,
    }
    const props = defineProps<Props>();
    const emit = defineEmits(['closeSideMenu']);

    const sideMenuInitial: CollectionMenu[][] = [
        [
            {
                name: 'men',
                subMenu: [
                    {
                        id: 4,
                        name: 'sunglasses',
                    },
                    {
                        id: 2,
                        name: 'spectacles',
                    }
                ]
            },
            {
                name: 'women',
                subMenu: [
                    {
                        id: 3,
                        name: 'sunglasses',
                    },
                    {
                        id: 1,
                        name: 'spectacles',
                    }
                ]
            },
        ]
    ];

    const sideMenus: CollectionMenu[][] = reactive(sideMenuInitial);
    const pushMenu = (subMenu: CollectionMenu[]): void => {
        sideMenus.push(subMenu);
    };
    const popMenu = (): void => {
        sideMenus.pop();
    };
    const resetMenu = (): void => {
        sideMenus.splice(1);
    };
    const closeSideMenu = (evt: MouseEvent): void => {
        emit('closeSideMenu', evt);
    };
    watch(() => props.showMenu, (nVal) => {
        if (!nVal) {
            resetMenu();
        }
    });
    defineExpose({
        pushMenu,
        popMenu,
        closeSideMenu,
    });
</script>

<style>
    .SideMenu__group {
        @apply fixed left-0 z-20 max-w-full;
        top: 49px;
        width: 481px;
        overscroll-behavior: contain;
        height: calc(100vh - 49px);
        transform: translateX(-100%);
        transition: transform 400ms ease;
        will-change: transform;
    }
    .SiteMain__menu--active .SideMenu__group {
        transform: translateX(0);
    }
    .SideMenu {
        @apply absolute bg-white w-full h-full border-r border-y border-black;
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
</style>