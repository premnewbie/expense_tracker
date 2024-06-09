import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TransactionDeleteIcon from '../Assets/TransactionDeleteIcon.png';

const TransactionItem = ({item,handleCtgImg}) => {

    return (
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
                    <img src={TransactionDeleteIcon} alt='' />
                    <div className='transaction-edit'>
                        <EditOutlinedIcon  sx={{ color: 'white',width: '2rem',height:'2rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default TransactionItem;