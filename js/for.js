// ЦИКЛЫ FOR
// for (<инициализация>; <условие>; <мутация>) {
//     <тело цикла>
// }
// инициализация -> условие -> (тело -> мутация -> условие) -> (тело -> мутация -> условие) -> ... -> условие === false
// итератор - это переменная
// итерация - это то, сколько раз тело цикла было выполнено
// console.log('Начало');

// for (let i = 0; i <= 100; i+=5) {
//     console.log({ i });
// }

// console.log('Конец');

// Восходящий цикл - когда итерация увеличивается (начинается с 0)
// console.log('Начало');

// for (let i = 0; i <= 100; i+=5) {
//     console.log({ i });
// }

// console.log('Конец');


// Низходящий цикл - когда итерация уменьшается 
// console.log('Начало');

// for (let i = 100; i >= 0; i--) {
//     console.log({ i });
// }

// console.log('Конец');


// Общий цикл - когда цикл и не уменьшается, и не уменьшается 
// console.log('Начало');

// for (let i = 1; Math.abs(i) < 3**10; i *= -3) {
//     console.log({ i });
// }

// console.log('Конец');


// ЦИКЛ В ЦИКЛЕ

// ЗАДАЧА: найти простые числа от 1 до 100

// for(n = 3; n <= 100; n++) {
//     let flag = true;
//     for (i = 2; i < n; i++) {
//         if(n % i === 0) {
//             flag = false
//         } 
//     }
//     if (flag === true) {
//         console.log(n + ' - простое число')
//     } else {
//         console.log(n + ' - составное число');
//     }
// }

// ЗАДАЧА: составить таблицу умножения
// for (i = 1; i <= 10; i++) {
//     let row = ''
//     for (a = 1; a <= 10; a ++) {
//         row += a * i + '\t'
//     }
//     console.log(row);
// }

// задача
// 1
// 2 2
// 3 3 3
// ....

// for (let n = 1; n < 10; n++) {
//     let row = ''
//     for (let a = 0; a < n; a++) {
//         row += n + '\t'
//     }
//     console.log(row);
// }

// ЗАДАЧА 1: Напишите программу на JavaScript, которая принимает два целых числа и отображает большее.

// let a = prompt('Введите первое целое число')
// let b = prompt('Введите второе целое число')

// if (a > b) {
//     alert(a);
// } else alert(b);

// ЗАДАЧА 2: Напишите условное выражение JavaScript, чтобы найти знак произведения трех чисел (+ или -).
// Примеры чисел: 4, -8, 8    Вывод: Знак -
// let num1 = prompt('Введите первое число')
// let num2 = prompt('Введите второе число')
// let num3 = prompt('Введите третье число')
// let sum = num1 * num2 * num3

// if (num1 * num2 * num3 >= 0) {
//     console.log('Знак произведения +');
// } else console.log('Знак произведения -');

// Задача 3: используйте условный оператор JavaScript для сортировки трех чисел по убыванию.
// Примеры чисел: 0, -1, 4   Вывод: 4, 0, -1

// let num1 = Math.floor(Math.random() * (100 - 1)) + 1
// let num2 = Math.floor(Math.random() * (100 - 1)) + 1
// let num3 = Math.floor(Math.random() * (100 - 1)) + 1
// let array = [num1, num2, num3]
// array.sort(compare)
// console.log(array)

// function compare(a, b) {
//     if(a > b) return 1
//     if(a === b) return 0 
//     if(a < b) return -1
// }

//=======================================================================================

// Задача 4: Напишите условное выражение JavaScript, чтобы найти наибольшее из пяти чисел.
// Примеры чисел: -6, -3, -6, 0, -1     Вывод: 0

// let num1 = Math.floor(Math.random() * (10 - 1)) + 1
// let num2 = Math.floor(Math.random() * (10 - 1)) + 1
// let num3 = Math.floor(Math.random() * (10 - 1)) + 1
// let num4 = Math.floor(Math.random() * (10 - 1)) + 1
// let num5 = Math.floor(Math.random() * (10 - 1)) + 1

// // Вгоняем числа в массив
// let array = [num1, num2, num3, num4, num5]

// // Создаем функции для сравнения чисел
// function compare(a, b) {
//     if(a > b) return 1
//     if(a === b) return 0 
//     if(a < b) return -1
// }

// // Сортируем числа по возрастанию
// array.sort(compare)
// console.log(array);

// // находим наибольшее число
// let last = array[array.length - 1]
// console.log(last);

//=======================================================================================

// ЗАДАЧА 5: Напишите цикл for в JavaScript, который будет повторяться от 0 до 15.
// Для каждой итерации он будет проверять, является ли текущее число четным или нечетным.

// for (i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' - ' + 'Это четное число');
//     } else {
//         console.log(i + ' - ' + 'Это нечетное число');
//     }
// }

// Задача 6: 
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  


// Задача 7: Напишите программу на JavaScript, чтобы суммировать числа кратные 3 и 5 до 1000.

// let sum = null
// for (i = 0; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum += i 
//     }
// }
// console.log(sum);




// ЦИКЛ WHILE
// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// let x = 100
// let y = 0
// while (x > y) {
//     console.log({x, y});
//     x--
//     y++
// }

// let number = parseInt(prompt('Введите число'));

// while(number > 0) {
//     const d = number % 10;
//     number = parseInt(number / 10);
//     console.log(d);
// }


// ЦИКЛ DO WHILE

// do {
//     тело цикла
// } while (Условие)


// let sum = null
// do {
//     sum += parseInt(prompt('Введите число'))
// } while (sum <= 100)
// console.log(sum);