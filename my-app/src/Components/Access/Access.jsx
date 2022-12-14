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
import Log from './Login';
import Register from './Register';

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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Inscription" {...a11yProps(0)} />
            <Tab label="Connexion" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{ textAlign: 'center' }}>
            <Register></Register>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ textAlign: 'center' }}>
        <Log> </Log>
        </TabPanel>
      </Box>
    );
  }