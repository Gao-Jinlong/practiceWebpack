# Webpack

## 基本概念

- 入口(entry): 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

- 输出(output): output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。

- loader: loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。

- 插件(plugins): 插件目的在于解决 loader 无法实现的其他事。

- 模式(mode): 通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化。

## CLI 命令行接口

为了更合适且方便地使用配置，可以在 `webpack.config.js` 中对 webpack 进行配置。CLI 中传入的任何参数会在配置文件中映射为对应的参数。

### 命令

Commadn | Usage | Description
-|-|-
`build` | `bulid\|bundle\|b [entries...] [options]` | 运行 webpack ，默认命令，可以省略
`configtest` | `configtest\|t [config-path]` | 测试 webpack 配置文件的有效性
`info` | `info\|i [options]` | 输出有关当前系统和依赖的信息
`init` | `init\|create\|c\|new\|n [generation-path] [options]` | 初始化一个新的 webpack 配置文件
`loader` | `loader\|l [options]` | loader 脚手架
`plugin` | `plugin\|p [options]` | plugin 脚手架
`serve` | `serve\|server\|s [options]` | 运行 webpack-dev-server
`version` | `version\|v` | 显示 webpack 版本号
`watch` | `watch\|w [entries...] [options]` | 运行 webpack，监听文件变化

### Flags

Flag / 别名 | 类型 | 描述
----------|----|---
--entry | string[] | 应用程序的入口文件，例如 ./src/main.js
--config, -c | string[] | 提供 webpack 配置文件的路径，例如 ./webpack.config.js
--config-name | string[] | 要使用的配置名
--name | string | 配置名称，在加载多个配置时使用
--merge, -m | boolean | 使用 webpack-merge 合并两个配置文件，例如 -c ./webpack.config.js -c ./webpack.test.config.js
--env | string[] | 当它是一个函数时，传递给配置的环境变量
--progress | boolean, string | 在构建过程中打印编译进度
--help | boolean | 输出所有支持的 flag 和命令
--output-path, -o | string | webpack 生成文件的输出位置，例如 ./dist
--target, -t | string[] | 设置要构建的 target
--watch, -w | boolean | 监听文件变化
--hot, -h | boolean | 启用 HMR
--devtool, -d | string | 控制是否生成 source map，以及如何生成
--mode | string | 定义 webpack 所需的 mode
--version, -v | boolean | 获取当前 cli 版本
--stats | boolean, string | 它告诉 webpack 如何处理 stats
--analyze | boolean | 它调用 webpack-bundle-analyzer 插件来获取 bundle 信息

示例：  

`--env`:

```cmd
yarn webpack --env production --env platform=web
```

此时需要将 webpack 配置文件导出为一个函数，然后在函数中接收 env 参数，env 将是一个对象，包含 production 和 platform 属性。例如：

```js
module.exports = env => {
  // Use env
  console.log(env);
  const config = {
    mode: env.production ? "production" : "development,
    entry: "./src/main.js",
  };
  return config;
}
```

此时 env 的打印结果是

```js
{
  WEBPACK_BUNDLE: true,
  WEBPACK_BUILD: true 
  production: true,
  platform: "web"
}
```

`--mode`:

```cmd
yarn webpack --env platform=web --mode production
```

```js
module.exports = (env,argv)=>{
  console.log(argv)
  return {
    mode: argv.mode,
    entry: "./src/main.js",
  };
}
```

日志打印结果：

```js
{
  env: { 
    WEBPACK_BUNDLE: true,
    WEBPACK_BUILD: true,
    platform: 'web'
  },
  mode: 'production'
}
```

`--node-env`:

可以使用 `--node-env` 来设置 `process.env.NODE_ENV` 的值，例如：

```cmd
yarn webpack --node-env production
```

如果你不明确的设置 `mode`，`mode` 选项的值会被 `--node-env` 覆盖。例如 `--node-env production` 时，会把 `process.env.NODE_ENV` 和 `mode` 均设置为 `'production'`。

`--config-name`:

如果配置文件导出的是一个数组，打包时会遍历数组分别进行打包，如果只想要重新进行某个特定配置的打包，那么可以使用 `--config-name` 来指定要使用的配置。例如：

配置项如下

```js
module.exports = [
  {
    name: "development",
    mode: "development",
    entry: "./src/main.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "development_dist"),
    },
  },
  {
    name: "production",
    mode: "production",
    entry: "./src/main.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "production_dist"),
    },
  },
];

```

使用命令

```cmd
yarn webpack --config-name production
```

则只会打包 `name` 为 `production` 的配置项。

## Node 接口

Webpack 提供了 Node.js API，可以在 Node.js 运行时（runtime）下直接使用。

### `webpack()`

导入 `webpack` 函数会将*配置对象*传给 webpack，如果同时传入回调函数会在 webpack compiler 运行时被执行：

```JavaScript
const webpack = require('webpack');

webpack({},(err, stats)=>{
  if(err || stats.hasErrors()){
    //...
  }
  // 处理完成
})
```

> Tip
> `err` 对象不包含编译错误，必须使用 `stats.hasErrors()` 单独处理，文档的[错误处理](https://webpack.docschina.org/api/node/#error-handling)将对这部分进行详细介绍。`err` 对象只包含 webpack 相关的问题，例如配置错误等。

> Tip
> 也可以为 `webpack` 函数提供一个配置数组。
>
> ```JavaScript
> const webpack = require('webpack');
> 
> webpack([{},{}],(err, stats)=>{
>  //...
> })
> ```

### Compiler 实例（Compiler Instance）

如果不向 `webpack` 传入可执行的回调函数，它会返回一个 webpack `Compiler` 实例。可以通过手动执行它或者为它的构建时添加一个监听器，就像 CLI 类似。 `Compiler` 实例提供了以下方法：

- `.run(callback)`
- `.watch(watchOptions, callback)`
