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

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

console.log(text); */


//arr.length

/* const list = ['1', '2', '3', '4', '5', '6', '7'];

document.write("The length of the list: " + list.length); */

/* const list = ['1', '2', '3', '4', '5', '6', '7'];

document.getElementById("p01").innerHTML = list.length; */

/* const point = new Array(1, 2, 3, 4);

const point = [1, 2, 3, 4];

console.log(point[0]); */




// METHOD



// mảng ra chỗi toString()

/* const list = ['1, 2, 3, 4'];

console.log(list.toString(" ")); */


/* const list = ['1', '2', '3', '4'];

console.log(list.join(" - ")) */

//xoá phần tử cuối
/* const list = ["1", "2", "3", "4", "5", "6"];

console.log(list.pop());
 */

//thêm phần tử vào cuối

/* const list = ["1", "2", "3", "4", "5", "6"];

console.log(list.push("7"));

console.log(list);
 */

// arr.shift()  

/* const list = ['1', '2', '3', '4', '5'];

console.log(list.shift());

console.log(list);
 */

//arr.unshift thêm phần tử vào đầu mảng

/* const list = ["Trung", "Pham", "Chi"];

console.log(list.unshift("Trung"));

console.log(list); */

/* const fullName = new Name ("Trung", "Pham", "Chi");

const length = fullName.unshift("Mark");

document.write("this is my full name: " + fullName);

document.write("<br> the length of my name is: " + length); */