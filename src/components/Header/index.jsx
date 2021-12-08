import { Avatar , Button, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { useDisplay, useTypography } from '../../styles'
import avatarImage from '../../assets/images/image-avatar.png'
import { useStyles } from './styles'

const Header = () => {
    const display = useDisplay();
    const text = useTypography();
    const classes = useStyles();

    return (
        <header className={classNames(display.flex, display.alignCenter, display.justifyBetween, classes.header)}>
            <div className={classNames(display.flex, display.alignCenter)}>
                <Button className={classNames(classes.minWidth0, text.textDark)}><MenuIcon /></Button>
                <Link to="/" className={classNames(text.decorationNone)}>
                    <Typography component="h1" variant="h6" className={classNames(text.font7, text.textDark)}>Sneackers</Typography>
                </Link>
            </div>
            <div className={classNames(display.flex, display.alignCenter)}>
                <Button className={classNames(classes.minWidth0, text.textDark)}><ShoppingCartOutlinedIcon /></Button>
                <Avatar alt="avatar" src={avatarImage} className={classNames(classes.headerAvatar)} /> 
            </div>
        </header>
    )
};

export default Header;