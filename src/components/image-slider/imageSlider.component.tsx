import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/index.hook';
import { setLength, setIncrease, setDecrease } from '../../store/modules/slider/slider.slice';

import {
    Slider, LeftSlideButton, RightSlideButton, SliderImageBox,  
} from './imageSlider.style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function ImageSlider(): JSX.Element {
    const dispatch = useAppDispatch()
    const index = useAppSelector(state => state.slider.index)
    const length = useAppSelector(state => state.slider.length)

    const images = [
        "https://www.fourseasons.com/alt/img-opt/~80.690/publish/content/dam/fourseasons/images/web/SKO/SKO_456_aspect16x9.jpg",
        "https://www.planetware.com/wpimages/2019/06/south-korea-seoul-best-hotels-four-seasons-hotel-seoul.jpg",
        "https://www.fourseasons.com/alt/img-opt/~80.690.0,0000-215,7237-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/SKO/SKO_126_original.jpg"
    ]

    const updateLength = () => dispatch(setLength(images.length))
    const next = () => dispatch(setIncrease(index + 1))
    const prev = () => dispatch(setDecrease(index - 1))

    useEffect(() => {
        updateLength();
    }, [])

    return (
        <Slider>
            <LeftSlideButton onClick={prev}><AiOutlineLeft/></LeftSlideButton>
            <SliderImageBox src={images[index]}>  
            </SliderImageBox>
            <RightSlideButton onClick={next}><AiOutlineRight/></RightSlideButton>
        </Slider>
    )
}