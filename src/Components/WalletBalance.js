import { useState } from "react";
import AddIncome from './AddIncome';
import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";

const WalletBalnce = () => {
    const {wallet} = useContext(Context);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <div className='wallet-balance'>
                <div>
                    <span className='wallet-balance-text'>Wallet Balance: </span>
                    <span className='balance'>₹{wallet}</span>
                </div>
                <button onClick={handleOpen}>+ Add Income</button>
                <AddIncome open={open} handleOpen={handleOpen} handleClose={handleClose} wallet={wallet} />
        </div> );
}
 
export default WalletBalnce;