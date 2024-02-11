

import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

export default function CryptoForm(props) {

    const formik = props.formik;
    const isEditing = props.id > 0;


  return (
    <div>
        <Dialog open={props.open} onClose={props.onClose}>

      <DialogTitle >CryptoCurrency Information</DialogTitle>
      <DialogContent>
        <DialogContentText>
       Please Fill details
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="CoinName"
          name='CoinName'
          label="CoinName"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.CoinName}
         disabled={isEditing}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.CoinName && formik.errors.CoinName )}
          
          helperText={formik.touched.CoinName  && formik.errors.CoinName }
        />
        <TextField
          autoFocus
          margin="dense"
          id="BuyInPrice"
          name="BuyInPrice"
          label="BuyInPrice($)"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.BuyInPrice}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.BuyInPrice && formik.errors.BuyInPrice)}
          
          helperText={formik.touched.BuyInPrice && formik.errors.BuyInPrice}
        />
        
          
         <TextField
          autoFocus
          margin="dense"
          id="Qty"
          name="Qty"
          label="Qty"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.Qty}
          onChange={formik.handleChange}
        />
         
        </DialogContent>
        <DialogActions>
        <Button onClick={props.formik.handleSubmit}>Save</Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}
