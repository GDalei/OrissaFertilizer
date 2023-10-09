'use client'
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import style from './style.module.css';
import Paper from '@mui/material/Paper';
import Cards from '../components/cards/Card';
import { dataList, Description, MenuList } from '../services/data';
import ExampleCollapsibleList from '../components/tree/ExampleCollapsibleList';
import DetailsViewpopup from '../components/detailsViewpopup/DetailsViewpopup';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import LeftMenu from '../components/leftMenu/LeftMenu';
import Box from '@mui/joy/Box';
import MenuListComponent from '../components/MenuListComponent/MenuListComponent';
import SearchBarComponent from '../components/SearchBarComponent/SearchBarComponent';
const Product = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})
    const clickHandler = (event) => {
        setData(dataList[event.target.getAttribute("index")])
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false);

    };
    useEffect(() => {

    }, [isOpen])
    const content = (
        <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
            {`${Description}`}
        </Box>
    );
    return (
        <div className={style.productWarper}>
            <div className={style.productHeader}><Header /></div>
            <Paper className={style.productMenubar}>
                <div>
                    {
                        MenuList.map((value, index) => {
                            //return <li><a href={value.path}>{value.Name}</a></li>
                            return <MenuListComponent menuName={value.Name} menuList={value.MenuList} />
                        })
                    }
                </div>
                <div><SearchBarComponent/></div>
            </Paper>
            <div className={style.productBody}>
                <Paper className={style.leftSideBar}>
                    <div className={style.leftSiderMenu}>Our Product</div>
                    <LeftMenu />
                </Paper>

                <Paper className={style.rightSideBar}>

                    <Typography className={style.rightSideBarHeader}>{content}
                        <Divider >Description</Divider>
                    </Typography>

                    {
                        dataList.map((value, index) => {
                            return <div onClick={clickHandler}><Cards name={value.Name} url={value.imgPath} ourPrice={value.OurPrice} marketPrice={value.MarketPrice} weight={value.weight} index={index} /></div>
                        })
                    }

                </Paper>
            </div>
            {isOpen ? <DetailsViewpopup isopen={true} closePopupHandler={handleClose} Data={data} /> : ""}

        </div>
    )
}
export default Product