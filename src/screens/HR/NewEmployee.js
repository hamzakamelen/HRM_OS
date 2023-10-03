import React from 'react'
import './HR.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Grid, Typography } from '@mui/material';
const NewEmployee = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'whitesmoke' }} >
      <Box sx={{ backgroundColor: 'white', borderRadius: 1.5, height: 70, mt: -4 }}>
        <Box sx={{ display: 'inline-flex', mt: 1.3, p: 1.2, px: 2.5 }} >
          <ArrowBackIcon sx={{ fontSize: 23, mt: 0.5 }} />
          <Typography style={{ marginLeft: 4, fontFamily: 'poppins', fontSize: 21, marginTop: 1.6 }} variant='h5'>Back</Typography>
        </Box>
      </Box>
      <Typography sx={{ textAlign: 'center', mt: 3, fontFamily: 'poppins', fontWeight: '600' }} variant='h5'>Add New Employee</Typography>
      <Box sx={{ backgroundColor: 'white', mt: 1.5, p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <Typography style={{ fontSize: 20, textAlign: 'center', fontFamily: 'poppins' }}>User Information</Typography>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  First Name:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='Hamza' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Last Name:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='Kamelen' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 6.8, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  User Name:
                  <input style={{ marginLeft: 4, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='hamza_kamelen' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 8.3, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Password:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='Strong Password' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 12.5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Email:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='hamzakamelen12345@gmail.com' />
                </Typography>
              </Box>
            </Box>
            <Typography style={{ fontSize: 20, textAlign: 'center', fontFamily: 'poppins' }}>Employee Information</Typography>
            <Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Joining Date:
                  <input style={{ color: 'grey', marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 13, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='date' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 10, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography variant='p'>
                  Leave Date:
                  <input style={{ color: 'grey', marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 13, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='date' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7.3, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Employee ID:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='OE-012' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7.3, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Blood Group:
                  <select style={{height:35}} name="bloodgroup" id="dropdown">
                    <option selected>Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Employee Status:
                  <select style={{height:35}} name="status" id="dropdown">
                    <option selected>Select Status</option>
                    <option value="Intern">Intern</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Terminated">Terminated</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7.5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Department:
                  <select style={{height:35}} name="department" id="dropdown">
                    <option selected>Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 15, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Role:
                  <select style={{height:35}} name="role" id="dropdown">
                    <option selected>Please select</option>
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                    <option value="Developer">Developer</option>
                    <option value="Receptionist">Receptionist</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 15, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Shift:
                  <select style={{height:35}} name="shift" id="dropdown">
                    <option selected>Please select</option>
                    <option value="Morning">A+</option>
                    <option value="Evening">A-</option>
                    <option value="Night">B+</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Leave Policy:
                  <select style={{height:35}} name="leavepolicy" id="dropdown">
                    <option selected>Please select</option>
                    <option value="Policy 8-12">A+</option>
                    <option value="Policy 12-15">A-</option>
                    <option value="Policy 15-15">B+</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 4, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  WeekLy Holiday:
                  <select style={{height:35}} name="weeklyholiday" id="dropdown">
                    <option selected>Please select</option>
                    <option value="Sat-Thurs">Saturday-Thursday</option>
                    <option value="Sun-Fri-">Sunday-Friday</option>
                  </select>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontSize: 20, textAlign: 'center', fontFamily: 'poppins' }}>Address Information</Typography>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Street:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='123 Main Street' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  City:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='Karachi' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  State:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='CA' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Zip Code:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='55555' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Country:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='Pakistan' />
                </Typography>
              </Box>
            </Box>
            <Typography style={{ fontSize: 20, textAlign: 'center', fontFamily: 'poppins' }}>Designation & Salary Information</Typography>
            <Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Designation:
                  <select style={{height:35}} name="bloodgroup" id="dropdown">
                    <option selected>Select Designation</option>
                    <option value="CEO">CEO</option>
                    <option value="CFO">CFO</option>
                    <option value="CTO">CTO</option>
                    <option value="COO">COO</option>
                    <option value="HR Manager">HR Manager</option>
                  </select>
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Designation Start Date:
                  <input style={{ color: 'grey', marginLeft: 5, width: 280, height: 35, border: 'solid 1px whitesmoke', fontSize: 13, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='date' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 9, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography variant='p'>
                  Designation End Date:
                  <input style={{ color: 'grey', marginLeft: 5, width: 280, height: 35, border: 'solid 1px whitesmoke', fontSize: 13, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='date' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 10, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Salary:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='20,000' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
                <Typography variant='p'>
                  Salary Start Date:
                  <input style={{ color: 'grey', marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 13, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='date' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography variant='p'>
                  Salary End Date:
                  <input style={{ color: 'grey', marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 13, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='date' />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 7, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
                <Typography variant='p'>
                  Salary Comment:
                  <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px whitesmoke', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'whitesmoke', fontFamily: 'poppins' }} type='text' placeholder='Type Here..' />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Button style={{ width: '50%', height: 40, fontFamily: 'poppins', backgroundColor: '#1890ff', color: 'white',  margin: 'auto',marginTop: 80 }}>Add New Employee</Button>
        </Grid>
      </Box>
    </Box>

  )
}

export default NewEmployee