// // ЗАМЫКАНИЕ - это функция внутри другой функции

// function createCalFunc(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }
// const calc = createCalFunc(42)
// calc()

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// console.log(addOne(10));
// console.log(addTen(10));


// function urlGenerator (domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = urlGenerator('com')
// console.log(comUrl('google'));

// function urlGenerator(url, domain = 'ru') {
//     console.log(`https://${url}.${domain}`);
// }
// urlGenerator('google')

