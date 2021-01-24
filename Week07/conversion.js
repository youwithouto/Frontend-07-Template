function StringToNumber(stringValue) {
    if (typeof stringValue !== 'string') {
        return undefined;
    }

    let len = stringValue.length;
    if (len <= 2) {
        return parseInt(stringValue);
    }

    let base = stringValue.substring(0, 2);
    let value = stringValue.substring(2);
    let result = 0;
    switch (base) {
        case '0b':
            result = parseInt(value, 2);
            break;
        case '0o':
            result = parseInt(value, 8);
            break;
        case '0x':
            result = parseInt(value, 16);
            break;
        default:
            result = parseInt(value, 10);
    }

    return isNaN(result) ? undefined : result;
}

function NumberToString(numberValue, base) {
    if (typeof numberValue !== 'number' || typeof base !== 'number' || ![2, 8, 10, 16].includes(base)) {
        return undefined;
    }

    switch (base) {
        case 2:
            return '0b' + numberValue.toString(2);
        case 8:
            return '0o' + numberValue.toString(8);
        case 10:
            return numberValue.toString(10);
        case 16:
            return '0x' + numberValue.toString(16);
        default:
            return undefined;
    }
}