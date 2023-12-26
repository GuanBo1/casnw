import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { router } from '@/router/base-router'
import { setupMock } from './apis/mock'

if(import.meta.env.DEV){ //dev环境开启mock
  setupMock()
}

const app = createApp(App)

//注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.mount('#app')


console.log('获取环境变量:',import.meta.env)

// axios.get('/getMenuBarData').then((res) => {
//     console.log(res)
// })
