import { fileURLToPath, URL } from 'url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Comment } from 'vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'vue-i18n'],
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        // IconsResolver({})
      ],
      vueTemplate: true, // 是否在 vue 模板中自动导入
      // dts: path.resolve(pathSrc, 'types', 'auto-imports.d.ts') // (false) 配置文件生成位置，默认是根目录 /auto-imports.d.ts
    }),
    Components({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      // 只要项目中，在components目录下的文件，会自动导入到components.d.ts中，这样，页面或者组件中就不用再次引入了，也无需在`main.js`通过app.component全局注册了
      dirs: ['src/components', 'src/**/components',],
      extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
      resolvers: [
        // 自动注册图标组件
        // IconsResolver({
        //   enabledCollections: ['ep'] //@iconify-json/ep 是 Element Plus 的图标库
        // }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      // dts: path.resolve(pathSrc, 'types', 'components.d.ts') // (false) 配置文件生成位置，默认是根目录 /components.d.ts
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/base.scss";`
      }
    }
  },
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 3000, // 端口号
    hmr: true, //开启热更新
    host: "http://localhost",
    proxy: {
      "/api": {
        target: `http://localhost:3010`, // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})
