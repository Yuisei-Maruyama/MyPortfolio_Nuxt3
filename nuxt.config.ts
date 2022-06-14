import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/', // src/ディレクトリ以下にpages/やlayouts/を置けるように設定する
  alias: {
    '@': resolve(__dirname, '.src'),
  },
  typescript: {
    strict: true
  }
})
