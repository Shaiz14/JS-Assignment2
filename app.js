// Chapter #6
// Q#1
// var a = 10;
// document.write(a)+ "</br>";
// ++a;
// document.write(a) + "\n";
// a++;
// document.write(a)+ "\n";
// --a;
// document.write(a)+ "\n";
// a--;
// document.write(a);
// Q#2
// var a = 2
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result);
// var c = --a;
// document.write(c);
// c = --a - --b;
// document.write(c);
// c = --a - --b + ++b;
// document.write(c);
// c = --a - --b + ++b + b--;
// document.write(c);
// q#3
// var userName = prompt("Enter your name")
// alert( "Welcome " + userName);
// q#4
// var table = prompt("Enter your desire table");
// if(table == ""){
//     document.write(5 + "X" + 1 + " = " + 5*1);
//     document.write(5 + "X" + 2 + " = " + 5*2);
//     document.write(5 + "X" + 3 + " = " + 5*3);
//     document.write(5 + "X" + 4 + " = " + 5*4);
//     document.write(5 + "X" + 5 + " = " + 5*5);
//     document.write(5 + "X" + 6 + " = " + 5*6);
//     document.write(5 + "X" + 7 + " = " + 5*7);
//     document.write(5 + "X" + 8 + " = " + 5*8);
//     document.write(5 + "X" + 9 + " = " + 5*9);
//     document.write(5 + "X" + 10 + " = " + 5*10);}
//     else {
//     document.write(table + "X" + 1 + " = " + table*1);
//     document.write(table + "X" + 2 + " = " + table*2);
//     document.write(table + "X" + 3 + " = " + table*3);
//     document.write(table + "X" + 4 + " = " + table*4);
//     document.write(table + "X" + 5 + " = " + table*5);
//     document.write(table + "X" + 6 + " = " + table*6);
//     document.write(table + "X" + 7 + " = " + table*7);
//     document.write(table + "X" + 8 + " = " + table*8);
//     document.write(table + "X" + 9 + " = " + table*9);
//     document.write(table + "X" + 10 + " = " + table*10);

                    // Q#6
    // let subject1 = prompt ("Enter the name of the first subject"," maths");
// let subject2 = prompt ("Enter the name of the second subject", "physics");
// let subject3 = prompt ("Enter the name of the third subject", "urdu");

// console.log("Subject1" , + subject1);
// console.log("Subject2" , + subject2);
// console.log("Subject3" , + subject3);

// var totalMarks = 100;
// let obtainedmarksubject1 = prompt ("Enter the obtained marks for subject1 "," maths" ,+totalMarks);

                            // Chapter # 7
                
// // q#1
// var city = prompt("Enter the city name").toUpperCase();
// if(city === "KARACHI"){
//     alert("Welcome to The City of Lights");
// }
// else{
//     alert("Welcome to the " + city);
// }
// // Q#2
// var gender = prompt("Enter your Gender ").toLowerCase();
// if(gender === "male"){
//     alert("Welcome Sir ")
// }
// else if(gender === "female"){
//     alert("Welcome Ma'am")
// }
// else{
//     alert("Please write correct gender");
// }
// // Q#3

// //q#4
// var fuel = +prompt("How much fuel Remains");
// if (fuel <= 1){
//     alert("Please refill Your fuel")
// }
// else{
//     alert("Your can go more")
// }
// q#5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (++b === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("given condition in not true")
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// // q#7
// var secretNumber = 3;
// var guess = +prompt("Enter the Secret number");
// if(guess === secretNumber){
//     alert("Bingo! Correct Answer");
// }
// else if(guess === secretNumber+1 || guess === secretNumber-1){
//     alert("Close to correct Number")
// }
// //q#8
// var num = +prompt("Enter the Number");
// if (num%3 === 0 ){
//     alert("it is divisible by 3")
// }
// // Q#9
// var num = +prompt("Enter the Number")
// if(num%2 === 0 ){
//     alert("It is Even Number");
// }
// else{
//     alert("It is Odd number")
// }
// //q#10
// var T = +prompt("Enter the Temprature")
// if (T >=40){
//     alert("The Weather too hot outSide");
// }
// else if (T >=30){
//     alert("The Weather is hot");
// }
// else if (T >=20){
//     alert("The Weather is Normal");
// }
// else if (T >=10){
//     alert("The Weather is cool");
// }
// else{
//     alert("Namaz e Janaza Ka elan baad main kia jaye ga");
// }
// //q#11
// var firstNum = +prompt("Enter the First number");
// var oprater = prompt("Enter The operator")
// var secondNum = +prompt("Enter the Second number");
// if(oprater === "+"){
//     alert(firstNum + secondNum)
// }
// else if(oprater === "-"){
//     alert(firstNum - secondNum)
// }
// else if(oprater === "*"){
//     alert(firstNum * secondNum)
// }
// else if(oprater === "/"){
//     alert(firstNum / secondNum)
// }
// else{
//     alert("Please write correct operator");
// }

//                         Assignment 11
// // Q#1

// var ch = prompt("Enter the value");
// var index = 0;

// var a = ch.charCodeAt(index);
// console.log(a);
// if (a>=65 && a<=90){
//     alert(" is Capital alphabets")
// }
// else if(a>=97 && a<=122){
//     alert("It is small word");
// }
// else if(a>=48 && a<=57){
// alert("Given value is number")
// }
// else{
//     alert("It is a special character.")
// }
// //q#2
// var num1 = +prompt("Enter the nUmber");

// var num2 = +prompt("Enter the number2");
// var result = num1 + num2;
// if(result >= 10){
//     alert("It is a greater number");
// }
// else {
//     alert("It is a small number")
// }
// //q#3
// var number = +prompt("Enter the number");
// if (number < 0 ){
//     alert("it is negative number");
// }
// else if (number > 0 ){
//     alert("It is positive number");
// }
// else {
//     alert("It is zero")
// }
// // Q#4
// var character = prompt("Enter the Number");
// var index = 0;
// var i = character.charCodeAt(index);
// if (i = 65){
//     alert(true);
// }
// else if (i = 69){
//     alert(true);
// }
// else if(i=73){
//     alert(true);
// }
// else if(i = 79){
//     alert(true);
// }
// else if(i = 85){
//     alert(true);
// }
// else{
//     alert(false)
// }
// //Q#5
// var password = "Ubaidrehman91";
// var putPassword = prompt("Enter the Password");
// if (putPassword === password){
//     alert("Correct Password");
// }
// else if (putPassword == "" || " "){
//     alert("Enter the Password");
// }
// else if(putPassword != password ){
// alert("Wrong Password");
// }
// else{
//     alert("Insan banja")
// }
// // Q#6
// var greeting;
// var hour = 20;
// if (hour < 18) {
//     greeting = "Good day";
//     alert (greeting);
// }
// else
// {greeting = "Good evening";
// alert(greeting)}
// q#7
var time = +prompt("Enter the Time" , "--:--")
if (time >= 0000 && time <= 1200){
    alert("Good morning");
}
else if(time>=1200 && time <= 1700){
    alert("Good afternoon")
}




