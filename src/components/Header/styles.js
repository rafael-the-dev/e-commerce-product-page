import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    header: {
        padding: '0.5rem 5%'
    },
    headerLogo: {
        height: 15,
        [theme.breakpoints.up('sm')]: {
            height: 20
        },
        [theme.breakpoints.up('md')]: {
            height: 'fit-content'
        }
    },
    minWidth0: {
        minWidth: '0 !important'
    },
    headerBadge: {
        backgroundColor: '#FF7E1B !important'
    },
    headerAvatar: {
        height: '30px !important',
        width: '30px !important'
    },
    headerDrawer: {
        width: '70% !important',
        [theme.breakpoints.up(400)]: {
            width: '280px !important'
        },
        [theme.breakpoints.up('md')]: {
            width: 'auto !important'
        }
    },
    headerNavItemText: {
        [theme.breakpoints.up('md')]: {
            color: '#69707D !important'
        }
    },
    headerNavItemPrimaryText: {
        [theme.breakpoints.up('md')]: {
            fontWeight: '400 !important'
        }
    }
}))