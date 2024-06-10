import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { Context } from "./ExpenseDashboard";
import { useSnackbar } from 'notistack';

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

export default function AddIncome({open,handleClose}) {
  let {change,setChange,wallet} = useContext(Context);
  const [income,setIncome] = React.useState(0);

  const { enqueueSnackbar } = useSnackbar();
  const handleIncome = () => {
    if(!income){
      enqueueSnackbar('Please enter a valid amount',{variant: 'warning',autoHideDuration:3000})
    } else{
      handleClose();
      wallet=wallet+Number(income);
      setIncome(null);
      localStorage.setItem('wallet',JSON.stringify(wallet))
      setChange(!change);
    }
  }
 
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{backgroundColor: '#FFFFFFC4'}}
      >
        <Box sx={style} style={{width:'30rem',height:'8rem',padding:16,borderRadius:'15px',border:'none'}}>
          <h2 style={{fontFamily:'Ubuntu',color:'black'}}>Add Balance</h2>
          <div className='add-income-modal'>
            <input type='number' placeholder='Income Amount' onInput={(e)=>setIncome(e.target.value)}/>
            <button className='add-balance-btn' onClick={handleIncome}>Add Balance</button>
            <button className='cancel-balance-btn' onClick={handleClose}>Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}