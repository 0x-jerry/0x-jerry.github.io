import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import { setupMarkdownIt } from './vite/markdown'
import { updateRouteMeta } from './vite/vite-plugin-blog/resolveData'
import ViteFixResource from './vite/vite-fix-resource'
import { globalData } from './vite/vite-plugin-blog/global'
import { assetCache, assetHashToFilenameMap, emittedHashMap } from './vite/vite-plugin-blog/asset'
import { generateRSS } from './vite/vite-rss'
import { blogConf } from './config'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    {
      name: 'vite-plugin-get-ctx',
      enforce: 'pre',
      configResolved(conf) {
        globalData.conf = conf

        assetCache.set(conf, new Map())
        emittedHashMap.set(conf, new Set())
        assetHashToFilenameMap.set(conf, new Map())
      },
      buildStart() {
        globalData.ctx = this
      },
    },
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],

      async onRoutesGenerated(routes) {
        // fix link in markdown file
        await updateRouteMeta(routes, { base: blogConf.base })
        await generateRSS(routes, { base: blogConf.base })
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      dts: true,

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // fix folder name contain `.git`, ex: `0x-jerry.github.io`
      exclude: [/node_modules/, /\.git\//],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      markdownItSetup: setupMarkdownIt,
      transforms: {
        after(code, id) {
          const wrap = (comp: string) => `<${comp} v-bind="frontmatter">${code}</${comp}>`

          if (/components\/notes/.test(id)) return wrap('v-note')

          if (/pages\/docs/.test(id)) return wrap('v-post')

          if (/config\/events/.test(id)) return wrap('v-timeline-item')

          return code
        },
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: "0x-Jerry's Blog",
        short_name: 'Blog',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
    ViteFixResource,
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', 'dayjs'],
    exclude: ['vue-demi'],
  },
})
