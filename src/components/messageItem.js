import React,{useState} from 'react'
import moment from "moment"
//MATERIAL IU
import {IconButton, Icon, Typography} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setAnchorEl(null);
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

        //<Card className={classes.root}>
        //    <CardHeader
        //        avatar={
        //            <Avatar arial-label="recipe" className={classes.avatar}>
        //                L
        //            </Avatar>
        //        }
        //        action={
        //            <div>
        //              <Button 
        //                aria-controls="simple-menu" 
        //                aria-haspopup="true" 
        //                onClick={handleClick}>
        //                <MoreVertIcon></MoreVertIcon>
        //              </Button>
        //              <Menu
        //                id="simple-menu"
        //                anchorEl={anchorEl}
        //                keepMounted
        //                open={Boolean(anchorEl)}
        //                onClose={handleClose}
        //              >
        //                <MenuItem onClick={() => store.dispatch(delete_(props.index))}>Eliminar mensaje</MenuItem>
        //              </Menu>
        //            </div>
        //        }
        //        title={props.content}
        //        subheader={moment(props.date).calendar()}
        //    />
        //</Card>
        //<List>
        //    <ListItem
        //        dense={true}
        //        bgcolor="primary"
        //        button onClick={handleClick}
        //        className={classes.item}
        //    >
        //      <ListItemText primary={props.content} /> 
        //      {open ? <ExpandLess /> : <ExpandMore />}
        //    </ListItem>
//
        //    <Collapse in={open} timeout="auto" unmountOnExit>
        //        <List component="div" disablePadding onClick={() => store.dispatch(delete_(props.index))}>
        //            <ListItem button className={classes.nested}>
        //                <ListItemIcon>
        //                    <Icon>delete</Icon>
        //                </ListItemIcon>
        //                <ListItemText primary="Eliminar Mensaje" />
        //            </ListItem>
        //        </List>
        //    </Collapse>            
        //</List>
    )
}