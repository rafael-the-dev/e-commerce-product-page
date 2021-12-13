import { Divider, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react';
import { useStyles } from './styles';
import classNames from 'classnames';
import { useDisplay, useTypography, useResponsive } from '../../styles'

const CartDialog = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();

    const { getCartList, openCartDialog, closeCartDialog } = useContext(AppContext);

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
                ): <></>}
            </DialogContent>
        </Dialog>
    );
};

export default CartDialog;