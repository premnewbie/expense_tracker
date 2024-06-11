import './ExpenseDashboard.css';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';
import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";
import WalletBalnce from './WalletBalance';
import Expenses from './Expenses';
import Labels from './Labels';


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
                    {data.map(item => <Labels item={item} key={item.label}/> )}
                </div>
            </div>
        </div>
    </div> );
}
 
export default ExpenseTrackerTop;