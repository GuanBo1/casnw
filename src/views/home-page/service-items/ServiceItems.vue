<template>
    <div class="service_items_box">
        <h2>服务项目</h2>
        <el-divider class="split_line" />
        <div class="items">
            <el-popover v-for="serviceItem in serviceItems" :key="serviceItem.id" placement="top" 
                trigger="hover">
                <template #reference>
                    <div class="item">
                        <div class="item_group">
                            <div class="item_circle">
                                <Search style="width: 50%; height: 50%;" />
                            </div>
                            <span class="title">
                                {{ serviceItem.title }}
                            </span>
                        </div>
                    </div>
                </template>
                <div class="aaa">
                    s
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IServiceItem } from '@/apis/home-page/serviceI-tems/type';
import { Ref, onMounted, ref } from 'vue';
import { requestServiceItems } from '@/apis/home-page/serviceI-tems/api'

const serviceItems: Ref<Array<IServiceItem>> = ref([])
onMounted(() => {
    requestServiceItems().then(res => {
        serviceItems.value = res;
    })
})


</script>

<style scoped lang="scss">
@import '../../../styles/common_variable';

.service_items_box {
    .items {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .item {
            flex: 0 0 20%; /* 设置每行显示三个项，减去一些间隔 */
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            .item_group{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .item_circle{
                $border_base_color: $com_base_color;
                $item_radius: 70px;
                width: $item_radius;
                height: $item_radius;
                border: 4px solid;
                border-color: lighten($border_base_color, 20%);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &:hover {
                    border-color: $border_base_color
                }
            }
            }
            
            
        }
    }

    .split_line {
        @include mixin_split_line()
    }

}
</style>