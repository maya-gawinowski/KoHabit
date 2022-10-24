import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [value, setValue] = React.useState(0);
  const [nameRegister, setNameRegister] = useState();
  const [pwdBisRegister, setPwdBisRegister] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [pwdRegister, setPwdRegister] = useState();
  const navigate = useNavigate();
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function HandleSubmitRegister() {
    console.log("Name : " + nameRegister);
    console.log("Email : " + emailRegister);
    console.log("Password : " + pwdRegister);
    console.log("PasswordBis : " + pwdBisRegister);
    try {
      await axios.post('http://localhost:5000/users', {
        name: nameRegister,
        email: emailRegister,
        password: pwdRegister,
        confPassword: pwdBisRegister
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
            <input type="text" name="nameConnection" value={nameRegister} onChange={(e) => setNameRegister(e.target.value)} required />
          </label><br />
          <label>
            Email <br />
            <input type="text" name="emailRegister" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} required />
          </label><br />
          <label>
            Password <br />
            <input type="text" name="pwdRegister" value={pwdRegister} onChange={(e) => setPwdRegister(e.target.value)} required />
          </label><br />
          <label>
            Confirm your password <br />
            <input type="text" name="pwdBisConnection" value={pwdBisRegister} onChange={(e) => setPwdBisRegister(e.target.value)} required />
          </label><br />
          <button class="button_form" onClick={HandleSubmitRegister}>
            Validate
          </button>
        </div>
    </Box>
  );
}