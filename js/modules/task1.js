export function createCheeseBoard (height, width, char) {
    
    if (arguments.length != 3) {
        return {
            status:'failed', 
            reason: 'Введите 3 аргумента: высота, ширина и символ для отображения'
        };
    }
      
    let board = "";
    let validation = validationCreateCheeseBoard (height, width, char);
    
    if (validation ) {
        return validation;
    }

    height = height < 0? Math.abs(height): height;
    width = width < 0? Math.abs(width): width;
    char = char.length === 1? char: char[0];
        
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width/2; j++) {
            if (i % 2 === 0) {
                board += char + " ";
            } else {
                board += " " + char;
            }
        }
        board += "\n";
    }
    
    return board;
} 

function validationCreateCheeseBoard (height, width, char) {

    let min = 1;
    let max = 50;

    if (typeof height != 'number') {
        return {
            status:'failed', 
            reason: 'Введите значение высоты в виде числа'
        };
    }

    if (typeof width != 'number') {
        return {
            status:'failed', 
            reason: 'Введите значение ширины в виде числа'
        };
    }

    if (typeof char != 'string') {
        return {
            status:'failed', 
            reason: 'Введите символ для отображения в виде строки'
        };
    }

    if (char === '') {
        return {
            status:'failed', 
            reason: 'Введите символ для отображения шахматной доски'
        };
    }

    if (height === 0 || height > max) {
        return {
            status:'failed', 
            reason: 'Введите значение высоты в диапазоне от 1 до 50'
        };
    }
    
    if (!Number.isInteger(height)) {
        return {
            status:'failed', 
            reason: 'Введите значение высоты в виде целого числа'
        };
    }
 
    if (width === 0 || width > max) {
        return {
            status:'failed', 
            reason: 'Введите значение ширины в диапазоне от 1 до 50'
        };
    }

    if (!Number.isInteger(width)) {
        return {
            status:'failed', 
            reason: 'Введите значение ширины в виде целого числа'
        };
    }
}




















