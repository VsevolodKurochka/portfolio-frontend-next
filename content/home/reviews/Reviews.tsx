import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionSubHeader from 'components/section-subheader';
import {reviews} from './data';
import ReviewItem from 'components/review-item';
import Container from 'components/container';
//import './styles.scss';

SwiperCore.use([Navigation, Pagination]);

const Reviews: React.FC = () => {
    return (
        <section className="home-reviews">
            <Container>
                <SectionSubHeader title={<span>What People Say<br /><strong>About Me</strong></span>} />
            </Container>
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        pagination: false
                    },
                    1025: {
                        slidesPerView: 3,
                        pagination: false
                    }
                }}
                className="home-reviews__slider">
                {reviews.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ReviewItem
                                name={item.name}
                                text={item.text}
                                position={item.position}
                                image={item.image}
                                modification={'slider'}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Reviews;
