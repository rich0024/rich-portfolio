import './App.css';
import React from "react";
import Bio from './containers/bio.js';
import Links from './containers/links.js';
import Resume from './containers/resume.js';
import Projects from './containers/projects.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

function App() {
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Main" />
          <Tab label="Projects" />
          <Tab label="Resume" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1>Richard Yance</h1>
        <Links/>
        <Bio/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Resume/>
      </TabPanel>
    </div>
  );
}

export default App;
