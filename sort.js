function generateRandomArray (n, rangeL, rangeR) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.ceil(rangeL + Math.random() * (rangeR - rangeL)));
    }
    return arr;
}
let arr = generateRandomArray(100, 50, 1500);

// arr.sort((a, b) => a - b);
// console.log(arr)
// 选择排序
function selectionSort(arr, n){
    for(let i = 0 ; i < n ; i ++){
        // 寻找[i, n)区间里的最小值
        let minIndex = i;
        for( let j = i + 1 ; j < n ; j ++ )
        if( arr[j] < arr[minIndex] ) minIndex = j;
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

selectionSort(arr, arr.length);
console.log(arr)
