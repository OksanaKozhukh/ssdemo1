export function sortTriangle (arr) {

    if (arguments.length != 1) {
        return {
            status:'failed', 
            reason: 'Введите массив объектов треугольник'
        };
    }

    let newArr = [];
    let validation = validationSortTriangle (arr);

    if (typeof validation === 'object') {
        return validation;
    }
   
    newArr = arr.map(item => Object.values(item))
                .map(item => ({
                                name: `${item[0]}`,
                                side1: `${item[1]}`,
                                side2: `${item[2]}`,
                                side3: `${item[3]}`,
                                square: `${Math.round(Math.sqrt((item[1] + item[2] + item[3]) / 2 * ((item[1] + item[2] + item[3]) / 2 - item[1]) * 
                                        ((item[1] + item[2] + item[3]) / 2 - item[2]) * ((item[1] + item[2] + item[3]) / 2- item[3])))}`
                            }))
                .sort((a, b) => b.square - a.square)
                .map(item => item.name);
       
    return newArr;
}

function validationSortTriangle (arr) {

    if (!Array.isArray(arr)) {
        return {
            status:'failed', 
            reason: 'Введите массив объектов треугольник'
        };
    }

    let arrValid = arr.map(item => Object.values(item));
    for (let item of arrValid) {
        if (typeof item[0] != 'string') {
            return {
                status:'failed', 
                reason: 'Введите названия вершин треугольника в виде строки'
            };
        }
    
        if (typeof item[1] != 'number' || typeof item[2] != 'number' || typeof item[3] != 'number') {
            return {
                status:'failed', 
                reason: 'Введите значения сторон треугольника в виде чисел'
            };
        }
    }
   
    if (arr.map(item => item.vertices).length != Array.from(new Set(arr.map(item => item.vertices))).length) {
        return {
            status:'failed', 
            reason: 'Введите массив объектов треугольник с уникальными именами вершин'
        };
    }
 
    let arrNames = arr.map(item => item.vertices.toLowerCase()); 
    let arrKeys = arr.map(item => Object.keys(item).slice(1,4).join(''));

    if (!arrNames.every((item,i) => item === arrKeys[i])) {
        return {
            status:'failed', 
            reason: 'Проверьте соответствие имени треугольника именам его вершин'
        };
    }
}
