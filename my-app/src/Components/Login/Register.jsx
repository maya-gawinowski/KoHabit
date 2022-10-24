import * as React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [value, setValue] = React.useState(0);
  const [nameConnection, setNameConnection] = useState();
  const [pwdBisConnection, setPwdBisConnection] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [pwdRegister, setPwdRegister] = useState();
  const navigate = useNavigate();
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function HandleSubmitRegister() {
    console.log("Name : " + nameConnection);
    console.log("Email : " + emailRegister);
    console.log("Password : " + pwdRegister);
    console.log("PasswordBis : " + pwdBisConnection);
    try {
      await axios.post('http://localhost:5000/users', {
        name: nameConnection,
        email: emailRegister,
        password: pwdRegister,
        confPassword: pwdBisConnection
      });
      navigate('/')
      console.log("success");
    } catch (error) {
      if (error.response) {
        console.log("this : error");
      }
    }
  }


  return (
    <Box sx={{ width: '100%' }}>
        <Typography variant='h3'>Inscription</Typography>
        <div class='form'>
          <label>
            Name <br />
            <input type="text" name="nameConnection" onChange={(e) => setNameConnection(e.target.value)} required />
          </label><br />
          <label>
            Email <br />
            <input type="text" name="emailRegister" onChange={(e) => setEmailRegister(e.target.value)} required />
          </label><br />
          <label>
            Password <br />
            <input type="text" name="pwdRegister" onChange={(e) => setPwdRegister(e.target.value)} required />
          </label><br />
          <label>
            Confirm your password <br />
            <input type="text" name="pwdBisConnection" onChange={(e) => setPwdBisConnection(e.target.value)} required />
          </label><br />
          <button class="button_form" onClick={HandleSubmitRegister}>
            Validate
          </button>
        </div>
    </Box>
  );
}