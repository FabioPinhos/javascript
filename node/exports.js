this.a = 1
exports.b = 2
exports.i = 4
module.exports.c = 3

exports = null
console.log(module.exports)

exports = 7