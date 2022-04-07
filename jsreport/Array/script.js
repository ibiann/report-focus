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


// lấy 1 phần tử mảng nhưng ko thay đổi mảng cũ
/* const arr = ["1", "2", "3", "4", "5"];

console.log(arr.slice(0, 2));

console.log(arr.slice()); */



// ARRAY SORT

// arr.sort() + arr.reverse()

/* const arr = [1, 2, 3, 4, 5];

console.log(arr.sort());
console.log(arr.reverse()); */


// function

/* var arr = [40, 100, 1, 5, 25, 10];
arr.sort(function(a, b) {
    return (b - a)
})
console.log(arr);
 */

/* const arr = [40, 100, 1, 5, 25, 10];

arr.sort(function(a, b) {
    return 0.5 - Math.random();
});

console.log() */

/* const arr = [40, 100, 1, 5, 25, 10];

console.log(arr);

function myFunction() {
    arr.sort(function(a, b) {
        return 0.5 - Math.random();
    });
    console.log(arr);
}
 */


// Math.max() tìm giá trị lớn nhất

/* const arr = [40, 100, 1, 5, 25, 10];


function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

document.write("the largest number is: " + myArrayMax(arr));
 */

//return Math.min.apply tìm giá trị bé nhất

/* const arr = [40, 100, 1, 5, 25, 10];

function myFunction() {
    return Math.min.apply(null, arr);
}

document.write("this is the smallest number: " + myFunction(arr)); */

// SORT PHỨC TẠP
/* const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

// cars.sort(function(a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();

//     if (x < y) {
//         return -1;
//     } else if (x > y) {
//         return 1;
//     }
// });

function myFunction() {
    cars.sort((a, b) => {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();

        if (x < y) {
            return -1;
        } else if (x > y) {
            return 1;
        }
        return 0;
    });

    displayCars();
}

function displayCars() {
    console.log(
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year
    );
} */