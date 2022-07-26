import React from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

import { Title, Subtitle, Text2, Container } from '../../global-styles';

function Wait(){
    return(
        <Box sx={{
            p: '80px 0',
        }}>
            <Container>
                <Box>
                    <Title sx={{ mb: '40px' }}>
                        Вас ждет
                    </Title>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '14px',
                            }}
                        >
                            <Box 
                                sx={{
                                    padding: '22px 40px',
                                    display: 'flex',
                                    maxWidth: 337,
                                    width: '100%',
                                    background: '#7CCEFC',
                                    borderRadius: '28px',
                                }}
                            >
                                <Box>
                                    <Subtitle sx={{
                                        mb: '12px'
                                    }}>
                                        Гибкий график
                                    </Subtitle>
                                    <Text2>
                                        Расписание
                                    </Text2>
                                </Box>
                                <img src='/images/wait_img_1.svg'/>
                            </Box>
                            <Box 
                                sx={{
                                    padding: '22px 40px',
                                    display: 'flex',
                                    maxWidth: 528,
                                    width: '100%',
                                    background: '#87E7F4',
                                    borderRadius: '28px',
                                }}
                            >
                                <Box>
                                    <Subtitle sx={{
                                        mb: '12px'
                                    }}>
                                        Доход до 5000 в день
                                    </Subtitle>
                                    <Text2>
                                        Выплаты каждый день на вашу карту
                                    </Text2>
                                </Box>
                                <img src='/images/wait_img_2.svg'/>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            gap: '14px',
                        }}>
                            <Box 
                                sx={{
                                    padding: '22px 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    maxWidth: 337,
                                    width: '100%',
                                    background: '#87E7F4',
                                    borderRadius: '28px',
                                }}
                            >
                                <Box sx={{
                                    padding: '0 30px',
                                }}>
                                    <Subtitle sx={{
                                        mb: '12px'
                                    }}>
                                        Любое средство передвижения
                                    </Subtitle>
                                    <Text2>
                                        Мотоцикл, велосипед, машина, и.т.д
                                    </Text2>
                                </Box>
                                <img style={{ width: '100%' }} src='/images/wait_img_3.svg'/>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: 528,
                                width: '100%',
                                gap: '14px',
                            }}>
                                <Box 
                                    sx={{
                                        padding: '22px 40px',
                                        display: 'flex',
                                        width: '100%',
                                        background: '#FFEFE0',
                                        borderRadius: '28px',
                                    }}
                                >
                                    <Box>
                                        <Subtitle sx={{
                                            mb: '12px'
                                        }}>
                                            Возможность карьерного роста
                                        </Subtitle>
                                        <Text2>
                                            Выплаты каждый день на вашу карту
                                        </Text2>
                                    </Box>
                                    <img src='/images/wait_img_4.svg'/>
                                </Box>
                                <Box 
                                    sx={{
                                        padding: '0 40px',
                                        display: 'flex',
                                        width: '100%',
                                        background: '#7CCEFC',
                                        borderRadius: '28px',
                                    }}
                                >
                                    <Box sx={{
                                        padding: '22px 0',
                                    }}>
                                        <Subtitle sx={{
                                            mb: '12px'
                                        }}>
                                            Широкий спектр доставки товаров
                                        </Subtitle>
                                        <Text2>
                                            Не только еда
                                        </Text2>
                                    </Box>
                                    <img src='/images/wait_img_5.svg'/>
                                </Box>
                            </Box>
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                background: '#FFEFE0',
                                borderRadius: '28px',
                            }}
                        >
                            <Box sx={{
                                padding: '22px 0 22px 40px',
                            }}>
                                <Subtitle sx={{
                                    mb: '12px'
                                }}>
                                    Система автоназначения
                                </Subtitle>
                                <Text2>
                                    Назначает курьеру ближайший заказ для быстрой доставки
                                </Text2>
                            </Box>
                            <img src='/images/wait_img_6.svg'/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Wait;