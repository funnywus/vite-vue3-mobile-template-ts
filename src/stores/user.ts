import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  
  actions: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
})
