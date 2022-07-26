import React, { useState } from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { Title, Text1, Text2, Container } from '../../global-styles';

function CourierTypes(){
    const [isHover, setIsHover] = useState([false, false, false, false, false]);

    const data = [
        {
            id: 0,
            title: 'Велокурьер',
            text: 'Зарабатывайте больше, работая доставщиком на велосипеде',
            img: '/images/courier_types_img_1.svg',
            img_hover: '/images/courier_types_img_1_2.svg',
            type: 'half',
        },
        {
            id: 1,
            title: 'Автокурьер',
            text: 'Увеличивайте доход, доставляя заказы на личном авто',
            img: '/images/courier_types_img_2.svg',
            img_hover: '/images/courier_types_img_2_2.svg',
            type: 'half',
        },
        {
            id: 2,
            title: 'Пеший курьер',
            text: 'Учитесь и подрабатывайте одновременно',
            img: '/images/courier_types_img_3.svg',
            img_hover: '/images/courier_types_img_3_2.svg',
            type: 'half',
        },
        {
            id: 3,
            title: 'Мотокурьер',
            text: 'Зарабатывайте больше, работая доставщиком на велосипеде',
            img: '/images/courier_types_img_4.svg',
            img_hover: '/images/courier_types_img_4_2.svg',
            type: 'half',
        },
        {
            id: 4,
            title: 'Работа самозанятым курьером',
            text: 'Зарабатывайте больше, работая доставщиком на велосипеде',
            img: '/images/courier_types_img_5.svg',
            img_hover: '/images/courier_types_img_5_2.svg',
            type: 'full',
        },
    ];

    const SetHover = (id) => {
        let isHover2 = [...isHover]
        isHover2[id] = true
        setIsHover(isHover2)
    };
    const UnSetHover = (id) => {
        let isHover2 = [...isHover]
        isHover2[id] = false
        setIsHover(isHover2)
    }

    return(
        <Box sx={{
        }}>
            <Container>
                <Box sx={{
                    pt: '80px',
                }}>
                    <Title sx={{
                        mb: '36px',
                    }}>
                        Типы курьеров
                    </Title>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}>
                        {data.map(( item, index ) => (
                            <Box
                                key={index}
                                sx={{
                                    paddingTop: '28px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    background: !isHover[item.id] ? '#F2F2F2' : '#1F89DB',
                                    width: item.type === 'half' ? '49%' : '100%',
                                    mb: item.type === 'half' ? '20px' : '0',
                                    borderRadius: '25px',
                                    overflow: 'hidden',
                                    maxHeight: '188px',
                                }}    
                                onMouseEnter={() => SetHover(item.id)}
                                onMouseLeave={() => UnSetHover(item.id)}
                            >
                                <Box sx={{
                                    width: '100%',
                                    padding: '0 0 28px 40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Text1 sx={{
                                        mb: '20px',
                                        color: !isHover[item.id] ? '#000' : '#fff',
                                    }}>
                                        {item.title}
                                    </Text1>
                                    <Text2 sx={{
                                        color: !isHover[item.id] ? '#000' : '#fff',
                                    }}>
                                        {item.text}
                                    </Text2>
                                </Box>
                                <img src={!isHover[item.id] ? item.img : item.img_hover} alt='bicycle'/>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default CourierTypes;