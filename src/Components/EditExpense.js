import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState,useContext } from 'react';
import { Context } from "./ExpenseDashboard";
import { useSnackbar } from "notistack";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditExpense({open,handleClose,item}) {
  let {transactionList,change,setChange,wallet} = useContext(Context);

  const { enqueueSnackbar } = useSnackbar();
  const prevPrice = item.price;
  const [transaction,setTransaction] = useState();
  const [category,setCategory] = useState();
  const [date,setDate] = useState();
  const [price,setPrice] = useState();

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const handleDate = (value) => {
      const splitDate = value.split('-');
      splitDate[1] = months[Number(splitDate[1])];
      const unSplitDate = `${splitDate[1]} ${splitDate[2]}, ${splitDate[0]}`
      setDate(unSplitDate);
  }

  const handleCheck = () => {
    if(!transaction){
        enqueueSnackbar('Please Enter a Title for the transaction',{variant: 'warning',autoHideDuration:2000});
    } else if(!price){
        enqueueSnackbar('Please Enter the price',{variant: 'warning',autoHideDuration:2000});
    } else if(!category){
        enqueueSnackbar('Please select a category',{variant: 'warning',autoHideDuration:2000});
    } else if(!date){
        enqueueSnackbar('Please select a date',{variant: 'warning',autoHideDuration:2000});
    } else {
        wallet += prevPrice - price;
        if(wallet<0){
          enqueueSnackbar('Please enter the correct amount',{variant:'warning',autoHideDuration:2000});
          return;
        }  
        handleEditTransaction();
    }
}

  const handleEditTransaction = () => {
    handleClose();
    item.date = date;
    item.transaction = transaction;
    item.category = category;
    item.price = price;
    localStorage.setItem('transactionList',JSON.stringify(transactionList))
    localStorage.setItem('wallet',JSON.stringify(wallet))
    setChange(!change);
  }
  
 
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{backgroundColor: '#FFFFFFC4'}}
      >
        <Box sx={style} style={{width:'25rem',height:'15rem',padding:16,borderRadius:'15px',border:'none'}}>
            <h2 style={{fontFamily:'Ubuntu',color:'black'}}>Edit Expense</h2>
            <div className='edit-expense'>
                <input type='text' placeholder='Title' onInput={(e)=>setTransaction(e.target.value)} />
                <input type='number' placeholder='Price' onInput={(e)=>setPrice(Number(e.target.value))} />
                <select id='category' defaultValue='select' required style={{WebkitAppearance: 'none'}} onInput={(e)=>setCategory(e.target.value)}>
                    <option value="select" disabled>Select Category</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                </select>
                <input type='date' onInput={(e)=>handleDate(e.target.value)}/>
            </div>
            <button className='edit-expense-btn' onClick={handleCheck}>Edit Expense</button>
            <button className='cancel-edit-expense-btn' onClick={handleClose}>Cancel</button>
        </Box>
      </Modal>
    </div>
  );
}