import {sortTriangle} from '../modules/task3.js';

export function testTask3 (ass) {
    describe('Проверка задания 3 "Сортировка треугольников"', () => {
        

        it('Проверка на уникальность имен вершин треугольника', () => {
            ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, b: 20, c:22.36}, {vertices: 'ABC', a: 2, b: 5, c:4}, {vertices: 'FRW', f: 11, r: 28, w:26.8}]), {
                status:'failed', 
                reason: 'Введите массив объектов треугольник с уникальными именами вершин'
            });
        });

        it('Проверка на соответствие имени треугольника именам его вершин', () => {
            ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, c: 20, e:22.36}, {vertices: 'FRW', f: 11, r: 28, w:26.8}]), {
                status:'failed', 
                reason: 'Проверьте соответствие имени треугольника именам его вершин'
            });
        });

        it('Проверка ввода массива в качестве аргумента функции', () => {
            ass.deepEqual(sortTriangle(125), {
                status:'failed', 
                reason: 'Введите массив объектов треугольник'
            });                                   
        });

        it('Проверка типов значений для сторон треугольника', () => {
            ass.deepEqual(sortTriangle([{vertices: 'QWP', q: '10', w: 20, p:22.36}, {vertices: 'FRW', f: 11, r: '28', w:26.8}]), {
                status:'failed', 
                reason: 'Введите значения сторон треугольника в виде чисел'
            });                                   
        });

        it('Проверка типов значений для названия вершин треугольника', () => {
            ass.deepEqual(sortTriangle([{vertices: 125, q: 10, w: 20, p:22.36}, {vertices: 89, f: 11, r: 28, w:26.8}]), {
                status:'failed', 
                reason: 'Введите названия вершин треугольника в виде строки'
            });                                   
        });

        describe ('Проверка корректного ввода аргументов', () => {
            
            it('Проверка ввода всех аргументов функции', () => {
                ass.deepEqual(sortTriangle(), {
                    status:'failed', 
                    reason: 'Введите массив объектов треугольник'
                });
            });

            it('Проверка ввода корректных данных', () => {
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, b: 20, c:22.36}, {vertices: 'DEF', d: 2, e: 5, f:4}, {vertices: 'FRW', f: 11, r: 28, w:26.8}]), ['FRW', 'ABC', 'DEF']);
                ass.deepEqual(sortTriangle([{vertices: 'QWP', q: 10, w: 20, p:22.36}, {vertices: 'TSX', t: 11, s: 28, x:26.8}]), ['TSX', 'QWP']);
            });
        });
        
    });

}