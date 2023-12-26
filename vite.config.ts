import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置@别名
import { resolve } from "path";
//mock
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver(
//         {
//           // 自动引入修改主题色添加这一行，使用预处理样式
//           importStyle: "sass",
//         }
//       )],
//     }),
//     // mock服务
//     viteMockServe({
//       mockPath: 'mock', //解析根目录下的mock文件夹
//       localEnabled: command === 'serve', //开发打包开关
//       prodEnabled: command !== 'serve',// 生产打包开关
//       supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
//       //这样可以控制关闭mock的时候不让mock打包到最终代码内
//       injectCode: `
//         import { setupMock } from '../mock';
//         setupMock();
//         `,
//     }),
//   ],
//   // ↓解析配置
//   resolve: {
//     // ↓路径别名
//     alias: {
//       "@": resolve(__dirname, "./src")
//     }
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @use "@/styles/element-theme.scss" as *;
//         `,
//       },
//     },
//   },
// })


export default ({ command }) => {

  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(
          {
            // 自动引入修改主题色添加这一行，使用预处理样式
            importStyle: "sass",
          }
        )],
      }),
      // mock服务
      // viteMockServe({
      //   // mockPath: './src/mock', //解析根目录下的mock文件夹
      //   mockPath: './src/apis/mock', //解析根目录下的mock文件夹
      // }),
      viteMockServe({
        mockPath: 'mock', //解析根目录下的mock文件夹
        localEnabled: command === 'serve', //开发打包开关
        prodEnabled: command !== 'serve' ,// 生产打包开关
      //这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
            import { setupMock } from './apis/mock';
            setupMock();
            `,
      }),
    ],
    // ↓解析配置
    resolve: {
      // ↓路径别名
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/styles/element-theme.scss" as *;
          `,
        },
      },
    },
  }
}    
