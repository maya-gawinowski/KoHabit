import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [emailConnection, setEmailConnection] = useState();
  const [pwdConnection, setPwdConnection] = useState();
  const navigate = useNavigate();
  
  async function handleSubmitConnection() {
    console.log("Email : " + emailConnection);
    console.log("Password : " + pwdConnection);

    try {
      await axios.post('http://localhost:5000/login', {
        email: emailConnection,
        password: pwdConnection
      });
      console.log("logged");
      navigate('/')
      console.log("naviguated");
    } catch (error) {
      if (error.response) {
        console.log("error login");
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
        <Typography sx={{padding:'0.5em', fontSize:'2em', fontWeight:'bold'}}>Connexion</Typography>
        <div class='form'>
          <label>
            Email <br />
            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="emailConnection" value={emailConnection} onChange={(e) => setEmailConnection(e.target.value)} required />
          </label><br />
          <label>
            Password <br />
            <input type="password" name="pwdConnection" value={pwdConnection} onChange={(e) => setPwdConnection(e.target.value)} required />
          </label><br />
          <button class="button_form" onClick={handleSubmitConnection}>
            Validate
          </button>
        </div>

    </Box>
  );
}
