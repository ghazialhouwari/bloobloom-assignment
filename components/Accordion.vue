<template>
    <div class="accordion" :data-active="Accordion.active" :data-collapsible="Accordion.active" role="tablist">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'accordion',
        data: () => ({
            Accordion: {
                count: 0,
                active: null
            },
        }),
        provide() {
            return { Accordion: this.Accordion };
        }
    }
</script>

<style>
</style>