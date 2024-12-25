# Vue 3 + Vite 移动端模板 (TypeScript版)

一个现代化的移动端优先的 Vue 3 + Vite 模板，使用 TypeScript，集成了最佳实践和常用工具。

## 特性

- ⚡️ [Vue 3](https://cn.vuejs.org/) + [Vite](https://cn.vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/zh/) - 快速的开发体验
- 📱 [Vant](https://vant-ui.github.io/vant/#/zh-CN) - 轻量、可靠的移动端组件库
- 🏪 [Pinia](https://pinia.vuejs.org/zh/) - 符合直觉的 Vue.js 状态管理库
- 🛣️ [Vue Router](https://router.vuejs.org/zh/) - Vue.js 的官方路由
- 🔄 [Axios](https://axios-http.com/) - 基于 Promise 的 HTTP 客户端
- 📦 [PostCSS](https://postcss.org/) + [viewport 适配](https://github.com/evrone/postcss-px-to-viewport) - 移动端适配方案
- 🎨 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) - 代码规范和格式化
- 🔄 [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) - Git Hook 工具

## 快速开始

```bash
# 克隆项目
git clone https://github.com/yourusername/vite-vue3-mobile-template-ts.git

# 进入项目目录
cd vite-vue3-mobile-template-ts

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 可用命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建
- `npm run lint` - 代码检查
- `npm run format` - 代码格式化

## 项目结构

```
├── src/
│   ├── assets/         # 静态资源
│   ├── components/     # 公共组件
│   ├── composables/    # 组合式函数
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia 状态管理
│   ├── utils/          # 工具函数
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   └── main.ts         # 应用入口
├── public/             # 公共静态资源
├── index.html          # HTML 入口
├── vite.config.ts      # Vite 配置
├── postcss.config.js   # PostCSS 配置
├── .eslintrc.cjs      # ESLint 配置
├── .prettierrc        # Prettier 配置
└── package.json       # 项目配置文件
```

## 开发指南

### 代码风格

- 使用 TypeScript 确保类型安全
- 遵循 Vue 3 组合式 API 风格
- 使用 Vue 单文件组件
- 遵循 ESLint 和 Prettier 规则

### 移动端适配

项目使用 `postcss-px-to-viewport` 进行移动端适配，默认以 375px 设计稿为基准进行单位转换。

### 状态管理

使用 Pinia 进行状态管理，示例代码可在 `src/stores/` 目录中找到。

### 网络请求

使用 Axios 进行网络请求，已配置请求/响应拦截器，详见 `src/utils/axios.ts`。

## 为什么选择 TypeScript 版本？

- 更好的类型安全性
- 更好的 IDE 支持和开发体验
- 更容易维护和重构
- 适合中大型项目和团队协作

如果你不需要类型检查，可以考虑使用我们的 [JavaScript 版本](https://github.com/yourusername/vite-vue3-mobile-template-js)。

## 许可

[MIT](LICENSE)
