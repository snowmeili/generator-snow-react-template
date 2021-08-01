#### 自定义脚手架

* 1. 用 Rollp 打包发布 npm
* 2. 使用下载
* 3. cli 命令


#### 用 yeoman-generator 制作脚手架的办法如下：
* 1. 创建项目 generator-xxxxx，初始化
> npm init

> npm i yeoman-generator

* 修改 package.json 文件里面的 files 属性

  "files": [
    "app",
    "router"
  ],
  
* 查看脚手架的入口是 ./generators/app/index.js，在这个 js文件里面写上读取模板和输出模板的代码即可。

* 创建脚手架的模板是： ./generators/templates/项目模板。

* 运行 yo xxxxx (你的项目是 generator-xxxxx，运行的时候只需要 xxxxx 即可)。
