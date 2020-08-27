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
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.body}>
      <MContainer/>
      <MArea/>
    </Box>
  );
}

export default App;
