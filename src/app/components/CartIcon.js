'use client'
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartIcon = (props) => {
  return (
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={props.count} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <p>{props.name}</p>
    </MenuItem>
  )
}
export default CartIcon