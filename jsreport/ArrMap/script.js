/* const numbers1 = [40, 100, 1, 5, 25, 10];

const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
}

document.getElementById("demo").innerHTML = numbers2; */


// Khi sử dụng for loop để xử lý

/* var num1 = [40, 100, 1, 5, 25, 10];

var num2 = [];

for(var i = 0; i < num1.length; i++) {
    num2[i] = num1[i] + 5;
}

document.getElementById("demo").innerHTML = num2; */

/* let num = [1, 2, 3, 4];

let new_num = num.map((element, index) => {
    return (element + index);
});

console.log(new_num); */

// FILTER arr.filter()

/* const numb = [40, 100, 1, 5, 25, 10]; 

const numbCheck = numb.filter(myFunction);

function myFunction (value) {
    return value > 18;
}

console.log(numbCheck); */

/* const num = [40, 100, 1, 5, 25, 10]; 

const result = num.filter((element, index) => {
    return (element < 85 || index > 2)
})


console.log(result);  */

const numb = [40, 100, 1, 5, 25, 10];

    let checkNum = numb.filter((value, index, num) => {
        return (value > 50 && index < 2 && num.length < 10);
    });


console.log(checkNum); 