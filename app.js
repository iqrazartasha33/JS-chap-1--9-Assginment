//Chap 1 (Alert Chapter)


// Ans 1 the function show message in pops

// Ans 2
alert("Welcome to my website!");

//Ans 3 Alert function doesn,t call because JS is a case sensitive language.

//Ans 4
alert("Hello, world!");

//Chap 2 (Variables for Strings)

// Ans 1
var message = "Hello, world!";
alert(message);

//Ans 2
var age;       
age = 25;      
alert(age);    

//Ans 3
var greeting = "Good Morning!"; 
alert(greeting);                 

greeting = "Good Evening!";      
alert(greeting);          

//Ans 4
var favoriteColor = "blue";  
alert("My favorite color is " + favoriteColor);  

//Ans 5
var age;       
age = 25;      
alert(age);    




//Chap 3 (Variables for Numbers)

//Ans 1
var height = 170; 
var newHeight = height + 10; 
alert(newHeight); 

//Ans 2
var num1 = 50;      
var num2 = 30;       
var Sum = num1 + num2; 
alert("The sum is " + Sum); 

//Ans 3
var numToBeAdded = 20;   
var num1 = 30;            
var total = num1 + numToBeAdded; 
alert(total);             

//Ans 4
var price = 120;

// Add tax (10%) to the price
var tax = 0.10; 
var totalPrice = price + (price * tax);

alert("The total price after tax is: $" + totalPrice.toFixed(2));

//Chap 4 (Variables for Numbers)

//Ans 1
var myAddress = "YourCityName";


alert("My address is: " + myAddress);

//Ans 2
var userName = "Iqra";
var userEmail = "iqra@gmail.com";
var userPassword = "123";
alert("User Name: " + userName + "\nUser Email: " + userEmail + "\nUser Password: " + userPassword);

//Ans 3
let userAddress = "Gulistan-e-Johar";
alert("User Address: " + userAddress);

//Ans 4
var rose = "Folribundas";
var upperCaseRose;
try {
    upperCaseRose = Rose; 
} catch (error) {
    upperCaseRose = error.message;
}

// Display both results
alert("Value of rose: " + rose + "\nAttempt to access Rose: " + upperCaseRose);

//Chap 5 (Math expressions:Familier Operators)

//Ans 1
var sum = 25 + 30;
alert(sum);

//Ans 2
var num1 = 25;
var num2 = 5;
var sum = num1 + num2;
alert(sum);

//Ans 3
var modulusResult = 7 % 4;
alert(modulusResult);

//Chap 6 (Math Expressions:Unfamiliar Operators)

//Ans 1
var num = 3;
var newNum = num++;
alert("num: " + num + ", newNum: " + newNum);

//Ans 2
var counter = 10;
counter++;
counter++;
alert(counter);

//Ans 3
var points = 20;
points--;   
++points;   
alert(points);

//Ans 4
var number = 0;
++number;
++number;
++number;
alert(number);

//Chap 7 (Math Expressions:Eliminating ambiguity)

//Ans 1

let result1 = ((20 % 6) + 4) * 2 - 3;
console.log(result1);

//Ans 2

let result2 = (6+2) * (5-3);
console.log(result2); 


//Chap 8 (Prompts)

//Ans 1

var userName = prompt("What is your name?");
alert("Hello, " + userName);

//Ans 2
var age = prompt("How old are you?");
if (age === "") {
    alert("No age provided.");
} else {
    alert("You are " + age + " years old.");
}


//Ans 3

var pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
}

//Ans 4
var userInput = prompt("Enter a number between 1 and 10");
var number = Number(userInput); 
var result = number * 2; 
alert("The result is: " + result); 

//Ans 5

var favNum = prompt("What is your favorite number?");
if (favNum === null || favNum ==="") {
    favNum=7;
}
alert("Your favorite number is " + favNum);

//Chap 9 (If Statements)

//Ans 1

var answer = prompt("What is the capital of France?")
if(answer === "Paris"){
    alert("Correct!");
} else{
    alert("Try again!")
}

//Ans 2

var answer = prompt("What is the capital of France?")
if(answer === "Paris"){
    alert("Correct!");
} else{
    alert("Incorrect! The correct answer is 'Paris'!")
}

//Ans 3

var answer = prompt("What is the capital of the United Kingdom?")
if(answer === "London" || answer === "United Kingdom"){
    alert("Correct!");
} else{
    alert("Incorrect! The correct answer is 'London'!")
}

//Ans 4

var score =0;
var answer1 = prompt("What is the capital of France?")
if(answer1 === "Paris"){
    score++;
    alert("Correct! Your score is: " + score);
} else{
    alert("Incorrect! The correct answer is 'Paris'. Your score is:" + score);
}

//Ans 5

var answer1 = prompt("What is the capital of Germany?")
var answer2 = prompt("What is 10 + 10?")
if(answer1 === "Berlin" && answer2 === "20"){
    score++;
    alert("You got both right!");
} else if ( answer1 ==="Berlin" || answer2 === "20"){
    alert("You got one correct!");
} else {
    alert("You got both wrong!")
}












