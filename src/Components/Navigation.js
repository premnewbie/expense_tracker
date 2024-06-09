import PrevArrow from '../Assets/PrevArrow.png';
import NextArrow from '../Assets/NextArrow.png';

const Navigation = ({pageNum,handleDecrement,handleIncrement}) => {
    return ( 
        <div className='navigations'>
            <button className='prev-btn' onClick={handleDecrement}>
                <img src={PrevArrow} alt='prev-btn'/>
            </button>
            <p className='page-num'>{pageNum}</p>
            <button className='next-btn' onClick={handleIncrement}>
                <img src={NextArrow} alt='next-btn'/>
            </button>
        </div>
     );
}
 
export default Navigation;