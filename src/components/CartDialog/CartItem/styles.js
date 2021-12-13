import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
    productImage: {
        height: 45,
        objectFit: 'contain',
        width: 45
    },
    productContent: {
        marginLeft: 12
    },
    darkGreyColor: {
        color: '#69707D'
    },
    productName: {
        fontSize: '1.03rem !important',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 152,
        [theme.breakpoints.up('sm')]: {
            width: 212
        },
    },
    productTotalPrice: {
        marginLeft: 7
    },
    productDeleteIcon: {
        color: '#C3CAD9 !important'
    }
}));