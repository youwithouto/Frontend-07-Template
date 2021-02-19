# Solutions


## 1. 请写出下面选择器的优先级

```text
div#a.b .c[id=x] 
0 1 3 1 

#a:not(#b) 
0 2 0 0 

*.a 
0 0 1 0 

div.a 
0 0 1 1
```


## 2. 编写一个 match 函数。它接收两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。

```javascript
function match(selector, element) {
    if (!selector || 'string' !== typeof selector || !element) {
        return false;
    }
    const selectorComponentsRev = selector.split(' ').reverse();

    let node = element;
    for (let selectorComponent of selectorComponentsRev) {
        const reg = new RegExp(/(\.\w+)|(^\#\w+)|(\w+)/g)
        let results = reg.exec(selectorComponent);
        while (results) {
            if (results[1]) {
                if (!node.classList.contains(results[0].slice(1))) {
                    return false;
                }
            } else if (results[2]) {
                if (node.id !== results[2].slice(1)) {
                    return false;
                }
            } else if (results[3]) {
                if (node.tagName !== results[3].toUpperCase()) {
                    return false;
                }
            }
            results = reg.exec(selectorComponent);
        }
        node = node.parentNode;
    }
    return true;
}


match("div #id.class", document.getElementById("id"));
```


## 3. 为什么 `first-letter` 可以设置 `float` 之类的，而 `first-line` 不行呢？

- `first-line`，即“第一行”在排版后确定，此时盒相关的属性已经确定，并且不会再次应用。可以对 `first-line` 进行文本属性的设置。
- `first-letter`，即“文本第一个字符”，在排版时确定，可以同时应用盒相关属性和文本相关属性。