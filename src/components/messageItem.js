import React,{useState} from 'react'
//MATERIAL IU
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles"
import {Icon} from '@material-ui/core'

//REDUX
import store from "../redux/store";
import {delete_} from "../redux/chat/actions"

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: "red",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    item:{
        backgroundColor:"hsla(0,0%,0%,.2)",
        borderRadius:"3px",
    }
}));

export default function MItem(props){

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return(
        <List>
            <ListItem 
                dense={true} 
                button onClick={handleClick}
                className={classes.item}
            >
              <ListItemText primary={props.content} /> 
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding onClick={() => store.dispatch(delete_(props.index))}>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Icon>delete</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Eliminar Mensaje" />
                    </ListItem>
                </List>
            </Collapse>            
        </List>
    )
}