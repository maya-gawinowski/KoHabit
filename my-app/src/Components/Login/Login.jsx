import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [value, setValue] = React.useState(0);
  const [emailConnection, setEmailConnection] = useState();
  const [pwdConnection, setPwdConnection] = useState();
  const [pwdBisConnection, setPwdBisConnection] = useState();
  const navigate = useNavigate();
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <Box sx={{ width: '100%' }}>
        <Typography variant='h3'>Connexion</Typography>
        <div class='form'>
          <label>
            Email <br />
            <input type="text" name="emailConnection" value={emailConnection} onChange={(e) => setEmailConnection(e.target.value)} required />
          </label><br />
          <label>
            Password <br />
            <input type="text" name="pwdConnection" value={pwdConnection} onChange={(e) => setPwdConnection(e.target.value)} required />
          </label><br />
          <button class="button_form" onClick={handleSubmitConnection}>
            Validate
          </button>
        </div>

    </Box>
  );
}