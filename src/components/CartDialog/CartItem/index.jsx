import { useStyles } from './styles';
import { IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import classNames from 'classnames';
import { useDisplay, useTypography, useResponsive } from '../../../styles'
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';

const CartItem = ({ id, quantity, totalPrice, product }) => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();

    const { removeProductFromCart } = useContext(AppContext)

    return (
        <article className={classNames(display.flex, display.alignCenter, display.justifyBetween, display.w100,
            display.mt1)}>
            <img src={product.image} className={classNames(classes.productImage)} alt={product.name} />
            <div className={classNames(display.flex, display.flexColumn, display.flexGrow1, classes.productContent)}>
                <Typography gutterBottom component="h2" className={classNames(classes.productName, classes.darkGreyColor)}>
                    { product.name }
                </Typography>
                <Typography variant="body2">
                    <span className={classNames(classes.darkGreyColor)}>
                        { product.price.toFixed(2) } x { quantity }
                    </span> 
                    <b className={classNames(text.font7, classes.productTotalPrice)}>${ totalPrice.toFixed(2) }</b>
                </Typography>
            </div>
            <IconButton onClick={removeProductFromCart(id)}>
                <DeleteIcon className={classNames(classes.productDeleteIcon)} />
            </IconButton>
        </article>
    );
};

export default CartItem;