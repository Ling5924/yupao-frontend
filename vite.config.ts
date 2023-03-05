import { fileURLToPath, URL } from 'url'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// import AutoImport from 'unplugin-auto-import/vite'  // 自动导入composition api 和 生成全局typescript说明
// import Components from 'unplugin-vue-components/vite'  // 组件库按需引入1
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 组件库按需引入1
 // 样式按需引入 message需要单独引入
const mockServerPort = 9527
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    // 组件库按需引入1
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
     Components({
      resolvers: [VantResolver()],
     }),
,
  ],
  logLevel: 'info',
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 3000, // 端口号
    hmr:true, //开启热更新
    host: "0.0.0.0",
    proxy: {
      "/mock-api": {
        target: `http://127.0.0.1:${mockServerPort}/mock-api`, // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/mock-api/, ''),
      }
    }
  },
  resolve: {
    alias: {
      // "@":resolve(__dirname,"src"),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@comps': fileURLToPath(new URL('./src/components', import.meta.url)),
      "@images": resolve(__dirname, "src/assets/images"),
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
      // 给导入的路径最后加上 ;
      less: {
        modifyVars: { // 更改主题在这里
          'primary-color': '#52c41a',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      },
      // mixins函数引入
      scss: {
        additionalData: `@import "@/styles/_variables.scss";\n@import "@/assets/styles/mixin.scss";\n@import "@/styles/common.scss";\n`
      }
    }
  } 
})

