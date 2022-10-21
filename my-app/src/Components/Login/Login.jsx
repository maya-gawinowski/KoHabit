import * as React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Login() {
  const [value, setValue] = React.useState(0);
  const [nameConnection, setNameConnection] = useState();
  const [emailConnection, setEmailConnection] = useState();
  const [pwdConnection, setPwdConnection] = useState();
  const [pwdBisConnection, setPwdBisConnection] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [pwdRegister, setPwdRegister] = useState();
  const history = useNavigate();

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
      history.push("/");
      console.log("success");
    } catch (error) {
      if (error.response) {
        console.log("this : error");
      }
    }
  }

  async function handleSubmitConnection() {
    console.log("Email : " + emailConnection);
    console.log("Password : " + pwdConnection);

    try {
      await axios.post('http://localhost:5000/login', {
        email: emailConnection,
        password: pwdConnection
      });
      console.log("logged");
      history.push("/");
    } catch (error) {
      if (error.response) {
        console.log("error login");
      }
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inscription" {...a11yProps(0)} />
          <Tab label="Connexion" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} style={{ textAlign: 'center' }}>
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
      </TabPanel>
      <TabPanel value={value} index={1} style={{ textAlign: 'center' }}>
        <Typography variant='h3'>Connexion</Typography>
        <div class='form'>
          <label>
            Email <br />
            <input type="text" name="emailConnection" onChange={(e) => setEmailConnection(e.target.value)} required />
          </label><br />
          <label>
            Password <br />
            <input type="text" name="pwdConnection" onChange={(e) => setPwdConnection(e.target.value)} required />
          </label><br />
          <button class="button_form" onClick={handleSubmitConnection}>
            Validate
          </button>
        </div>

      </TabPanel>
    </Box>
  );
}
