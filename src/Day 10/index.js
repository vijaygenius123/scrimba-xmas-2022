function sortByLength(strs) {
    //  write code here.
    strs.sort((a, b) => a.length - b.length)
    return strs
}

module.exports = sortByLength
