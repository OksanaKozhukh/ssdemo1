import {getLuckyTicket} from '../modules/task5.js';

export function testTask5 (ass) {
    describe('Проверка задания 5 "Счастливые билеты"', () => {
        
        it('Проверка ввода минимального и максимального значения', () => {
            ass.deepEqual(getLuckyTicket({min: 0, max: 0}), {
                status:'failed', 
                reason: 'Введите объект со значениями min и max'});
            
            ass.deepEqual(getLuckyTicket({min: '', max: ''}), {
                status:'failed', 
                reason: 'Введите объект со значениями min и max'});
        });

        it('Проверка ввода минимального и максимального значения 6ти значным числом', () => {
            ass.deepEqual(getLuckyTicket({min:50596089, max: 555000}), {
                status:'failed', 
                reason: 'Введите значение min в виде шестизначного числа'
            });
            ass.deepEqual(getLuckyTicket({min:505960, max: 11555000}), {
                status:'failed', 
                reason: 'Введите значение max в виде шестизначного числа'
            });
            
        });

        it('Проверка преобразования минимального и максимального значения в 6ти значные числа', () => {
            ass.deepEqual(getLuckyTicket({min:111, max: 555}), {winner: "hard", simpleCount: 0, hardCount: 30});
            ass.deepEqual(getLuckyTicket({min:11, max: 2222}), {winner: "hard", simpleCount: 62, hardCount: 137});
            
        });

        it('Проверка ввода минимального значения меньше максимального', () => {
            ass.deepEqual(getLuckyTicket({min:505960, max: 111111}), {
                status:'failed', 
                reason: 'Введите значение min меньше max'
            });
        });

        

        describe('Проверка корректного ввода аргументов', () => {
            it('Проверка ввода всех аргументов функции', () => {
                ass.deepEqual(getLuckyTicket(), {
                    status:'failed', 
                    reason: 'Введите объект с полями min и max'
                });
            });

            it('Проверка ввода корректных данных', () => {
                ass.deepEqual(getLuckyTicket({min:505960, max: 555000}), {winner: "simple", simpleCount: 3202, hardCount: 2863});
                ass.deepEqual(getLuckyTicket({min:303303, max: 441125}), {winner: "hard", simpleCount: 8113, hardCount: 8129});
                ass.deepEqual(getLuckyTicket({min:125096, max: 136598}), {winner: "hard", simpleCount: 545, hardCount: 739});
            });

        });

        

    });

}