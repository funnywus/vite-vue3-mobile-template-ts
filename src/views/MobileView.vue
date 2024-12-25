<template>
  <div class="mobile">
    <van-nav-bar
      title="Vue3 Mobile Template"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />
    
    <div class="content">
      <!-- 屏幕信息 -->
      <van-cell-group inset title="屏幕信息">
        <van-cell title="屏幕宽度" :value="windowWidth + 'px'" />
        <van-cell title="屏幕高度" :value="windowHeight + 'px'" />
        <van-cell title="设备像素比" :value="devicePixelRatio.toString()" />
      </van-cell-group>

      <!-- 触摸操作 -->
      <van-cell-group inset title="触摸操作">
        <div class="touch-area" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
          <p>{{ touchInfo }}</p>
        </div>
      </van-cell-group>

      <!-- 常见手势 -->
      <van-cell-group inset title="常见手势">
        <van-swipe>
          <van-swipe-item v-for="(color, index) in colors" :key="index">
            <div class="swipe-item" :style="{ background: color }">
              {{ index + 1 }}
            </div>
          </van-swipe-item>
        </van-swipe>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const devicePixelRatio = window.devicePixelRatio
const touchInfo = ref('触摸此区域')
const colors = ['#39a9ed', '#f44336', '#4caf50']

// 更新窗口尺寸
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

// 触摸事件处理
const onTouchStart = (e: TouchEvent) => {
  const touch = e.touches[0]
  touchInfo.value = `开始触摸: (${touch.clientX}, ${touch.clientY})`
}

const onTouchMove = (e: TouchEvent) => {
  const touch = e.touches[0]
  touchInfo.value = `移动到: (${touch.clientX}, ${touch.clientY})`
}

const onTouchEnd = () => {
  touchInfo.value = '触摸结束'
}

// 生命周期钩子
onMounted(() => {
  window.addEventListener('resize', updateWindowSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
})
</script>

<style scoped>
.content {
  padding: 16px;
}

.van-cell-group {
  margin-bottom: 16px;
}

.touch-area {
  height: 150px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
  user-select: none;
}

.swipe-item {
  height: 150px;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
