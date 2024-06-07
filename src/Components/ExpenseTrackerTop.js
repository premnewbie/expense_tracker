import './ExpenseDashboard.css';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';

const ExpenseTrackerTop = () => {
    const data = [
        { label: 'Grocery', value: 50, color: '#0088FE' },
        { label: 'Group B', value: 20, color: '#00C49F' },
        { label: 'Group C', value: 20, color: '#FFBB28' },
        { label: 'Group D', value: 10, color: '#FF8042' },
    ];
    return ( <>
        <h2>Expense Tracker</h2>
        <div className='expense-tracker-top'>
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
            <div className='piechart-and-label'>
                <PieChartWithCustomizedLabel data={data}/>
            </div>
        </div>
    </> );
}
 
export default ExpenseTrackerTop;