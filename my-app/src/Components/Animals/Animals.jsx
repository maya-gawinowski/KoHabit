import Box from '@mui/material/Box';
import AnimalCard from './AnimalCard';
import fond from '../../Assets/pets_background.jpg'
import { useState } from "react";
import './Animals.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Animals() {
    const [cityname, setCityName] = useState();

    function handleSubmitCitySearch(value){
        //select all petsitters from this city
        //display them
    }

    // const navigate = useNavigate();
    // const axiosJWT = axios.create();
    // const [token, setToken] = useState('');
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     getPosts();
    // }, []);

    // const getPosts = async () => {
    //     const response = await axiosJWT.get('http://localhost:5000/posts', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });
    //     setPosts(response.data);
    // }

    return(
        <Box sx={{ width: '90%', m: '0 auto', display : 'flex', flexDirection : 'column'}}>
            <div className='animal-title'>What cute pet are you choosing ?</div>
            <img className='pet-picture' src={fond} alt="petsitter img" />
            <div className='animal-search-zone'>
                <label>City Name </label>
                <input type="text" name="nameConnection" onChange={(e) => setCityName(e.target.value)} required/>

                <button onClick={handleSubmitCitySearch}>
                    Search
                </button>
                </div>
            <AnimalCard></AnimalCard>
        </Box>
    )

}

export default Animals;
