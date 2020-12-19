# 学习笔记

### TL;DR

- 学习节奏、时间安排较好，可以自我控制按时完成任务
- 本周内容相对较少，但内容完整，可以以知识点+用例的形式讲解前端内容

### Items

- 复杂字符串处理
  - LL 算法处理四则运算

- Grammar
```
<Expression> ::= <AdditiveExpression><EOF>

<AdditiveExpression> ::= 
    <MultiplicativeExpression>
    | <AdditiveExpression><+><MultiplicativeExpression>
    | <AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression> ::=
    <Number>
    | <MultiplicativeExpression><*><Number>
    | <MultiplicativeExpression></><Number>
```
- 递归定义语法 => 递归程序设计
- 每次判定需得到唯一结果 => 每次需要查看两个 Symbol 的值来判断当前 token 适用的语法分支


### TODO
  
  - 不断更新知识体系脑图
  - 查阅 Items 中的各项