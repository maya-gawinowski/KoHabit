import Box from '@mui/material/Box';
import PetsitterCard from './PetsitterCard';
import './Petsitter.css'
import fond from '../../Assets/petsitters.jpg'
import { useState } from "react";
import Media from 'react-media';
import { Fragment } from "react";

function Petsitter() {
    const [cityname, setCityName] = useState();

    function handleSubmitCitySearch(value) {
        //select all petsitters from this city
        //display them
    }

    return (

        <Media queries={{
            small: "(max-width:1440px)",
            large: "(min-width: 1440px)"
        }}>

        {matches => (
            <Fragment>
                <Box sx={{ width: '90%', m: '0 auto' }}>
                    <div className='petsitter-title'>Find the best petsitter for your pet !</div>

                    <div className='header-zone'>
                        <img className='petsitter-picture' src={fond} alt="petsitter img" />
                        <div className='search-zone'>
                            <label>
                                City Name
                            </label>
                            <input type="text" name="nameConnection" placeholder='City' onChange={(e) => setCityName(e.target.value)} required />

                            <button onClick={handleSubmitCitySearch}>
                                Search
                            </button>
                        </div>
                    </div>

                    { matches.small && <PetsitterCard size="small" /> }
                    {matches.large && <PetsitterCard size="large" />}
               
            
                </Box>

            </Fragment>
        )}
        </Media >
    )
}

export default Petsitter;