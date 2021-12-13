import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    main: {
    },
    heroSection: {
        [theme.breakpoints.up('sm')]: {
            padding: '1rem 10%'
        },
        [theme.breakpoints.up('md')]: {
            padding: '1rem 10%'
        }
    },
    heroSectionContent: {
        padding: '2rem 7%',
        [theme.breakpoints.up('md')]: {
            padding: '0 0 2rem 7% !important',
        },
        [theme.breakpoints.up('md')]: {
            //padding: '2rem 7%',
        }
    },
    heroSectionTitle: {
        '&::before': {
            color: '#FF7E1B',
            content: '"Sneaker Company"',
            display: 'block',
            fontSize: '1.1rem',
            fontWeight: '500 !important',
            marginBottom: '1rem',
            marginLeft: 'auto',

        }
    },
    heroSectionDescription: {
        color: '#69707D',
        [theme.breakpoints.up('lg')]: {
            width: '80%'
        }
    },
    heroSectionPrice: {
        fontSize: '1.2rem !important'
    },
    heroSectionDiscount: {
        backgroundColor: '#FFEEE2',
        borderRadius: 7,
        color: '#FF7E1B',
        padding: '0.4rem 0.7rem',
    },
    heroSectionWeiredPrice: {
        color: '#B6BCC8',
        textDecoration: 'line-through'
    }
}))