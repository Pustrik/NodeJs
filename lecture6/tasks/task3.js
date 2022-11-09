function reduce(arr, reduceCallback, initialValue) {
    let accumulator = initialValue;
    for(let i of arr)
        accumulator = reduceCallback(accumulator, i, arr.indexOf(i), arr);
    return accumulator;
}

let arr = [1, 2, 3, 4];

console.log(reduce(arr, (accum, item) => accum + item, 0));

console.log(reduce(arr, function(accum, item,index) {
    console.log(index + ": " + item);
    return accum + item;
    }, 0));