import React from 'react';

import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Title, Text1, ToFormButton1, Container } from '../../global-styles';

function CourierFaq(){
    const data = [
        {
            id: 0,
            title: 'Можно ли работать без опыта?',
            desc: 'Работа курьером в GogoКурьер не предполагает наличие опыта. При поступлении на работу менеджеры подробно объяснят что нужно делать и какие документы нужно иметь при себе.',
        },
        {
            id: 1,
            title: 'Какие документы нужны для работы курьером?',
            desc: 'Для того, чтобы работать курьером в GogoКурьер с вас потребуется документ удостоверяющий личность (паспорт).',
        },
        {
            id: 2,
            title: 'Можно ли совмещать работу курьером с основной занятостью?',
            desc: 'Да, можно работать курьером в свободное от учебы или другой работы время. Вы можете выполнять заказы по вызодным или по вечерам с 16:00 до 22:00.',
        },
        {
            id: 3,
            title: 'Сколько заказов выполняют курьеры в среднем за час?',
            desc: 'За один час пешие курьеры могут выполнять до 2-3 заказов. Если работать на машине, велосипеде или на мотоцикле, можно доставлять заказы быстрее. ',
        },
        {
            id: 4,
            title: 'Какие есть доплаты? ',
            desc: 'За количество доставок или за выполненные на большие расстояния заказы. остальные доплаты вы можете узнать у менеджеров.',
        },
    ]

    return(
        <Box sx={{
            backgroundColor: '#F4F4F4',
        }}>
            <Container>
                <Box sx={{ 
                    pt: '80px',
                    pb: '80px',
                }}>
                    <Title sx={{
                        mb: '80px',
                    }}>
                        Остались вопросы?
                    </Title>
                    <Box sx={{
                        mb: '80px',
                        gap: '40px',
                    }}>
                        {data.map(( item, index ) => (
                            <Accordion
                                key={index}
                                sx={{
                                    mb: data.length-1 !== item.id ? '40px' : '0',
                                    '&.MuiAccordion-root':{
                                        p: '16px 24px',
                                        backgroundColor: '#F4F4F4',
                                        boxShadow: 'none'
                                    },
                                    '&.MuiAccordion-root:before':{
                                        display: 'none',
                                    },
                                    // '&.Mui-expanded':{
                                    //     width: '24px',
                                    //     height: '9px',
                                    // },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                    }}
                                >
                                    <Text1 sx={{
                                        fontFamily: 'MuseoSansCyrl-300',
                                        color: '#3E3E3E',
                                    }}>
                                        {item.title}
                                    </Text1>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Text1 sx={{
                                        fontFamily: 'MuseoSansCyrl-300',
                                        color: '#969696',
                                    }}>
                                        {item.desc}
                                    </Text1>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <ToFormButton1 sx={{
                            maxWidth: '320px',
                            width: '100%',
                        }}>
                            Стать курьером
                        </ToFormButton1>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default CourierFaq;