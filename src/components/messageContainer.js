import React from 'react'
//Redux
import store from "../redux/store";
//MATERIAL UI
import {Container} from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from "@material-ui/core/styles"
import List from '@material-ui/core/List';
//Material UI AppBar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
//COMPONENTES
import MItem from './messageItem'

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container:{
        height:"80vh",
        overflow:"auto",
        flexDirection:"column-reverse",
    },
    root: {
      width: '100%',
      maxWidth: 360,
    },
}));

export default function MContainer(){

    //Material UI
    const classes = useStyles()
    //Reducer
    const { chatReducer } = store.getState();
    const messages = chatReducer.messages;

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>

                  <Typography variant="h6" className={classes.title}>
                    Messenger
                  </Typography>
                  <Button color="inherit">Salir</Button>
                </Toolbar>
            </AppBar>

            <Container
              className={classes.container}
            >
              <List
                component="nav"
                className={classes.root}
              >
                {messages.map((item,i)=>{
                    return (
                        <MItem index={i} key={i} content={item.messages} date={item.date}/>
                    );
                })}
              </List>
            </Container>
        </div>
    )
}