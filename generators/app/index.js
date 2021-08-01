// ～/generators/app/index.js

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
   // 在此方法中可以调用父类的 prompt() 方法与用户进行命令行询问
   prompting(){
    return this.prompt([
      {
        type: 'input', // 交互类型
        name: 'name', 
        message: 'Your project name', // 询问信息
        default: this.appname // 项目目录名称，这里是 generator-simple
      }
    ])
    .then(answers => {
      console.log(answers) // 打印输入内容
      this.answers = answers // 存入结果，可以在后面使用
    })
  }
  
  // yo 会自动调用该方法
  writing () {
    // 我们使用 Generator 提供的 fs 模块尝试往目录中写入文件
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    // 模版文件路径，默认指向 templates
    
    const tempPath = this.templatePath('snow-react-ts-template');
    console.log(tempPath,9999)
    // 输出目标路径
    const output = this.destinationPath('snow-react-ts-template');
    console.log(output,7777)
    // 模板数据上下文
    const context = { title: 'Hello ITEM ~', success: true}

    this.fs.copyTpl(tempPath, output, context)
  }
};
