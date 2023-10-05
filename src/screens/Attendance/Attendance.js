import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import BAGrid from '../../components/BSGrid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Attendance = () => {
  const users = [
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'blue', color: 'blue' }}>EARLY</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },
    { id: 1, name: "Hamza Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'blue', color: 'blue' }}>EARLY</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },

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
      label: "inTime",
      key: "inTime",
    },
    {
      label: "outTime",
      key: "outTime",
    },
    {
      label: "In Status",
      key: "inStatus",
    },
    {
      label: "Out Status",
      key: "outStatus",
    },
    {
      label: "Punch By",
      key: "PunchBy",
    },
    {
      label: "Total Hour",
      key: "TotalHour",
    }
  ];

  return (<>
    <Box sx={{ backgroundColor: 'white', mt: 1, height: 400, width: 650, padding: 6 }}>
      <Typography className='fs-5 fw-bold text-center' style={{ fontFamily: 'poppins' }}>Add Manual Attendance</Typography>
      <Box sx={{ marginLeft: 10, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
        <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
        <Typography variant='p'>
          User:
          <select style={{height:35,borderRadius:5}} name="user" id="dropdown1">
                    <option value="Admin" selected>admin</option>
                    <option value="CFO">CFO</option>
                    <option value="CTO">CTO</option>
                    <option value="COO">COO</option>
                    <option value="HR Manager">HR Manager</option>
                  </select>
          {/* <input style={{ marginLeft: 10, width: 330, height: 35, border: 'solid 1px lightgrey', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'white', fontFamily: 'poppins' }} type='text' /> */}
        </Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',mt:1.5,marginLeft:6}}>
        <Typography style={{fontFamily:'poppins',marginRight:7,marginTop:6}}>
          Start Time:
        </Typography>
        <input style={{height:35,border:'solid 1px lightgrey',width:162,backgroundColor:'white',borderRadius:5}} type="date" />
        <input style={{height:35,border:'solid 1px lightgrey',marginLeft:5,width:162,backgroundColor:'white',borderRadius:5}} type="time" />
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',mt:1.5,marginLeft:7.5}}>
        <Typography style={{fontFamily:'poppins',marginRight:7,marginTop:6}}>
          End Time:
        </Typography>
        <input style={{height:35,border:'solid 1px lightgrey',width:162,backgroundColor:'white',borderRadius:5}} type="date" />
        <input style={{height:35,border:'solid 1px lightgrey',marginLeft:5,width:162,backgroundColor:'white',borderRadius:5}} type="time" />
      </Box>
      <Box sx={{ marginLeft: 5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
        <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
        <Typography variant='p'>
          Comment:
          <input style={{ marginLeft: 10, width: 330, height: 35, border: 'solid 1px lightgrey', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'white', fontFamily: 'poppins' }} placeholder='Comment' type='text' />
        </Typography>
      </Box>
      <Box sx={{ marginLeft: 5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
        <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
        <Typography variant='p'>
          IP Address:
          <input style={{ marginLeft: 10, width: 330, height: 35, border: 'solid 1px lightgrey', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'white', fontFamily: 'poppins' }} placeholder='192.0.0' type='text' />
        </Typography>
      </Box>
      <Button style={{ backgroundColor: '#1890ff', width: 320, marginTop: 25, marginLeft: 112, textAlign: 'center', color: 'white', fontFamily: 'poppins' }}>Add Attendance</Button>
    </Box>
    <Box sx={{ backgroundColor: 'white', fontFamily: 'poppins', borderRadius: 3, mt: 5 }}>
      <h4 className='px-4 fw-light pt-4'>Attendance List</h4>
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

export default Attendance