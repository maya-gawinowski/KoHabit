import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import defaultpicture from '../../Assets/defaultpicture.png'

const offers=[
  {
    title: 'Petsitting your cat',
    date_start:'2021-03-12',
    date_end:'2021-06-12',
    location:'Paris',
    animal:'Cat'
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
                <Tab label="My keepings" {...a11yProps(1)} />
                <Tab label="My requests" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} style={{textAlign: 'left'}}>
                <div>
                  {offers.map((data,i) => (
                    <Box sx={{display: 'flex', flexDirection: 'row', boxShadow: 3, margin: '10px' }}>
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
                  {keepings.map((data,i) => (
                    <Box sx={{display: 'flex', flexDirection: 'row', boxShadow: 3, margin: '10px' }}>
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
            <TabPanel value={value} index={2} style={{textAlign: 'center'}}>
            <div>
                  {requests.map((data,i) => (
                    <Box sx={{boxShadow: 3, textAlign: 'left'}}>
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
                        <button class="modify" onClick={event => acceptDemand(event,data.id, data.status)}>accept</button>
                        <button class="modify" onClick={event => dismissDemand(event,data.id)}>dismiss</button>
                      </Box>
                    </Box>


                  ))}
                </div>
            </TabPanel>
        </Box>
    )
}

export default Panel;