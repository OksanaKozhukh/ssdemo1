export function fibRow(obj) {

    if (arguments.length != 1) {
        return {
            status:'failed', 
            reason: 'Введите объект с полями min и max или length'
        };
    }

    let validation = validationFibRow(obj);

    if (validation) {
        return validation;
    }

    let element = 0;
    let arrFib = [0,1];
    let arrResult = [];

    let min = obj.min;
    let max = obj.max;
    let length = obj.length;

    min = min < 0? Math.abs(min): min;
    max = max < 0? Math.abs(max): max;
    length = length < 0? Math.abs(length): length;

    if (Object.keys(obj).length === 2) {
        for (let i = 0; element < max; i++) {
            if (i >= 2) {
                arrFib.push(arrFib[arrFib.length-1] + arrFib[arrFib.length-2]);
                element = arrFib[arrFib.length-1];
            } else {element = arrFib[i]};
    
            if (element >= min && element <= max) {
                arrResult.push(element);
            }
            
        }
        
    } else if (Object.keys(obj).length === 1) {
        for (let i = 0; element.toString().length <= length; i++) {
            if (i >= 2) {
                arrFib.push(arrFib[arrFib.length-1] + arrFib[arrFib.length-2]);
                element = arrFib[arrFib.length-1];
            } else {element = arrFib[i]};
    
            if (element.toString().length === length) {
                arrResult.push(element);
            }
        }
    }

    return arrResult;
}

function validationFibRow(obj) {

    let min = obj.min;
    let max = obj.max;
    let length = obj.length;

    if (typeof obj != 'object') {
        return {
            status:'failed', 
            reason: 'Введите объект со значениями min и max или со значением length'
        };
    }

    if (Object.keys(obj).length === 2) {
        if (typeof min != 'number') {
            return {
                status:'failed', 
                reason: 'Введите значение min в виде числа'
            };
        }
    
        if (typeof max != 'number') {
            return {
                status:'failed', 
                reason: 'Введите значение max в виде числа'
            };
        }

        if (!Number.isInteger(min)) {
            return {
                status:'failed', 
                reason: 'Введите значение min в виде целого числа'
            };
        }
    
        if (!Number.isInteger(max)) {
            return {
                status:'failed', 
                reason: 'Введите значение max в виде целого числа'
            };
        }
    }
    
    if (Object.keys(obj).length === 1) {
        if (typeof length != 'number') {
            return {
                status:'failed', 
                reason: 'Введите значение length в виде числа'
            };
        } 
    
        if (!Number.isInteger(length)) {
            return {
                status:'failed', 
                reason: 'Введите значение length в виде целого числа'
            };
        }
    }
}


