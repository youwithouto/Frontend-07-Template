# 学习笔记

重学 JavaScript
## Items

### 编程语言通识课

- 语言分类学
  - 按语法分类
    - **非形式语言**：语法没有严格定义
    - **形式语言**：语法有形式化定义，严谨；也有分类
      - **乔姆斯基谱系**：一种形式语言分类的谱系（以下四种文法为包含关系）
        - 0 型：无限制文法
        - 1 型：上下文相关文法
        - 2 型：上下文无关文法
        - 3 型：正则文法

- **产生式**：一种工具来严格地描述乔姆斯基谱系中的各种文法
  - 有很多种描述方法
  - 巴科斯-诺尔范式（BNF）
    - 用尖括号括起来的名称表示**语法结构**
      - 语法结构分成**基础结构**和需要用其他语法结构定义的**复合结构**
        - 基础结构成为**终结符**
        - 符合结构成为**非终结符**
    - 引号和中间的字符表示终结符
    - 可以有括号
    - `*` 表示重复多次
    - `|` 表示或
    - `+` 表示至少一次
  
- 带括号的四则运算产生式
```txt
<BrackedExpression> := "(" (<MultiplicativeExpression> | <AdditiveExpression>) ")"
<MultiplicativeExpression> ::= (<Number> | <BrackedExpression>) |
                               <MultiplicativeExpression> "*" (<Number> | <BrackedExpression>) |
                               <MultiplicativeExpression> "/" (<Number> | <BrackedExpression>)
<AdditiveExpression> ::= <MultiplicativeExpression> | 
                         <AdditiveExpression> "+" <MultiplicativeExpression> |
                         <AdditiveExpression> "-" <MultiplicativeExpression>
```


- 通过产生式理解乔姆斯基谱系
  - 0 型：无限制文法
    - 随便写，随意变化
  - 1 型：上下文相关文法
    - 只能有一个符号变化
    - 变化的符号之前叫**上文**，之后的部分叫**下文**
    - 根据上下文来判别符号表达意义的文法
  - 2 型：上下文无关文法
    - 产生式左边只能有一个符号，右边可以有多个符号
  - 3 型：正则文法
    - 如果产生式为递归定义，左边符号在右边不可以出现在末尾
    - 都可以由正则表达式表示
- JavaScript 属于上下文相关文法
  - JavaScript 总体上符合上下文无关文法的标准
  - JavaScript 存在如 `get` 的特例

- 一般语言中会定义自己的产生式


- 在现代编程语言中，类似 JavaScript 的情况并不少见
  - C++ 中，`*` 的语义可以是称号或者指针，具体使用哪种语义，取决于其之前的标识符是否被声明为类型

- 语言的分类
  - 形式语言 - 用途
    - 数据描述语言：无法进行编程
    - 编程语言
  - 形式语言 - 表达方式
    - 声明式语言
    - 命令式语言

编程语言分类
  - Declarative 
    - Lisp, ML, Haskell
    - Prolog, SQL
  - Imperative
    - C, Fortran
    - Smalltalk, Java
    - Perl, Python, PHP
  
- 编程语言的一些性质
  - 图灵完备性
    - 所有编程语言必备的特性
    - 图灵提出
    - 表达方式
      - 跟图灵机等效的是图灵完备的
        - 不直观
    - 计算机语言对图灵完备性的表现收敛到了几个固定的模式
      - 命令式 
        - 由图灵机理论得到的图灵完备性
        - 实现图灵完备性的方式：
          - goto
          - if，while
      - 声明式
        - 由 lambda 演算得到图灵完备性
        - 实现图灵完备性的方式：
          - 递归
  - **动态**与**静态**
    - 动态
      - 在用户的设备/在线服务器上
      - 产品实际运行时
      - Runtime
    - 静态
      - 在程序员的设备上
      - 产品开发时
      - Compile time
  - **类型系统**
    - 动态类型系统与静态类型系统
    - 强类型与弱类型
    - 复合类型
      - 结构体
      - 函数签名
    - 子类型
    - 泛型
      - 逆变、协变

- 一般命令式语言的设计方式
  - Atom
  - Expression
  - Statement
  - Structure
    - 组织代码的结构化结构
  - Program
    - 管理模块和安装
- 编程
  - 通过一定的语法，表达一定的语义，改变了运行时的状态


### 重学 JavaScript （一）

- Types
  - Number
  - String
  - Boolean
  - Object
  - Null：有值，但值为空

  - Undefined：未定义
  - Symbol：Object 属性名

- 类型 Number
  - IEEE 754 Double Float (Sign 1, Exponent 11, Fraction 52)
  - 表示法
    - DecimalLiteral
    - BinaryIntegerLiteral (0b)
    - OctalIntegerLiteral (0o)
    - HexIntegerLiteral (0x)
- 类型 String
  - Character
  - Code Point（码点）
    - Code Point 是 Character 在计算机中的表示，是一个数字
    - 信息在计算机中以字节为单位进行存储，字符也是
  - Encoding（编码）
    - ASCII 不存在编码问题，小于 7 位（一个字节）

```javascript
function UTF8_Encoding(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}
```

- 类型 其他
  - 使用 `void 0` 得到 `undefined`
- 对象
  - Object
    - 用状态来描述对象
    - 状态的改变既是对象的行为
    - 对象都是唯一的，与其状态无关
      - 即使是状态完全一致的两个对象，也并不相等
    - JavaScript 的属性既可以描述状态，也可以描述行为。因为 JavaScript 的函数也是属性
    - 原型
      - 原型链
        - JavaScript 获取属性的方式为沿着原型链寻找
    - API
      - {} . [] Object.defineProperty
      - Object.create Object.setPrototypeOf Object.getPrototypeOf
      - new class extends
      - new function prototyp
  - Function
    - 带 call 方法的对象
  - Symbol


```javascript
class Dog {
    bite(obj) {
        obj.hurt();
    }
}

class Man {
    hurt(damage) {

    }
}

```


找出 JavaScript 标准里面所有具有特殊行为的对象
- Function 的 arguments
- Error 可以 try/catch
- Array
- Map
- Set