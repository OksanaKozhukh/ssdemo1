export function getLuckyTicket (obj) {

    if (arguments.length != 1) {
        return {
            status:'failed', 
            reason: 'Введите объект с полями min и max'
        };
    }

    let validation = validationGetLuckyTicket (obj);

    if (typeof validation === 'object') {
        return validation;
    }
   
    let min = obj.min;
    let max = obj.max;

    min = min < 0? Math.abs(min): min;
    max = max < 0? Math.abs(max): max;
  
    let countSimple = 0;
    let countHard = 0;
    let arr = [];
    let start = min;

    while (start <= max) {
        arr.push(start++)
    };
       

    function simple (min, max) {
         
        for (let i = 0; i < arr.length; i++) {
            let arrItem = arr[i].toString().split('').map(item => +item);
            let sumHalf1 = arrItem.slice(0,3).reduce((a, b) => a + b, 0);
            let sumHalf2 = arrItem.slice(3).reduce((a, b) => a + b, 0);

            if (sumHalf1 === sumHalf2) {
                countSimple++;
            };
        }

        return countSimple;
    }
 
    function hard (min, max) {
       
        for (let i = 0; i < arr.length; i++) {
            let arrItem = arr[i].toString().split('').map(item => +item);
            let sumOdd = 0;
            let sumEven = 0;

            for (let j = 0; j < arrItem.length; j++) {
                if (j % 2 === 0) {
                    sumOdd  += arrItem[j];
                } else {
                    sumEven  += arrItem[j]
                }
            }
        
            if (sumOdd === sumEven) {
                countHard++;
            };
        }

        return countHard;
    }

    let result = {
        winner: '',
        simpleCount: simple(min,max),
        hardCount: hard (min, max)
    }

    result.winner = countSimple > countHard? 'simple': 'hard';
    
    return result;
}

function validationGetLuckyTicket (obj) {

    let min = obj.min;
    let max = obj.max;

    if (min === 0 || max === 0 || typeof min != 'number' || typeof max != 'number') {
        return {
            status:'failed', 
            reason: 'Введите объект со значениями min и max'
        };
    }

    if (min.toString().length > 6) {
        return {
            status:'failed', 
            reason: 'Введите значение min в виде шестизначного числа'
        };
    }

    if (max.toString().length > 6) {
        return {
            status:'failed', 
            reason: 'Введите значение max в виде шестизначного числа'
        };
    }
    
    if (min > max) {
        return {
            status:'failed', 
            reason: 'Введите значение min меньше max'
        };
    }

    if (min.toString().length < 6) {
        min = +`${'0'.repeat(6 - min.length)}${min}`;
    }

    if (max.toString().length < 6) {
        max = +`${'0'.repeat(6 - max.length)}${max}`;
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

