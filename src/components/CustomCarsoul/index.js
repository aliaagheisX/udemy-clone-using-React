import React, { useState } from 'react'
import './CustomCarsoul.module.css'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CarsoulPrevBtn from './CarsoulPrevBtn';
import CarsoulNextBtn from './CarsoulNextBtn';


export default function CustomCarsoul({ items, paginationData }) {

    const { nextLink } = paginationData;
    const [displayNext, setDisplayNext] = useState(nextLink);
    const [displayPrev, setDisplayPrev] = useState(0);

    const handelDisplayButtons = (swiper) => {
        setDisplayNext(nextLink || !swiper.isEnd)
        setDisplayPrev(!swiper.isBeginning)
    }
    return (
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,

                },
                658: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
                940: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 40,
                },
                1090: {
                    slidesPerView: 5,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                },
            }}

            modules={[Navigation]}
            speed={500}
            onSlideChange={handelDisplayButtons}
            className='mySwiper'
        >
            <CarsoulNextBtn display={displayNext} paginationData={paginationData} />
            <CarsoulPrevBtn display={displayPrev} />

            {items.map((e, i) => (
                <SwiperSlide key={i}>
                    {e}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
