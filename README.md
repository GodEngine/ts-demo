demo service.  
Powered by TypeScript.

## Dependences

- sequelize
- koa2
- typescript
- routing-controllers
- sequelize-typescript

## Install

```bash
npm install -g typescript
npm install -g ts-node
npm install
```

## Start

```bash
npm run watch-ts
npm run watch-node
```

第一个启动tsc服务的监听，第二个启动node进程。 

## Test

针对代码在开发过程中有`ESLint`的校验，同样可以在`npm scripts`中找到：
```bash
npm run lint
```

针对接口都有对应的测试用例，可以用来检测代码修改是否影响到逻辑：
```bash
npm test
```

## Deploy

测试环境地址：``  

```bash
npm run deploy:dev

npm run rollback:dev # 回滚
```

测试环境对应的`URL`：``

线上环境地址：``、``

```bash
npm run deploy

npm run rollback # 回滚
```

线上环境对应的`URL`：``

## API


## note
vscode默认不检测ts后缀的文件，需要在setting中`eslint.validate`新增如下值，并开启`autoFix`：

> `{"language": "typescript", "autoFix": true }`

## 开发环境
- [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser): eslint官方推荐elint解析器，利用[typescript-estree](https://github.com/JamesHenry/typescript-estree)来将ts源代码进行[AST parse](https://zhuanlan.zhihu.com/p/32189701)，使得eslint可以对ts进行代码校验.

- [eslint-plugin-typescript](https://github.com/bradzacher/eslint-plugin-typescript): 再生成AST抽象语法树时，eslint一些核心的规则，如缩进，是无法识别非JavaScript标准语法的，比如pescript的一些特殊数据结构像interface等，所以需要一些如该插件的支持。
