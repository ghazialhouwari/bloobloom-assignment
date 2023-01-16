<template>
    <div
        class="SiteGlass__card"
        :class="{
            'xl:border-l xl:border-r': props.index % 3 === 1,
            'md:border-r xl:border-0': props.index % 2 === 0,
            'SiteGlass__card__lastSingle': (props.index === props.length - 1 && props.length % 2 !== 0),
            'xl:SiteGlass__card__lastSingle': (props.index === props.length - 1 && props.length % 3 !== 0),
            'SiteGlass__card--loading': !componentLoaded && !imgLoaded,
        }"
    >
        <h3 class="SiteGlass__card--title">{{ props.glass.name }}</h3>
        <TransitionGroup name="SiteGlass__cardImg__fade" tag="div" class="w-full h-full">
            <template
                v-for="(media, index) in props.glass.glass_variants[0].media"
                :key="media.url"
            >
                <img
                    v-if="activeMedia === index && componentLoaded"
                    class="SiteGlass__card__img"
                    :src="media.url"
                    :alt="media.original_file_name"
                    width="400"
                    height="300"
                    @load="loadingImgFinish"
                />
            </template>
            <img
                v-if="!componentLoaded && !imgLoaded"
                class="SiteGlass__card__img SiteGlass__cardImg__placeholder"
                src="/images/sunglasses.svg"
                alt="loading sunglasses placeholder"
                width="400"
                height="300"
            />
        </TransitionGroup>
        <button
            class="Carousel__controls Carousel__controls__prev px-4 py-2 uppercase"
            aria-label="Previous Image"
            @click="showPrev"
        >
            <Icon name="mdi:chevron-left" size="30px" class="text-slate-500 xl:opacity-0" />
        </button>
        <button
            class="Carousel__controls Carousel__controls__next px-4 py-2 uppercase"
            aria-label="Next Image"
            @click="showNext"
        >
            <Icon name="mdi:chevron-right" size="30px" class="text-slate-500 xl:opacity-0" />
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { Glass } from '~~/utils/types';

    interface Props {
        glass: Glass,
        index: number,
        length: number,
    }
    const props = withDefaults(defineProps<Props>(), {});
    let activeMedia = ref<number>(0);
    const mediaLen = props.glass.glass_variants[0].media.length;
    let componentLoaded = ref<boolean>(false);
    let imgLoaded = ref<boolean>(false);

    const showPrev = ():void => {
        if (activeMedia.value > 0) {
            activeMedia.value--;
        } else if (activeMedia.value === 0 && mediaLen > 1) {
            activeMedia.value = mediaLen - 1
        }
    };
    const showNext = ():void => {
        if (activeMedia.value < mediaLen - 1) {
            activeMedia.value++;
        } else if (activeMedia.value === mediaLen - 1 && mediaLen > 1) {
            activeMedia.value = 0;
        }
    };

    // work around to force image to call onload event
    onMounted(() => {
        setTimeout(() => componentLoaded.value = true, 500);
    });
    const loadingImgFinish = (): void => {
        imgLoaded.value = true;
    };
    defineExpose({
        showPrev,
        showNext,
        loadingImgFinish,
    })
</script>

<style>
    .SiteGlass__cards {
        @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3;
    }
    .SiteGlass__card {
        @apply relative border-b aspect-[4/3];
        background: #f6f6f4;
    }
    @media only screen and (min-width: 768px) {
        .SiteGlass__card__lastSingle:after {
            content: '';
            @apply block absolute top-0 bottom-0 left-full w-px bg-black;
        }
    }
    @media only screen and (min-width: 1280px) {
        .xl\:SiteGlass__card__lastSingle:after {
            content: '';
            @apply block absolute top-0 bottom-0 left-full w-px bg-black;
        }
    }
    .SiteGlass__card--title {
        @apply absolute top-5 w-full text-center text-base lg:text-xl xl:text-2xl z-10;
    }
    .SiteGlass__card--loading:before {
        @apply w-full;
        background-image: linear-gradient(110deg, #ececec 8%, #fff 18%, #ececec 33%);
    }
    .SiteGlass__card--loading:before,
    .SiteGlass__card--loading .SiteGlass__card--title:before {
        @apply absolute top-0 left-0 h-full;
        content: '';
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
    }
    .SiteGlass__card--loading .SiteGlass__card--title:before {
        @apply w-1/2 right-0 rounded;
        margin: 0 auto;
        background-image: linear-gradient(109deg, #e1e1e1 8%, #ececec 18%, #e1e1e1 33%);
    }
    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
    .SiteGlass__card__img {
        @apply absolute top-0 left-0 w-full h-full object-cover;
    }
    .SiteGlass__cardImg__placeholder {
        @apply opacity-20;
    }
    .SiteGlass__cardImg__fade-enter-from,
    .SiteGlass__cardImg__fade-leave-to {
        opacity: 0;
        transition: all 500ms ease;
    }
    .SiteGlass__cardImg__fade-enter-active,
    .SiteGlass__cardImg__fade-leave-active {
        transition: all 500ms ease;
    }
    .Carousel__controls {
        @apply absolute top-0 bottom-0 w-20 flex items-center justify-center;
    }
    .Carousel__controls__prev {
        @apply left-0;
    }
    .Carousel__controls__next {
        @apply right-0;
    }
    @media only screen and (min-width: 1280px) {
        .Carousel__controls__prev:hover {
            cursor: url('/images/arrow-left.svg'), pointer;
        }
        .Carousel__controls__next:hover {
            cursor: url('/images/arrow-right.svg'), pointer;
        }
    }
</style>