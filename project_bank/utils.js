

export function chakeName(name){
    if(name) return true
    throw Error("The name error")
          
}

export function chakeNum(num){
    if (Number.isInteger(num)){
        return true
    }   
    throw Error (" Number most to be integer ")
}

export function chakeNumPositive(balance){
    if (balance >= 0){
        return true
    }   
    throw Error (" Balance most to be positive ")
}

export function chakeTipeAccont(tipe){
    if (["regular" , "premium" ,"student"].includes(tipe)){
        return true
    }   
    throw Error (" Tipe most to be from this : regular , premium ,student ")}


export function findDetailsCustomer(list,id,amaunt){
    const find_id = list.find(obj => obj.id === id )
    if (!find_id) throw Error("customar not found")
    if (!find_id.isActive) throw Error("The cuontamer not active")
    if (amaunt <= 0) throw Error("The amaunt ngative")
    return find_id   
}

export function chek_balance(list,amaunt){
     if (list.balance - amaunt < 0){
        throw Error("There is not enough money in the account")
     } return true
}  



export function SearchCustomer_Validation(list,detail){
    if(!isNaN(detail)){
    const returncustomerByid = list.filter(obj => obj.id === +detail )
    if(returncustomerByid.length === 0 ){ 
    throw Error(" The customer not found ")}
    return returncustomerByid}
                                                                        
    const returncustomer = list.filter(obj => obj.fullName.toLowerCase() === detail.toLowerCase() )
    if(returncustomer.length === 0){
        throw Error((" The customer not found "))}
    return returncustomer
}


export function countActiveAccounts(list){
  const new_list = list.filter(obj => obj.isActive === true)
  return new_list.length
    
}


export function TotalMoney(list){
    const sum_all = list.map(obj => obj.balance).reduce((acc,num)=> acc + num,0)
    return sum_all
}


export function AverageBalance(list){
    const sum_all = TotalMoney(list)
    return sum_all / list.length
}


export function HighestBalance(list){
    const list_balance = list.map(obj => obj.balance)
if(list_balance.length >0){
    const max =  Math.max(...list_balance)
    return max}
    return NaN
}  





