import {checkPolindrome} from '../modules/task4.js';

export function testTask4 (ass) {
    describe('Проверка задания 4 "Палиндром"', () => {
        
        it('Проверка преобразования отрицательных чисел по модулю', () => {
            ass.equal(checkPolindrome(-12345665), 5665);
            ass.equal(checkPolindrome(-1122233333), 33333);
            ass.equal(checkPolindrome(-98789123256), 98789);
            
        });

        it('Проверка ввода целого числа', () => {
            ass.deepEqual(checkPolindrome(12345665.45),{
                status:'failed', 
                reason: 'Введите целое число'
            });
        });

        it('Проверка числа на минимальное значение', () => {
            ass.deepEqual(checkPolindrome(10), {
                status:'failed', 
                reason: 'Введите число больше 10'
            });
        });

        describe ('Проверка корректного ввода аргументов', () => {
            it('Проверка ввода всех аргументов функции', () => {
                ass.deepEqual(checkPolindrome(), {
                    status:'failed', 
                    reason: 'Введите 1 аргумент: число'
                });
            });
            
            it('Проверка ввода корректных данных', () => {
                ass.equal(checkPolindrome(12345665), 5665);
                ass.equal(checkPolindrome(1122233333), 33333);
                ass.equal(checkPolindrome(98789123256), 98789);
            });
        });

    });

}