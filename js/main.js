// // // Object.create
// // const currentYear = 2022

// // const person = Object.create({
// //     calculateAge() {
// //         console.log('Age:', new Date().getFullYear() - this.birthYear); 
// //     }
// // }, { // расширенное добавление нового объекта
// //     name: {
// //         value: 'Azamat',
// //         enumerable: true, // при Значении true - цикл for будет итерироваться по ключам
// //         writable: true, // позволяет изменять поля
// //         configurable: true, // можем удалять какой либо ключ из объекта
// //     },
// //     age: {
// //         get() {
// //             return new Date().getFullYear() - this.birthYear
// //         },
// //         set(value) {
// //             console.log('Set age', value);
// //         },
// //     },  
// //     birthYear: {
// //         value: 1994,
// //         enumerable: true, // при Значении false - цикл for не будет итерироваться по ключам
// //         writable: false, // не позволяет изменять поля
// //         configurable: false, // не можем удалять какой либо ключ из объекта
// //     }
// // })
// // // const person = {
// // //     name: 'Azamat',
// // //     birthYear: 1994,
// // // }
// // // person.name = 'Maxim'
// // // person.birthYear = 1995
// // // delete person.name
// // person.age

// // for (let key in person) {
// //     console.log('key', key, person[key]);
// // }

// // console.log(person.age = 'dwedwe');



// // #
// // ##
// // ###
// // ####
// // #####
// // ######
// // #######
// for (i = 0; i < 7; i++) {
//     for( i = 0; i < 4; i++) {
//         let str2 = ''
//         str2 += '#'
//     }
// }

// Задача. Дан массив с числами. Создайте из него новый массив,
// где останутся лежать только положительные числа. 
// Создайте для этого вспомогательную функцию isPositive(), 
// которая параметром будет принимать число и возвращать true, 
// если число положительное, и false - если отрицательное.

// let array = [1, 2, -3, 4, 5, -6, 7, -8, 9]
// let arrayPositive = []
// function isPositive(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             arrayPositive.push(arr[i])
//         }
//     }
//     return arrayPositive
// }
// console.log(isPositive(array));

// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, 
// если не так - false.

// function isNumberInRange(num) {
//     if (num > 0 && num < 10) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isNumberInRange(11));

// 3) Дан массив с числами. Запишите в новый массив только те числа, 
// которые больше нуля и меньше 10-ти. Для этого используйте 
// вспомогательную функцию isNumberInRange из предыдущей задачи.

// ГЕНЕРАТОР СЛУЧАЙНЫХ МАССИВ С ЗАДАННЫМИ ПАРАМЕТРАМИ

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const generation = document.getElementById('generation')
const reset = document.getElementById('reset')
const btnSort = document.getElementById('sort')
const odd = document.getElementById('odd')
const even = document.getElementById('even')
const dubbles = document.getElementById('dubbles')
const textDiv = document.getElementById('text')
const textOddEven = document.getElementById('textOddEven')
const textDubbles = document.getElementById('textDubbles')
const btnSum = document.getElementById('btn__sum')
const btnMulti = document.getElementById('btn__multi')
const itog = document.getElementById('itog')
let array = []

// Функция подбора случайного массива чисел
function arrayRandom(min, max, elements) {
    for (i = 0; i < elements; i++) {
        array.push(` ${Math.floor(Math.random(i) * max) + min}`)
    }
    return array
}
// Функция перебора нечетных чисел
function oddFunc() {
    let arrayOdd = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arrayOdd.push(array[i])
        }
    }
    return arrayOdd
}
// Функция перебора четных чисел
function evenFunc() {
    let arrayEven = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayEven.push(array[i])
        }
    }
    return arrayEven
}
// Функция повторяющихся значений
// Функция суммы всех чисел случайного массива 
function arraySum() {
    let arraySum = 0
    for (i = 0; i < array.length; i++) {
        arraySum += Number(array[i])
    }
    return arraySum
}
// Функция умножения всех чисел случайного массива 
function arrayMulti() {
    let arraySum = 1
    for (i = 0; i < array.length; i++) {
        arraySum *= Number(array[i])
    }
    return arraySum
}
// Добавление события клика на кнопку - 'Сгенерировать случайный массив'
generation.onclick = function () {
    for (i = 0; i < array.length; i++) {
        array.splice(0, [i + 10])
    }
    textOddEven.innerHTML = ''
    return textDiv.innerHTML = arrayRandom(Number(input1.value), Number(input2.value), Number(input3.value))
}
// Добавление события клика на кнопку - 'Очистить'
reset.onclick = function () {
    textDiv.innerHTML = ''
    textOddEven.innerHTML = ''
    textDubbles.innerHTML = ''
    itog.innerHTML = ''
    input1.value = ''
    input2.value = ''
    input3.value = ''
}
// Добавление события клика на кнопку - 'Сложить все числа'
btnSum.onclick = function () {
    return itog.innerText = arraySum()
}
// Добавление события клика на кнопку - 'Умножить все числа'
btnMulti.onclick = function () {
    return itog.innerText = arrayMulti()
}
// Функция сортировки массива
btnSort.onclick = function () {
    return textDiv.innerHTML = array.sort((a, b) => a - b);
}
// Добавление события клика на кнопку - 'Показать все нечетные числа'
odd.onclick = function () {
    return textOddEven.innerHTML = oddFunc()
}
// Добавление события клика на кнопку - 'Показать все четные числа'
even.onclick = function () {
    return textOddEven.innerHTML = evenFunc()
}

// Функция поиска повторяющихся значение
function dubblesArray() {
    let len = array.length,
        outArray = [],
        counts = {};

    for (var i = 0; i < len; i++) {
        var item = array[i];
        counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
        if (counts[item] === 2) {
            outArray.push(item);
        }
    }

    return outArray;
}
// Добавление события клика на кнопку - 'Найти повторяющиеся значения'
dubbles.onclick = function () {
    return textDubbles.innerHTML = dubblesArray()
}
