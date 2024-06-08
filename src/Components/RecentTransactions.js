import PrevArrow from '../Assets/PrevArrow.png';
import NextArrow from '../Assets/NextArrow.png';
import Food from '../Assets/Food.png';
import Travel from '../Assets/Travel.png';
import Entertainment from '../Assets/Entertainment.png';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TransactionDeleteIcon from '../Assets/TransactionDeleteIcon.png';
import { useState, useContext } from 'react';
import { Context } from './ExpenseDashboard';


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
            .map((item) => (<div key={item.id} className='transaction-item'>
                    <div className='transaction-left'>
                        <img src={handleCtgImg(item.category)} alt={item.category} className='ctg-img'/>
                        <div>
                            <p className='transaction-name'>{item.transaction}</p>
                            <p className='transaction-date'>{item.date}</p>
                        </div>
                    </div>                       
                    <div className='transaction-right'>
                        <p className='price'>₹{item.price}</p>
                        <div className='edit-delete-btns'>
                            <img src={TransactionDeleteIcon} alt='' />
                            <div className='transaction-edit'>
                                <EditOutlinedIcon  sx={{ color: 'white',width: '2rem',height:'2rem'}} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='navigations'>
                <button className='prev-btn' onClick={handleDecrement}>
                    <img src={PrevArrow} alt='prev-btn'/>
                </button>
                <p className='page-num'>{pageNum}</p>
                <button className='next-btn' onClick={handleIncrement}>
                    <img src={NextArrow} alt='next-btn'/>
                </button>
            </div>
        </div>
    </div> );
}
 
export default RecentTransactions;