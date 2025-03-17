import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCreative } from 'swiper/modules';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

// Importation des styles CSS de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

function Carousel({ images }) {
    return (
        <div className={styles.carousel}>
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectCreative]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                effect='creative'
                creativeEffect={{
                    prev: {
                        // effet pour la diapositive précédente
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        // effet pour la diapositive suivante
                        translate: ['100%', 0, 0],
                    },
                }}
                className={styles.carousel__container}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={styles.carousel__slide}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={styles.carousel__image}
                            style={{ // Empêcher le glissement de l'image qui cause un effet bleu de selection
                                userSelect: 'none',
                                WebkitUserDrag: 'none'
                            }}
                            draggable="false"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Carousel;