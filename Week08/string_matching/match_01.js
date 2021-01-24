function match(s, c) {
    for (var i of s) {
        if (s[i] === c) {
            return i;
        }
    }
    return undefined;
}