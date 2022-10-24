import * as React from 'react';
import './Animals.css';
import Box from '@mui/material/Box';
import defaultpic from '../../Assets/defaultpicture.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


const animals=[
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
    },

    {
        id: 1,
        name: 'Nicolas',
        city: 'Paris',
        animalpref: 'Dog' ,
        dateStart: '06/12/2022',
        dateEnd: '12/12/2023'
    },

    {
        id: 1,
        name: 'Nicolas',
        city: 'Paris',
        animalpref: 'Dog' ,
        dateStart: '06/12/2022',
        dateEnd: '12/12/2023'
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

function AnimalCard(){

    const navigate = useNavigate();
    const axiosJWT = axios.create();
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axiosJWT.get('http://localhost:5000/posts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setPosts(response.data);
    }
    
    
    function getData(){
        //here fetch the data to put into the cards
    }

    function askToPetsit(event, id){
        //add the demand to the user linked to this id
    }

    
    
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>
            {posts.map((data,i) => (
                <Box sx={[
                    {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                    margin : '2em auto',
                    width : '25vw',
                    display: 'flex',
                    flexDirection : 'column',
                    borderRadius : '15px',
                        transition: 'transform .2s'
                    },
                    {
                        '&:hover': {
                            transform: 'scale(1.05)'
                        }
                    }
                ]}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign : 'center',
                        mt : '1em'
                        }}>
                        <Box>
                            <div>
                                <img style={{ width: 200}} src={defaultpic} />
                            </div>
                        </Box>
                        <Box sx={{
                            margin : '1em auto',
                            textAlign : 'center'
                            }}>
                            <h3>Name : {data.name}</h3>
                            <h3>City : {data.city}</h3>
                            <h3>Kind of pet : {data.animal}</h3>
                            <h3>From : {data.dateFrom.slice(0,10)}</h3>
                            <h3>To : {data.dateTo.slice(0,10)}</h3>
                        </Box>
                    </Box>
                    <button className='animal-contact' onClick={event => askToPetsit(event, data.id)}>Ask to petsit</button>
                </Box>
            ))}
        </Box>
    )
}

export default AnimalCard;
