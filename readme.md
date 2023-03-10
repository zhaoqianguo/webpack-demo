## 代码分割

常用的代码分离方法有三种：

- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 Entry dependencies 或者 SplitChunksPlugin 去重和分离 chunk。
- 动态导入：通过模块的内联函数调用来分离代码。

### 入口起点

存在问题：

1. 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
2. 不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。

解决方法：

- 防止重复：入口依赖，
  配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块
