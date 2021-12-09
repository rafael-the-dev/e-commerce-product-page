import Header from '../../components/Header';
import ImageGallery from 'react-image-gallery';
import { useRef } from 'react';
import classNames from 'classnames';
import { useDisplay, useTypography, useResponsive } from '../../styles';
import { useStyles } from './styles';
import imageProduct1 from '../../assets/images/image-product-1.jpg'
import imageProduct1Thumbnail from '../../assets/images/image-product-1-thumbnail.jpg'
import imageProduct2 from '../../assets/images/image-product-2.jpg'
import imageProduct2Thumbnail from '../../assets/images/image-product-2-thumbnail.jpg'
import imageProduct3 from '../../assets/images/image-product-3.jpg'
import imageProduct3Thumbnail from '../../assets/images/image-product-3-thumbnail.jpg'
import imageProduct4 from '../../assets/images/image-product-4.jpg'
import imageProduct4Thumbnail from '../../assets/images/image-product-4-thumbnail.jpg'
import { Hidden, Typography } from '@mui/material';

const Home = () => {

    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();
    const classes = useStyles();

    const images = useRef([
        {
          original: imageProduct1,
          thumbnail: imageProduct1Thumbnail,
        },
        {
            original: imageProduct2,
            thumbnail: imageProduct2Thumbnail,
        },
        {
            original: imageProduct3,
            thumbnail: imageProduct3Thumbnail,
        },
        {
            original: imageProduct4,
            thumbnail: imageProduct4Thumbnail,
        },
    ]);

    const GalleryImage = ({ showThumbnails }) => (
        <div className={classNames(classes.heroSectionImageGalleryContainer)}>
            <ImageGallery showThumbnails={showThumbnails} items={images.current} />
        </div>
    );

    return (
        <>
            <Header />
            <main className={classNames(classes.main, responsive.mdFlex, responsive.mdAlignCenter, 
                responsive.mdJustifyCenter, display.flexGrow1)}>
                <section className={classNames(display.flex, display.flexColumn, classes.heroSection, 
                    responsive.mdRow, display.alignCenter )}>
                    <Hidden mdDown><GalleryImage showThumbnails={true} /></Hidden>
                    <Hidden mdUp><GalleryImage showThumbnails={false} /></Hidden>
                    <div className={classNames(classes.heroSectionContent)}>
                        <Typography component="h2" variant="h5" className={classNames(classes.heroSectionTitle, text.font7)}>
                            Fall Limited Edition<br />Sneackers
                        </Typography>
                        <Typography className={classNames(display.mt1, display.opacity9, classes.heroSectionDescription)}>
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </Typography>
                        <div className={classNames(display.mt2, display.flex, display.alignCenter, 
                            display.justifyBetween, responsive.mdColumn, responsive.mdAlignStart)}>
                            <div className={classNames(display.flex, display.alignCenter)}>
                                <Typography component="h3" variant="h5" className={classNames(classes.heroSectionPrice, text.font7)}>
                                    $125.00
                                </Typography>
                                <span className={classNames(classes.heroSectionDiscount, display.ml1, text.font7)}>50%</span>
                            </div>
                            <span className={classNames(classes.heroSectionWeiredPrice, text.font7, responsive.mdMt1)}>$250.00</span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Home;