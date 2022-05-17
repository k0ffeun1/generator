// КОНТЕКСТ
// this - оно указывает на тот объект, в контексте которого это было вызвано, то что стоит слева от точки
// оно всегда динамично

function hello() {
    console.log('hello', this);
}

const person = {
    name: 'Azamat',
    age: 27,
    sayHello: hello,
    sayHelloWindow: hello.bind(document), // bind - метод, который позволяет зафиксировать this
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`) // некий заголовок
        console.log(`Name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone - ${phone}`);
        console.groupEnd() // Закрывает заголовок
    }
}


const lena = {
    name: 'Elena',
    age: 23,
}
// const fnLenaInfoLog = person.logInfo.bind(lena)
// привязали функции из объекта person в объект lena с помощью метода bind, а также this
// fnLenaInfoLog('manager', '89176984976')

// а также можно передавать параметры функции прямо в bind. после параметра lena
// const fnLenaInfoLog = person.logInfo.bind(lena, 'manager', '89176984976')
// fnLenaInfoLog()

// также есть метод call, работает также
// person.logInfo.call(lena, 'manager', '89176984976')

// и последний способ с помощью метода apply, где передается всегда только два параметра:
// первый - это контекст (lena), второй - массив с параметрами
// person.logInfo.apply(lena, ['manager', '89176984976'])

// ИТОГ: методы call и apply отличаются только способом передач параметров в функцию

// ================================================================================================

// ПРИМЕРЫ:

const array = [1, 2, 3, 4, 5]
// const array2 = array.map(function (num) {
//     return num * 5
// })
// console.log(array2);

// Создаем новый метод для массива, который будет умножать элемент массива на параметр

Array.prototype.multiBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}
console.log(array.multiBy(2));

// }
// array.multBy(5)

// function multBy(arr, num) {
//     for(i = 0; i < arr.length; i++) {
//         arr[i] *= num
//     }
//     console.log(arr);
// }
// multBy(array, 5)

// ИТОГИ:
// оно вызывает то, что стоит слева от точки, где мы вызываем данную функцию
// Ключевое слово this всегда динамичное, оно указывает на тот объект в контексте которого оно было вызвано
// функция bind - в качестве значения этой функции му можем передать тот контекст который будет привязан у вызываемой функции
// сам по this себе указывает на глобальный объект window
// метод bind на самом деле не вызывает функцию, а возвращает новую функцию которая уже привязала к себе новый контекст
// метод group у объекта console
// С помощью метода bind, помимо того что первым параметром мы указываем контекст который должен быть привязан к новой функции, другими параметрами мы можем передавать следующие параметры которые нужны функции
// Метод call. Отличие от метода bind, что он метод call сразу же вызывает эту функцию, а метод bind в свою очередь возвращает нам новую функцию, и её мы можем вызвать тогда, когда нам угодно
// Метод apply. В отличие от методов bind и call, где можно бесконечное число параметров, в метод apply мы всегда передаем два параметра. 
// У метода apply второй параметр всегда массив, и этот массив состоит из аргументов которые попадут в эту функцию.
// Метод apply сразу же вызывает эту функцию.
// Практика с использованием прототипов и контекста (this)


