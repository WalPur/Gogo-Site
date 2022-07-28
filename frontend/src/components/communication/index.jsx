import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { Container, Subtitle } from '../../global-styles';

const Text3 = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-300',
    fontSize: '20px',
    lineHeight: '120.8%',
    color: '#000000',
}));
const Text1 = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-300',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#000000',
}));
const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '64px',
    lineHeight: '77px',
    color: '#000000',
}));


function Communication(){
    const data = [
        {
            title: 'Телефоны контактных центров',
            desc: 'Круглосуточно, без выходных',
            texts: [
                {
                    name: 'Якутск',
                    value: '+7 (495) 663-77-22 ',
                    color: '#000000',
                },
                {
                    name: 'Регионы',
                    value: '+7 (495) 663-77-22 ',
                    color: '#000000',
                },
            ],
            underDesc: '',
        },
        {
            title: 'Отдел поддержки клиентов',
            texts: [
                {
                    name: 'Электронная почта',
                    value: '1234@gmail.com',
                    color: '#1F89DB',
                },
            ],
            underDesc: '',
        },
        {
            title: 'Для заключения сотрудничества',
            desc: 'Связаться с нами можно  в будние дни с 10:00 до 19:00',
            texts: [
                {
                    name: 'Якутск',
                    value: '+7 (495) 663-77-22 ',
                    color: '#000000',
                },
                {
                    name: 'Регионы',
                    value: '+7 (495) 663-77-22 ',
                    color: '#000000',
                },
                    
            ],
            underDesc: 'Оставить заявку',
        },
        {
            title: 'Служба поддержки для ресторанов',
            desc: 'Связаться с нами можно  в будние дни с 10:00 до 19:00',
            texts: [
                {
                    name: 'Якутск',
                    value: '+7 (495) 663-77-22 ',
                    color: '#000000',
                },
                {
                    name: 'Служба поддержки для ресторанов',
                    value: '+7 (495) 663-77-22 ',
                    color: '#000000',
                },
            ],
            underDesc: '',
        },
    ]
    return(
        <Box>
            <Container>
                <Box sx={{ padding: '80px 0' }}>
                    <Title sx={{ mb: '40px' }}>
                        Контакты
                    </Title>
                    {data.map(( item, index ) => (
                        <Box
                            key={index}
                        >
                            <Subtitle sx={{ mb: '20px' }}>
                                {item.title}
                            </Subtitle>
                            <Text3 sx={{ mb: '40px' }}>
                                {item.desc}
                            </Text3>
                            {item.texts.map(( text, index ) => (
                                <Box key={index}>
                                    <Box
                                        sx={{ 
                                            display: 'flex',
                                            flexDirection: 'space-between',
                                        }}
                                    >
                                        <Text1 sx={{
                                            flexGrow: 1,
                                        }}>
                                            {text.name}
                                        </Text1>
                                        <Text1 sx={{
                                            mb: '29px',
                                            color: text.color,
                                        }}>
                                            {text.value}
                                        </Text1>
                                    </Box>
                                    <Box sx={{ width: '100%', height: '2px', background: 'rgba(197, 197, 197, 0.5)',  mb: '80px'}}>
                                    </Box>
                                </Box>
                            ))}
                            <NavLink to='/partner' style = {{fontFamily: 'MuseoSansCyrl-300', fontSize: '24px', lineHeight: '29px', color: '#1F89DB'}}>
                                {item.underDesc}
                            </NavLink>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Communication;