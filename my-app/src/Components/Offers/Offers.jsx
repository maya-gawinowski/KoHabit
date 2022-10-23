import Box from '@mui/material/Box';
import OfferCard from './OfferCard';
import fond from '../../Assets/pets_background.jpg'
import { useState } from "react";
import './Offers.css'

function Offers() {
    const [cityname, setCityName] = useState();

    function handleSubmitCitySearch(value){
        //select all petsitters from this city
        //display them
    }

    return(
        <Box sx={{ width: '90%', m: '0 auto', display : 'flex', flexDirection : 'column'}}>
            <div className='post-title'>What cute pet are you choosing ?</div>
            <img className='pet-picture' src={fond} alt="petsitter img" />
            <div className='post-search-zone'>
                <label>City Name </label>
                <input type="text" name="nameConnection" onChange={(e) => setCityName(e.target.value)} required/>

                <button onClick={handleSubmitCitySearch}>
                    Search
                </button>
                </div>
            <OfferCard></OfferCard>
        </Box>
    )

}

export default Offers;
