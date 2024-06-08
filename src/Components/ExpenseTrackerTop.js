import './ExpenseDashboard.css';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';
import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";

const ExpenseTrackerTop = () => {
    const {data,transactionList} = useContext(Context);
    
    return ( <div className='expense-tracker-top'>
        <h2>Expense Tracker</h2>
        <div className='expense-tracker-top-section'>
            <div className='wallet-balance'>
                <div>
                    <span className='wallet-balance-text'>Wallet Balance: </span>
                    <span className='balance'>₹4500</span>
                </div>
                <button>+ Add Income</button>
            </div>
            <div className='expenses'>
                <div>
                    <span className='expenses-text'>Expenses: </span>
                    <span className='expense'>₹500</span>
                </div>
                <button>+ Add Expense</button>
            </div>
            <div className='piechart-and-labels'>
                <PieChartWithCustomizedLabel data={data}/>
                <div className='labels'>
                    {data.map(item => (<>
                    <span className='color-indicator' 
                    style={{backgroundColor: `${item.color}`,width:20,height:10}}></span>
                    <p>{item.label}</p>
                    </>))}
                </div>
            </div>
        </div>
    </div> );
}
 
export default ExpenseTrackerTop;