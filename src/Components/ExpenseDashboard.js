import { createContext } from 'react';
import ExpenseTrackerBottom from './ExpenseTrackerBottom';
import ExpenseTrackerTop from './ExpenseTrackerTop';
export const Context = createContext();

const ExpenseDashboard = () => {
    const transactionList = [
        {id:1,transaction: 'Samosa',price: 150,category: 'Food',date: 'March 20, 2024'},
        {id:2,transaction: 'Movie',price: 300,category: 'Entertainment',date: 'March 15, 2024'},
        {id:3,transaction: 'Auto',price: 50,category: 'Travel',date: 'March 10, 2024'},
    ]   

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

    

   
    return ( <Context.Provider value={{data,transactionList,entertainmentTotal,foodTotal,travelTotal}}>
        <div>
            <ExpenseTrackerTop />
            <ExpenseTrackerBottom />
        </div> 
    </Context.Provider>);
}
 
export default ExpenseDashboard;