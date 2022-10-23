import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import defaultpic from '../../Assets/defaultpicture.png';


const offers=[
    {
        id: 1,
        name: 'Maya',
        city: 'Fontainebleau',
        animalpref: 'Cat',
        dateStart: '06/12/2022',
        dateEnd: '12/12/2022'
    },
    {
        id: 1,
        name: 'Camille',
        city: 'Melun',
        animalpref: 'Cat',
        dateStart: '06/11/2022',
        dateEnd: '12/12/2022'
    },
    {
        id: 1,
        name: 'Nicolas',
        city: 'Paris',
        animalpref: 'Dog' ,
        dateStart: '06/12/2022',
        dateEnd: '12/12/2023'
    }
]

function OfferCard(){
    const [cityname, setCityName] = useState();

    function getData(){
        //here fetch the data to put into the cards
    }

    function askToPetsit(event, id){
        //add the demand to the user linked to this id
    }

    function handleSubmitCitySearch(value){
        //select all petsitters from this city
        //display them
    }

    return(
        <Box>
            <div>
                <label>
                    City Name
                    <input type="text" name="nameConnection" onChange={(e) => setCityName(e.target.value)} required/>
                </label>
                <button onClick={handleSubmitCitySearch}>
                    Search
                </button>
            </div>
            {offers.map((data,i) => (
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
                            <h3>From : {data.dateStart}</h3>
                            <h3>To : {data.dateEnd}</h3>
                        </Box>
                    </Box>
                    <button onClick={event => askToPetsit(event, data.id)}>Ask to petsit</button>
                </Box>
            ))}
        </Box>
    )
}

export default OfferCard;
