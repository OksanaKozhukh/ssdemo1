export function rectangleInRectangle (obj1, obj2){
    
    if (arguments.length != 2) {
        return {
            status:'failed', 
            reason: 'Введите 2 аргумента: два конверта со сторонами (a, b) (c, d)'
        };
    }
    
    let validation = validationRectangleInRectangle (obj1, obj2) ;

    if (validation) {
        return validation;
    }

    obj1.w = obj1.w < 0? Math.abs(obj1.w): obj1.w;
    obj2.w = obj2.w < 0? Math.abs(obj2.w): obj2.w;
    obj1.h = obj1.h < 0? Math.abs(obj1.h): obj1.h;
    obj2.h = obj2.h < 0? Math.abs(obj2.h): obj2.h;
    
    let sortedObj1 = Object.values(obj1).sort((a,b) => b-a);
    let sortedObj2 = Object.values(obj2).sort((a,b) => b-a);

    let a = sortedObj1[0];
    let b = sortedObj1[1];
    let c = sortedObj2[0];
    let d = sortedObj2[1];
    
    if ((c <= a && d <= b) || (c > a && b >= (2*c*d*a + (c*c-d*d)*Math.sqrt(c*c+d*d-a*a)) / (c*c+d*d))) {
        return 1
    }

    if ((a <= c && b <= d) || (a > c && d >= (2*a*b*c + (a*a-b*b)*Math.sqrt(a*a+b*b-c*c)) / (a*a+b*b))) {
        return 2
    }
    
return 0;
}

function validationRectangleInRectangle (obj1, obj2) {

    if (typeof obj1 != 'object' || typeof obj2 != 'object') {
        return {
            status:'failed', 
            reason: 'Введите 2 объекта со сторонами (a,b) и (c,d)'
        };
    }
    
    if (obj1.w === 0 || typeof obj1.w != 'number' ) {
        return {
            status:'failed', 
            reason: 'Введите значение ширины первого конверта'
        };
    }

    if (obj1.h === 0 || typeof obj1.h != 'number' ) {
        return {
            status:'failed', 
            reason: 'Введите значение высоты первого конверта'
        };
    }

    if (obj2.w === 0 || typeof obj2.w != 'number' ) {
        return {
            status:'failed', 
            reason: 'Введите значение ширины второго конверта'
        };
    }

    if (obj2.h === 0 || typeof obj2.h != 'number' ) {
        return {
            status:'failed', 
            reason: 'Введите значение высоты второго конверта'
        };
    }
}

