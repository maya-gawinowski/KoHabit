import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import defaultpicture from '../../Assets/defaultpicture.png'
import './Panel.css'
import Popup from 'reactjs-popup';

const offers=[
  {
    title: 'Petsitting your cat',
    date_start:'2021-03-12',
    date_end:'2021-06-12',
    location:'Paris',
    animal:'Cat'
  }
]

const animals=[
    {
        id: 1,
        name: 'Maya',
        city: 'Fontainebleau',
        animalpref: 'Cat',
        dateStart: '06/12/2022',
        dateEnd: '12/12/2022'
    }
    ]

const keepings=[
      {
        date_start:'2021-03-12',
        date_end:'2021-06-12',
        location:'Paris',
        sitterID:1
      },
      {
        date_start:'2021-03-12',
        date_end:'2021-06-12',
        location:'Paris',
        sitterID:1
      }
    ]

const requests=[
      {
        id: 1,
        status: 'To petsit',
        date_start:'2021-03-12',
        date_end:'2021-06-12',
        location:'Paris',
      },
      {
        id: 2,
        status: 'To keep your animal',
        date_start:'2021-03-12',
        date_end:'2021-06-12',
        location:'Paris',
      }
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Panel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const acceptDemand = (event, id, status) => {
      // update database
      // -> delete from demands
      // -> add to offers or keepings based on the status
      // reload page
    }

    const dismissDemand = (event, id) => {
      // update database
      // -> delete from demands
      // reload pages
    }

    return(
        <Box>
            <Box sx={{borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="My offers" {...a11yProps(0)} />
                <Tab label="My animals" {...a11yProps(1)} />
                <Tab label="My keepings" {...a11yProps(2)} />
                <Tab label="My requests" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} style={{textAlign: 'center'}}>
                <div>
                    <Popup
                        trigger={<button type='submit' className='panel-button'>Add offer</button>}
                        modal
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header">
                                    <span>Add a new petsitting offer</span></div>
                                <form className="new-item">
                                    <input name="category" placeholder="category" ></input>
                                    <input name="city" placeholder="city" ></input>
                                    <input name="keyword" placeholder="keyword" ></input>
                                    <input name="userId" placeholder="userId" ></input>
                                    <button type="button" className='panel-button'>Submit</button>
                                </form>
                            </div>
                        )}
                    </Popup>
                  {offers.map((data,i) => (
                      <Box sx={[
                          {
                              display: 'flex', flexDirection: 'row', boxShadow: 3, margin: '10px', transition: 'transform .2s'
                          },
                          {
                              '&:hover': {
                                  transform: 'scale(1.05)'
                              },
                          }
                      ]}>
                      <Box>
                      <div>
                        <img style={{ width: 200}} src={defaultpicture} />
                      </div>
                      </Box>
                      <Box sx={{textAlign: 'left'}}>
                        <ul>
                          <li>{data.title}</li>
                          <li>{data.animal}</li>
                          <li>In {data.location}</li>
                          <li>Start date {data.date_start}</li>
                          <li>End date {data.date_end}</li>
                        </ul>
                      </Box>
                    </Box>
                  ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} style={{textAlign: 'center'}}>
                <div>
                    <Popup
                        trigger={<button type='submit' className='panel-button'>Add animal</button>}
                        modal
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header">
                                    <span>Add a new animal</span></div>
                                <form className="new-item">
                                    <input name="category" placeholder="category" ></input>
                                    <input name="city" placeholder="city" ></input>
                                    <input name="keyword" placeholder="keyword" ></input>
                                    <input name="userId" placeholder="userId" ></input>
                                    <button type="button" className='panel-button'>Submit</button>
                                </form>
                            </div>
                        )}
                    </Popup>
                    {animals.map((data,i) => (
                        <Box sx={[
                            {
                                display: 'flex', flexDirection: 'row', boxShadow: 3, margin: '10px', transition: 'transform .2s'
                            },
                            {
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                },
                            }
                        ]}>
                            <Box>
                                <div>
                                    <img style={{ width: 200}} src={defaultpicture} />
                                </div>
                            </Box>
                            <Box sx={{textAlign: 'left'}}>
                                <ul >
                                    <li>Name : {data.name}</li>
                                    <li>City : {data.city}</li>
                                    <li>Kind of pet : {data.animalpref}</li>
                                    <li>From : {data.dateStart}</li>
                                    <li>To : {data.dateEnd}</li>
                                </ul>
                            </Box>
                        </Box>
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={2} style={{textAlign: 'center'}}>
                <div>
                  {keepings.map((data,i) => (
                      <Box sx={[
                          {
                              display: 'flex', flexDirection: 'row', boxShadow: 3, margin: '10px', transition: 'transform .2s'
                          },
                          {
                              '&:hover': {
                                  transform: 'scale(1.05)'
                              },
                          }
                      ]}>
                      <Box>
                      <div>
                        <img style={{ width: 200}} src={defaultpicture} />
                      </div>
                      </Box>
                      <Box sx={{textAlign: 'left'}}>
                        <ul >
                          <li>In {data.location}</li>
                          <li>Start date {data.date_start}</li>
                          <li>End date {data.date_end}</li>
                          <li>With {data.sitterID}</li>
                        </ul>
                      </Box>
                    </Box>
                  ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={3} style={{textAlign: 'center'}}>
            <div>
                  {requests.map((data,i) => (
                    <Box sx={[
                        {
                        boxShadow: 3, textAlign: 'left', transition: 'transform .2s'
                    },
                        {
                            '&:hover': {
                                transform: 'scale(1.05)'
                            },
                        }
                    ]}>
                      <Box sx={{display: 'flex', flexDirection: 'row', margin: '10px' }}>
                        <Box>
                        <div>
                          <img style={{ width: 200}} src={defaultpicture} />
                        </div>
                        </Box>
                        <Box sx={{textAlign: 'left'}}>
                          <ul >
                            <li>{data.status}</li>
                            <li>Start date {data.date_start}</li>
                            <li>End date {data.date_end}</li>
                            <li>In {data.location}</li>
                          </ul>
                        </Box>
                      </Box>
                      <Box>
                        <button class="modify" onClick={event => acceptDemand(event,data.id, data.status)}>Accept</button>
                        <button class="modify" onClick={event => dismissDemand(event,data.id)}>Dismiss</button>
                      </Box>
                    </Box>


                  ))}
                </div>
            </TabPanel>
        </Box>
    )
}

export default Panel;
