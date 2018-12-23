function generateRandomArray (n, rangeL, rangeR) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.ceil(rangeL + Math.random() * (rangeR - rangeL)));
    }
    return arr;
}
let arr = generateRandomArray(100, 50, 1500);

arr.sort((a, b) => a - b);
console.log(arr)