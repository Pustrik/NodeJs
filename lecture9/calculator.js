export default function calculate(line) {
    let arr = line.match(/\d+/g);
    let arr1 = line.match(/\D+/g);
    for(let i = 0; i <= arr1.length; ) {
        if(arr1[i] == "*") {
            arr[i] = +arr[i] * +arr[+i+1];
            arr.splice(+i+1, 1);
            arr1.splice(+i, 1);
        }else if(arr1[i] == "/") {
            arr[i] = arr[i] / arr[+i+1];
            arr.splice(+i+1, 1);
            arr1.splice(+i, 1);
        }else
            i++;
    }
    let t = arr1.length;
    for(let i = 0; i < t; i++) {
        if(arr1[0] == "+") {
            arr[0] = +arr[0] + +arr[1];
            arr.splice(1, 1);
            arr1.splice(0, 1);

        }else if(arr1[0] == "-") {
            arr[0] = arr[0] - arr[1];
            arr.splice(1, 1);
            arr1.splice(0, 1);

        }
    }
    return arr[0];
}
