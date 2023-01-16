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
                :key="`sideMenu_${index}`"
                :menu="menu"
                :index="index"
                :isSubMenu="index > 0"
                :showMenu="props.showMenu"
                @pushMenu="pushMenu"
                @popMenu="popMenu"
            />
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
    import { reactive, watch } from 'vue';
    import { Collection, CollectionsResponse } from '~~/utils/types';
    
    interface Props {
        showMenu: boolean,
        collectionsResponse: CollectionsResponse|null,
    }
    const props = defineProps<Props>();
    const emit = defineEmits(['closeSideMenu']);

    // re-format collections to be used for dynamic menu
    const collections: Collection[] = formatCollections();
    let sideMenus: Collection[][] = reactive([ collections ]);
    
    watch(() => props.showMenu, (nVal) => {
        if (!nVal) {
            resetMenu();
        }
    });
    // re-format the collection response to Collection Interface
    // to make dynamic side menu where it's possible to push menus with infinite sub levels (currently supports 2)
    function formatCollections (): Collection[] {
        let formattedCollections: Collection[] = [];
        for (let collection of (props.collectionsResponse?.collections || [])) {
            const [type, name] = collection.configuration_name.split('-');
            const collectionIndex: number = formattedCollections.findIndex((item: Collection) => item.name === name);
            const subMenu = {
                link: collection.configuration_name,
                name: type,
                subMenu: []
            };
            if (collectionIndex >= 0) {
                formattedCollections[collectionIndex].subMenu.push(subMenu);
            } else {
                formattedCollections.push({
                    name,
                    subMenu: [ subMenu ],
                });
            }
        }
        return formattedCollections;
    }
    const pushMenu = (subMenu: Collection[]): void => {
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
    defineExpose({
        pushMenu,
        popMenu,
        closeSideMenu,
    });
</script>

<style>
    .SideMenu__group {
        @apply fixed left-0 z-20 max-w-full;
        top: calc(var(--site-header-height-xs) - 1px);
        width: var(--site-side-menu-width);
        overscroll-behavior: contain;
        height: calc(100vh - calc(var(--site-header-height-xs) - 1px));
        transform: translateX(-100%);
        transition: transform 400ms ease;
        will-change: transform;
    }
    @media only screen and (min-width: 1280px) {
        .SideMenu__group {
            top: calc(var(--site-header-height-xl) - 1px);
            height: calc(100vh - calc(var(--site-header-height-xl) - 1px));
        }
    }
    .SiteMain__menu--active .SideMenu__group {
        transform: translateX(0);
    }
</style>