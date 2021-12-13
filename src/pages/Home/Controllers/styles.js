import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    heroSectionControllersContainer: {
        [theme.breakpoints.up(1500)]: {
            width: 600
        }
    },
    heroSectionControllers: {
        backgroundColor: '#F6F8FD',
        padding: '.4rem .8rem',
        [theme.breakpoints.up('md')]: {
            width: 120
        },
        [theme.breakpoints.up(1500)]: {
            width: 240
        }
    },
    heroSectionControllersButton: {
        color: '#FF7E1B !important',
        '&:hover': {
            backgroundColor: '#FF7E1B !important',
            borderRadius: '50%',
            color: '#FFF !important',
        }
    },
    heroSectionControllersAddButton: {
        padding: '0.9rem 5rem !important',
        backgroundColor: '#FF7E1B !important',
        '&:hover': {
            backgroundColor: '#c95f0d !important'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0.9rem 1rem !important',
        },
        [theme.breakpoints.up(1500)]: {
            padding: '0.9rem 3rem !important',
        }
    }
}))