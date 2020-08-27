import React,{useState} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {makeStyles} from "@material-ui/core/styles"

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
        border:"1px solid hsla(0,0%,0%, .3)",
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
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Eliminar Mensaje" />
                    </ListItem>
                </List>
            </Collapse>            
        </List>
    )
}