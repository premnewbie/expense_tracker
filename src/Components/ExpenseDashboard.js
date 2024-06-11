import { createContext, useEffect, useState,useRef } from 'react';
import ExpenseTrackerBottom from './ExpenseTrackerBottom';
import ExpenseTrackerTop from './ExpenseTrackerTop';
export const Context = createContext();

const ExpenseDashboard = () => {
    const [change,setChange] = useState(false);
    const [wallet,setWallet] = useState(JSON.parse(localStorage.getItem('wallet')));
    const[transactionList,setTransactionList] = useState(JSON.parse(localStorage.getItem('transactionList')));
    const [transactionTotal,setTransactionTotal] = useState()
    const [entertainmentTotal,setEntertainmentTotal] = useState();
    const [foodTotal,setFoodTotal] = useState();
    const [travelTotal,setTravelTotal] =  useState();

    useEffect(()=> {
        setTransactionList(JSON.parse(localStorage.getItem('transactionList')));
        setWallet(JSON.parse(localStorage.getItem('wallet')))
        
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
    },[change])

    useEffect(()=>{
        setTransactionList([{"id":1,"price":25,"transaction":"Samosa","category":"Food","date":"July 04, 2024"},
            {"id":2,"price":100,"transaction":"Movie","category":"Entertainment","date":"July 04, 2024"},
            {"id":3,"price":100,"transaction":"Auto","category":"Travel","date":"July 04, 2024"},
            {"id":4,"price":75,"transaction":"Rice","category":"Food","date":"July 04, 2024"}])

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
    },[])



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