// covert mảng ra chuỗi arr.toString();

/* const number = ["one", "two", "three", "four", "five", "six", "seven"];

console.log(number.join(" *"));
 */

/* const newArr = {
    name: 'trung',
    age: 21,
    description: {
        middleName: 'chi',
    }
};

console.log(newArr); */

// check kiểu dữ liệu
/* 
const person = ['Trung', 'Pham', 21];

console.log(typeof(person)); */

/* const person = {
    firstName: 'trung',
    lastName: 'pham',
    age: 21
};

console.log(person.firstName); */

//arr.length

/* const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numberArr); */

// giá trị đầu trong mảng

/* const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numArr[0]); đầu 

console.log(numArr[numArr.length - 1]);  cuối */


// loop mảng

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

console.log(text);