<template>
    <div class="menu_bar">
        <el-menu ellipsis class="el_menu_box" mode="horizontal" :popper-offset="16">
            <template v-for="menu in menuBar">
                <template v-if="menu.children && menu.children.length > 0">
                    <el-sub-menu class="menu_item" :index="menu.id" :popper-offset="0">
                        <template #title>{{ menu.title }}</template>
                        <el-menu-item class="menu_item" v-for="subMenu in menu.children" :index="subMenu.id">{{ subMenu.title }}</el-menu-item>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item class="menu_item" :index="menu.id">{{ menu.title }}</el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
// import { Ref, onMounted, ref } from 'vue';
import { IMenuBar } from '@/apis/main-page/menu/type';
// import { requestMenuBars } from '@/apis/main-page/menu/api';
// import { IMenuBar } from '@/apis/main-page/menu/type';
// let menuBar:Ref<IMenuBar[]> = ref([]);
// onMounted(()=>{
//     requestMenuBars().then(res=>{
//         console.log('res:',res)
//         menuBar.value = res 
//     })
// })

interface Props {
    menuBar: IMenuBar[]
}
defineProps<Props>()
</script>

<style scoped lang="scss">
@import '@/styles/_common_variable.scss';
.menu_bar {
    background-color: $com_base_color;
    height: $main_page_menu_bar_height;
    width: 100%;
    display: flex;
    justify-content: center;
    .el_menu_box{
        justify-content: space-evenly;
        width: 100%;
        background-color: $com_base_color;
    }
    
}
</style>./menu_bar_data