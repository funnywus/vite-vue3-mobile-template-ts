import { defineStore } from 'pinia'
import { useCounterStore } from './counter'
import { useUserStore } from './user'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

export { useCounterStore }
export { useUserStore }
