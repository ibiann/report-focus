var scores = [6, 10, 7, 9, 4];
document.getElementById("demo").innerHTML = scores;
function checkAdult(scores) {
    return scores <= 5;
}
 
function myFunction() {
    document.getElementById("demo").innerHTML = scores.find(checkAdult);
}