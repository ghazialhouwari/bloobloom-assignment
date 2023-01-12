<template>
    <div class="accordion__item">
        <h4 
            class="accordion__trigger"
            :class="{'accordion__trigge--active': visible}"
            role="tab"
            :id="`accordionID-${Accordion.count}`"
            :aria-controls="`accordionID-${Accordion.count+1}`"
            :aria-selected="visible"
            :aria-expanded="visible"
            :tabindex="visible ? 0 : -1"
            @click="open"
        >
            <slot name="accordion-trigger"></slot>
            <span class="accordion__handle" :class="{'accordion__handle--collapsed': !visible}"></span>
        </h4>

        <transition 
            name="accordion"
            @before-enter="end"
            @enter="start"
            @before-leave="start"
            @leave="end"
        >
            <div
                v-show="visible"
                class="accordion__content"
                :id="`accordionID-${Accordion.count+1}`"
                :aria-labelledby="`accordionID-${Accordion.count}`"
                role="tabpanel"
                :aria-hidden="!visible"
            >
                <div class="pt-4 pb-6">
                    <slot name="accordion-content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'accordion-item',
        inject: ['Accordion'],
        data: () => ({
            index: null,
        }),
        created() {
            this.index = this.Accordion.count++;
        },
        methods: {
            open() {
                if (this.visible) {
                    this.Accordion.active = null;
                } else {
                    this.Accordion.active = this.index;
                }
            },
            start(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            end(el) {
                el.style.height = '0';
            },
        },
        computed: {
            visible() {
                return this.index == this.Accordion.active;
            }
        },
    }
</script>

<style scoped>
    .accordion__item {
        @apply mb-4 px-6 rounded-lg drop-shadow-lg;
        background: #FFF;
    }
    .accordion__trigger {
        @apply flex justify-between items-center py-5 cursor-pointer select-none text-lg text-primary font-semibold;
    }
    .accordion__content {
        @apply border-t border-t text-slate-500 overflow-hidden;
        border-color: rgba(0, 0, 0, 0.2);
        will-change: height;
        transition: height 300ms ease;
    }
    /* icon */
    .accordion__handle {
        @apply w-6 h-6 relative;
    }
    .accordion__handle:before,
    .accordion__handle:after {
        @apply absolute top-0 right-0 bottom-0 left-0 m-auto bg-primary w-5;
        content: '';
        height: 3px;
        transition: transform 500ms ease;
        transform-origin: center;
    }
    .accordion__handle--collapsed:before {
        transform: rotate(180deg);
    }
    .accordion__handle--collapsed:after {
        transform: rotate(90deg);
    }
</style>