module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  //这个变蓝了 这个代码是啥意思，就是不用tailwind一些默认的变量
  corePlugins: {
    preflight: false
  }
}
