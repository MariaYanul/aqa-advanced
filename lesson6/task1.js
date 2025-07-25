// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// Function Declaration
function calcArea1(width, height) {
  return width * height;
}
console.log("Declaration:", calcArea1(2, 6));

// Function Expression
const calcArea2 = function (width, height) {
  return width * height;
};
console.log("Expression:", calcArea2(3, 7));

// Arrow Function
const calcArea3 = (width, height) => width * height;
console.log("Arrow:", calcArea3(4, 8));
