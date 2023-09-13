'use client'
import React from 'react'
import Box from '@mui/material/Box';
const ImgComponent = (props) => {

    return (
        <div className='CardImage' onClick={props.onClickItemHandler} >
            <Box
                component="img"
                sx={{
                    height: 90,
                    width: 90,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={props.url} />
            <div style={{ fontSize: "13px", textAlign: "center", fontWeight: "bold" }}>{props.name}</div>
        </div>
    )
}
export default ImgComponent