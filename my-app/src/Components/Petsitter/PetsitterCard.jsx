import * as React from 'react';
import Box from '@mui/material/Box';
import defaultpic from '../../Assets/defaultpicture.png';
import './PetsitterCard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


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

function PetsitterCard({size}){

    function getData(){
        //here fetch the data to put into the cards
    }

    function askToPetsit(event, id){
        //add the demand to the user linked to this id
    }

    const navigate = useNavigate();
    const axiosJWT = axios.create();
    const [token, setToken] = useState('');
    const [posts, setPetsitters] = useState([]);

    useEffect(() => {
        getPetsitters();
    }, []);

    const getPetsitters = async () => {
        const response = await axiosJWT.get('http://localhost:5000/petsitters', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setPetsitters(response.data);
    }

    return(
        <Box sx={{

        }}>
            {posts.map((data,i) => (
                <Box sx={[
                    {
                    boxShadow : 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' ,
                    borderRadius :'15px',
                    margin: '3em auto',
                    display: 'flex',
                    textAlign: 'center',
                    flexDirection : 'column',
                    width: size ==='small' ? '300px' : '60vw',
                        transition: 'transform .2s'
                    },
                    {
                        '&:hover': {
                            transform: 'scale(1.05)'
                        },
                    }
                    ]
                }>
                    <Box sx={{display: 'flex', flexDirection: size ==='small' ? 'column' : 'row'}}>
                        <Box>
                            <div>
                                <img style={{ width: 200}} src={defaultpic} />
                            </div>
                        </Box>
                        <Box sx={{
                            marginLeft: '20px',

                        }}>
                            <h3>Name : {data.name}</h3>
                            <h3>City : {data.city}</h3>
                            <h3>Animal preferences : {data.animal}</h3>
                        </Box>
                    </Box>
                    <button className='petsitter-contact' onClick={event => askToPetsit(event, data.id)}>Ask to petsit</button>
                </Box>
            ))}
        </Box>
    )
}

export default PetsitterCard;
