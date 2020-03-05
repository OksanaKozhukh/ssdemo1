import {getNumbers} from '../modules/task6.js';

export function testTask6 (ass) {
    describe('Проверка задания 6 "Числовая последовательность"', () => {
        

        it('Проверка преобразования отрицательных чисел по модулю', () => {
            ass.equal(getNumbers(-10, 4), '2,3,4,5,6,7,8,9,10,11');
            ass.equal(getNumbers(3, -25), '5,6,7');
            ass.equal(getNumbers(-5, -625), '25,26,27,28,29');
            
        });

        it('Проверка ввода всех необходимых параметрова', () => {
            ass.deepEqual(getNumbers(0, 4), {
                status:'failed', 
                reason: 'Введите значение длины ряда'
            });
            ass.deepEqual(getNumbers(2, 0), {
                status:'failed', 
                reason: 'Введите значение минимального квадрата'
            });
        });

        it('Проверка ввода длины ряда и минимального квадрата целым числом', () => {
            ass.deepEqual(getNumbers(4.9, 4), {
                status:'failed', 
                reason: 'Введите значение длины в виде целого числа'
            });
            ass.deepEqual(getNumbers(10, 25.2), {
                status:'failed', 
                reason: 'Введите значение минимального квадрата в виде целого числа'
            });
        });

        describe('Проверка корректного ввода аргументов', () => {
            it('Проверка ввода всех аргументов функции', () => {
                ass.deepEqual(getNumbers(), {
                    status:'failed', 
                    reason: 'Введите 2 аргумента: длина и минимальный квадрат'
                });
                ass.deepEqual(getNumbers(3), {
                    status:'failed', 
                    reason: 'Введите 2 аргумента: длина и минимальный квадрат'
                });
            });

            it('Проверка ввода корректных данных', () => {
                ass.equal(getNumbers(10, 4), '2,3,4,5,6,7,8,9,10,11');
                ass.equal(getNumbers(3, 25), '5,6,7');
                ass.equal(getNumbers(5, 625), '25,26,27,28,29');
            });
        });
    });

}