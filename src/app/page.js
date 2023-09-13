'use client'
import Image from 'next/image'
import React from 'react';
import style from './style.module.css';
import Header from './components/header/Header'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ImgComponent from './components/ImgComponent';
import { useRouter } from 'next/navigation';
import { dataList } from './services/data'
export default function Home() {
  const router = useRouter()
  const itemClickHandler = () => {
    router.push('/product')
  }
  return (
    <div className={`${"flex min-h-screen"} ${style.flex}`}>
      <div className={style.mainWarper}><Header /></div>
      <Paper className={style.paperStyle}>
        {
          dataList.map((value, index) => {
            return <ImgComponent name={value.Name} url={value.imgPath} ourPrice={value.OurPrice} marketPrice={value.MarketPrice} weight={value.weight} onClickItemHandler={itemClickHandler} />
          })
        }
        
      </Paper>
      <div className={style.captionText}>
        ଲୋରେମ୍ ଇପ୍ସମ୍ କେବଳ ପ୍ରିଣ୍ଟିଙ୍ଗ୍ ଏବଂ ଟାଇପ୍ ସେଟିଂ ଇଣ୍ଡଷ୍ଟ୍ରିର ଡମି ଟେକ୍ସଟ୍ | 1500 ଦଶକରୁ ଲୋରେମ୍ ଇପ୍ସମ୍ ଇଣ୍ଡଷ୍ଟ୍ରିର ଷ୍ଟାଣ୍ଡାର୍ଡ ଡମି ଟେକ୍ସଟ୍ ହୋଇଆସୁଛି, ଯେତେବେଳେ ଏକ ଅଜ୍ଞାତ ପ୍ରିଣ୍ଟର୍ ଏକ ପ୍ରକାରର ଗ୍ୟାଲି ନେଇ ଏକ ଟାଇପ୍ ନମୁନା ବୁକ୍ ତିଆରି କରିବାକୁ ଚେଷ୍ଟା କଲା | ଏହା କେବଳ ପାଞ୍ଚ ଶତାବ୍ଦୀ ନୁହେଁ, ଇଲେକ୍ଟ୍ରୋନିକ୍ ଟାଇପ୍ ସେଟିଂରେ ମଧ୍ୟ ଲମ୍ଫ ଦେଇଛି, ଯାହା ଅପରିବର୍ତ୍ତିତ ରହିଛି | ୧ ss ୦ ଦଶକରେ ଲୋରେମ୍ ଇପ୍ସମ୍ ପାସେଜ୍ ଧାରଣ କରିଥିବା ଲେଟ୍ରାସେଟ୍ ଶୀଟ୍ ରିଲିଜ୍ ହେବା ସହିତ ଏହା ଲୋକପ୍ରିୟ ହୋଇଥିଲା ଏବଂ ଲୋରେମ୍ ଇପ୍ସମ୍ ର ସଂସ୍କରଣ ସହିତ ଆଲଡସ୍ ପେଜ୍ ମେକର୍ ପରି ଡେସ୍କଟପ୍ ପ୍ରକାଶନ ସଫ୍ଟୱେର୍ ସହିତ ଲୋରେମ୍ ଇପ୍ସମ୍ କେବଳ ମୁଦ୍ରଣ ଏବଂ ଟାଇପ୍ ସେଟିଂ ଇଣ୍ଡଷ୍ଟ୍ରିର ଡମି ପାଠ୍ୟ | 1500 ଦଶକରୁ ଲୋରେମ୍ ଇପ୍ସମ୍ ଇଣ୍ଡଷ୍ଟ୍ରିର ଷ୍ଟାଣ୍ଡାର୍ଡ ଡମି ଟେକ୍ସଟ୍ ହୋଇଆସୁଛି, ଯେତେବେଳେ ଏକ ଅଜ୍ଞାତ ପ୍ରିଣ୍ଟର୍ ଏକ ପ୍ରକାରର ଗ୍ୟାଲି ନେଇ ଏକ ଟାଇପ୍ ନମୁନା ବୁକ୍ ତିଆରି କରିବାକୁ ଚେଷ୍ଟା କଲା | ଏହା କେବଳ ପାଞ୍ଚ ଶତାବ୍ଦୀ ନୁହେଁ, ଇଲେକ୍ଟ୍ରୋନିକ୍ ଟାଇପ୍ ସେଟିଂରେ ମଧ୍ୟ ଲମ୍ଫ ଦେଇଛି, ଯାହା ଅପରିବର୍ତ୍ତିତ ରହିଛି | ୧ ss ୦ ଦଶକରେ ଲୋରେମ୍ ଇପ୍ସମ୍ ପାସେଜ୍ ଧାରଣ କରିଥିବା ଲେଟ୍ରାସେଟ୍ ସିଟ୍ ରିଲିଜ୍ ହେବା ସହିତ ଏବଂ ଲୋରେମ୍ ଇପ୍ସମ୍ ର ସଂସ୍କରଣ ସହିତ ଆଲଡସ୍ ପେଜ୍ ମେକର୍ ପରି ଡେସ୍କଟପ୍ ପ୍ରକାଶନ ସଫ୍ଟୱେର୍ ସହିତ ଏହା ଲୋକପ୍ରିୟ ହୋଇଥିଲା
      </div>
      <div className={style.paperStyleButtomBackground}>
        <Paper className={style.paperStyleButtom}>
          <h2 className={style.h2text}>Steal deals and more for you</h2>
        </Paper>
      </div>
    </div>
  )
}
