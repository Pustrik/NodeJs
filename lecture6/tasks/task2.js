let mas = [1, 2, 2, 3, 3, 3];

function unique(mas) {
    let uniq_mas = [];

    for(let item of mas)
        if(!uniq_mas.includes(item))
            uniq_mas.push(item);
    return uniq_mas;
}

console.log(unique(mas))