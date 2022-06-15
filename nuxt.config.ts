import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'
const pathSrc = resolve(__dirname, "./src")
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxtjs/style-resources',
  ],
  srcDir: 'src/', // src/ディレクトリ以下にpages/やlayouts/を置けるように設定する
  alias: {
    '@': resolve(__dirname, '.src'),
  },
  typescript: {
    strict: true
  },
  css: ['@/assets/css/main.scss'], // Global CSS
  vite: {
    css: {
      preprocessorOptions: {
          scss: {
              additionalData: `@import "${pathSrc}/assets/css/main.scss";`,
          },
      },
    },
    server: {
      // watch: {
      //   usePolling: true,
      // },
      // hmr: {
      //   protocol: 'ws',
      //   host: 'localhost',
      //   // port: 7777
      // }
    },
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
})
