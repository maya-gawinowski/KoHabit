import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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



export default function Login() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*const handleSubmit = () => {
    alert('A name was submitted: ' + this.state.value);
    //event.preventDefault();
  }*/

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Connexion" {...a11yProps(0)} />
          <Tab label="Inscription" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} style={{textAlign: 'center'}}>
        <Typography variant='h3'>Connexion</Typography>
        <form>
            <label>
                Nom <br />
                <input type="text" name="name" />
            </label><br />
            <label>
                Email <br />
                <input type="text" name="name" />
            </label><br />
            <label>
                Mot de passe <br />
                <input type="text" name="name" />
            </label><br />
            <label>
                Confirmer mot de passe <br />
                <input type="text" name="name" />
            </label><br />
            <input type="submit" value="Valider" />
        </form>
      </TabPanel>
      <TabPanel value={value} index={1} style={{textAlign: 'center'}}>
        <Typography variant='h3'>Inscription</Typography>
        <form onSubmit={handleSubmit()}>
                <label>
                    Email <br />
                    <input type="text" name="name" />
                </label><br />
                <label>
                    Mot de passe <br />
                    <input type="text" name="name" />
                </label><br />
                <input type="submit" value="Valider" />
            </form>
        </TabPanel>
    </Box>
  );
}
