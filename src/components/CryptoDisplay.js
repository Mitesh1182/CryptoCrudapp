import { Button, Container } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function CryptoDisplay(props) {
    const columns=[
        {
          field: "CoinName",
          headerName: "Coin Name",
          width: 110,
          
      },

      {
        field: "BuyInPrice",
        headerName: "BuyInPrice",
        width: 110
     },
    {
        field: "Qty",
        headerName: "Qty",
        width: 110
    },
    {
        field: "Total",
        headerName:"Total",
        width:110,
        valueGetter:(params)=>{
            return((params.row.BuyInPrice)*(params.row.Qty));
        }
    },

    {
        field: 'Delete',
        headerName: 'Delete',
        width: 90,
        renderCell:(params)=>{
          console.log(params)
          return(<Button
            variant='contained' 
            color='error'
            onClick={()=>{
            props.remove(params.row.id)
          
          }}>Delete</Button>)
         }
      },
      {
        field: 'Edit',
        headerName: 'Edit',
        width: 90,
        renderCell:(params)=>{
          console.log(params)
          return(<Button 
            variant='contained'
            color='secondary'
            onClick={()=>{
            props.edit(params.row.id)
          
          }}>Edit</Button>)
         }
      },
      
]
  console.log(props.data);
  const totalPrices = props.data.map((item) => item.BuyInPrice * item.Qty); // Calculate total prices for each coin
  const totalCoin = totalPrices.reduce((sum, price) => sum + price, 0); // Calculate the sum of total prices
  
  
  return (
    <div style={{height:400 ,width:'100%' ,display:'flex',flexDirection: 'column', alignItems: 'center' }} > 
    <h2 style={{ textAlign: 'center' }}>Crypto Currency Portfolio Information</h2>
    <Container maxWidth='lg'>
      <DataGrid
      rows={props.data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection/>
      </Container>
      <h3 style={{color:'crimson'}}>Total Coin Price: {totalCoin}</h3>
    </div>
  )
}
