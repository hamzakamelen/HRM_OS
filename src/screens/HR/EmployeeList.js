import React from 'react'
import './HR.css'
import BAGrid from '../../components/BSGrid';
import { Box, Typography } from '@mui/material';

const EmployeeList = () => {
  const users = [
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
    {id:1, name: "Hamza Kamelen", username: "1234567890",designation: "1234567890",eStatus: "1234567890",department: "1234567890", shift: "1234567890",action: "1234567890" },
  
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

  return (<>
  <Box sx={{backgroundColor:'white',fontFamily:'poppins',borderRadius:3,mt:5}}>
  <h4 className='px-4 fw-light pt-4'>Employee List</h4>
  <Box sx={{p:2,pt:4}}>
  <BAGrid datasource={users} gridCols={cols} />
  </Box>    
  </Box>
  <Box>
    <Typography style={{fontFamily:'poppins',marginTop:85,textAlign:'center'}}>2023 Omega Solution One stop solution.</Typography>
  </Box>

    </>
  )
}

export default EmployeeList