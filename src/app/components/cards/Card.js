'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import style from './style.module.css';
import Button from '@mui/joy/Button';
import { useRouter } from 'next/navigation'

export default function Cards({ name = "", url = "", ourPrice = "", marketPrice = "", weight = "",index="" }) {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    const itemClickHandler = () => {
        console.log("Call")
        setOpen(true)

        // router.push('/details')
    }
    return (
        <Box
            component="ul"
            onClick={itemClickHandler}
        >
           
            <div className={style.cardMainWarper}>
                <Card component="li" sx={{ minWidth: 200, flexGrow: 1, minHeight: 200, boxShadow: "none", backgroundColor: "none" }} className={style.cardWarper}>
                    <CardCover >
                        <img
                            src={url}
                            srcSet={url}
                            loading="lazy"
                            alt=""
                            index={index}
                        />
                    </CardCover>

                </Card>
                <CardContent className={style.cardContain}>
                    <Typography className={style.cardTitle1}
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                    >
                        {name}
                    </Typography>
                    <Typography className={style.cardTitle2}
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                    >
                        <div className={style.price} >
                            <span className={style.moneySymbol} >OurPrice: ₹</span><span data-inr="549" className={style.moneyCal}>{ourPrice}</span>
                            <span className={style.rating}>
                                <span className={style.rating2}>4.7</span>
                                <span><span className="starForProduct">★</span>
                                    <span>
                                    </span>
                                </span></span>
                        </div>

                        <div className={style.marketPrice}> MarketPrice:{marketPrice}</div>

                    </Typography>
                    {/* <div className={style.cardButtonWarper}>
                    <Button variant="outlined" disabled>{weight}</Button>
                    <Button variant="outlined">More..</Button>
                </div> */}
                </CardContent>
            </div>
        </Box>
    );
}