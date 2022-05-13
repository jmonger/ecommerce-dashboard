import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Grid, Paper, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import BasicDatePicker from '../components/date-picker/BasicDatePicker';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

export default function Trips() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Trip Planning" {...a11yProps(0)} />
          <Tab label="Iteneraries" {...a11yProps(1)} />
          <Tab label="Specials" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <TextField fullWidth id="outlined-basic" label="Trip Name" variant="outlined" />

  </Grid>
  <Grid item xs={6}>
  </Grid>
  <Grid item xs={6}>
  <TextField fullWidth id="outlined-basic" label="Destination" variant="outlined" />

  </Grid>
  <Grid item xs={6}>
  </Grid>
  <Grid item xs={3}>
  <BasicDatePicker label="Start"/>
  </Grid>
  <Grid item xs={3}>  
  <BasicDatePicker label="Finish"/>
  </Grid>
  <Grid xs={6} />
  <Grid item xs={2}>  
  <TextField label="Total Cost"/>
  </Grid>
  <Grid item xs={2}>  
  <TextField label="# of Travelers"/>
  </Grid>

  <Grid item xs={2}>  
  <TextField label="# of Installments"/>
  </Grid>
  <Grid item xs={6}/>

  <Grid item xs={6}>
  <Button fullWidth variant="contained">Create Trip</Button>
  </Grid>


</Grid>


      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
      </Container>
    
  );
}
