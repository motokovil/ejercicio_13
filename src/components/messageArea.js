import React from 'react'
//Redux
import store from "../redux/store";
import {send, setInputValue} from "../redux/chat/actions"
//MATERIAL UI
import {Icon, InputBase, Box} from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme)=>({

    inputRoot: {
      color: 'inherit',
    },
    appbar:{
        height:"10vh"
    },
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
        
    },
    inputInput:{
        backgroundColor:"hsla(0,100%,100%,.2)",
        borderRadius:"5px",
        marginRight:"10px",
        paddingLeft:"10px",
        width:"80vw"
    }
}))

export default function MArea () {
    //Reducer
    const { chatReducer } = store.getState();
    //Material UI
    const classes = useStyles()

    return(
        <Box bgcolor="red">
            <AppBar position="static" className={classes.appbar}>
                <Toolbar 
                    className={classes.toolbar}
                >

                    <InputBase
                      placeholder="Escribe un mensaje…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      onChange={(e)=>store.dispatch(setInputValue(e.target.value))}
                      inputProps={{ 'aria-label': 'search' }}
                    />

                    <IconButton 
                      component="span"
                      onClick={()=>store.dispatch(send(chatReducer.inputMessage))}
                    >
                        <Icon style={{ color: "white" }}>
                            send
                        </Icon>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
        
    )
}