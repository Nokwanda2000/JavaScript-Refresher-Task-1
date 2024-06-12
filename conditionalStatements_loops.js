let temperature = 12; 

if(temperature < 0){
    console.log("It's freezing!");
}
else if(temperature >= 0 && temperature <= 15){
    console.log("It's cold.");

}
else if(temperature >=16 && temperature <= 25){
    console.log("It's mild.");

}
else if(temperature > 25){
    console.log("It's warm.");
}

//using switch statements//

switch(true){
    case temperature < 0:
        console.log("It's freezing!");
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("It's cold.");
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("It's mild");
        break;
        default:
            console.log("It's warm.");
}
//excercise 2 //
let number1 = 12;

if(number1 % 2 === 0 && number1 % 3 === 0){
    console.log("Divisible by both.");
}
else if(number1 % 2 === 0){
    console.log("Divisible by 2");
}
else if(number1 % 3 === 0){
    console,log("Divisible by 3");
}
else{console.log("Not divisible by 2 or 3")};

//Using  switch statements//

switch(true){
    case number1 % 2 === 0 && number1 % 3 === 0 :
        console.log("Divisible by both");
        break;
        case number1 % 2 === 0:
            console.log("Divisible by 2 ");
            break;
        case number1 % 3 === 0:
            console.log("Divisible by 3")
            break;
            default:
                console.log("Not divisible by 2 or 3.");
}

//excercise3//

for(let i = 1; i<= 10; i++){
    console.log(i);
}

for(let i= 2; i<=20; i +=2){
    console.log(i);
}

let sum1= 0;
for(let i = 1; i <=100; i++){
    sum1 += i;
}
console.log(sum1);

//array//
const numbers = [1,2,3,4,5];
for(let i= 0; i< numbers.length; i++){
    console.log(numbers[1]);
}

//array largest number//
const numbers2 = [3,7,2,5,10,6];
let max = numbers2[0];
for(let i = 1; i< numbers2.length; i++){
    if(numbers2[i] > max){
        max = numbers2[i];
    }
}
console.log(max);

//excercise 4//

//print numbers from 1 to 10//
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

//print even numbers between 1 and 20//

 i =2;
while(x <= 20){
    console.log(x);
    i += 2
}
//calculate the sum of all numbers from 1 to 100 and print all the result//

let sum3 =0;
// let y= 1;
while(y <=100){
    sum3 += y;
    y++;
}
console.log(sum3);

//print all multiples of 5 less than 50//
let z =5
while(z < 50){
    console.log(z); 
    z += 5;
}

//excercise 5:Do while loops//

//Print numbers from 1 to 10//

let m =1;
do{
    console.log(m);
    m++;

}
while(m <= 10);

//calculate the sum of all numbers from 1 to 100 and print the results:

let total2 = 0;
m = 0
do{
    total2 += m;
    m++;

}
while(m <=100)

//prompt the user to enter a number greater than 10//
 
let user;
do{
    user = prompt("Ënter a number greater than 10:");

} while(user <= 10);

//create a simple guessing game://
let mainNumber = 10 ;

let userGuess;
do{
    userGuess = prompt("Guess number between 10 to 20");
    if(userGuess == mainNumber){
        alert("Congratulations you are correct!.");
    
    }else {
        alert("Oops try again!");
    }

} while(userGuess != correctNumber)
