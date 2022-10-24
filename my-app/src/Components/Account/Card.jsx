import { useState } from "react";
import Box from '@mui/material/Box';
import pp from '../../Assets/pp.png';
import './Card.css'
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import Logout from './Logout';
import {createTheme, ThemeProvider} from "@mui/material";

function Card(){
    const [username, setUsername] = useState(undefined);
    const [useremail,setUseremail] = useState(undefined);

    function loadUserDetails() {
        //get data from database
        //setUsername
        //setUseremail
    }

    return(
        <Box>
            <h1 >My account</h1>
            <Box sx={{display: 'flex', flexDirection: 'row' }}>
                <Box>
                    <div>
                        <img style={{ width: 300}} src={pp} />
                    </div>
                </Box>
                <Box>
                    <h3>{username}</h3>
                    <h3>{useremail}</h3>
                    <ChangeEmail></ChangeEmail> <br />
                    <ChangePassword></ChangePassword> <br />
                    <Logout></Logout>
                </Box>
            </Box>
        </Box>
    )
}

export default Card;
