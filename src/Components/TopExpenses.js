import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";

const TopExpenses = () => {

    const {data,
        entertainmentPercent,
        foodPercent,
        travelPercent
    } = useContext(Context);

    const handleCategoryBar = (item) => {
        if(item.label==='Entertainment'){
            return entertainmentPercent*20;
        } else if(item.label==='Food'){
            return foodPercent*20;
        } else if(item.label==='Travel'){
            return travelPercent*20;
        }
    }

    return (<div>
        <h2>Top Expenses</h2>
        <div className="top-expense">
            <div className='top-expense-labels'>
                <p>Entertainment</p>
                <p>Food</p>
                <p>Travel</p>
            </div>
            <div className="top-expense-chart">
                {data.map((item) =>
                <div key={item.label}
                    style={{
                    width: `${handleCategoryBar(item)}rem`,
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