import Box from '@mui/material/Box';
import PetsitterCard from './PetsitterCard';

function Petsitter(){
    return(
        <Box sx={{ width: '100%', m: '2rem' }}>
            <h1>Our Petsitters</h1>
            <PetsitterCard></PetsitterCard>
        </Box>
    )
}

export default Petsitter;