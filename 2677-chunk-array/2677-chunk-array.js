/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const len = arr.length
    
    if (!len) return []
    if (size >= len) return [arr]
    
    let c = []
    for (let i = 0; i < arr.length; i+= size) {
        c.push(arr.slice(i, i + size))
    }
    
    return c
    
};
