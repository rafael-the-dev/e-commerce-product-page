import { Avatar , Badge, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { useDisplay, useTypography, useResponsive } from '../../styles'
import avatarImage from '../../assets/images/image-avatar.png'
import { useStyles } from './styles';
import { useCallback, useMemo, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/images/logo.svg';
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react';

const Header = () => {
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();
    const classes = useStyles();

    const { getCartList, toggleCartDialog } = useContext(AppContext);

    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);

    const headerNavigation = useMemo(() => (
        <Paper elevation={0} component="nav" className={classNames(responsive.mdMl2, classes.headerNav, 
             responsive.mdRelative, display.h100, display.pt1, responsive.mdPt0)}>
            <Hidden mdUp>
                <Button onClick={menuClickHandler}><CloseIcon classes={{ root: text.textDark}} /></Button>
            </Hidden>
            <List component="ul" className={classNames(display.flex, display.flexColumn, responsive.mdRow)}>
                <ListItem disablePadding component={Link} to="/" >
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames(classes.headerNavItemText, text.textDark, 
                            responsive.mdMb0, responsive.mdMt0), primary: classNames(text.rem9, text.font7, classes.headerNavItemPrimaryText)}} primary="Collections" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to="/projects">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames(classes.headerNavItemText, text.textDark, 
                            responsive.mdMb0, responsive.mdMt0 ), primary: classNames(text.rem9, text.font7, classes.headerNavItemPrimaryText) }} primary="Men" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to="/resume">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames(classes.headerNavItemText, text.textDark, 
                            responsive.mdMb0, responsive.mdMt0 ), primary: classNames(text.rem9, text.font7, classes.headerNavItemPrimaryText) }} primary="Women" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to="/projects">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames(classes.headerNavItemText, text.textDark, 
                            responsive.mdMb0, responsive.mdMt0 ), primary: classNames(text.rem9, text.font7, classes.headerNavItemPrimaryText) }} primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to="/resume">
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames(classes.headerNavItemText, text.textDark, 
                            responsive.mdMb0, responsive.mdMt0 ), primary: classNames(text.rem9, text.font7, classes.headerNavItemPrimaryText) }} primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    ), [ classes, display, responsive, text, menuClickHandler ]);


    return (
        <header className={classNames(display.flex, display.alignCenter, display.justifyBetween, classes.header)}>
            <div className={classNames(display.flex, display.alignCenter)}>
                <Hidden mdUp>
                    <Button className={classNames(classes.minWidth0, text.textDark)} onClick={() => setCanIOpenNavBar(true)}>
                        <MenuIcon />
                    </Button>
                </Hidden>
                <Link to="/" className={classNames(text.decorationNone)}>
                    <img src={logo} alt="logo" className={classNames(classes.headerLogo)} />
                </Link>
                <Hidden mdDown>
                    { headerNavigation }
                </Hidden>
                <Hidden mdUp>
                    <Drawer anchor="left" open={canIOpenNavBar} onClose={menuClickHandler} classes={{ paper: classes.headerDrawer}}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </div>
            <div className={classNames(display.flex, display.alignCenter)}>
                    <IconButton 
                        aria-label="cart" 
                        onClick={toggleCartDialog}
                        className={classNames(classes.minWidth0, text.textDark, display.mr1)}>
                        <Badge badgeContent={getCartList().length} classes={{ badge: classNames(classes.headerBadge, text.textLight)}}>
                        <   ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                <Avatar alt="avatar" src={avatarImage} className={classNames(classes.headerAvatar)} /> 
            </div>
        </header>
    )
};

export default Header;

/**
                    <Typography component="h1" variant="h6" className={classNames(text.font7, text.textDark)}>Sneackers</Typography>
 * 
 */