'use client'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// import style from './style.module.css';

export default function LeftMenu() {
    return (
        <List component="nav" aria-label="mailbox folders">
            <ListItem button>
                <ListItemText  primary="UREA" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText  primary="POTASH" />
            </ListItem>
            <ListItem button>
                <ListItemText  primary="NPK" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText  primary="GROMOR" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText  primary="DAP " />
            </ListItem>
        </List>
    );
}