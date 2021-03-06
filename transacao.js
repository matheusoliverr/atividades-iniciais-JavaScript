const user={
    name: "Mariana",
    transactions:[],
    balance:0
};

//Funcionalidade de adicionar transações, com diferenciação entre crédito e débito

function createTransaction(transaction){
    
       if(transaction.type=="credit"){
        user.transactions.push(transaction)
        user.balance=user.balance+transaction.value
       }
       else{
           if(transaction.type=="debit"){
            user.transactions.push(transaction)
            user.balance=user.balance-transaction.value}
           else{
               console.log("Only credit or debit are allowed!")
           }
       }
}

//Funcionalidade de contagem de transações pelo seu tipo

function getTransactionsCount(type){
let transactionNumber=0
    for(transaction of user.transactions){
    if(transaction.type==type){
        transactionNumber=transactionNumber+1
    }
}
return transactionNumber
}

//Funcionalidade de cálculo da maior transação realizada pelo seu tipo

function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue=0
    for(transaction of user.transactions){
        if(transaction.type==type && transaction.value>higherValue){
            higherValue=transaction.value
            higherTransaction=transaction
        }
    }
    return higherTransaction
}

//Funcionalidade de cálculo da média de valor das transações

function getAverageTransactionValue(){
    let totalValue=0
    for(transaction of user.transactions){
        totalValue=totalValue+transaction.value
    }
    return totalValue/user.transactions.length
}

createTransaction({type:"credit", value:50})
createTransaction({type:"credit", value:150})
createTransaction({type:"debit", value:100})

console.table(user)
console.log(`Credit: number of transactions=${getTransactionsCount("credit")}`, getHigherTransactionByType("credit"))
console.log(`Debit: number of transactions=${getTransactionsCount("debit")}`, getHigherTransactionByType("debit"))
console.log(`Average:${getAverageTransactionValue()}`)
