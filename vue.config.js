const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
    css: {
      loaderOptions: {
        stylus: {
          // 在这里设置 stylus 编译选项
        },
      },
    },
})
