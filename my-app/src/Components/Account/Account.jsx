import * as React from 'react';
import Box from '@mui/material/Box';
import './Account.css'
import Card from './Card';
import Panel from './Panel';

function Account() {
    return(
        <Box sx={{ width: '100%', m: '2rem' }}>
            <Card></Card>
            <br /><br />
            <Panel></Panel>
        </Box>
    )
}

export default Account;