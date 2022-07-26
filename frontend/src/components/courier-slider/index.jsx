import React from 'react';
import Slider from "react-slick";

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { Title, Text1, ToFormButton1, Container } from '../../global-styles';

function CourierSlider(){
    const data = [
        {
            title: 'Поступление заказа',
            img: '/images/courier_slider_img_1.svg',
            direction: 'row',
        },
        {
            title: 'Курьер забирает заказ',
            img: '/images/courier_slider_img_2.svg',
            direction: 'row',
        },
        {
            title: 'Доставка заказа до клиента',
            img: '/images/courier_slider_img_3.svg',
            direction: 'row-reverse',
        },
    ]
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    }
    return(
        <Box>
            <Container>
                <Box sx={{
                    pt: '70px',
                }}>
                    <Title sx={{
                        mb: '40px',
                    }}>
                        Как будет идти работа?
                    </Title>
                    <Slider {...settings}>
                        {data.map(( item, index ) => (
                            <Box
                                key={index}
                                sx={{
                                    background: '#F2F2F2',
                                    borderRadius: '64px',
                                    color: '#000000',
                                    paddingLeft : item.direction === 'row' ? '100px' : '',
                                    paddingRight : item.direction === 'row' ? '' : '50px',
                                    height: '390px',
                                    '&:hover': {
                                        background: '#1F89DB',
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                <Box sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: item.direction,
                                    alignItems: 'center',
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'MuseoSansCyrl-700',
                                        fontSize: '48px',
                                        lineHeight: '58px',
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <img 
                                        style={{ 
                                            alignSelf: 'end',
                                            marginLeft : item.direction === 'row' ? '8px' : '',
                                            marginRight : item.direction === 'row' ? '50px' : '15px',
                                        }} 
                                        src={item.img}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    )
}

export default CourierSlider;