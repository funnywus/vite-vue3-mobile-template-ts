<template>
  <div class="vant">
    <van-nav-bar
      title="Vue3 Mobile Template"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    />
    
    <div class="content">
      <!-- 基础组件 -->
      <van-cell-group inset title="基础组件">
        <van-cell title="Button 按钮">
          <template #value>
            <van-space>
              <van-button type="primary" size="small">主要按钮</van-button>
              <van-button type="success" size="small">成功按钮</van-button>
            </van-space>
          </template>
        </van-cell>
        <van-cell title="Cell 单元格" value="内容" label="描述信息" />
      </van-cell-group>

      <!-- 表单组件 -->
      <van-cell-group inset title="表单组件">
        <van-field v-model="text" label="输入框" placeholder="请输入内容" />
        <van-cell title="Switch 开关">
          <template #value>
            <van-switch v-model="checked" />
          </template>
        </van-cell>
      </van-cell-group>

      <!-- 反馈组件 -->
      <van-cell-group inset title="反馈组件">
        <van-cell title="Toast 轻提示" is-link @click="handleShowToast" />
        <van-cell title="Dialog 弹出框" is-link @click="handleShowDialog" />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast, showDialog } from 'vant'

const router = useRouter()
const text = ref('')
const checked = ref(false)

const handleShowToast = () => {
  showToast('提示内容')
}

const handleShowDialog = () => {
  showDialog({
    title: '标题',
    message: '代码是写出来给人看的，附带能在机器上运行。',
  })
}
</script>

<style scoped>
.content {
  padding: 16px;
}

.van-cell-group {
  margin-bottom: 16px;
}
</style>
