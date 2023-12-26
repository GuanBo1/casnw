<template>
    <div class="ddd">
        <div class="left">ddd</div>
        <div class="right">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ddd{
    display:flex
}
</style>
