import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import BAGrid from '../../components/BSGrid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Designation = () => {
  const users = [
    { id: 1, name: "Hamza Kamelen", username: "1234567890", designation: "1234567890", eStatus: "1234567890", department: "1234567890", shift: "1234567890", action: "1234567890" },
    { id: 1, name: "Hamza Kamelen", username: "1234567890", designation: "1234567890", eStatus: "1234567890", department: "1234567890", shift: "1234567890", action: "1234567890" },
    { id: 1, name: "Hamza Kamelen", username: "1234567890", designation: "1234567890", eStatus: "1234567890", department: "1234567890", shift: "1234567890", action: "1234567890" },
    { id: 1, name: "Hamza Kamelen", username: "1234567890", designation: "1234567890", eStatus: "1234567890", department: "1234567890", shift: "1234567890", action: "1234567890" },
    { id: 1, name: "Hamza Kamelen", username: "1234567890", designation: "1234567890", eStatus: "1234567890", department: "1234567890", shift: "1234567890", action: "1234567890" },
  ];

  const cols = [
    {
      label: "ID",
      key: "id",
    },
    {
      label: "Name",
      key: "name",

    },
    {
      label: "User Name",
      key: "username",
    },
    {
      label: "Designation",
      key: "designation",
    },
    {
      label: "E-Status",
      key: "eStatus",
    },
    {
      label: "Department",
      key: "department",
    },
    {
      label: "Shift",
      key: "shift",
    },
    {
      label: "Action",
      key: "action",
    }
  ];

  return (
    <>
      <Box sx={{ backgroundColor: 'white', borderRadius: 1.5, height: 70, mt: -4 }}>
        <Box sx={{ display: 'inline-flex', mt: 1.3, p: 1.2, px: 2.5 }} >
          <ArrowBackIcon sx={{ fontSize: 23, mt: 0.5 }} />
          <Typography style={{ marginLeft: 4, fontFamily: 'poppins', fontSize: 21, marginTop: 1.6 }} variant='h5'>Back</Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', mt: 5, height: 250, width: 600, padding: 6 }}>
        <Typography className='fs-5 fw-bold text-center' style={{ fontFamily: 'poppins' }}>Add designation</Typography>
        <Box sx={{ marginLeft: 5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
          <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
          <Typography variant='p'>
            Name:
            <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px lightgrey', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'white', fontFamily: 'poppins' }} type='text' />
          </Typography>
        </Box>
        <Button style={{backgroundColor:'#1890ff',width:320,marginTop:25,marginLeft:112,textAlign:'center',color:'white',fontFamily:'poppins'}}>Add designation</Button>
      </Box>
      <Box sx={{ backgroundColor: 'white', fontFamily: 'poppins', borderRadius: 3, mt: 5 }}>
        <h4 className='px-4 fw-light pt-4'>Designation List</h4>
        <Box sx={{ p: 2, pt: 4 }}>
          <BAGrid datasource={users} gridCols={cols} />
        </Box>
      </Box>
      <Box>
        <Typography style={{ fontFamily: 'poppins', marginTop: 85, textAlign: 'center' }}>2023 Omega Solution One stop solution.</Typography>
      </Box>
    </>
  )
}

export default Designation