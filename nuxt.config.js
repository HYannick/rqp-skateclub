import postcssImport from 'postcss-import';
import postCssCustomMedia from 'postcss-custom-media';
import mixin from 'postcss-mixins';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNested from 'postcss-nested';
import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    host: '0'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Roule Qui Peut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Association Lyonnaise de skate' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ["@nuxtjs/prismic", {
      endpoint: smConfig.apiEndpoint || "",
    }],
    ["nuxt-sm"],
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/assets/svg/'
  },
  styleResources: {
    scss: ['./assets/css/token/*.scss']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
    postcss: {
      plugins: [
        postcssImport(),
        postcssPresetEnv({
          stage: 0,
          browsers: 'cover 90%, last 2 major versions',
        }),
        postcssNested(),
      ]
    },
  },

  generate: {
    fallback: true
  },

  prismic: {
    endpoint: "https://rqp-skateclub.prismic.io/api/v2",
    htmlSerializer: '@/plugins/html-serializer',
    apiOptions: {
      routes: [
        {
          type: "home-page",
          path: "/"
        },
        {
          type: "page",
          path: "/:uid"
        },
        {
          type: "events-page",
          path: "/events"
        },
        {
          type: "event",
          path: "/events/:uid"
        },
        {
          type: "contact-page",
          path: "/contact"
        },
      ]
    },
  },
}
