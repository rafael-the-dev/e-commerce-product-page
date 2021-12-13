import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    dialogRoot: {
        top: '24px !important',
        '& .MuiBackdrop-root': {
            top: '55px !important'
        },
        [theme.breakpoints.up('md')]: {
            top: '30px !important',
            '& .MuiBackdrop-root': {
                top: '62px !important'
            }
        }
    },
    dialogPaper: {
        margin: '32px 7% !important',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 390
        },
        [theme.breakpoints.up('md')]: {
            margin: '32px 6% !important',
        }
    },
    dialogMessage: {
        color: '#69707D'
    }
}));