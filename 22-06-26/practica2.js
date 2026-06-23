// const numbers = [1,2,3]
// console.log(numbers)

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits[0],fruits[fruits.length -1])

// fruits.splice(1,1,"mango")

// console.log(fruits)

// fruits.push("orange")

// fruits.pop()

// fruits.unshift("kiwi")

// fruits.shift()

// const arr = ["a", "b", "c", "d"];

// arr.splice(1,1)

// console.log(arr)


// arr.splice(1,0,"x")

// console.log(arr)


// console.log(arr)

// arr.splice(1,0,"x")
// console.log(arr)


// arr.splice(2,1,"y")
// console.log(arr)


// const numbers = [1,2,3,4,5]

// console.log(nmubers.length)
// console.log(numbers[nmubers.length -1])

// const items = [1,"o",true]
// for (item of items) console.log(item)

// const nums = [10, 20, 30];
// for (num of nums) console.log(num)



// const nums = [10, 20, 30];
// sum_all = 0
// for (num of nums){
//     sum_all += num
// console.log(sum_all)    
// }
 
// const arr = [3, 8, 12, 1]
// for (num of arr){
//     if(num > 5) console.log(num)
// }


// const person = {name:"Natan",age:16}
// console.log(person)

// console.log(person.name)
// console.log(person.age)
// console.log(person["name"])
// console.log(person["age"])

// person["city"] = "tlv"
// console.log(person)
// Object.assign(person,{aaa:23})
// console.log(person)

// delete person.age
// console.log(person)

// console.log(("age" in person))

const student = {
  name: "Yael",
  grades: [90, 80, 100]
}

console.log(student.grades.shift())
console.log(student)

student.grades.push(88)
console.log(student)

student.grades.pop()

console.log(student)


const user = {

  username: "admin",

  role: "manager",

  active: true

};

const newlist = []
for (const key in user){
    newlist.push(key)
}

console.log(newlist)

const newlist1 = []

for (const val of Object.values(user)){
    newlist1.push(val)
}

console.log(newlist1)


for (const [key,val] of Object.entries(user)) console.log(key,val)
    

const a = [1,2,34]

for (const num in a) console.log(num)
    