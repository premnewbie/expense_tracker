import './ExpenseDashboard.css';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';
import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";
import WalletBalnce from './WalletBalance';
import Expenses from './Expenses';

const ExpenseTrackerTop = () => {
    const {data} = useContext(Context);
    
    return ( <div className='expense-tracker-top'>
        <h2>Expense Tracker</h2>
        <div className='expense-tracker-top-section'>
            <WalletBalnce />
            <Expenses />
            <div className='piechart-and-labels'>
                <PieChartWithCustomizedLabel data={data}/>
                <div className='labels'>
                    {data.map(item => (<>
                    <span key={item.label} className='color-indicator' 
                    style={{backgroundColor: `${item.color}`,width:20,height:10}}></span>
                    <p>{item.label}</p>
                    </>))}
                </div>
            </div>
        </div>
    </div> );
}
 
export default ExpenseTrackerTop;