1//

// function createLogger(){
//     function print(){
//         return("Hello")
//     }
//     return print()
// }


// console.log(createLogger())


2//

// function createGreeting(name){
//     function print(name){
//         return(`"Hello" ${name}`)}
//     return print(name)    
// }

// console.log(createGreeting("natan"));




3//


// function createCounter(){
//     let num = 0
//     function counter(){
//         num ++ 
//         return num }
//     return counter
    

// }
     
// const cou = createCounter()
// console.log(cou())
// console.log(cou())




4//


// function outer() {

//   let x = 10;

//   return function () {

//     console.log(x);

//   };

// }

// const fn = outer();

// fn();



// 5//

// function createMultiplier(x){
//     let number = x
//     return function (num) {
//         return number * num 
//     }
// }


// const mull = createMultiplier(2)
// console.log(mull(5));


// 6//


// function createAdder(number){
//         let num_ = number
//         return function(num){
//             num_ += num
//             return num_
//         }

// }

// const add = createAdder(5)
// console.log(add(3));
// console.log(add(3));



// 7//


// function createSecret(){
//     let num = 4
//     function get(){
//         return num
//     }
//      function set(number){
//         num += number 
//         return num 
//     }
//     return {get,set}
// }


// const add_num = createSecret()
// console.log(add_num.get());
// console.log(add_num.set(5));
// console.log(add_num.get());




// 8//
// const mass = () => "Hello"

// function once(fun){
//     let num = 0
//     return function return_fun(){
//         if (num < 1){
//             num ++
//             return fun
//        } else{
//          return "none"
//        }
//     }
// }

// const fun = once(mass())
// console.log(fun())      
// console.log(fun())


