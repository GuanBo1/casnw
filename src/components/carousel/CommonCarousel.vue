<template>
    <div class="com_carousel_box">
        <el-carousel trigger="click" class="carousel">
            <el-carousel-item v-for="item in 4" :key="item">
                d
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.com_carousel_box{
    height: 100%;
    width: 100%;
    overflow: hidden;
    .carousel{
        height: 100%;
    }
}
</style>