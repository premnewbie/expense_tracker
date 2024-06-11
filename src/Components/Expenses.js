import { useState } from "react";
import AddExpense from "./AddExpense";
import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";

const Expenses = () => {
    const {transactionTotal} = useContext(Context);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( <div className='expenses'>
        <div>
            <span className='expenses-text'>Expenses: </span>
            <span className='expense'>₹{transactionTotal}</span>
        </div>
        <button onClick={handleOpen}>+ Add Expense</button>
        <AddExpense open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </div> );
}
 
export default Expenses;