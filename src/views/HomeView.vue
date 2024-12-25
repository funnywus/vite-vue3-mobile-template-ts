<template>
  <div class="home">
    <van-nav-bar title="Vue3 Mobile Template" />

    <div class="content">
      <!-- 简单卡片 -->
      <van-cell-group inset class="card">
        <van-cell title="Vue 3 + Vite" value="TypeScript" />
        <van-cell title="移动端模板" label="简单而强大的起点" />
      </van-cell-group>

      <!-- 功能展示 -->
      <van-cell-group inset class="card">
        <van-cell title="计数器" :value="count.toString()" />
        <van-cell>
          <template #title>
            <van-space>
              <van-button type="primary" size="small" @click="increment">增加</van-button>
              <van-button plain type="primary" size="small" @click="count = 0">重置</van-button>
            </van-space>
          </template>
        </van-cell>
      </van-cell-group>

      <!-- 功能列表 -->
      <van-cell-group inset class="card">
        <van-cell title="Vant UI" is-link to="/vant" />
        <van-cell title="Pinia 状态管理" is-link to="/pinia" />
        <van-cell title="Vue Router" is-link to="/router" />
        <van-cell title="移动端适配" is-link to="/mobile" />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

<style scoped>
.content {
  padding: 16px;
}

.card {
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
