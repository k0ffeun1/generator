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

const textDiv = document.getElementById('text')
const btn = document.getElementById('btn')
const randomNums = document.getElementById('btn__random')
const itog = document.getElementById('itog')
const generation = document.getElementById('generation')
const form = document.getElementById('form')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
let formData = new FormData(form)

formData = Array.from(formData)
// console.log(formData[0][1]);
// console.log(formData[1][1]);
// console.log(formData[2][1]);

const array = []
function arrayRandom(min, max, elements) {
    for (i = 0; i < elements; i++) {
        array.push(` ${Math.floor(Math.random(i) * max) + min}`)
    }
    return array
}
function arraySum() {
    let arraySum = 0
    for (i = 0; i < array.length; i++) {
        arraySum += Number(array[i])
    }
    return arraySum
}
generation.onclick = function () {
    for (i = 0; i < array.length; i++) {
        array.splice(0, [i + 10])
    }
    return textDiv.innerHTML = arrayRandom(Number(input1.value), Number(input2.value), Number(input3.value))
}
btn.onclick = function () {
    return itog.innerText = arraySum()
}


const reset = document.getElementById('reset')
reset.onclick = function () {
    textDiv.innerHTML = ''
}

// function multi(num1,num2) {
//     function square(num1) {
//         return num1 ** 2
//     }
//     return square(num1) + square(num2)
// }
// console.log(multi(2,5));

