import input from "analiza-sync"
import {createUserByid,returnStatusCustomers,Deposit, Withdraw,SearchCustomer,CloseAccount,ShowStatistics} from "./funcsion.js"



export const list = []
      



function main(){
    let ToExit = true
    const created = createUserByid()

    while (ToExit){
        console.log("____MENU____")
    console.log(" TO Create Coustomer enter 1 : ")
    console.log(" TO Show Customers enter 2 :")
    console.log(" TO Deposit enter 3 : ")
    console.log(" TO Withdraw enter 4 :")
    console.log(" TO Search Customer enter 5 : ")
    console.log(" TO Close Account 6 :")
    console.log(" TO Show Statistics 7 : ")
    console.log(" TO exit enter 8 : ")
    console.log("____________________________")

    const input_choice = input(" please enter your choice : ")
    switch(input_choice){
        case "1" :
            const name = input(" please enter your name : ").trim()
            const balance = +(input(" please enter your balance : ").trim())
            const tipe_account = input(" please enter tipe_account : ").trim()
            created({fullName:name ,balance:balance,accountType:tipe_account})
            break
        
        case "2" :
            returnStatusCustomers()
            break
        
        case "3" :
            const id_ =  +input(" please enter your id")
            const amaunt_ =  +input(" please enter amaunt ")
            Deposit(id_,amaunt_)
            break
        
        case "4":
            const id =  +input(" please enter your id")
            const amaunt =  +input(" please enter amaunt ")
            Withdraw(id,amaunt)
            break

        case "5":
            const detail_ = input(" please enter id or name ")
            SearchCustomer(detail_)
            break
        
        case "6":
            const detail = input(" please enter id or name ")
            CloseAccount(detail)
            break
        
        case "7":
            ShowStatistics()
            break
        
        case "8":
            ToExit = false
            break    
        default:
            console.log("The value is unknown")    
    } 
    }
return}


main()