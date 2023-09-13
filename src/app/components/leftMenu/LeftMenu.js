import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import style from './style.module.css';
// const style = {
//     width: '100%',
//     maxWidth: 360,
//     bgcolor: 'background.paper',
//     fontSize: "12px",
// };

export default function LeftMenu() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
                <ListItemText className={style.textSize} primary="UREA" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText className={style.textSize} primary="POTASH" />
            </ListItem>
            <ListItem button>
                <ListItemText className={style.textSize} primary="NPK" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText  className={style.textSize} primary="GROMOR" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText className={style.textSize} primary="DAP " />
            </ListItem>
        </List>
    );
}