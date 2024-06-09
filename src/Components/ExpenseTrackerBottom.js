import RecentTransactions from "./RecentTransactions";
import TopExpenses from "./TopExpenses";


const ExpenseTrackerBottom = () => {
    return ( <div className="expense-tracker-bottom">
        <RecentTransactions />
        <TopExpenses />
    </div>);
}
 
export default ExpenseTrackerBottom;