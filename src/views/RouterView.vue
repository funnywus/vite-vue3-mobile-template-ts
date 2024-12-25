<template>
  <div class="router">
    <van-nav-bar
      title="Vue3 Mobile Template"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />
    
    <div class="content">
      <van-cell-group inset title="路由功能">
        <van-cell 
          title="动态路由" 
          is-link 
          @click="router.push({ name: 'dynamic', params: { id: '123' }})"
        />
        <van-cell 
          title="查询参数" 
          is-link 
          @click="router.push({ path: '/router/query', query: { key: 'value' }})"
        />
        <van-cell 
          title="路由守卫" 
          is-link 
          @click="router.push('/router/guard')"
        />
      </van-cell-group>

      <van-cell-group inset title="路由信息">
        <van-cell title="当前路由名称" :value="route.name?.toString()" />
        <van-cell title="路由参数" :value="JSON.stringify(route.params)" />
        <van-cell title="查询参数" :value="JSON.stringify(route.query)" />
      </van-cell-group>
    </div>

    <!-- 嵌套路由出口 -->
    <router-view v-slot="{ Component }">
      <transition name="van-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<style scoped>
.content {
  padding: 16px;
}

.van-cell-group {
  margin-bottom: 16px;
}
</style>
