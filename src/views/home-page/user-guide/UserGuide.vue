<template>
    <div class="user_guide_box">
        <h2>用户指南</h2>
        <el-divider class="split_line" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '../../../styles/common_variable';

.user_guide_box {
  
    .split_line {
        @include mixin_split_line()
    }

}
</style>