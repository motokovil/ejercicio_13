import React,{useState} from 'react'
import moment from "moment"
//MATERIAL IU
import {IconButton, Icon, Typography} from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

//REDUX
import store from "../redux/store";
import {delete_} from "../redux/chat/actions";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    item:{
        border:"1px solid #7986cb",
        borderRadius:"3px",
        marginTop:"10px",
    },
    typo:{
        fontSize:"10px",
        color:"grey",
        marginRight:"10px"
    },
    purple: {
        color: "white",
        backgroundColor: "hsla(230,40%,50%)",
    },
  }));

export default function MItem(props){
    //MUI
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return(
    <div>
      <ListItem 
        button 
        onClick={handleClick}
        className={classes.item}
      >
        <ListItemIcon>
          <Avatar className={classes.purple}>
            M
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={props.content} />
        <Typography className={classes.typo}>
            {moment(props.date).format('h:mma')}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}
          onClick={() => store.dispatch(delete_(props.index))}>
            <IconButton>
                <Icon>
                    delete
                </Icon>
            </IconButton>
            <ListItemText primary="Eliminar mensaje" />
          </ListItem>
        </List>
      </Collapse>
    </div>
    )
}