let name = "Netanel"
let age = 25
age = 26
const message = `aii ${name},${age}.`


if (age > 18) {
    console.log("hold")
}

else {
    console.log("lower")
}



if (age % 2 === 0){
    console.log("true")
}

else{
    console.log("false")
}

const boll = true

if (boll){
    console.log("wolkam")

}
else{
    console.log("please conectet")
}    

const num = 0

if (num > 0){
        console.log("is oposite")

} else if (num === 0 ){
        console.log("is zero")

}
else{
        console.log("is negative")

}

const a = 10;
const b = 20;


if (a === b ){
    console.log("equal")

} else if (a > b){
     console.log("a is big")
}
else{
     console.log("b is big")
}



const password = "1234"


if (password === "1234" ){
    console.log("good")

} else {
    console.log("error")
}


const x = 15;

if (x >= 10 && x <= 20 ){
     console.log("yes")
}

else{
     console.log("no")
}



const grade = 62;

if (grade >= 90){
         console.log("exelent")
}else if (grade >= 75){
         console.log("good")
}
else if (grade >= 60){
         console.log("pass")
}
else{

         console.log("failed")
}

const temp = 28;

if (temp > 30){
         console.log("It's hot outside")
}else if (temp >= 20){
         console.log("Nice outside")
}
else{ 
     console.log("it's cold outside")

}


age = 20;
const hasID = true;

if (age >= 18 && hasID){
    console.log("entry is allowed")
}
else{
    console.log("entry is prohibited")
}


const hasCard = false;

if (hasCard){
console.log("entry is allowed")

}
else{
    console.log("entry is prohibited")

}


name = "ben"
if (!name){
    console.log("guest")
}
else{
    console.log(`${name}`)
}

const arr = [];

if (arr){
    console.log("is full")
}
else{
    console.log("is clean")
}

const x2 = "5";
const y = 5;


if (x2 === y){
    console.log("true")
}

if (x2 == y){
    console.log("true")
}


for (let i = 0 ; i < 10 ; i ++){
    console.log(i)
}



for (let i = 10 ; i > 0 ; i --){
    console.log(i)
}


const nmubers = [1,2,3,4]
let sum_all = 0

for (const number of nmubers){
    sum_all += number
}

console.log(sum_all)


const names = ["דנה", "יוסי", "מיכל", "רון"];

for (let name of names){
    console.log(name)
}

const numbers = [2, 5, 8, 11, 14, 17, 20];
for (let num of numbers){
    if (num % 2 == 0){
        console.log(num)
    }
}
    
const numbers1 = [3, 99, 12, 45, 78];
let big_num = numbers1[0]

for (let i = 1 ; i < numbers1.length ; i ++ ){
    if(numbers1[i] > big_num){
        big_num = numbers1[i]
    
}
}
console.log(big_num)


const word1 = "javascript";

for(const word of word1){
    console.log(word)
}

const numbers3 = [1, 2, 3, 4];
for (let number of numbers3){
    console.log(number * 2)
}



let num2 = 1 

while (num2 < 11){
    console.log(num2)
    num2 ++
}


