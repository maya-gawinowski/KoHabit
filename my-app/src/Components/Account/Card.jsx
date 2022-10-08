import Box from '@mui/material/Box';
import pp from '../../Assets/pp.png';
import './Card.css'
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

function Card(){
    var nom='Maya';
    var email='maya.jane@orange.fr';
    return(
        <Box>
            <h1 >Mon compte</h1>
            <Box sx={{display: 'flex', flexDirection: 'row' }}>
                <Box>
                    <div>
                        <img style={{ width: 300}} src={pp} />
                    </div>
                </Box>
                <Box>
                    <h3>{nom}</h3>
                    <h3>{email}</h3>
                    <ChangeEmail></ChangeEmail> <br />
                    <ChangePassword></ChangePassword>
                </Box>
            </Box>
            
        </Box>
    )
}

export default Card;