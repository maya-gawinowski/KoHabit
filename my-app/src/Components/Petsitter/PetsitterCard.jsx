import Box from '@mui/material/Box';
import defaultpic from '../../Assets/defaultpicture.png';


const petsitters=[
    {
        id: 1,
        name: 'Maya',
        city: 'Fontainebleau',
        animalpref: 'Cat' 
    },
    {
        id: 1,
        name: 'Camille',
        city: 'Melun',
        animalpref: 'Cat' 
    },
    {
        id: 1,
        name: 'Nicolas',
        city: 'Paris',
        animalpref: 'Dog' 
    }
]

function PetsitterCard(){

    function getData(){
        //here fetch the data to put into the cards
    }

    function askToGuard(event, id){
        //add the demand to the user linked to this id
    }

    return(
        <Box>
            {petsitters.map((data,i) => (
                <Box sx={{boxShadow: 3, margin: '50px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row' }}>
                        <Box>
                            <div>
                                <img style={{ width: 200}} src={defaultpic} />
                            </div>
                        </Box>
                        <Box sx={{marginLeft: '20px'}}>
                            <h3>Name : {data.name}</h3>
                            <h3>City : {data.city}</h3>
                            <h3>Animal preferences : {data.animalpref}</h3>
                        </Box>
                    </Box>
                    <button onClick={event => askToGuard(event, data.id)}>Ask to guard</button>
                </Box>
            ))}
        </Box>
    )
}

export default PetsitterCard;