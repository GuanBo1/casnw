<template>
    <div class="home_page" >
        <NewsAnnouncement class="item"></NewsAnnouncement>
        <ServiceItems class="item"></ServiceItems>
        <ScientificResearch class="item"></ScientificResearch>
        <UserGuide class="item"></UserGuide>
    </div>
</template>

<script setup lang="ts">
import NewsAnnouncement from '@/views/home-page/news-announcement/NewsAnnouncement.vue'
import ServiceItems from '@/views/home-page/service-items/ServiceItems.vue'
import ScientificResearch from '@/views/home-page/scientific-research/ScientificResearch.vue'
import UserGuide from '@/views/home-page/user-guide/UserGuide.vue'

</script>

<style scoped lang="scss">
.home_page{
    width:100%;
    padding: 0 60px;
    .item{
        margin-bottom: 24px;
        width: 100%;
    }
}
</style>