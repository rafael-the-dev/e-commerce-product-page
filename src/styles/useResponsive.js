import { makeStyles } from "@mui/styles";

export const useResponsive = makeStyles(theme => ({
    smJustifyEnd: {
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end !important'
        }
    },
    mdAlignCenter: {
        [theme.breakpoints.up('md')]: {
            alignItems: 'center !important'
        }
    },
    mdAlignStart: {
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-start !important'
        }
    },
    mdBlock: {
        [theme.breakpoints.up('md')]: {
            display: 'block !important'
        }
    },
    mdColumn: {
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column !important'
        }
    },
    mdFlex: {
        [theme.breakpoints.up('md')]: {
            display: 'flex !important'
        }
    },
    mdNone: {
        [theme.breakpoints.up('md')]: {
            display: 'none !important'
        }
    },
    mdRow: {
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row !important'
        }
    },
    mdJustifyBetween: {
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between !important'
        }
    },
    mdJustifyCenter: {
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center !important'
        }
    },
    mdMb0: {
        [theme.breakpoints.up('md')]: {
            marginBottom: '0rem !important'
        }
    },
    mdMb1: {
        [theme.breakpoints.up('md')]: {
            marginBottom: '1rem !important'
        }
    },
    mdMb2: {
        [theme.breakpoints.up('md')]: {
            marginBottom: '2rem !important'
        }
    },
    mdMb3: {
        [theme.breakpoints.up('md')]: {
            marginBottom: '3rem !important'
        }
    },
    mdMl0: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '0rem !important'
        }
    },
    mdMl1: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '1rem !important'
        }
    },
    mdMl2: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '2rem !important'
        }
    },
    mdMl3: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '3rem !important'
        }
    },
    mdMr0: {
        [theme.breakpoints.up('md')]: {
            marginRight: '0rem !important'
        }
    },
    mdMr1: {
        [theme.breakpoints.up('md')]: {
            marginRight: '1rem !important'
        }
    },
    mdMr2: {
        [theme.breakpoints.up('md')]: {
            marginRight: '2rem !important'
        }
    },
    mdMr3: {
        [theme.breakpoints.up('md')]: {
            marginRight: '3rem !important'
        }
    },
    mdMt0: {
        [theme.breakpoints.up('md')]: {
            marginTop: '0rem !important'
        }
    },
    mdMt1: {
        [theme.breakpoints.up('md')]: {
            marginTop: '1rem !important'
        }
    },
    mdMt2: {
        [theme.breakpoints.up('md')]: {
            marginTop: '2rem !important'
        }
    },
    mdMt3: {
        [theme.breakpoints.up('md')]: {
            marginTop: '3rem !important'
        }
    },
    mdPt0: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '0rem !important'
        }
    },
    mdPt2: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '2rem !important'
        }
    },
    mdPl0: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: '0rem !important'
        }
    },
    mdPl2: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: '2rem !important'
        }
    },
    mdPl3: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: '3rem !important'
        }
    },
    mdPy1: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: '1rem !important',
            paddingTop: '1rem !important'
        }
    },
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '10%',
            paddingRight: '10%'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
            paddingRight: 0
        }
    }
}))