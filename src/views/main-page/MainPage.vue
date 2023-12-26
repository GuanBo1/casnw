<template>
    <div class="main_page">
        <BgCarousel class="bg_carousel"></BgCarousel>
        <Header></Header>
        <MenuBar :menuBar="menuBar"></MenuBar>
        <div class="search">
            <el-input size="large" v-model="input" class="w-50 m-2 bb" placeholder="请输入仪器名称或检测项目"
                :input-style="{ 'border-radius': '20px' }" :suffix-icon="'Search'" />
        </div>
        <div class="router">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { requestMenuBars } from '@/apis/main-page/menu/api';
import { IMenuBar } from '@/apis/main-page/menu/type';


const input = ref('')
let menuBar: Ref<IMenuBar[]> = ref([]);

onMounted(() => {
    requestMenuBars().then(res => {
        menuBar.value = res
    })
})

</script>

<style scoped lang="scss">
@import '@/styles/_common_variable.scss';

.main_page {
    position: relative;

    .bg_carousel {
        position: absolute;
        top: 0px;
        left: 0px;
        height: $main_page_bg_height;
        z-index: -1;
        width: 100%;
    }

    .search {
        // position: absolute;
        width: $main_page_search_width;
        // margin: 0 auto;
        margin: $main_page_search_margin_top auto 0px;

        ::v-deep(.el-input--large .el-input__wrapper) {
            border-radius: 20px;
        }
    }

    .router {
        margin-top: $main_page_router_margin_top;
    }

}
</style>