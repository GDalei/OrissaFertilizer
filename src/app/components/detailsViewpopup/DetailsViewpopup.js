import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import style from './style.module.css';
import Divider from '@mui/material/Divider';
export default function DetailsViewpopup(props) {
  const [open, setOpen] = React.useState(props.isopen);
  console.log(props.Data)
  const handleClose = () => {
    setOpen(false);
    props.closePopupHandler()
  };
  const { Name, OurPrice, MarketPrice, imgPath, weight } = props.Data;
  const SellerDetails = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );
  const ProductDescription = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );
  return (
    <div className={style.warper}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={style.width}

      >

        <DialogContent className={style.dialogContent}>
          <DialogContentText id="alert-dialog-description">
            <div className={style.wrapper}>
              <div >
                <div><img
                src={imgPath}
                srcSet={imgPath}
                loading="lazy"
                alt=""
                height="300"
                width="300"

              />
              </div></div>
              <div ><div className={style.sellerDetails}>
                <DialogTitle className={style.title}>{Name} {weight}</DialogTitle>
                <div className={style.body}>
                  <span className={style.rating}>
                    <span className={style.rating2}>4.7</span>
                    <span><span className="starForProduct">★</span>
                      <span>

                      </span>
                    </span></span>
                  <span> India no 1 farmer Fertilizer</span>
                  <div className={style.price} >
                    <span className={style.moneySymbol} >₹</span><span data-inr="549" className={style.moneyCal}>{OurPrice}</span>
                    <span className={style.weight}>{weight}</span>
                  </div>
                  <Divider className={style.dividerColor} orientation="vertical" flexItem>Seller Details</Divider>
                  <div className={style.bodyTitle}>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>Seller- Rakesh Sundaray </div>
                    <div>At-Ankulachati, Balugaon </div>
                    <div>District-Khordha </div>
                    <div>Pin-752030 </div>
                    <div>State-Odisha</div>
                    <div style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}>Contact-9438525294
                      -9114093129 </div>
                    <Divider className={style.dividerColor} orientation="vertical" flexItem>Product Description</Divider>
                    {ProductDescription}
                  </div>

                </div>
              </div></div>
            </div>
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}