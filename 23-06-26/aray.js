const l1 = [1, 2, 3, 4, 5]

const newl1 = l1.map((num) => num * 2)

console.log(newl1)

const l2 = ["hello", "world"] ;

const newl2 = l2.map((word) => word.toUpperCase())

console.log(newl2)

const l3 = [1, 2, 3, 4, 5]

const newl3 = l3.map((num) => num + 1.18)

console.log(newl3)


const l4 = [1, 2, 3, 4, 5, 6]

const newl4 = l4.filter((num) => num%2 === 0)

console.log(newl4)



8//
const l5 = [90,80,100,110,67]

const newl5 = l5.filter((num) => num > 100).map((num) => Math.round(num * 1.18))

console.log(newl5)



10//

const l6 = [10, 20, 30]

new_l6 = l6.reduce((acc,num)=> acc * num ,1)

console.log(new_l6)




12//

const l7 = [10, 20, 30]

new_l7 = l7.reduce((acc,num) => acc + num ,0)

console.log(new_l7 /l7.length)


25//

const l8 = [20,40,10]

l8.sort((a,b) => a - b) 

console.log(l8)


29//

const l9 = [20,40,10,50,70]

l9.splice(1,2)

console.log(l9)


32//


const l10 = [1,2,[1,2]]

console.log(l10.flat())



