1//

function return_araay(obj){
    const new_list = []
    for (const key of Object.keys(obj)){
         new_list.push(key)
    }return new_list
}      
    
console.log(return_araay({1:2}))

2//

function return_araay_ofval(obj){
    const new_list = []
    for (const val of Object.values(obj)){
         new_list.push(val)
    }return new_list
}      


3//

function return_araay_ofval(obj){
    for (const [key,val] of Object.entries(obj)){
         console.log(key,":",val)

    }
}      

return_araay_ofval({1:2})

4//


const obj1 = { math: 80, english: 90, science: 70 }

function return_avarage(obj){
    const val = Object.values(obj)
    const_sum = val.reduce((acc,num) => acc + num , 0) / val.length 
    return const_sum
 }    


console.log(return_avarage(obj1))

const obj2 = { gggg: 80, enfff: 90, sfience: 70 }


5//

function conectObj(obj1,obj2){
     const newobj = Object.assign(obj1,obj2)
     return newobj
}

console.log(conectObj(obj1,obj2))


6//

function conectObj(defult,user){
     const newobj = Object.assign(defult,user)
     return newobj
}

7//


const findkey = (obj,key) => Object.hasOwn(obj,key)

console.log(findkey(obj2,"gggg"))


8//


const obj_2 = {1:2,3:4}

obj_2["1"] = 4

console.log(obj_2)



9//

const l15 = [["name", "Alice"], ["age", 25]]

console.log(Object.fromEntries(l15))


10//

const l16 = { apple: 10, banana: 5, mango: 20 }


function new_l161(obj){
    return Object.fromEntries(
    
    Object.entries(obj).map((list) => 
    { list[1] * 0.9;
    return list}))}


console.log(new_l161(l16))










