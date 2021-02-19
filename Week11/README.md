# 学习笔记

建立知识体系需要先找到一个比较权威并且具有完备性的线索

编程语言由语法入手

- CSS 2.1 的语法是一份不错的起点
  - 但是这份语法标准已经过时，现在已经引入了 CSS 3 的标准

## CSS 总体结构

### CSS 语法研究
规则有两种
- rule（普通规则）
  - 大部分规则在普通规则中
- @-rule （@ 规则）

分类
- @charset
- @import
- rules（可重复的规则）
  - @media
  - @page
  - rule
- CSS3 中的 @XXX

### CSS @-rule 的研究
- @charset：声明 CSS 的字符集
- @import：引入其他 stylesheet
- @media：查询媒体
- @page：分页媒体（打印）
- @counter-style：列表标识符样式
- @keyframes：动画
- @fontface：web font
- @supports：检查某个 CSS 功能是否存在。不推荐使用该规则检测 CSS 兼容性
- @namespace：对命名空间完备性的规则

### CSS 规则的结构

CSS 规则的结构
- 选择器（Selector）
- 声明：key/value 列表
  - key
  - value

### 收集标准



### 选择器语法
- 简单选择器
  - *
  - div svg|a
  - .cls
  - #id
  - [attr=value]
  - :hover
  - ::before
- 复合选择器
  - <简单选择器> <简单选择器> <简单选择器>
  - * 或者 div 必须写在最前面
- 复杂选择器
  - <复合选择器> <sp> <复合选择器>
  - <复合选择器> ">" <复合选择器>
  - <复合选择器> "~" <复合选择器>
  - <复合选择器> "|" <复合选择器>
  - <复合选择器> "||" <复合选择器>


### 选择器优先级
选择器优先级就是对一个选择器中包含的所有简单选择器进行计数

- div#a.b .c[id=x]
- #a:not(#b)
- *.a
- div.a


### 伪类
链接/行为
- ：any-link
- :link:visited
- :hover
- :active
- :focus
- :target
树结构
- :empty
- :nth-child()
- :nth-last-child()
- :first-child :last-child :only-child
逻辑型
- :not
- :where :has


### 伪元素

![first-line vs. first-letter](./static/first-line%20vs.%20first-letter.png)

::before
::after

::first-line 选中第一行
::::first-letter 选中第一个字母


为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？



```javascript
function match(selector, element) {
    return true;
}

match("div #id.class", document.getElementById("id"));
```