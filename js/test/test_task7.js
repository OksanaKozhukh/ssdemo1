import {fibRow} from '../modules/task7.js';

export function testTask7 (ass) {
    describe('Проверка задания 7 "Ряд Фибоначчи"', () => {
        
        it('Проверка преобразования отрицательных чисел по модулю', () => {
            ass.deepEqual(fibRow({min:0, max:-100}), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({min:-300, max:500}), [377]);
            ass.deepEqual(fibRow({length:-5}), [10946, 17711, 28657, 46368, 75025]);
        });

        it('Проверка ввода объекта в качестве аргумента функции', () => {
            ass.deepEqual(fibRow(123), {
                status:'failed', 
                reason: 'Введите объект со значениями min и max или со значением length'
            });
        });

        it('Проверка корректного ввода min', () => {
            ass.deepEqual(fibRow({min:'52', max:500}), {
                status:'failed', 
                reason: 'Введите значение min в виде числа'
            });
            ass.deepEqual(fibRow({min:100.8, max:500}), {
                status:'failed', 
                reason: 'Введите значение min в виде целого числа'
            });
        });
        it('Проверка корректного ввода max', () => {
            ass.deepEqual(fibRow({min:100, max:'500'}), {
                status:'failed', 
                reason: 'Введите значение max в виде числа'
            });
            ass.deepEqual(fibRow({min:100, max:500.5}), {
                status:'failed', 
                reason: 'Введите значение max в виде целого числа'
            });
        });
        it('Проверка корректного ввода length', () => {
            ass.deepEqual(fibRow({length:'5'}), {
                status:'failed', 
                reason: 'Введите значение length в виде числа'
            });
            ass.deepEqual(fibRow({length:10.7}), {
                status:'failed', 
                reason: 'Введите значение length в виде целого числа'
            });
        });

        describe('Проверка корректного ввода аргументов', () => {
            it('Проверка ввода всех аргументов функции', () => {
                ass.deepEqual(fibRow(), {
                    status:'failed', 
                    reason: 'Введите объект с полями min и max или length'
                });
            });

            it('Проверка ввода корректных данных', () => {
                ass.deepEqual(fibRow({min:0, max:100}), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
                ass.deepEqual(fibRow({min:300, max:500}), [377]);
                ass.deepEqual(fibRow({length:5}), [10946, 17711, 28657, 46368, 75025]);
                ass.deepEqual(fibRow({length:2}), [13, 21, 34, 55, 89]);
            });

        });

        
    });

}
