<template>
    <div class="box">
        <el-carousel indicator-position="none">
            <el-carousel-item class="item" v-for="item in 5" :key="item" 
            :style="{
                'background':`linear-gradient(to bottom, transparent 0%,white 100%),url('/src/assets/images/bg-carousel/main_page_bg${item - 1}.jpg') no-repeat`,
                'background-size': 'cover',
                'background-position': 'center center '
            }">
            <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
}
</style>