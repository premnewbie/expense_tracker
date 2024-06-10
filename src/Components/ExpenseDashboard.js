import { createContext, useEffect, useState,useRef } from 'react';
import ExpenseTrackerBottom from './ExpenseTrackerBottom';
import ExpenseTrackerTop from './ExpenseTrackerTop';
export const Context = createContext();

const ExpenseDashboard = () => {
    const [change,setChange] = useState();
    let wallet = JSON.parse(localStorage.getItem('wallet'));;
    const[transactionList,setTransactionList] = useState(JSON.parse(localStorage.getItem('transactionList')));

    useEffect(()=> {
        setTransactionList(JSON.parse(localStorage.getItem('transactionList')));
    },[change])

    const transactionTotal = transactionList.reduce((total,transaction) => total+transaction.price,0)

    const entertainmentTotal = transactionList.filter((transaction) => 
        (transaction.category==='Entertainment'))
        .reduce((total,transaction) => total+transaction.price,0)

    const foodTotal = transactionList.filter((transaction) => 
        (transaction.category==='Food'))
        .reduce((total,transaction) => total+transaction.price,0)

    const travelTotal = transactionList.filter((transaction) => 
        (transaction.category==='Travel'))
        .reduce((total,transaction) => total+transaction.price,0)

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
        wallet,change,setChange}}>
            <div>
                <ExpenseTrackerTop />
                <ExpenseTrackerBottom />
            </div> 
        </Context.Provider>
    );
}
 
export default ExpenseDashboard;