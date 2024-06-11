import { createContext, useEffect, useState } from 'react';
import ExpenseTrackerBottom from './ExpenseTrackerBottom';
import ExpenseTrackerTop from './ExpenseTrackerTop';
export const Context = createContext();

const ExpenseDashboard = () => {
    const [change,setChange] = useState(false);
    const [wallet,setWallet] = useState(5000);
    const[transactionList,setTransactionList] = useState(JSON.parse(localStorage.getItem('transactionList')));
    const [transactionTotal,setTransactionTotal] = useState()
    const [entertainmentTotal,setEntertainmentTotal] = useState();
    const [foodTotal,setFoodTotal] = useState();
    const [travelTotal,setTravelTotal] =  useState();


    useEffect(()=> {        
        setTransactionList(JSON.parse(localStorage.getItem('transactionList')));
        setWallet(JSON.parse(localStorage.getItem('wallet')))
        
        if(transactionList){
            setTransactionTotal(transactionList.reduce((total,transaction) => total+transaction.price,0));
            setEntertainmentTotal(transactionList.filter((transaction) => 
            (transaction.category==='Entertainment'))
            .reduce((total,transaction) => total+transaction.price,0))
            setFoodTotal(transactionList.filter((transaction) => 
            (transaction.category==='Food'))
            .reduce((total,transaction) => total+transaction.price,0))
            setTravelTotal(transactionList.filter((transaction) => 
            (transaction.category==='Travel'))
            .reduce((total,transaction) => total+transaction.price,0))
        }
    },[change])
   
    
    const entertainmentPercent = entertainmentTotal/transactionTotal;
    const foodPercent = foodTotal/transactionTotal;
    const travelPercent = travelTotal/transactionTotal;

    let data= [
        { label: 'Entertainment', value: entertainmentTotal, color: '#FF9304' },
        { label: 'Food', value: foodTotal, color: '#A000FF' },
        { label: 'Travel', value: travelTotal, color: '#FDE006' },
    ];

    return ( 
        <Context.Provider value={{data,transactionList,
        entertainmentPercent,foodPercent,travelPercent,
        transactionTotal,wallet,change,setChange}}>
            <div>
                <ExpenseTrackerTop />
                <ExpenseTrackerBottom />
            </div> 
        </Context.Provider>
    );
}
 
export default ExpenseDashboard;