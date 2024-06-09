import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";

const TopExpenses = () => {
    const {data,
        transactionList,
        entertainmentTotal,
        foodTotal,
        travelTotal
    } = useContext(Context);

    const transactionTotal = transactionList.reduce((total,transaction) => total+transaction.price,0)

    const handleCategoryBar = (category) => {
        if(category==='Entertainment'){
            return entertainmentTotal;
        } else if(category==='Food'){
            return foodTotal;
        } else if(category==='Travel'){
            return travelTotal;
        }
    }

    return ( <div>
        <h2>Top Expenses</h2>
        <div className="top-expense">
            <div className='top-expense-labels'>
                <p>Entertainment</p>
                <p>Food</p>
                <p>Travel</p>
            </div>
            <div className="top-expense-chart">
                {data.map((item) =>
                    <div 
                    style={{width: `${(handleCategoryBar(item.label)/transactionTotal)*20}rem`,
                    height:'2rem',
                    backgroundColor:'#8784D2',
                    borderRadius:'0 .8rem .8rem 0'
                    }}>
                    </div>)}
            </div>
        </div>
    </div> );
}
 
export default TopExpenses;