import Box from '@mui/material/Box';
import pp from '../../Assets/pp.png';
import './Card.css'
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import Logout from './Logout';
import {createTheme, ThemeProvider} from "@mui/material";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

function Card(){
    // const [username, setUsername] = useState(undefined);
    // const [useremail,setUseremail] = useState(undefined);

    // function loadUserDetails() {
    //     //get data from database
    //     //setUsername
    //     //setUseremail
    // }

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [mail, setMail] = useState('');

    useEffect(() => {
        refreshToken();
        //getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setMail(decoded.mail);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate('/access')
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    return(
        <Box>
            <h1 >Bonjour, {name}</h1>
            <Box sx={{display: 'flex', flexDirection: 'row' }}>
                <Box>
                    <div>
                        <img style={{ width: 300}} src={pp} />
                    </div>
                </Box>
                <Box>
                    <h3>{name}</h3>
                    <h3>{}</h3>
                    <ChangeEmail></ChangeEmail> <br />
                    <ChangePassword></ChangePassword> <br />
                    <Logout></Logout>
                </Box>
            </Box>
        </Box>
    )
}

export default Card;
