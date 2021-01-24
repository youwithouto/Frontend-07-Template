/**
 * There are two states defined in this function: 
 * - foundA = false
 * - foundA = true
 * Only when foundA is truthy, can we start searching for "b", 
 * i.e., the function needs to search for "a" first, and it can start searching for "b" once "a" is found.
 * If the character just after the found "a" is not "b", foundA should be reset to false.
 * 
 * @param string string 
 */
function match(string) {
    let foundA = false;
    for (let c of string) {
        if (c === "a") {
            foundA = true;
        } else if (foundA && c === "B") {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}