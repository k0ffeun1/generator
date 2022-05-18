
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
    textDubbles.innerHTML = ''
    itog.innerHTML = ''
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
    let outArray = [],
        counts = {};
    flag = false

    for (var i = 0; i < array.length; i++) {
        let item = array[i];
        counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
        if (counts[item] === 2) {
            outArray.push(item);
        } else if (counts[item] === 1) {
            flag = true
        } else if(flag) {
            outArray.push('Не найдено')
        }
    }
    
    return outArray;
}
// Добавление события клика на кнопку - 'Найти повторяющиеся значения'
dubbles.onclick = function () {
    return textDubbles.innerHTML = dubblesArray()
}

