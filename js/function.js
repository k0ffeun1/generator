// FUNCTION

// Напишем вывод информации на экран, которая складывает два введеных пользователем числа
// const number1 = promptNumber('Введите первое число')
// const number2 = promptNumber('Введите второе число')
// let sum = number1 + number2
// alert('Сумма этих чисел равна - ' + sum)

// function promptNumber (str) {
//     return Number(prompt(str)) // return - прерывает тело функции, то что снизу - выполняться не будет
// }

// function getSum(a = 0, b = 0) {    // знак = означает условие по умолчанию, если не вписать аргумент, 
//     return a + b                   // то будет использованно именно то значение, которое сторит после знака =
// }                                  // если это не задавать, то при вызове функции и отстувия аргумента в этой функции,
// console.log(getSum(15));           // результат будет NaN (число складываем с undefined)

// ARGUMENTS
// старый способ
// function getSum () {
//     // в функцию по умолчанию встроена переменная arguments (это все аргументы функции)
//     let sum = null
//     for (let i = 0; i < arguments.length; i++) {
//         let argument = arguments[i]
//         sum += argument
//     }
//     return sum
// }
// let result = getSum(4,5,1,5,2,8,1521)
// console.log(result);

// новый способ
// function getSum(...rest) {  // rest,args,params 
//     console.log(rest);
// }
// getSum(5,2,1)

// Задача 1: написать функцию, которая будет определять является ли ее входной аргумент простым числом
// function getSimpleNumber (number) {
//     for(i = 2; i <= number - 1; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(15, getSimpleNumber(13));

// СЛЕДУЕТ ЗНАТЬ, ЧТО ФУНКЦИЯ ЭТО ТОЖЕ ОБЪЕКТ
// ЛЕНИВАЯ ФУНКЦИЯ: функции присваивается переменная
// нельзя использовать x ранее этой строчки, а просто функцию можно, 
// потому что компилятор первым делом инициализирует функции, а потом только начинает считывать основной код
// const x = function getSimpleNumber(number) {
//     for (i = 2; i <= number - 1; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// ОБЛАСТИ ВИДИМОСТИ ФУНКЦИЙ
// a()

// function a () {
//     b()
//     c()
//     function b () {          // если есть две функции с одинаковым именем, одна написана глобально, 
//         console.log('b2');   // а другая внутри функции, то вызовется именно та, которая находится внутри функции
//     }                        // и внутренняя функция будет доступна только внутри родительской функции, глобально ее нет
// }
// function b () {
//     console.log('b1');
// }
// function c () {
//     console.log('c1');
// }

// 
// const array = [1, 235, 21, 5231, 124, 77, 21, 95, 28]
// const variant = confirm('Хотите видеть четные числа?')
// let sort = null

// if (variant) {
//     sort = getEven
// } else {
//     sort = getOdd
// }
// const result = sort(array)
// console.log(result);

// function getOdd (array) {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             result.push(array[i])
//         }
//     }
//     return result
// }
// function getEven (array) {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             result.push(array[i])
//         }
//     }
//     return result
// }


//  КОНТЕКСТ
// const user = {
//     name: 'Azamat',
//     surname: 'Maksutov',
//     age: 27,
//     getFullName(person) {
//         return `${person.name} ${person.surname}`
//     },
// }

// // function getFullName (person) {
// //     return `${person.name} ${person.surname}`
// // }
// let fullname = user.getFullName(user)
// console.log({user, fullname});

// Стрелочная функция
// () => {}
// Стрелочная функция всегда ленивая( то есть привязывается к переменной)
// В стрелочной функции никогда нет своего и чужого контекста 
// В стрелочной функции нет объекта arguments
// const getSum0 = (a, b) => {
//     console.log(arguments);
//     return a + b
// }
// console.log(getSum0(5, 7)); // Ошибка
//------------------
// function getSumClassicFunc(c, d, e) {
//     console.log(arguments);
//     return c + d + e
// }
// console.log(getSumClassicFunc(5, 7, 2)); // выдаст аргументы
// const getSum = (a, b) => {
//     return a + b
// }
// если единственное что делает эта функция - это возвращает, то можем написать так:
// const getSum = (a, b) => a + b
// если аргумент только один, то можно опустить скобки:
// const getSum = a => a ** 2
// console.log(getSum(5, 2));


// Задача 1: Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function sqrt (num) {
//     return num ** (1/2)
// }
// let result = sqrt(16)
// console.log(result);

// Задача 2: Сделайте функцию, которая возвращает сумму двух чисел
// function getSum (...rest) {
//     let sum = null
//     for(let i = 0; i < rest.length; i++) {
//         let argument = rest[i]
//         sum += argument
//     }
//     return sum
// }
// let result = getSum(2,6,12,673,12224)
// console.log(result);

// Задача 3: Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function math(num1, num2, num3) {
//     return (num1 - num2) / num3
// }
// let result = math(55,25,2)
// console.log(result);

// Задача 4: Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

// function getDays(num) {
//         if (num === 1) {
//             console.log('Это понедельник');
//         } else if (num === 2) {
//             console.log('Это вторник');
//         } else if (num === 3) {
//             console.log('Это среда');
//         } else if (num === 4) {
//             console.log('Это четверг');
//         } else if (num === 5) {
//             console.log('Это пятница');
//         } else if (num === 6) {
//             console.log('Это суббота');
//         } else if (num === 7) {
//             console.log('Это воскресенье');
//         } else {
//             console.log('Нет такого дня недели');
//         }
// }
// getDays(3)

// Задача 5: Дан массив с числами. Проверьте, что в этом массиве есть число 5.
// Если есть - выведите 'да', а если нет - выведите 'нет'.
// Создадим рандомный массив

// let array = []
// let min = 1
// let max = 21

// for (let i = min; i < max; i++) {
//     array.push(Math.floor(Math.random() * 100) + 1)
//     function compare(a, b) {
//         if (a > b) return 1; // если первое значение больше второго
//         if (a == b) return 0; // если равны
//         if (a < b) return -1; // если первое значение меньше второго
//     }
//     array.sort(compare)
// }
// // function getOddEven() {
// //     for (let k = 0; k < array.length; k++) {
// //         let argument = array[k]
// //         if (argument % 2 === 0) {
// //             console.log(Number(argument) + ' - это четное число');
// //         } else {
// //             console.log(Number(argument) + ' - это нечетное число');
// //         }
// //     }
// // }
// // getOddEven()
// function getNumber(num) {
//     num = Number(prompt('Введите число'))
//     let flag = false
//     for (let i = 0; i < array.length; i++) {
//         let argument = array[i]
//         if (argument === num) {
//             console.log('Данное число присутствует в массиве');
//             return
//         } else {
//             flag = true
//         }
//     }
//     if (flag) {
//         console.log('Данное число отстуствует в массиве');
//     }
// }
// console.log(array);
// getNumber()

// Задача 6: У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// let names = []

// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)
// }
// console.log(names);

// Задача 7:
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
// в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
// Метод должен понимать плюс + и минус -.
// Пример использования:


// alert(calc.calculate("3 + 7")); // 10


// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
//
// Например, давайте добавим умножение *, деление / и возведение в степень **:
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
