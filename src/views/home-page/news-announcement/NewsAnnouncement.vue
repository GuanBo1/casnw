<template>
    <div class="news_box">
        <el-row :gutter="48" class="item_2_col" style="margin:0 -8px">
            <el-card key="0" class="box_card">
                <BgCarousel class="item"></BgCarousel>
            </el-card>
            <el-card key="1" class="box_card">
                <template #header>
                    <div class="card_header">
                        <div class="tabs">
                            <div class="left">
                                <span :class="{news_title_item:true, active: selectType == 0 }" @click="selectType = 0">新闻动态</span>
                                <el-divider direction="vertical" />
                                <span :class="{news_title_item:true, active: selectType == 1 }" @click="selectType = 1">通知公告</span>
                            </div>
                            <div class="right">
                                
                                <el-link class="news_title_item">查看更多</el-link>
                                <!-- <span > </span> -->
                            </div>
                        </div>
                    </div>
                </template>
                <ul class="news_list_box">
                    <li v-for=" snew in showDatas" :key="snew.id" class="text item">
                        <div class="news">
                            <el-text class="w-150px mb-2" truncated>
                                {{ snew.title }}
                            </el-text>
                            <!-- <span> {{ snew.title }} </span> -->
                            <span> {{ snew.time }}</span>
                        </div>
                        <el-divider class="split_line" border-style="dashed" />
                    </li>
                </ul>
            </el-card>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { requestAnnouncement, requestNews } from '@/apis/home-page/news-announcement';
import { INews,IAndAnnouncements } from '@/apis/home-page/news-announcement/type';
import BgCarousel from '@/components/carousel/BgCarousel.vue'
import { Ref, onMounted, ref, watch } from 'vue';

const selectType:Ref<0|1> = ref(0);
let newsArray:Array<INews> = [];
let announcementArray:Array<IAndAnnouncements> = [];
const showDatas:Ref<INews[]|IAndAnnouncements[]> = ref([])
watch(selectType,(x)=>{
    if(x == 0){
        showDatas.value = newsArray
    }else{
        showDatas.value = announcementArray
    }
})
onMounted(() => {
    requestNews().then(res=>{
        newsArray = res;
        showDatas.value = res;
    })
    requestAnnouncement().then(res=>{
        announcementArray = res;
    })
})


</script>

<style scoped lang="scss">
@import '@/styles/_common_variable.scss';

.news_box {
    width: 100%;
    height: fit-content;
}

.item_2_col {
    // padding: 0 48px;
    // height: 400px;
    margin: 0;
    .box_card {
        flex: 1;
        margin: 0 8px;
        border-radius: 20px;

        &:first-child {
            ::v-deep(.el-card__body) {
                padding: 0;
            }
        }

        &:last-child {
            ::v-deep(.el-card__header){
                // background-color: lighten($com_base_color,10%);
                background-color: $com_base_color;
            }
            .tabs {
                display: flex;
                justify-content: space-between;
                .news_title_item{
                    color: #fff;
                    &:hover{
                        cursor: pointer;
                    }
                }
                .left{
                    .active{
                        font-weight: bold;
                    }
                }
            }
            .news_list_box{
                margin: 0 24px;
                .news{
                    display: flex;
                    justify-content: space-between;
                }
                .split_line{
                    margin: 12px 0;
                }
            }
        }
  
    }

}</style>