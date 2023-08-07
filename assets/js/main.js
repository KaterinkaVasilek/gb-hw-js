// 1 задание
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// Я не поняла как правильно выполнить задание, непонятно написано. То ли возводить число пользователя в куб, то ли сложить два числа, возведенных в куб. Поэтому у меня решение, скорее всего, корявее некуда

let userNumbers = prompt("Введите два числа через запятую или пробел", "");
let arr = Array.from(userNumbers)

let newArr = [arr.shift(), arr.pop()]
console.log(newArr);

const countNumbers = (arr) => {
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    result += arr[i] ** 3;
  }

  return result;
}

console.log("1 задание");
console.log(countNumbers(newArr));


// 2 задание
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const func = (answer) => {
  if(isNaN(answer)) {
    alert("Значение задано неверно");
    return func(prompt("Сколько Вы получаете в месяц?"))
  } else return answer
}

const responce = func(+prompt("Сколько Вы получаете в месяц?"))

const countPercent = (number) => {
  return number / 100 * 13;
}

let totalResult = `Размер заработной платы за вычетом налогов равен ${countPercent(responce)} руб.`

console.log("2 задание");
console.log(totalResult)

// 3 задание
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let numbers = [];

for(let i = 0; i <= 2; i++) {
  numbers.push(prompt("Введите число"));
}

let arrOfNumber = Array.from(numbers);

const findMaxNumber = (arr) => {
  min = arr[0];
  max = min;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return max;
}

console.log("3 задание");
console.log(findMaxNumber(arrOfNumber));

// 4 задание
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (a, b) => {
  return a + b;
}

const subtraction = (a, b) => {
  let arr = [a, b];
  b = arr[0];
  a = b;
  for (let i = 0; i < arr.length; ++i) {
    (arr[i] > b) ? b = arr[i] : false;
    (arr[i] < a) ? a = arr[i]: false;
  }

  return b - a;
}

const division = (a, b) => {
  return a / b;
}


const multiplication = (a, b) => {
  return a * b;
}

console.log("4 задание");
console.log(sum(10, 2));
console.log(subtraction(10, 2));
console.log(division(10, 2));
console.log(multiplication(10, 2))
