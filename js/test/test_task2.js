import {rectangleInRectangle} from '../modules/task2.js';

export function testTask2 (ass) {
    describe('Проверка задания 2 "Анализ конвертов"', () => {
        it('Проверка ввода корректных данных', () => {
            ass.deepEqual(rectangleInRectangle({w: 15, h: 20}, {w: 5, h: 12}), 1);
            ass.deepEqual(rectangleInRectangle({w: 7, h: 2}, {w: 15, h: 12}), 2);
            ass.deepEqual(rectangleInRectangle({w: 5.4, h:7.5}, {w:5, h:8}), 0);
        });

        it('Проверка преобразования отрицательных чисел по модулю', () => {
            ass.deepEqual(rectangleInRectangle({w: -15, h: -20}, {w: -5, h: -12}), 1);
            ass.deepEqual(rectangleInRectangle({w: -7, h: -2}, {w: -15, h: -12}), 2);
            ass.deepEqual(rectangleInRectangle({w: -5.4, h: -7.5}, {w: -5, h: -8}), 0);
            
        });

        it('Проверка корректного ввода значений сторон первого конверта', () => {
            ass.deepEqual(rectangleInRectangle({w: 0, h: 20}, {w: 5, h: 12}), {
                status:'failed', 
                reason: 'Введите значение ширины первого конверта'
            });
            ass.deepEqual(rectangleInRectangle({w: 'r', h: 20}, {w: 5, h: 12}), {
                status:'failed', 
                reason: 'Введите значение ширины первого конверта'
            });
            ass.deepEqual(rectangleInRectangle({w: 10, h: 0}, {w: 5, h: 12}), {
                status:'failed', 
                reason: 'Введите значение высоты первого конверта'
            });
            ass.deepEqual(rectangleInRectangle({w: 5, h: 'r'}, {w: 5, h: 12}), {
                status:'failed', 
                reason: 'Введите значение высоты первого конверта'
            });
        });

        it('Проверка корректного ввода значений сторон второго конверта', () => {
            ass.deepEqual(rectangleInRectangle({w: 5, h: 12}, {w: 0, h: 20}), {
                status:'failed', 
                reason: 'Введите значение ширины второго конверта'
            });
            ass.deepEqual(rectangleInRectangle({w: 5, h: 12}, {w: '', h: 20}), {
                status:'failed', 
                reason: 'Введите значение ширины второго конверта'
            });
            ass.deepEqual(rectangleInRectangle({w: 5, h: 12}, {w: 10, h: 0}), {
                status:'failed', 
                reason: 'Введите значение высоты второго конверта'
            });
            ass.deepEqual(rectangleInRectangle({w: 5, h: 12}, {w: 5, h: ''}), {
                status:'failed', 
                reason: 'Введите значение высоты второго конверта'
            });
        });

        it('Проверка ввода всех аргументов функции', () => {
            ass.deepEqual(rectangleInRectangle(), {
                status:'failed', 
                reason: 'Введите 2 аргумента: два конверта со сторонами (a, b) (c, d)'
            });
            ass.deepEqual(rectangleInRectangle({w: 5, h: 12}), {
                status:'failed', 
                reason: 'Введите 2 аргумента: два конверта со сторонами (a, b) (c, d)'
            });
                        
        });
        
    });

}