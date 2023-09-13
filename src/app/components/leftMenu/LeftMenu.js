import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Style from './style.module.css';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    fontSize: "12px",
};

export default function LeftMenu() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
                <ListItemText className={Style.textSize} primary="UREA" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText className={Style.textSize} primary="POTASH" />
            </ListItem>
            <ListItem button>
                <ListItemText className={Style.textSize} primary="NPK" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText  className={Style.textSize} primary="GROMOR" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText className={Style.textSize} primary="DAP " />
            </ListItem>
        </List>
    );
}