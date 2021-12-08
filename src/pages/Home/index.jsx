import Header from '../../components/Header';
import ImageGallery from 'react-image-gallery';
import { useRef } from 'react';
import classNames from 'classnames';
import { useDisplay } from '../../styles';
import { useStyles } from './styles';
import imageProduct1 from '../../assets/images/image-product-1.jpg'
import imageProduct1Thumbnail from '../../assets/images/image-product-1-thumbnail.jpg'
import imageProduct2 from '../../assets/images/image-product-2.jpg'
import imageProduct2Thumbnail from '../../assets/images/image-product-2-thumbnail.jpg'
import imageProduct3 from '../../assets/images/image-product-3.jpg'
import imageProduct3Thumbnail from '../../assets/images/image-product-3-thumbnail.jpg'
import imageProduct4 from '../../assets/images/image-product-4.jpg'
import imageProduct4Thumbnail from '../../assets/images/image-product-4-thumbnail.jpg'

const Home = () => {

    const display = useDisplay();
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

    return (
        <>
            <Header />
            <main>
                <section className={classNames(display.flex, display.flexColumn, classes.heroSection)}>
                    <div className={classNames(classes.heroSectionImageGalleryContainer)}>
                        <ImageGallery showThumbnails={false} items={images.current} />
                    </div>
                </section>
            </main>
        </>
    )
};

export default Home;