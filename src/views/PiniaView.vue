<template>
  <div class="pinia">
    <van-nav-bar
      title="Vue3 Mobile Template"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />
    
    <div class="content">
      <van-cell-group inset>
        <van-cell title="计数器" :value="counter.count.toString()" />
        <van-cell>
          <template #title>
            <van-space>
              <van-button type="primary" size="small" @click="counter.increment">增加</van-button>
              <van-button type="success" size="small" @click="counter.double">加倍</van-button>
              <van-button plain type="primary" size="small" @click="counter.$reset">重置</van-button>
            </van-space>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group inset>
        <van-cell title="用户信息">
          <template #value>
            <van-tag type="primary" v-if="user.isLoggedIn">已登录</van-tag>
            <van-tag type="danger" v-else>未登录</van-tag>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <van-space>
              <van-button 
                :type="user.isLoggedIn ? 'danger' : 'primary'" 
                size="small" 
                @click="user.toggleLogin"
              >
                {{ user.isLoggedIn ? '退出登录' : '登录' }}
              </van-button>
            </van-space>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore, useUserStore } from '@/stores'

const router = useRouter()
const counter = useCounterStore()
const user = useUserStore()
</script>

<style scoped>
.content {
  padding: 16px;
}

.van-cell-group {
  margin-bottom: 16px;
}
</style>
