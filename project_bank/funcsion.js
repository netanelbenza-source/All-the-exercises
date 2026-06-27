import {chakeName,chakeNum,chakeNumPositive,chakeTipeAccont,findDetailsCustomer,chek_balance,SearchCustomer_Validation,countActiveAccounts,TotalMoney, AverageBalance,HighestBalance} from "./utils.js"
import {list} from "./main.js"


export function createUserByid(){
    let id = 0
function createUser(obj){
    chakeName(obj.fullName)
    chakeNum(obj.balance)
    chakeNumPositive(obj.balance)
    chakeTipeAccont(obj.accountType)
    id ++
    const objOfCustomer =  {
        id : id,
        fullName:obj.fullName,
        accountType:obj.accountType,
        balance:obj.balance,
        isActive:true
     
    }
    list.push(objOfCustomer)
    console.log("Customer created successfully")
}return createUser
}


export const returnStatusCustomers = () => console.table(list)


export function Deposit(CustomerID,Amount){
    const objectCus = findDetailsCustomer(list,CustomerID,Amount)
    objectCus.balance += Amount
    console.log("Deposit completed successfully")
}


export function Withdraw(CustomerID,Amount){
    const objectCus = findDetailsCustomer(list,CustomerID,Amount)
    chek_balance(objectCus,Amount)
    objectCus.balance -= Amount
    console.log("Withdraw completed successfully")
}


export function SearchCustomer(detail){
    const get_obj = SearchCustomer_Validation(list,detail)
    console.log(get_obj)
}


export function CloseAccount(detail){
    const objOfCustomer = SearchCustomer_Validation(list,detail)
    objOfCustomer[0].isActive = false
    console.log("Account closed successfully")
}



export function ShowStatistics(){
        const count =  countActiveAccounts(list)
        const totalMonay =   TotalMoney(list)
        const avar =  AverageBalance(list)
        const highestBalance =  HighestBalance(list)
        const list_of_static = [{Total_Customers : list.length ,Active_Accounts:count,Total_Money:totalMonay,Average_Balance:avar,Highest_Balance:highestBalance}]
        console.table(list_of_static)
}




