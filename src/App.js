import React from 'react';
import './App.css';

//Components
import MArea from './components/messageArea'
import MContainer from './components/messageContainer'

//Material UI
import {Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(({
  body:{
    width:"350px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
  },
  html:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.html}>
      <Box className={classes.body}>
        <MContainer/>
        <MArea/>
      </Box>
    </Box>
  );
}

export default App;
