import Food from '../Assets/Food.png';
import Travel from '../Assets/Travel.png';
import Entertainment from '../Assets/Entertainment.png';
import { useState, useContext } from 'react';
import { Context } from './ExpenseDashboard';
import TransactionItem from './TransactionList';
import Navigation from './Navigation';


const RecentTransactions  = () => {

    const [pageNum, setPageNum] = useState(1);

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
        <div className="transaction-list">
            {transactionList.filter((item) => item.id>(pageNum-1)*3 && item.id<=(pageNum)*3)
            .map((item) => <TransactionItem item={item} handleCtgImg={handleCtgImg}/>)}
            <Navigation pageNum={pageNum} 
            handleDecrement={handleDecrement} 
            handleIncrement={handleIncrement}
            />
        </div>
    </div> );
}
 
export default RecentTransactions;