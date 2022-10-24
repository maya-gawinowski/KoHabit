import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [nameRegister, setNameRegister] = useState();
  const [pwdBisRegister, setPwdBisRegister] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [pwdRegister, setPwdRegister] = useState();
  const navigate = useNavigate();
  

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
    <Box sx={{
      width: '60vw',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      margin: '0 auto',
      borderRadius: '15px',
      padding: '1em'
          
      }}>
        <Typography sx={{padding:'0.5em', fontSize:'2em', fontWeight:'bold'}}>Inscription</Typography>
        <div class='form'>
          <label>
            Name <br />
            <input type="text" name="nameConnection" value={nameRegister} onChange={(e) => setNameRegister(e.target.value)} required />
          </label><br />
          <label>
            Email <br />
            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="emailRegister" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} required />
          </label><br />
          <label>
            Password <br />
            <input type="password" name="pwdRegister" value={pwdRegister} onChange={(e) => setPwdRegister(e.target.value)} required />
          </label><br />
          <label>
            Confirm your password <br />
            <input type="password" name="pwdBisConnection" value={pwdBisRegister} onChange={(e) => setPwdBisRegister(e.target.value)} required />
          </label><br />
          <button class="button_form" onClick={HandleSubmitRegister}>
            Validate
          </button>
        </div>
    </Box>
  );
}