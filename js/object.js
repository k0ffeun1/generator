// ЦИКЛЫ ДЛЯ ОБЪЕКТА - ТОЛЬКО FOR IN

// let name1 = 'Azamat'
// let surName1 = 'Maksutov'
// let age1 = 27
// let gender1 = 'male'

// let name2 = 'Alina'
// let surName2 = 'Maksutova'
// let age2 = 22
// let gender2 = 'female'

// const person1 = {
//     name: 'Azamat', // свойство
//     surName: 'Maksutov',
//     age: 27,
//     gender: 'male',
//     getFullName(){}, // метод
// }
// const person2 = {
//     name: 'Andrey',
//     surName: 'Ivanov',
//     age: 22,
//     gender: 'male',
// }
// Термины
// person1, person2 - Объекты (коллекция полей)
// name: 'Azamat' - поле, это пара (ключ-значение)
// name: - ключ
// 'Azamat' - значение
// если значение - примитив, то это называется свойство
// если значение - это функция, то это называется методом
// person1.skill = 'мыть посуду' // добавить поле
// delete person1.skill // удалить поле


// ИТОГИ ОБЪЕКТА
// Чтение поля 
// person1.age
// console.log(person1.age);
// // Изменение поля
// person1.age = 1052
// console.log(person1.age);
// // Добавление поля
// person1.skill = 'Играть в футбол'
// console.log(person1.skill);
// // Удаление поля
// delete person1.skill
// console.log(person1.skill); // undefined

// ССЫЛОЧНАЯ ПРИРОДА

// const a = { x: 5 }
// const b = { x: 5 }
// a === b // false (ОНИ НЕ РАВНЫ, ЭТО РАЗНЫЕ ОБЪЕКТЫ)
// // НО ЕСЛИ
// const c = a
// a === c // true, потому что с - это ссылка на объект

// const car = {
//     engine: 'v8',
//     speed: 120,
//     driver: {
//         name: 'Azamat',
//         surName: 'Maksutov',
//         car: null
//     }
// }
// car.driver.car = 'Volvo'

// let name = 'Azamat'
// let surName = 'Maksutov'
// let age = 27
// let gender = 'male'

// const user = {
//     name: name, // если ключ и значение совпадают, то можно отменить объявление ключа и двоеточия и оставить только значение
//     surName: surName,
//     age: age,
//     gender: gender,
// }
// const user = {
//     name,
//     surName,
//     age,
//     gender
// }



// ЗАДАЧА 1: Проверьте, что этот объект не пустой и что в нем есть ключ age.

// let user = {
//     name: 'John',
// }

// if (typeof user.age === 'undefined') {
//     console.log('Поле age не объявлено');
// } else {
//     console.log(user.age);
// }

// ЗАДАЧА 1: Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
// Удалите из массива объектов (задание 2) объект с name == "Anna".
// Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.

// let user = [
//     {
//       name: "John",
//       age: 30
//     },
//     {
//       name: "Bob",
//       age: 21
//     },
//     {
//       name: "Anna",
//       age: 19
//     }
// ]
// let userName = null
// for (i = 0; i < user.length; i++) {
//     // if (user[i].name === 'Anna'){  // Задача 1
//     //     console.log(i);
//     // } 
//     if (user[i].name === 'Anna') { // Задача 2
//         delete user[i].name
//     }
// }

// ЗАДАЧА 2: Получите из объекта obj значение id в констанду id не используя выражение obj.id
// const obj = {
//     id: 5,
//     token: 12343423
// };
// const id = obj.id
// console.log(id);

// ЗАДАЧА 3: Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// let user = {
//     name: 'John',
//     surname: 'Smith',
// }
// user.name = 'Pete'
// delete user.name
// console.log(user);

// ЗАДАЧА 4: Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
// let schedule = {
//     // key: 24,
// };
// console.log(isEmpty(schedule));
// function isEmpty(obj) {
//     for(key in obj) {
//         return false
//     } 
//     return true
// }

// ЗАДАЧА 5: У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// // Если объект salaries пуст, то результат должен быть 0.
// let sum = 0
// for (key in salaries) {
//     if(key != 'undefined') {
//         sum += salaries[key]
//     }
// }
// console.log(sum);

// ЗАДАЧА 6: Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(menu) {
//     for(key in menu) {
//         if (typeof menu[key] != 'string') {
//             menu[key] *= 2
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu);

// // после вызова функции

// ЗАДАЧА 7:  Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'

// let obj = {
//     js: ['jQuery', 'Angular'],
//     php: 'hello', 
//     css: 'world'
// }
// console.log(obj.js[0]);

// ЗАДАЧА 7: Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// let obj = {
//     Коля: 200,
//     Вася: 300,
//     Петя: 400
// }
// for (key in obj) {
//     console.log(key + ' - Зарплата ' + obj[key] + ' долларов');
// }


// ЗАДАЧА 8: Написать функцию, которая проверяет автомобиль по двум параметрам (год выпуска и пробег) 
// не менее 2000 года и не более 50000км пробега
// и возвращает булево значение true или false.
// Подробности:
// 1. Функция имеет один параметр car, в качестве которого получает один из 3-х объектов. 
// Например, выше рассмотренный автомобиль first_Car.
// 2. Функция должна работать с любым подобным объектом.
// let firstCar = {
//     make: "VAZ", /* производитель */
//     model: 2106, /* модель */
//     year: 1980, /* год выпуска */
//     color: "beige", /* цвет */
//     passengers: 5, /* число пассажиров */
//     convertible: false, /* откидной верх */
//     mileage: 80000 /* пробег */
// }
// let secondCar = {
//     make: "VAZ", /* производитель */
//     model: 2108, /* модель */
//     year: 1995, /* год выпуска */
//     color: "gray", /* цвет */
//     passengers: 5, /* число пассажиров */
//     convertible: false, /* откидной верх */
//     mileage: 50000 /* пробег */
// }
// let firthCar = {
//     make: "VAZ", /* производитель */
//     model: 2110, /* модель */
//     year: 2004, /* год выпуска */
//     color: "white", /* цвет */
//     passengers: 5, /* число пассажиров */
//     convertible: false, /* откидной верх */
//     mileage: 30000 /* пробег */
// }
// function validateCar(car) {
//     for (year in car) {
//         if (car.year < 2000) {
//             return false
//         } else {
//             return true
//         }
//     }
// }
// let result = validateCar(secondCar)
// document.write(result)