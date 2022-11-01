// римские цифры
const arr = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
};

// правила вычитания
const rules = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
};

// блок проверок
function checkRomeNum(rome_num) {
    // проверка на пустой массив
    if(rome_num.length == 0)
        return false;

    // проверка символов
    let is_ok = true;
    for(let val of rome_num) { // проверка символов
        for(let key of Object.keys(arr)) {
            if(val == key){
                is_ok = true;
                break;
            }
            is_ok = false;
        }
        if(!is_ok)
            return false;
    }

    // правило 3 подряд чисел равных степени 10
    for(let i = 0; i < rome_num.length - 2; i++)
        if (rome_num.length > 3)
            if (rome_num[i] == rome_num[i + 1] && rome_num[i + 1] == rome_num[i + 2] && rome_num[i + 2] == rome_num[i + 3])
                return false;

    // правило 2 подряд чисел не равных степени 10
    for(let i = 0; i < rome_num.length - 1; i++)
        if (rome_num.length > 1)
            if (rome_num[i] == rome_num[i + 1])
                if(rome_num[i] == 'V' || rome_num[i] == 'L' || rome_num[i] == 'D')
                    return false;

    return true;
}

// блок преобразование римских в арабские
function convertRomeToDec(rome_num) {
    let exist = false;
    let prev;
    let sum = 0;
    if(rome_num.length > 1 && checkRomeNum(rome_num)) {
        for (let i = 0; i < rome_num.length; i++) {
            if(i == rome_num.length - 1) {
                sum += arr[rome_num[i]];
            }
            if (arr[rome_num[i]] >= arr[rome_num[i + 1]]) {
                if(arr[rome_num[i]] > prev)
                    return false;
                sum += arr[rome_num[i]];
                prev = arr[rome_num[i]];

            }
            else if (arr[rome_num[i]] < arr[rome_num[i + 1]]) {
                exist = false;
                for (let temp of Object.keys(rules)) {
                    if (rome_num[i] + rome_num[i + 1] == temp) {
                        if(i > 1 && prev <= rules[temp])
                            return false;
                        sum += rules[temp];
                        prev = rules[temp];
                        i++;
                        exist = true;
                        break;
                    }
                }
                if(!exist)
                    return false;
            }
        }
        return sum;
    }
    else if(rome_num.length == 1 && checkRomeNum(rome_num))
        return arr[rome_num[0]];
    else
        return false;
}

// блок преобразования арабских в римские
function convertDecToRome(dec_num) {

    let result = "";
    if(dec_num < 1) {
        return false;
    }
    switch (dec_num.length) {
        case 4:
            thousand = dec_num[0]*1000;
            for(let i = 0; i < dec_num[0]; i++)
                result += "M";

            if(dec_num[1] < 4)
                result += "C".repeat(dec_num[1]);
            else if(dec_num[1] < 9)
                dec_num[1]-5<=0?result+=("C".repeat(-(dec_num[1]-5)) + "D"):result+=("D" + "C".repeat(dec_num[1]-5));
            else
                result += "CM";

            if(dec_num[2] < 4)
                result += "X"*dec_num[2];
            else if(dec_num[2] < 9)
                dec_num[2]-5<=0?result+=("X".repeat(-(dec_num[2]-5)) + "L"):result+=("L" + "X".repeat(dec_num[2]-5));
            else
                result += "XC";

            if(dec_num[3] < 4)
                result += "I".repeat(dec_num[3]);
            else if(dec_num[3] < 9)
                dec_num[3]-5<=0?result+=("I".repeat(-(dec_num[3]-5)) + "V"):result+=("V" + "I".repeat(dec_num[3]-5));
            else
                result += "IX";
            return result;
        case 3:
            if(dec_num[0] < 4)
                result += "C".repeat(dec_num[0]);
            else if(dec_num[0] < 9)
                dec_num[0]-5<=0?result+=("C".repeat(-(dec_num[0]-5)) + "D"):result+=("D" + "C".repeat(dec_num[0]-5));
            else
                result += "CM";

            if(dec_num[1] < 4)
                result += "X".repeat(dec_num[1]);
            else if(dec_num[1] < 9)
                dec_num[1]-5<=0?result+=("X".repeat(-(dec_num[1]-5)) + "L"):result+=("L" + "X".repeat(dec_num[1]-5));
            else
                result += "XC";

            if(dec_num[2] < 4)
                result += "I".repeat(dec_num[2]);
            else if(dec_num[2] < 9)
                dec_num[2]-5<=0?result+=("I".repeat(-(dec_num[2]-5)) + "V"):result+=("V" + "I".repeat(dec_num[2]-5));
            else
                result += "IX";
            return result;
        case 2:
            if(dec_num[0] < 4)
                result += "X".repeat(dec_num[0]);
            else if(dec_num[0] < 9)
                dec_num[0]-5<=0?result+=("X".repeat(-(dec_num[0]-5)) + "L"):result+=("L" + "X".repeat(dec_num[0]-5));
            else
                result += "XC";

            if(dec_num[1] < 4)
                result += "I".repeat(dec_num[1]);
            else if(dec_num[1] < 9)
                dec_num[1]-5<=0?result+=("I".repeat(-(dec_num[1]-5)) + "V"):result+=("V" + "I".repeat(dec_num[1]-5));
            else
                result += "IX";
            return result;
        case 1:
            if(dec_num[0] < 4)
                result += "I".repeat(dec_num[0]);
            else if(dec_num[0] < 9)
                dec_num[0]-5<=0?result+=("I".repeat(-(dec_num[0]-5)) + "V"):result+=("V" + "I".repeat(dec_num[0]-5));
            else
                result += "IX";
            return result;
        default:
            return false;
    }


}

while(1) {
    const readline = require('readline-sync');
    let rome_num = readline.question("Enter two numbes with \"+\" between in format M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1: \n").toUpperCase();

    if(rome_num.trim().includes("+")) {
        let first = convertRomeToDec(rome_num.trim().substring(0, rome_num.trim().indexOf("+")).trim());
        let second = convertRomeToDec(rome_num.trim().substring(rome_num.trim().indexOf("+") + 1, rome_num.trim().length).trim());
        console.log(first + " + " + second);
        console.log(convertDecToRome(String(first+second)));
    }
    else
        console.log("Wrong format.\n");
}