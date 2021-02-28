# 学习笔记
## Block

BFC: Block formatting context

- Block Container: 里面有 BFC 的。能容纳正常流的盒，里面就有 BFC
- Block-level Box: 外面有 BFC
- Block Box = Block Container + Block-level Box: 里外都有 BFC

### Block Container

- `display: block`
- `display: inline-block`
- tabel-cell
- flex-item
- grid cell
- table-caption

### Block Level Box

- Block Level
    - `display: block`
    - `display: flex`
    - `display: table`
    - `display: grid`
    - ...
- Inline Level
    - `display: inline-block`
    - `display: inline-flex`
    - `display: inline-table`
    - `display: inline-grid`
    - ...

> `display: run-in`  `inline` or `block` determined by the previous element

### 设立 BFC 的情况

- floats
- absolutely positioned elements
- block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes:
    - flex items
    - grid cell
    - ...
- and block boxes with `overflow` other than visible

### BFC 合并

- block box && overflow: visible
    - BFC 合并与 float
    - BFC 合并与边距折叠

## 动画

两种属性：
- `transition` 定义简单的动画
- `animation` + `@keyframe` 定义复杂动画

### Animation

- `animation-name` 动画名称
- `animation-duration` 动画时长
- `animation-timing-function` 动画的时间取消
- `animation-delay` 动画开始时的延迟
- `animation-iteration-count` 动画的播放次数
- `animation-direction` 动画的方向

### Transition

- `transition-property` 要变换的属性
- `transition-duration` 变化的时长
- `transition-timing-function` 时间曲线
- `transition-delay` 延迟

## 绘制

绘制是一类与布局无关的控制属性：

- 几何图形
    - `border`
    - `box-shadow`
    - `border-radius`
- 文字
    - `font`
    - `text-decoration`
- 位图
    - `background-image`

