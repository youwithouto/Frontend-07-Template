// Use KMP and state machine to search any given string
class KMP {
    constructor(pattern) {
        this.pattern = pattern;
        let len = this.pattern.length;
        let r = 26;

        this.dfa = new Array(r);
        for (let i = 0; i < r; i++) {
            this.dfa[i] = new Array(len).fill(0);
        }

        console.log(this.dfa);

        let firstChar = pattern.charAt(0);
        let index = charToIndex(firstChar);
        this.dfa[index][0] = 1;
        for (let x = 0, j = 1; j < len; j++) {
            for (let c = 0; c < r; c++) {
                this.dfa[c][j] = this.dfa[c][x];
            }
            let currentChar = pattern.charAt(j);
            let currentIndex = charToIndex(currentChar);
            this.dfa[currentIndex][j] = j + 1;
            x = this.dfa[currentIndex][x];
        }
    }

    match(text) {
        let i = 0, j = 0;
        let n = text.length;
        let m = this.pattern.length;
        for (i = 0, j = 0; i < n && j < m; i++) {
            let currentChar = text.charAt(i);
            let currentIndex = charToIndex(currentChar);
            j = this.dfa[currentIndex][j];
        }
        if (j == m) {
            return true;
        } else {
            return false;
        }
    }
}

function charToIndex(char) {
    if (!char || typeof char !== "string") {
        return undefined;
    }

    let charCode = char.charCodeAt(0);

    if (charCode < 65 || charCode > 122) {
        return undefined;
    }

    let lowerCaseChar = char.toLowerCase();
    let lowerCaseCharCode = lowerCaseChar.charCodeAt(0);
    return lowerCaseCharCode - 97;
}

kmp = new KMP("hello");
result = kmp.match("hholhellhhello");
console.log(result);