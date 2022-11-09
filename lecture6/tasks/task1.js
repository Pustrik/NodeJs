let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

function multiplyMatrix(matrix1, matrix2) {
    if(matrix1[0].length != matrix2.length)
        return false;
    for(let sub of matrix1)
        if(matrix1[0].length != sub.length)
            return false;
    for(let sub of matrix2)
        if(matrix1[0].length != sub.length)
            return false;
    let matrix = Array.from(Array(3), () => Array(3).fill(0));
    for(let j = 0; j < matrix1.length; j++)
        {
            for(let i = 0; i < matrix1[0].length; i++)
                for (let k = 0; k < matrix2.length; k++)
                    matrix[i][j] += matrix1[i][k] * matrix2[k][j];
        }
    return matrix;
}

console.log(multiplyMatrix(matrix1, matrix2));