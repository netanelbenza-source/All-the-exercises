1//

let str_1 = " hello world "
console.log(str_1.trim())


2//


let str_2 = "user@gmail.com"
console.log(str_2.includes("@"))

3//

let str_3 = "javascript"
console.log(str_3.toUpperCase())

4//

let str_4 =  "HELLO WORLD"
console.log(str_4.toLowerCase())



6//

let str_5 = "JavaScript"
console.log(str_5.slice(0,4))

7//

console.log(str_5.slice(4,str_5.length))


8//

let str_6 = "https://example.com"
console.log(str_6.startsWith("https"))

9//
console.log(str_6.endsWith("com"))


10
//

let str_7 = " hello world "
console.log(str_7.replace("hello" , "Hi"))

11//

console.log(str_7.replaceAll("l","p"))


12//


let split_1 = "one two three"
console.log(split_1.split(" "))



13//

const string = "one two three"
let new_arr = string.split(" ")
new_arr.pop()
console.log(new_arr)

14//

console.log(string.indexOf("e"))

15//

console.log(string.lastIndexOf("e"))


19//

let string_1 = "hello"
console.log(string_1.charAt(0))


20//

console.log(string_1.at(-1))

let string_2 = "Hello"
let string_3 = "world".concat(` ${string_2}`)
console.log(string_3)






a