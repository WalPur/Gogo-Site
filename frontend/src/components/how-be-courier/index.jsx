import React from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { Title, Text1, Text2, ToFormButton2, Container, ContainerBig } from '../../global-styles';

function HowBeCourier(){
    return(
        <Box>
            <ContainerBig>
                <Container>
                    <Box sx={{
                        pt: '60px',
                        pb: '60px',
                    }}>
                        <Title sx={{
                            color: '#ffffff',
                            mb: '100px',
                        }}>
                            Как стать курьером?
                        </Title>
                        <Box sx={{
                            mb: '70px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <Box sx={{
                                width: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Text1 sx={{
                                    fontFamily: 'MuseoSansCyrl-300',
                                    color: '#ffffff',
                                    flexGrow: 1,
                                    mb: '36px'
                                }}>
                                    Подача заявки через приложение <br/> GogoКурьер
                                </Text1>
                                <Text1 sx={{
                                    fontFamily: 'MuseoSansCyrl-300',
                                    color: 'rgba(255, 255, 255, 0.79)',
                                }}>
                                    2-3 минуты
                                </Text1>
                            </Box>
                            <Box sx={{
                                width: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Text1 sx={{
                                    fontFamily: 'MuseoSansCyrl-300',
                                    color: '#ffffff',
                                    flexGrow: 1,
                                    mb: '36px'
                                }}>
                                    Собеседование и обучение. Подписание договора
                                </Text1>
                                <Text1 sx={{
                                    fontFamily: 'MuseoSansCyrl-300',
                                    color: 'rgba(255, 255, 255, 0.79)',
                                }}>
                                    1 день
                                </Text1>
                            </Box>
                            <Box sx={{
                                width: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Text1 sx={{
                                    flexGrow: 1,
                                    color: '#ffffff',
                                    mb: '36px'
                                }}>
                                    Выход на работу
                                </Text1>
                                <Text1 sx={{
                                    fontFamily: 'MuseoSansCyrl-300',
                                    color: 'rgba(255, 255, 255, 0.79)',
                                }}>
                                    Принимаем заказы
                                </Text1>
                            </Box>
                        </Box>
                        <ToFormButton2>
                            Стать курьером
                        </ToFormButton2>
                    </Box>
                </Container>
            </ContainerBig>
        </Box>
    )
}

export default HowBeCourier;