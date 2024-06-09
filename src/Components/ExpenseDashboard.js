import { createContext, useEffect, useState } from 'react';
import ExpenseTrackerBottom from './ExpenseTrackerBottom';
import ExpenseTrackerTop from './ExpenseTrackerTop';
export const Context = createContext();

const ExpenseDashboard = () => {
    let wallet = JSON.parse(localStorage.getItem('wallet'));;
    let transactionList = JSON.parse(localStorage.getItem('transactionList'));

    const entertainmentTotal = transactionList.filter((transaction) => 
        (transaction.category==='Entertainment'))
        .reduce((total,transaction) => total+transaction.price,0)

    const foodTotal = transactionList.filter((transaction) => 
        (transaction.category==='Food'))
        .reduce((total,transaction) => total+transaction.price,0)

    const travelTotal = transactionList.filter((transaction) => 
        (transaction.category==='Travel'))
        .reduce((total,transaction) => total+transaction.price,0)

    const data = [
        { label: 'Entertainment', value: entertainmentTotal, color: '#FF9304' },
        { label: 'Food', value: foodTotal, color: '#A000FF' },
        { label: 'Travel', value: travelTotal, color: '#FDE006' },
    ]    

    return ( 
    <Context.Provider value={{data,transactionList,entertainmentTotal,foodTotal,travelTotal,wallet}}>
        <div>
            <ExpenseTrackerTop />
            <ExpenseTrackerBottom />
        </div> 
    </Context.Provider>
    );
}
 
export default ExpenseDashboard;