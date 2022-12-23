function validTime(str) {
    //  write code here.
    const [hh, mm] = str.split(':')
    const h = parseInt(hh, 10)
    const m = parseInt(mm, 10)
    return h >= 0 && h <= 23 && m >= 0 && m <= 59
}

module.exports = validTime
