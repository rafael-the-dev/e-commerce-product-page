import { Button, Divider, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react';
import { useStyles } from './styles';
import classNames from 'classnames';
import { useDisplay, useTypography, useResponsive } from '../../styles'
import CartItem from './CartItem';

const CartDialog = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();

    const { closeCartDialog, getCartList, openCartDialog, setCartList } = useContext(AppContext);

    const checkoutClickHandler = () => setCartList([]);

    return (
        <Dialog 
            classes={{ root: classes.dialogRoot, scrollPaper: classNames(display.alignStart, responsive.smJustifyEnd), paper: classes.dialogPaper}} 
            onClose={closeCartDialog} 
            aria-labelledby="simple-dialog-title" 
            open={openCartDialog}>
            <DialogTitle id="simple-dialog-title">Cart</DialogTitle>
            <DialogContent>
                <Divider />
                { getCartList().length === 0 ? (
                    <Typography 
                        component="h2" 
                        variant="h6" 
                        className={classNames(text.font7, classes.dialogMessage, display.mt2, display.mb2)}>
                        Your current cart is empty.
                    </Typography>
                ): (
                    getCartList().map((item, index) => <CartItem key={index} { ...item }/>)
                )}
            </DialogContent>
            { getCartList().length > 0 && (
                <DialogActions>
                    <Button 
                        className={classNames(display.w100, classes.dialogCheckoutButton, text.textLight)} 
                        onClick={checkoutClickHandler}>
                        Checkout
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    );
};

export default CartDialog;