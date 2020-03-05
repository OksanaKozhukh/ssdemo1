export function checkPolindrome (num) {

    if (arguments.length != 1) {
        return {
            status:'failed', 
            reason: 'Введите 1 аргумент: число'
        };
    }

    let validation = validationCheckPolindrome (num);

    if (typeof validation === 'object') {
        return validation;
    }

    let str = num.toString();
    let longestPart = "";
   
    function isPalindrom (str) {
        return str === str.split('').reverse().join('');
    }

    function longestPartOfPalindrom(str) {
        
        for (let i = 0; i <= str.length-1; i++) {
            for (let j = i+1; j <= str.length; j++) {
                let subStr = str.substring(i,j);
                if (isPalindrom(subStr)) {
                    if (subStr.length > longestPart.length) {
                        longestPart = subStr;
                    }
                }
            }
        }
        
        return longestPart;
    }

    return longestPartOfPalindrom(str);
}

function validationCheckPolindrome (num) {
    num = num < 0? Math.abs(num): num;

    if (typeof num != 'number' ) {
        return {
            status:'failed', 
            reason: 'Введите число'
        };
    }

    if (num <= 10) {
        return {
            status:'failed', 
            reason: 'Введите число больше 10'
        };
    }

    if (!Number.isInteger(num)) {
        return {
            status:'failed', 
            reason: 'Введите целое число'
        };
    }
}




