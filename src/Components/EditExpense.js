import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

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
                <input type='text' placeholder='Title' />
                <input type='number' placeholder='Price' />
                <select id='category' defaultValue='select' required style={{WebkitAppearance: 'none'}}>
                    <option value="select" disabled>Select Category</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                </select>
                <input type='date' />
            </div>
            <button className='edit-expense-btn'>Edit Expense</button>
            <button className='cancel-edit-expense-btn' onClick={handleClose}>Cancel</button>
        </Box>
      </Modal>
    </div>
  );
}