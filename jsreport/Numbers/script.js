// num.toString()

/* let x = 123;

console.log(x.toString() + "\n" + (123).toString() + "\n" + (100 + 23).toString());
 */

/* 
let x = 1000;

console.log((1000).toString(x)); */ //Uncaught RangeError: toString() radix argument must be between 2 and 36(đối số)


//num.toExponential (số mũ)

/* 
let x = 123;

console.log(x.toExponential()); */


//num.toFixed() 

/* var num=177.1234;
document.write("num.toFixed() is : " + num.toFixed()); 
document.write("<br />"); 

document.write("num.toFixed(6) is : " + num.toFixed(6)); 
document.write("<br />"); 

document.write("num.toFixed(1) is : " + num.toFixed(1)); 
document.write("<br />"); 

document.write("(1.23e+20).toFixed(2) is:" + (1.23e+20).toFixed(2)); 
document.write("<br />"); 

document.write("(1.23e-10).toFixed(2) is : " + (1.23e-10).toFixed(2)) */;


//Number()

function myFunction() {
    var content = 'Hello ' + Number('Hello') + '<br>';
    content = content + 'Date() - ' + Number(new Date()) + '<br>';
    console.log(content);
}


// function myFunction() {
//     var content = '14Hello - ' + parseInt('14Hello') + '<br>';
//     content = content + '99 88 77' + parseInt('99 88 77') + '<br>';
//     content = content + '.555-444 534 - ' + parseInt('.555-444 534') + '<br>';
//     content = content + '14.5Freetuts - ' + parseInt('14.5Freetuts') + '<br>';
//     content = content + ' freetuts.net - ' + parseInt(' freetuts.net') + '<br>';
//     content = content + '1234 hệ thập phân - ' + parseInt('1234', 10) + '<br>';
//     content = content + '1234 hệ bát phân - ' + parseInt('1234', 8) + '<br>';
//     content = content + '0x13 hệ thập lục phân - '
//     + parseInt('0x13', 16) + '<br>';
//     document.getElementById("demo").innerHTML = content;

