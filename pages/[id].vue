<template>
    <main class="SiteMain relative" :class="{'SiteMain__menu--active': showMenu}">
        <!-- Header -->
        <header class="SiteHeader">
            <button
                id="sideMenuTrigger"
                class="SiteHeader__btn SideMenu__trigger border-r md:border-0"
                @mouseenter="openSideMenu"
                @mouseleave="closeSideMenu"
                @click="toggleSideMenu"
            >
                <span
                    v-if="isTouchDevice && showMenu"
                    class="SideMenu__trigger__content"
                    @mouseenter.stop="closeSideMenu()"
                >
                    <Icon name="mdi:close" size="24px" />
                </span>
                <span v-else class="SideMenu__trigger__content">
                    <span class="SiteHeader__btn__text SideMenu__trigger__text">MENU</span>
                </span>
            </button>
            <h1 class="SiteHeader__logo">
                <NuxtLink to="/" class="SiteHeader__logoLink w-full inline-flex" aria-label="Bloobloom">
                    <svg width="138" height="22" viewBox="0 0 138 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.39844 18.3106C7.39844 20.4649 7.84011 21.2938 8.95324 21.2938C10.5863 21.2938 11.387 19.0851 11.387 14.6649C11.387 10.3283 10.6373 8.42188 8.95324 8.42188C8.3577 8.42188 7.97002 8.61552 7.39844 9.19573V18.3106ZM7.40221 8.75274C8.64625 7.64948 9.86229 7.12428 11.1843 7.12428C14.1127 7.12428 16.2357 9.85959 16.2357 13.6153C16.2357 18.2013 13.1538 21.6526 9.03394 21.6526C7.79057 21.6526 7.37656 21.5425 5.01703 20.7136C4.57738 20.5486 4.4495 20.5207 4.24166 20.5207C3.64713 20.5207 3.28306 20.8801 3.07589 21.6526H2.81608V6.40615C2.81608 4.74839 2.71148 4.11316 2.29782 3.53365C1.93645 2.98131 1.47048 2.75979 0.615135 2.73193L0.5625 2.42967C2.84375 1.93091 5.97798 1.04773 7.40221 0.496094V8.75274Z" fill="black"></path> <path d="M16.8281 2.43039C19.1094 1.93163 22.2443 1.04844 23.6685 0.496094V17.7604C23.6685 20.5493 23.8774 20.9359 25.56 21.018V21.2946H17.1929V21.018C18.8769 20.9359 19.0844 20.5764 19.0844 17.7604V6.40687C19.0844 4.74911 18.9801 4.11387 18.5655 3.53437C18.2034 2.98202 17.7354 2.76051 16.8814 2.73479L16.8281 2.43039Z" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9074 8.6116C31.5446 9.41405 31.3125 11.6234 31.3125 14.3852C31.3125 17.4792 31.571 19.605 32.0359 20.406C32.3733 20.9876 32.8916 21.2906 33.4892 21.2906C34.1623 21.2906 34.7049 20.9033 35.0433 20.1581C35.4053 19.357 35.6368 17.1484 35.6368 14.4416C35.6368 11.2912 35.3807 9.16538 34.9134 8.36508C34.577 7.78487 34.0574 7.48047 33.4628 7.48047C32.7887 7.48047 32.2448 7.86704 31.9074 8.6116M38.2822 8.97569C39.862 10.4119 40.6394 12.1805 40.6394 14.5006C40.6394 18.4771 37.4539 21.654 33.4643 21.654C29.4474 21.654 26.3125 18.4771 26.3125 14.3891C26.3125 10.3026 29.4474 7.125 33.4643 7.125C35.3302 7.125 36.883 7.73308 38.2822 8.97569Z" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4223 8.6116C47.0609 9.41405 46.8281 11.6234 46.8281 14.3852C46.8281 17.4792 47.0866 19.605 47.5522 20.406C47.8903 20.9876 48.4072 21.2906 49.0055 21.2906C49.6793 21.2906 50.2218 20.9033 50.5603 20.1581C50.9209 19.357 51.1544 17.1484 51.1544 14.4416C51.1544 11.2912 50.896 9.16538 50.4283 8.36508C50.0926 7.78487 49.5743 7.48047 48.9785 7.48047C48.304 7.48047 47.7597 7.86704 47.4223 8.6116M53.7952 8.97569C55.3749 10.4119 56.1517 12.1805 56.1517 14.5006C56.1517 18.4771 52.9665 21.654 48.9772 21.654C44.9617 21.654 41.8281 18.4771 41.8281 14.3891C41.8281 10.3026 44.9617 7.125 48.9772 7.125C50.8425 7.125 52.3959 7.73308 53.7952 8.97569" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4062 18.3067C63.4062 20.461 63.8466 21.2899 64.9611 21.2899C66.5928 21.2899 67.3979 19.0812 67.3979 14.661C67.3979 10.3244 66.6444 8.41797 64.9611 8.41797C64.3648 8.41797 63.9778 8.61161 63.4062 9.19183V18.3067ZM63.4087 8.75274C64.652 7.64948 65.8708 7.12428 67.1928 7.12428C70.1195 7.12428 72.2435 9.85959 72.2435 13.6153C72.2435 18.2013 69.1602 21.6526 65.0404 21.6526C63.7964 21.6526 63.3834 21.5425 61.0255 20.7136C60.5852 20.5486 60.4553 20.5207 60.2481 20.5207C59.6523 20.5207 59.2895 20.8801 59.083 21.6526H58.8232V6.40615C58.8232 4.74839 58.7203 4.11316 58.3056 3.53365C57.9422 2.98131 57.4769 2.75979 56.6216 2.73193L56.5703 2.42967C58.8502 1.93091 61.9838 1.04773 63.4087 0.496094L63.4087 8.75274Z" fill="black"></path> <path d="M72.8359 2.43039C75.1145 1.93163 78.2494 1.04844 79.6743 0.496094V17.7604C79.6743 20.5493 79.8818 20.9359 81.5652 21.018V21.2946H73.197V21.018C74.8807 20.9359 75.0889 20.5764 75.0889 17.7604V6.40687C75.0889 4.74911 74.9839 4.11387 74.5692 3.53437C74.2079 2.98202 73.7412 2.76051 72.8845 2.73479L72.8359 2.43039Z" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M87.9169 8.6116C87.5531 9.41405 87.3203 11.6234 87.3203 14.3852C87.3203 17.4792 87.5781 19.605 88.0441 20.406C88.3818 20.9876 88.9008 21.2906 89.497 21.2906C90.1715 21.2906 90.714 20.9033 91.0511 20.1581C91.4142 19.357 91.647 17.1484 91.647 14.4416C91.647 11.2912 91.3878 9.16538 90.9205 8.36508C90.5841 7.78487 90.0665 7.48047 89.471 7.48047C88.7972 7.48047 88.2526 7.86704 87.9169 8.6116M94.2887 8.97569C95.8698 10.4119 96.6459 12.1805 96.6459 14.5006C96.6459 18.4771 93.4597 21.654 89.4704 21.654C85.4542 21.654 82.3203 18.4771 82.3203 14.3891C82.3203 10.3026 85.4542 7.125 89.4704 7.125C91.3346 7.125 92.8881 7.73308 94.2887 8.97569Z" fill="black"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M103.422 8.6116C103.059 9.41405 102.828 11.6234 102.828 14.3852C102.828 17.4792 103.087 19.605 103.552 20.406C103.889 20.9876 104.407 21.2906 105.003 21.2906C105.677 21.2906 106.22 20.9033 106.558 20.1581C106.92 19.357 107.153 17.1484 107.153 14.4416C107.153 11.2912 106.895 9.16538 106.426 8.36508C106.09 7.78487 105.573 7.48047 104.976 7.48047C104.303 7.48047 103.758 7.86704 103.422 8.6116ZM109.797 8.97569C111.378 10.4119 112.155 12.1805 112.155 14.5006C112.155 18.4771 108.969 21.654 104.977 21.654C100.965 21.654 97.8281 18.4771 97.8281 14.3891C97.8281 10.3026 100.965 7.125 104.977 7.125C106.844 7.125 108.397 7.73308 109.797 8.97569Z" fill="black"></path> <path d="M119.597 9.75665C121.177 8.04458 122.886 7.13281 124.442 7.13281C126.204 7.13281 127.213 7.98956 127.524 9.75665C129.337 7.90596 130.815 7.13281 132.446 7.13281C133.301 7.13281 134.078 7.46365 134.622 8.01743C135.191 8.65338 135.452 9.56372 135.452 11.0557V18.3191C135.426 20.5835 135.608 20.8872 137.004 21.0258V21.3024H129.648V21.0258C130.735 20.8872 130.89 20.5571 130.865 18.3191V12.0218C130.865 10.7506 130.786 10.1439 130.554 9.75665C130.349 9.39794 129.88 9.14856 129.414 9.14856C128.819 9.14856 128.274 9.45368 127.524 10.1711V18.3191C127.496 20.5835 127.654 20.8872 128.741 21.0258V21.3024H121.719V21.0258C122.809 20.8872 122.964 20.5571 122.939 18.3191V12.0218C122.939 10.8063 122.859 10.254 122.602 9.83882C122.368 9.42581 121.928 9.17715 121.436 9.17715C120.815 9.17715 120.321 9.45368 119.597 10.1711V18.3191C119.568 20.5571 119.725 20.8872 120.815 21.0258V21.3024H112.937V21.0258C114.778 20.9437 115.01 20.5835 115.01 17.7668V13.2372C115.01 11.5802 114.905 10.9185 114.492 10.3376C114.131 9.81095 113.665 9.59159 112.807 9.53657L112.758 9.25932C115.245 8.65338 116.384 8.29396 119.597 7.13281L119.597 9.75665Z" fill="black"></path></svg>
                </NuxtLink>
            </h1>
            <a
                target="_blank"
                rel="noopener"
                class="SiteHeader__btn Github__btn border-l md:border-0"
                href="https://github.com/ghazialhouwari/bloobloom-assignment"
            >
                <Icon name="mdi:github" size="26px" />
                <span class="ml-1">GitHub</span>
            </a>
        </header>
        <SideMenuGroup
            :showMenu="showMenu"
            :collectionsResponse="collectionsResponse"
            @closeSideMenu="closeSideMenu"
        />
        <!-- Collection Items -->
        <section class="SiteCollection">
            <header class="SiteCollection__header">
                <div class="hidden xl:block"></div>
                <h2 class="SiteCollection__header--title"><span>{{ selectedCollection.replace('-', ' ') }}</span></h2>
                <div class="SiteCollection__btnGroup">
                    <div class="SiteCollection__menu">
                        <button
                            class="SiteCollection__btn"
                            aria-haspopup="true"
                            :aria-expanded="showColours"
                            @click="toggleShowColours"
                        >COLOUR</button>
                        <div v-if="showColours" class="SiteCollection__menu__content" role="menu">
                            <ul class="grid grid-cols-3 grid-rows-2 gap-3 align-center capitalize">
                                <li
                                    v-for="colour in colours"
                                    :key="colour.name"
                                    class="FilterList flex items-center"
                                    tabindex="0"
                                    @click="toggleColourSelection(colour.name)"
                                    @keydown.space.prevent="toggleColourSelection(colour.name)"
                                >
                                    <span class="FilterList__colour" :class="{'FilterList__colour--selected': selectedColours.includes(colour.name)}">
                                        <span
                                            :style="{
                                                background: colour.val.startsWith('#') ? colour.val : `url('https://d32y5z2afvomc1.cloudfront.net/assets/${colour.val}')`
                                            }"
                                            class="inline-flex w-full h-full rounded-full mx-w-full"
                                        ></span>
                                    </span>
                                    <span>{{ colour.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="SiteCollection__menu SiteCollection__menu__r">
                        <button
                            class="SiteCollection__btn border-l lg:border-r"
                            aria-haspopup="true"
                            :aria-expanded="showShapes"
                            @click="toggleShowShapes"
                        >SHAPE</button>
                        <div v-if="showShapes" class="SiteCollection__menu__content" role="menu">
                            <ul class="grid grid-cols-4 align-center capitalize">
                                <li
                                    v-for="shape in shapes"
                                    :key="shape"
                                    class="FilterList FilterList__shape"
                                    :class="{'FilterList__shape--selected': selectedShapes.includes(shape)}"
                                    tabindex="0"
                                    role="button"
                                    @click="toggleShapeSelection(shape)"
                                    @keydown.space.prevent="toggleShapeSelection(shape)"
                                >{{ shape }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div ref="glassSection" class="SiteGlass__cards">
                <GlassCard
                    v-for="(glass, index) in glasses"
                    :key="index"
                    :index="index"
                    :glass="glass"
                    :length="glasses.length"
                />
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import { reactive, ref, onMounted, computed } from 'vue';
    import { GlassesResponse, Glass, KeyValuePair, PaginationsOptions, CollectionsResponse } from '~~/utils/types';
    import { getProxyValue } from '~~/utils/functions';
    import { useTouch } from '~~/composables/touch';
    import { useWindowScroll } from '~~/composables/windowScroll';
    
    // fetch collections
    const { data: collectionsResponse } = await useLazyFetch<CollectionsResponse>('https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections');
    
    // get collection name from route and check it's validity
    const route = useRoute();
    let routeId: string = typeof route.params.id === 'string' ? route.params.id : route.params.id[0];
    const collectionNames: string[] = (collectionsResponse.value?.collections || []).map(collection => collection.configuration_name);
    if (!collectionNames.includes(routeId)) {
        navigateTo('/');
    }

    const { isTouchDevice } = useTouch();
    const { scrollY } = useWindowScroll();
    const showMenu = ref<boolean>(false);
    const colours: KeyValuePair[] = reactive([
        { name: 'black', val: '#000000' },
        { name: 'tortoise', val: 'filters_tortoise_02.png' },
        { name: 'coloured', val: 'filters_coloured_03.png' },
        { name: 'crystal', val: '#ebecf1' },
        { name: 'dark', val: '#602830' },
        { name: 'bright', val: '#d58e35' },
    ]);
    const shapes = ref<string[]>(['square', 'rectangle', 'round', 'cat-eye']);
    const selectedColours: string[] = reactive(['coloured']);
    const selectedShapes: string[] = reactive(['round']);
    const selectedCollection = ref<string>(routeId);
    const showColours = ref<boolean>(false);
    const showShapes = ref<boolean>(false);
    const paginationOptions = ref<PaginationsOptions>({ number: 1, offset: 0, limit: 12, totalCount: 0});
    const additionalGlasses: Glass[] = reactive([]);
    const glassSection = ref<HTMLElement|null>(null)
    const loadingGlasses = ref<boolean>(false)

    // fetch glasses from api
    const { data: glassesResponse, pending, refresh } = useLazyFetch<GlassesResponse>(getGlassListingURI, {
        watch:[selectedColours, selectedShapes, selectedCollection]
    });
    // handle get total count on server side
    const response: GlassesResponse = getProxyValue(glassesResponse.value);
    updatePaginationOptions(response);
    // handle get total count on client side
    watch(glassesResponse, (newGlassesResponse) => {
        updatePaginationOptions(newGlassesResponse);
    });
    // handle lazy load glasses on scrolling to the last glass
    watch(scrollY, (newscrollY) => {
        loadMoreGlasses(newscrollY);
    });

    // a computed ref
    const glasses = computed(() => {
        return (glassesResponse.value?.glasses || []).concat(additionalGlasses);
    })
    // cache side menu and it's trigger
    let sideMenuGroup:HTMLElement|null = null;
    let sideMenuTrigger:HTMLElement|null = null;
    onMounted(() => {
        sideMenuGroup = document.querySelector('#SideMenuGroup');
        sideMenuTrigger = document.querySelector('#sideMenuTrigger');
    });

    // Build and return listing uri
    function getGlassListingURI(page: number = 1): string {
        // build query params;
        const colourFilters: string[] = selectedColours.map(colour => {
            return `filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${colour}`;
        });
        const shapeFilters: string[] = selectedShapes.map(shape => {
            return `filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${shape}`;
        });
        const queryParams = [
            'sort[type]=collection_relations_position',
            'sort[order]=asc',
            'filters[lens_variant_prescriptions][]=fashion',
            'filters[lens_variant_types][]=classic',
            `page[limit]=${paginationOptions.value.limit}`,
            `page[number]=${page}`,
            ...colourFilters,
            ...shapeFilters,
            'filters[frame_variant_home_trial_available]=false',
        ].join('&');

        return `https://api.bloobloom.com/user/v1/sales_channels/website/collections/${selectedCollection.value}/glasses?${queryParams}`;
    }

    function resetAdditionalGlasses() {
        paginationOptions.value.number = 1;
        paginationOptions.value.offset = 0;
        additionalGlasses.splice(0);
    }

    function updatePaginationOptions(response: GlassesResponse|null): void {
        paginationOptions.value.totalCount = response?.meta?.total_count || 0;
        paginationOptions.value.offset = response?.glasses?.length || 0;
    }

    const toggleShowColours = (): void => {
        showColours.value = !showColours.value;
        // close shapes filter if opened
        if (showShapes.value) {
            showShapes.value = false;
        }
    };
    const toggleShowShapes = (): void => {
        showShapes.value = !showShapes.value;
        // close colours filter if opened
        if (showColours.value) {
            showColours.value = false;
        }
    };
    const toggleSideMenu = (): void => {
        if (isTouchDevice.value) return;
        showMenu.value = !showMenu.value;
    };
    const openSideMenu = (): void => {
        showMenu.value = true;
    };
    const closeSideMenu = (evt: MouseEvent|null = null): void => {
        if (!evt || (!sideMenuTrigger?.contains(evt.relatedTarget as Node) && !sideMenuGroup?.contains(evt.relatedTarget as Node))) {
            showMenu.value = false;
        }
    };
    const toggleShapeSelection = (shape: string): void => {
        const shapeIndex = selectedShapes.indexOf(shape);
        if (shapeIndex >= 0) {
            selectedShapes.splice(shapeIndex, 1);
        } else {
            selectedShapes.push(shape);
        }
        resetAdditionalGlasses();
    };
    const toggleColourSelection = (colour: string): void => {
        const colourIndex = selectedColours.indexOf(colour);
        if (colourIndex >= 0) {
            selectedColours.splice(colourIndex, 1);
        } else {
            selectedColours.push(colour);
        }
        resetAdditionalGlasses();
    };
    // lazy loading fetch glasses when the user scroll to the last glass
    async function loadMoreGlasses (scrollY: number): Promise<void> {
        if (
            loadingGlasses.value ||
            !glassSection.value ||
            (paginationOptions.value.totalCount <= paginationOptions.value.offset)
        ) {
            return;
        }

        loadingGlasses.value = true;
        try {
            // calculate the top offset of the glasses container
            const padding = 30;
            const sectionOffset = glassSection.value.offsetTop + glassSection.value.offsetHeight - window.innerHeight - padding;
            if (scrollY >= sectionOffset) {
                const response: GlassesResponse = await $fetch(getGlassListingURI(paginationOptions.value.number + 1));
                additionalGlasses.push(...response.glasses);
                paginationOptions.value.number++;
                paginationOptions.value.offset += response.glasses.length;
            }
        } catch {
            // TODO: error handler
        } finally {
            loadingGlasses.value = false;
        }
    };
    defineExpose({
        toggleSideMenu,
        openSideMenu,
        closeSideMenu,
        toggleShowColours,
        toggleShowShapes,
        toggleShapeSelection,
        toggleColourSelection,
    });
</script>

<style>
    .SiteMain {
        padding-top: var(--site-header-height-xs);
    }
    .SiteHeader {
        height: var(--site-header-height-xs);
    }
    @media only screen and (min-width: 1280px) {
        .SiteHeader {
            height: var(--site-header-height-xl);
        }
        .SiteMain {
            padding-top: var(--site-header-height-xl);
        }
    }
    .SiteHeader {
        @apply fixed top-0 left-0 z-20 w-full bg-white flex items-center justify-between border-b;
    }
    .SiteHeader__btn {
        @apply relative tracking-widest h-full text-[11px] sm:text-[13px] flex items-center justify-center cursor-pointer w-24 sm:w-40;
    }
    .SiteHeader__btn__text {
        @apply inline-flex relative;
    }
    .SideMenu__trigger__content {
        @apply inline-flex w-full h-full items-center justify-center;
    }
    @media only screen and (min-width: 768px) {
        .SiteHeader__btn__text:before {
            @apply absolute bottom-[-5px] left-0 w-full h-[3px] bg-black;
            content: '';
            transform: scaleX(0);
            will-change: transform;
            transition: transform 400ms ease;
        }
        .SiteHeader__btn:hover .SiteHeader__btn__text:before,
        .SiteHeader__btn:focus .SiteHeader__btn__text:before,
        .SiteMain__menu--active .SideMenu__trigger__text:before {
            transform: scaleX(1);
        }
    }
    .SiteHeader__logo {
        @apply flex items-center max-w-[110px] xl:max-w-[138px];
    }
    .Github__btn {
        font-family: Arial, Helvetica, sans-serif;
    }
    .SiteCollection__header {
        @apply grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 xl:grid-cols-3 border-b;
        height: calc(calc(var(--site-header-height-xs) * 2) + 10px);
    }
    .SiteCollection__header--title {
        @apply text-lg xl:text-2xl font-black h-full flex justify-center items-center xl:border-l md:border-r uppercase;
    }
    .SiteCollection__btnGroup {
        @apply flex justify-start border-t md:border-0;
    }
    .SiteCollection__menu {
        @apply relative w-full h-full lg:w-40;
    }
    .SiteCollection__menu__content {
        @apply absolute top-full left-0 z-30 bg-white border-y md:border-x px-3 py-6 w-screen lg:w-80;
        max-width: 100vw;
    }
    .SiteCollection__menu__r .SiteCollection__menu__content {
        @apply left-auto right-0;
    }
    .SiteCollection__btn {
        @apply w-full h-full font-bold text-sm;
    }
    @media only screen and (min-width: 768px) {
        .SiteCollection__header {
            height: calc(var(--site-header-height-xl) + 10px);
        }
        .SiteCollection__menu__content {
            max-width: 50vw;
        }
    }
    .FilterList {
        @apply text-center cursor-pointer;
    }
    .FilterList__colour {
        @apply inline-flex w-5 h-5 p-px rounded-full mr-2 overflow-hidden;
    }
    .FilterList__shape:hover,
    .FilterList__shape:focus,
    .FilterList__shape--selected {
        @apply underline
    }
    .FilterList:hover .FilterList__colour,
    .FilterList:focus .FilterList__colour,
    .FilterList__colour--selected {
        @apply border;
    }
</style>