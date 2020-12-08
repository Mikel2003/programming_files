"use strict"; // Говорит о том, что у тебя код современный

// Переменные
let number = 5;
const leftBorderWidth = 1;

number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

console.log(name);
var name = "Ivan";

// Типы данных
let numbers = 4; // Число
// console.log(4/0); // Так можно получить бесконечность
const person = "Alex"; // Строка
const bool = true; // Булеан

let und; // Underfind

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.age); // Первый способ обращения к свойству объекта 
console.log(obj["name"]); // Второй способ обращения к свойству объекта 

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[1]);


// Простое общение с пользователем

// alert('Hello');
// const result = confirm('Ты хочешь уйти?');
// if (result == true) {
//     alert('Жалко');
// } else {
//     alert('Я рад');
// }
// const answer = +prompt('Вам есть 18?', 'Да'); // Знак + преобразовывает строки в числа
// console.log(answer + 5);
// Всё, что мы поулчаем от пользователя всегда будет являться строкой

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// console.log(typeof(answers));


// Интерполяция
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = prompt('Как тебя зовут?');

// alert(`Привет, ${user}`); // Интерполяция - это использование значения переменных прямо в строке 


// Операторы в JS

// console.log('arr' + ' - object');
// console.log( 5 + ' - object'); // Конкатинация - превращение числа в строку
// Унарный плюс - плюс, который ставится перед чем-то

let incr = 10,
    decr = 10;

// incr++; // Инкремент - повышение на одну единицу // Такая форма записи называется постфиксной
// decr--; // Дикремент - понижение на одну единицу

// ++incr; // Такая форма записи называется префиксной 
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2); // 1 // % - возвращает остаток

console.log(2 + 2 * 2 === 8);

const isChecked = true,
      isClose = false;
      
console.log(isChecked || isClose);


// Git

// git status // Состояние файла
// git add -A // Добавляет в слешку
// git commit -a -m"index.html mod" // Сохраняет и создает точку откатки
// git push // Отправляет на отдаленный репозиторий
// git pull // Загружает уже обновленный проект с репозитория, например: когда домой пришел и начал работать с домашним пк, надо же загрузить то, что ты делал на работе


// Callback - функции

function first() {
    // Do something
    setTimeout(function() {
      console.log(1); 
    }, 500); 
}

function second() {
    console.log(2); 
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);