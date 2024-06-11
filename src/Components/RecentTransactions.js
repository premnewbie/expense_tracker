import Food from '../Assets/Food.png';
import Travel from '../Assets/Travel.png';
import Entertainment from '../Assets/Entertainment.png';
import { useState, useContext } from 'react';
import { Context } from './ExpenseDashboard';
import TransactionItem from './TransactionItem';
import Navigation from './Navigation';


const RecentTransactions  = () => {

    const [pageNum, setPageNum] = useState(1);
    const recordPerPage = 3;
    const firstIndex = pageNum*recordPerPage-recordPerPage;
    const lastIndex = pageNum*recordPerPage;
 
    const {transactionList} = useContext(Context);
    
    const handleCtgImg = (category) => {
        if(category==='Entertainment'){
            return Entertainment;
        } else if(category==='Food'){
            return Food;
        } else {
            return Travel;
        }
    } 
    
    const handleIncrement = () => {
        if(Math.ceil(transactionList.length/3) >= ((pageNum+1))){
            setPageNum(prev => prev+1);
        }
        console.log(transactionList.length)
    }

    const handleDecrement = () => {
        if(pageNum>1){
            setPageNum(prev => prev-1)
        }
    }

    return ( <div>
        <h2>Recent Transactions</h2>
        <div className='recent-transactions'>
            <div className="transaction-list">
                {transactionList.slice(firstIndex,lastIndex)
                .map((item) => <TransactionItem item={item} handleCtgImg={handleCtgImg} key={item.id}/>)}
            </div>
            {transactionList.length && <Navigation pageNum={pageNum} 
                handleDecrement={handleDecrement} 
                handleIncrement={handleIncrement}
            />}
        </div>
    </div> );
}
 
export default RecentTransactions;