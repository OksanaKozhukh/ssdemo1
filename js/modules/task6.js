export function getNumbers (length, pow) {

    if (arguments.length != 2) {
        return {
            status:'failed', 
            reason: 'Введите 2 аргумента: длина и минимальный квадрат'
        };
    }
    
    let result = [];
    let i = 0;
    let validation = validationGetNumbers (length, pow);

    if (validation) {
        return validation;
    }

    length = length < 0? Math.abs(length): length;
    pow = pow < 0? Math.abs(pow): pow;
        
    while (i*i < pow) {
        i++;
    }
    
    for (let j = i; j < i + length; j++) {
        result.push(j);
    }

    return result.join(',');

}

function validationGetNumbers (length, pow) {
     
    if (!Number.isInteger(length) || typeof length != 'number') {
        return {
            status:'failed', 
            reason: 'Введите значение длины в виде целого числа'
        };
    }

    if (!Number.isInteger(pow) || typeof pow != 'number') {
        return {
            status:'failed', 
            reason: 'Введите значение минимального квадрата в виде целого числа'
        };
    }

    if (length === 0) {
        return {
            status:'failed', 
            reason: 'Введите значение длины ряда'
        };
    }

    if (pow === 0) {
        return {
            status:'failed', 
            reason: 'Введите значение минимального квадрата'
        };
    }
}

