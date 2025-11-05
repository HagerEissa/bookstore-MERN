import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { usersContext } from '../context/usersContextProvider';

const Register = () => {
    const [user,setUser]=useState({email:"",password:"",name:""})
    const [err,setErr] = useState('')
    const navigate= useNavigate()
    const{currentUser,isLoggedIn,login,register,logout} =useContext(usersContext)
    
    const handelChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handelSubmit=async(e)=>{
        e.preventDefault();
        try {
            const d = await register(user);
            
            if (d) {
                navigate('/login');
            }
        } catch (error) {
            setErr(error);
        }
        finally {
    setUser({ email: "", password: "", name: "" });
          setErr('')

  }

    }

    const handelLogin=()=>{
        navigate('/login');
    }

    
    

    return (<>

    <Box
        sx={{
        position: 'relative',
        width: '100%',
        height: '250px',
        backgroundImage: 'url("/flowers.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        }}
    >
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            }}
        />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h2"  >
                My account
                </Typography>
            </Box>
    </Box>
    



    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        mt: 5,
        width: '100%',
      }}
    >
        <Stack direction={"row"} spacing={5} divider={<Divider orientation='vertical' flexItem sx={{backgroundColor: '#e0e0e0'}} ></Divider>} sx={{ maxWidth: '1000px', width: '100%', justifyContent: 'center' }}>
            <Box width={500} margin="auto" mt={5} p={4} >
            <Typography variant="h4" align="center" gutterBottom>Register</Typography>
            {/* {1&&err} */}
            {err && (<Typography color="error" variant="body2" align="center">{err}</Typography>)}
            <form onSubmit={handelSubmit}>
                <Stack spacing={3}>
                        <TextField name='name' value={user.name} onChange={handelChange} variant='outlined' label='Username'sx={{"& .MuiOutlinedInput-root": {borderRadius: "30px"}}} required></TextField>
                        <TextField name='email' value={user.email} onChange={handelChange} variant='outlined' label='email address' sx={{"& .MuiOutlinedInput-root": {borderRadius: "30px"}}} required></TextField>
                        <TextField name='password' value={user.password} onChange={handelChange} variant="outlined" label="Password" type="password" sx={{"& .MuiOutlinedInput-root": {borderRadius: "30px"}}} required></TextField>
                        <Button type="submit" variant="contained" sx={{backgroundColor:"rgb(254, 186, 193)" ,borderRadius:"20px " ,marginBottom:"20px"}}>Register</Button>
                        <Typography variant='subtitle2' color='text.secondary'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</Typography>
                        
                </Stack>
            </form>
            </Box>

         <Stack width={500}  display="flex"
          alignItems="center"
          justifyContent="center"
          spacing={2}>
            <Typography variant="h4" color="text.primary">
              Login 
            </Typography>
            <Typography variant='subtitle2' color='text.secondary'>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</Typography>
            <Button variant="contained" onClick={handelLogin} sx={{backgroundColor:"rgb(254,186,193)" ,borderRadius:"20px " ,marginBottom:"20px"}}>Login</Button>
          </Stack>

        </Stack>

    </Box>




        


    </>);
}

export default Register;
