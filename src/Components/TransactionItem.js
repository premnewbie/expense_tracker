import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TransactionDeleteIcon from '../Assets/TransactionDeleteIcon.png';
import EditExpense from './EditExpense';
import { useState, useContext } from 'react';
import { Context } from './ExpenseDashboard';

const TransactionItem = ({item,handleCtgImg}) => {

    const prevPrice = item.price;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let {transactionList,change,setChange,wallet} = useContext(Context);

    const handleDelete = () => {
        wallet += prevPrice;
        const newList = transactionList.filter((transaction) => transaction.id!==item.id);
        localStorage.setItem('transactionList',JSON.stringify(newList))
        localStorage.setItem('wallet',JSON.stringify(wallet))
        setChange(!change);
    }

    return (
        <div>
            <div key={item.id} className='transaction-item'>
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
                    <img src={TransactionDeleteIcon} alt='TransactionDeleteButton' onClick={handleDelete}/>
                    <div className='transaction-edit' onClick={handleOpen}>
                        <EditOutlinedIcon  sx={{ color: 'white',width: '2rem',height:'2rem'}} />
                    </div>
                </div>
            </div>
        </div>
        <EditExpense open={open} handleOpen={handleOpen} handleClose={handleClose} item={item} />
    </div>
    )
}
 
export default TransactionItem;