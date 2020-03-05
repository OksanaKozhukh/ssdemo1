import {createCheeseBoard} from '../modules/task1.js';

export function testTask1 (ass) {
    describe('Проверка задания 1 "Шахматная доска"', () => {
        it('Проверка ввода высоты и ширины целым числом', () => {
            ass.deepEqual(createCheeseBoard(15.5, 12, '@'),{
                status:'failed', 
                reason: 'Введите значение высоты в виде целого числа'
            });
            ass.deepEqual(createCheeseBoard(15, 10.2, '@'),{
                status:'failed', 
                reason: 'Введите значение ширины в виде целого числа'
            });
        });

        it('Проверка высоты на минимальное и максимальное значение', () => {
            ass.deepEqual(createCheeseBoard(0, 12, '@'),{
                status:'failed', 
                reason: 'Введите значение высоты в диапазоне от 1 до 50'
            });
            ass.deepEqual(createCheeseBoard(51, 10, '@'),{
                status:'failed', 
                reason: 'Введите значение высоты в диапазоне от 1 до 50'
            });
        });

        it('Проверка ширины на минимальное и максимальное значение', () => {
            ass.deepEqual(createCheeseBoard(23, 0, '@'),{
                status:'failed', 
                reason: 'Введите значение ширины в диапазоне от 1 до 50'
            });
            ass.deepEqual(createCheeseBoard(5, 51, '@'),{
                status:'failed', 
                reason: 'Введите значение ширины в диапазоне от 1 до 50'
            });
        });

        it('Проверка ввода символа для отображения', () => {
            ass.deepEqual(createCheeseBoard(23, 15, ''),{
                status:'failed', 
                reason: 'Введите символ для отображения шахматной доски'
            });
            
        });

        it('Проверка преобразования отрицательных чисел по модулю', () => {
            ass.equal(createCheeseBoard(-1, 1, '*'), '* \n');
            ass.equal(createCheeseBoard(1, -3, '*'), '* * \n');
            
        });

        it('Проверка отображения только первого символа слова', () => {
            ass.equal(createCheeseBoard(1, 1, 'sun'), 's \n');
            ass.equal(createCheeseBoard(1, 7, 'flower'), 'f f f f \n');
            
        });

        describe('Проверка корректного ввода аргументов', () => {
            it('Проверка ввода всех аргументов функции', () => {
                ass.deepEqual(createCheeseBoard(), {
                    status:'failed', 
                    reason: 'Введите 3 аргумента: высота, ширина и символ для отображения'
                });
                ass.deepEqual(createCheeseBoard(12), {
                    status:'failed', 
                    reason: 'Введите 3 аргумента: высота, ширина и символ для отображения'
                }); 
                ass.deepEqual(createCheeseBoard(12, 5), {
                    status:'failed', 
                    reason: 'Введите 3 аргумента: высота, ширина и символ для отображения'
                });            
            });

            it('Проверка типов аргументов', () => {
                ass.deepEqual(createCheeseBoard('ww', 12, '*'), {
                    status:'failed', 
                    reason: 'Введите значение высоты в виде числа'
                });
                ass.deepEqual(createCheeseBoard(10, 'ty', '*'), {
                    status:'failed', 
                    reason: 'Введите значение ширины в виде числа'
                });  
                ass.deepEqual(createCheeseBoard(10, 25, 9), {
                    status:'failed', 
                    reason: 'Введите символ для отображения в виде строки'
                });             
            });

        })

        

    })

}