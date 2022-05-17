// ARRAY

// const name1 = 'Azamat'
// const name2 = 'Alexey'

// Массив - это тоже объект

// let names = {     |           
//     length: 2,    |
//     0: 'Azamat',  |     ===   let names = ['Azamat', 'Alexey']
//     1: 'Alexey'   |
// }                 |

// Ключ - это индекс
// Значение - это элемент массива
// Очень важно, очень хороший практикой является однотипные массивы. однотипность элементов в массиве
// Массив по именам, массив по возрасту, массив по гендерному признаку и тд

// const names = ['Azamat', 'Alexey', 'Alina']
// const ages = [27, 25, 29]
// const genders = ['male', 'female']

// names[0] = 'Alex'
// names[3] = 'Anna' // Добавление нового элемента массив (ТАК ДЕЛАТЬ ОЧЕНЬ НЕЖЕЛАТЕЛЬНО, УЖАСНАЯ ПРАКТИКА)

// Методы для массивов
names.push('Anna ')  // Позволяет добавить элемент(ы) в конец массива (ХОРОШАЯ ПРАКТИКА!)
names.push(['Tatyana', 'Oleg']) // Также можно добавить ссылку на массив в сам массив
names.unshift('Grisha') // Добавляет элемент в начало массива
names.pop() // Удаляет последний элемент массива (в данном случае ссылка на объект(массив))
names.shift() // Удаляет первый элемент массива (Grisha)
// console.log(names);

// Перебор массива
// for (i = 0; i < names.length; i++) {
//     console.log(names[i], i, names);
// }
// for (const name of names) {  // Этот цикл пробежит по всем значениям массива
//     console.log(name);
// }

// const user = {
//     name: 'Azamat',
//     surname: 'Maksutov',
//     age: 27
// }
// Этот цикл лучше использовать для объектов, а не массивов
// for (const key in user) { 
//     console.log(key);
// }

// ЗАЦИКЛИВАНИЕ
// const array = []
// array.push(array)
// console.log(array);
// console.log(array === array[0]); // true
// Элемент массива имеет ссылку на сам массив, тем самым происходит зацикливание до бесконечности

// const user = {
//     name: 'Azamat',
//     surname: 'Maksutov',
//     age: 27,
//     skills: [
//         'Программировать', 
//         'Играть в футбол'
//     ],
// }
// console.log(user);

// const users = []
// users.push({
//     name: 'Azamat',
//     surname: 'Maksutov',
//     age: 27,
//     skills: [
//         'Программировать', 
//         'Играть в футбол'
//     ],
// })
// users.push({
//     name: 'Alina',
//     surname: 'Satuchina',
//     age: 27,
//     skills: [
//         'Программировать', 
//         'Играть в футбол'
//     ],
// })
// console.log(users);


// ЗАЧАЧА 1: У нас есть массив чисел и нам нужно разбить этот массив чисел на четные и нечетные
// const array = [25, 54, 16, 49, 98, 86, 65, 68, 22, 68, 79, 21, 46, 35, 56, 36, 97, 32, 40, 10]
// const odd = []
// const even = []

// С помощью обычного for
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//         odd.push(array[i])
//     } else {
//         even.push(array[i])
//     }
// }
// С помощью for of
// for (const number of array) {
//     if (number % 2 === 0) {
//         even.push(number)
//     } else {
//         odd.push(number)
//     }
// }
// console.log(odd);
// console.log(even);

 
// ЗАЧАЧА 2: Найти среднеарифметическое значение массива numbers
// const numbers = [25, 54, 16, 49, 98, 86, 65, 68, 22, 68, 79, 21, 46, 35, 56, 36, 97, 32, 40, 10]
// let sum = null
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i]
//     sum += number
// }
// let result = sum / numbers.length
// console.log(result);

// ЗАЧАЧА 2: Вывести все элементы массива numbers в обратном порядке
// const numbers = [25, 54, 16, 49, 98, 86, 65, 68, 22, 68, 79, 21, 46, 35, 56, 36, 97, 32, 40, 10]
// numbers.reverse()
// console.log(numbers);
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }
// Найдем самое большое и самое маленькое число в numbers
// const numbers = [25, 54, 16, 49, 98, 86, 65, 68, 22, 68, 79, 21, 46, 35, 56, 36, 97, 32, 40, 10]
// Хитрый прием
// let min = Infinity // любое число, которое меньше infinity(а это абсолютно любое число), будет минимальным
// let max = -Infinity // любое число, которое больше infinity(а это абсолютно любое число), будет максимальным

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i]
//     if(number < min) {
//         min = number
//     } else if (number > max) {
//         max = number
//     }
// }
// console.log({min, max});

// ЗАЧАЧА 3: Посчитать сумму поэлементо и вывести в массив sum

// const numbers1Array = [16, 81, 28, 81, 40, 28, 18, 98, 81, 26, 52, 88, 85, 25, 90, 53, 61, 40, 89, 4]
// const numbers2Array = [51, 37, 80, 52, 61, 15, 43, 47, 40, 70, 94, 38, 35, 29, 76, 57, 58, 50, 63, 71]
// let sum = []

// for (let i = 0; i < numbers1Array.length; i++) {
//     sum.push(numbers1Array[i] + numbers2Array[i])
// }
// console.log(numbers1Array, numbers2Array, sum);


//==========================================================================================================
// ЗАДАЧИ!!!
// задача 1: Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
// Элементы массива будут разделены запятой.
// Получите результат двумя разными методами.
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let str = ''
// for (let i = 0; i < vegetables.length; i++) {
//     let vegetable = vegetables[i]
//     str += (vegetable + ', ')
// }
// console.log(str);




