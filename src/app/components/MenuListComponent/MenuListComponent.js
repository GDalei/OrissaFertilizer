import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';
import style from './style.module.css';
export default function MenuListComponent({ menuName = "", menuList = [""] }) {
    return (
        <Dropdown>
            <MenuButton variant="text" size="sm">{menuName}</MenuButton>
            <Menu size="sm" className={style.warpper}>
                {
                    menuList.map((value) => {
                        return <> <ListDivider />
                            <MenuItem>{value}</MenuItem></>
                    })
                }
            </Menu>
        </Dropdown>
    );
}