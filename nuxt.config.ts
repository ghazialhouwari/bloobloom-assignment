// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
    build: {
        transpile: ["@headlessui/vue", "@headless/tailwindcss"],
    },
    app: {
        head: {
            title: 'Bloobloom: Designer Eyewear At a Fair Price',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Designer prescription glasses and sunglasses at £95 all inclusive. Find your pair today with our free Home Try-On programme. Free express shipping and free returns.',
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
})
