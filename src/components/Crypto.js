import React, { useState } from 'react'
import CryptoForm from './CryptoForm';
import CryptoDisplay from './CryptoDisplay';
import { Button } from '@mui/material';
import {  useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import * as Yup from 'yup';

export default function Crypto() {
    
    const formSchema=Yup.object().shape({
        CoinName: Yup.string()
          
          .required('Required'),
        BuyInPrice: Yup.string()
       
          .required('Required'),
        Qty:Yup.string()
        .required('Required')
      });
    const[open,setOpen] = useState(false)

    const[data,setData]=useState([]);
    const [id, setId] = useState(-1);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClickClose = () => {
        setOpen(false);
      };

      const removeItem=(id)=>{
        let d=[...data].filter(y=>{
          return y.id != id;
        })
        setData(d);
      }

      const editItem = (id) => {
        setOpen(true);
        setId(id);
        let t = data.find((value) => value.id === id);
        if (t) {
          formik.setValues({
            CoinName: t.CoinName,
            BuyInPrice: t.BuyInPrice,
            Qty: t.Qty,
          });
        }
      };
      const formik = useFormik({
        initialValues: {
          CoinName: '',
          BuyInPrice: '',
          Qty: '',
        },
        validationSchema:formSchema,
        onSubmit: (values) => {
            let tp = [...data];
      
            if (id > 0) {
              tp = tp.map((add) => {
                if (add.id === id) {
                  return { ...add, BuyInPrice: values.BuyInPrice, Qty: values.Qty };
                } else {
                  return add;
                }
              });
            } else {
              tp.push({ ...values, id: tp.length + 1 });
            }
            setId(-1);
            setData(tp);
            setOpen(false);
            formik.resetForm();
      },
      enableReinitialize: true,
    });

  
  return (
    <div>
        <div style={{backgroundColor:'crimson'}}><h1 style={{ textAlign: 'center' }}>CRUD APPLICATION FOR CRYPTOCURRENCY PORTFOLIO</h1>   </div>
         <Button variant="contained" onClick={handleClickOpen} sx={{mt:2,ml:2}}
         startIcon={<AddIcon/>} >
          Add CryptoCurrency
         </Button>
         
        
         <CryptoForm open={open} 
         onClose={handleClickClose} 
         data={data} 
         setData={setData}
         id={id}
         setId={setId}
         formik={formik}
          />

            <CryptoDisplay data={data} remove={removeItem} edit={editItem} />
    </div>
  )
}
