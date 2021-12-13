import { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useDisplay, useTypography, useResponsive } from '../../../styles';
import { useStyles } from './styles';
import { Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppContext } from '../../../context/AppContext'

const Controllers = () => {
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();
    const classes = useStyles();

    const { addProductToCart } = useContext(AppContext)
    const [ counter, setCounter ] = useState(0);

    const incrementHandler = () => {
        setCounter(value => {
            let oldValue = value + 1;
            if(oldValue > 7) {
                oldValue = value;
            }
            return oldValue;
        })
    };

    const decrementHandler = () => {
        setCounter(value => {
            let oldValue = value - 1;
            if(oldValue < 0) {
                oldValue = value;
            }
            return oldValue;
        })
    }

    return (
        <div className={classNames(display.flex, display.flexColumn, display.alignStretch, responsive.mdRow, 
            display.mt1, classes.heroSectionControllersContainer, responsive.mdAlignCenter)}>
            <div className={classNames(display.flex, display.alignCenter, display.justifyBetween, classes.heroSectionControllers, display.mb1,
                responsive.mdMb0)}>
                <IconButton onClick={decrementHandler}><RemoveIcon className={classNames(classes.heroSectionControllersButton, text.font7)} /></IconButton>
                <Typography className={classNames(text.font7)}>{ counter }</Typography>
                <IconButton onClick={incrementHandler}><AddIcon className={classNames(classes.heroSectionControllersButton, text.font7)} /></IconButton>
            </div>
            <Button 
                variant="contained"
                className={classNames(text.textLight, classes.heroSectionControllersAddButton, responsive.mdMl1, text.font7)} 
                onClick={() => addProductToCart(1, counter)}
                disabled={!Boolean(counter)}
                startIcon={<ShoppingCartOutlinedIcon />}>
                Add to cart
            </Button>
        </div>
    )
};

export default Controllers;