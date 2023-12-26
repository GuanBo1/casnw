<template>
    <div class="scientific_research">
        <h2>支撑科研</h2> 
        <el-divider class="split_line" />
        <div class="content">
            <div class="left">
                <CommonCarousel></CommonCarousel>
            </div>
            <div class="right">
                <CommonCarousel></CommonCarousel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CommonCarousel from '@/components/carousel/CommonCarousel.vue'

</script>

<style scoped lang="scss">
@import '../../../styles/common_variable';
.scientific_research{
    .split_line{
        @include mixin_split_line()
    }
    .content{
        display:flex;
        justify-content:space-between;
        .left,.right{
            width:calc(50% - 8px);
            height:300px;
            border:1px solid red
        }
    }
}
</style>