function palindrome(str) {
    let flippedStr = "";
    let regEx = /[A-BA-Za-z0-9]+/ig;
    let matched = str.match(regEx)
        .join("")
        .toLowerCase();
    for (let i = matched.length - 1; i >= 0; i--) {
        flippedStr += matched[i];
    }

    if (matched == flippedStr) {
        return true;
    } else {
        return false;
    }

}
palindrome("TEST");