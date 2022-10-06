import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pp from '../../Assets/pp.png'

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
  

function Account() {
    var nom='Maya';
    var email='maya.jane@orange.fr';
    //var password='truc';

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <Box sx={{ width: '100%', m: '2rem' }}>
            <h1 >Mon compte</h1>
            <Box>
                <div>
                    <img style={{ width: 200}} src={pp} />
                </div>
            </Box>
            <Box>
                <h3>{nom}</h3>
                <h3>{email}</h3>
                <button>Modify email</button>
                <button>Modify Password</button>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Mes annonces" {...a11yProps(0)} />
                <Tab label="Mes gardes" {...a11yProps(1)} />
                <Tab label="Mes demandes" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} style={{textAlign: 'center'}}>
                <Typography variant='h3'>Mes annonces</Typography>
            </TabPanel>
            <TabPanel value={value} index={1} style={{textAlign: 'center'}}>
                <Typography variant='h3'>Mes gardes</Typography>
            </TabPanel>
            <TabPanel value={value} index={2} style={{textAlign: 'center'}}>
                <Typography variant='h3'>Mes demandes</Typography>
            </TabPanel>
        </Box>
    )
    
}

export default Account;