## 代码分割

常用的代码分离方法有三种：

- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 Entry dependencies 或者 SplitChunksPlugin 去重和分离 chunk。
- 动态导入：通过模块的内联函数调用来分离代码。

### 入口起点

存在问题：

1. 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
2. 不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。

### 防止重复：

  1. 入口依赖: 配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块
  2. splitChunksPlugin: optimization.splitChunks.chunks = 'all'

### 动态导入

1. import() [推荐],
2. webpack 的 require.ensure

### 预获取/预加载模块(prefetch/preload module)

```js
const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash');
```

## 缓存

1. 通过加上 contenthash 来区分每次构建的内容，但是还以优化

   - runtimeChunk :'single' 将 webpack 引导模版单独打包，
   - optimization.splitChunks 添加 cacheGroups 将第三方库提取到单独的 vandor chunk 文件中

## 创建 library

基本的配置和普通打包应用程序一样，不同的是需要配置 output.library

webpack 的 esm 不成熟，可选 rollup 打包 esm

## 构建优化

- 通用

  1. 将 loader 应用于最小数量的必要模块，通过使用 model.rules.include，仅将 loader 应用在实际需要将其转换的模块

  2. 小即快
     使用数量更少/体积更小的 library。
     在多页面应用程序中使用 SplitChunksPlugin。
     在多页面应用程序中使用 SplitChunksPlugin ，并开启 async 模式。
     移除未引用代码。
     只编译你当前正在开发的那些代码。
  3. 持久化缓存


