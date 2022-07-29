import React from 'react';

import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { Box, Typography } from '@mui/material';

import { ContainerBig, Text2, Text3 } from '../../global-styles';

function Footer(){
    const { t } = useTranslation();

    const routes = [
        {
            title: 'Главная',
            route: '/',
        },
        {
            title: 'Курьерам',
            route: '/courier',
        },
        {
            title: 'Партнерам',
            route: '/partner',
        },
        {
            title: 'О нас',
            route: '/about',
        },
        {
            title: 'Контакты',
            route: '/contacts',
        },
    ]

    return(
        <Box sx={{
            p: '40px 0',
            backgroundColor: '#FFFFFF',
            borderTop: '2px solid #C9C9C9',
        }}>
            <ContainerBig sx={{
                background: 'none',
            }}>
                <Box>
                    <Box sx={{
                        mb: '60px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <img
                            src='/images/gogo_logo.svg'
                            alt='logo'
                            style={{
                                maxWidth: '280px',
                            }}
                        />
                        <Box sx={{
                            display: 'flex',
                            gap: '20px',
                        }}>
                            {routes.map(( item, index ) => (
                                <NavLink
                                    key={index}
                                    to={item.route}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Text3 sx={{
                                        fontFamily: 'MuseoSansCyrl-500',
                                        p: '10px'
                                    }}>
                                        {item.title}
                                    </Text3>
                                </NavLink>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'end',
                    }}>
                        <Text2 sx={{
                            maxWidth: '770px',
                        }}>
                            * Сотрудничество с организациями, которые оказывают услуги по доставке заказов, оформленных с помощью сервиса GogoКурьер. Работа в качестве самозанятого или курьера-партнёра GogoКурьер. Cумма дохода указана на основании данных сервиса GogoКурьер.
                        </Text2>
                        <Text2>
                            Ⓒ 2019-2022, ООО “GogoКурьер”
                        </Text2>
                    </Box>
                </Box>
            </ContainerBig>
        </Box>
    )
}

export default Footer;