import React from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { Title, Text1, ToFormButton1, Container } from '../../global-styles';

function General(){
    return(
        <Box sx={{
            pt: '134px',
            backgroundImage: 'url(/images/general_bg.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <Container>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 440,
                    }}>
                        <img src='/images/gogo_logo.svg' alt='logo' style={{ maxWidth: 510, marginLeft: '-111.56px', mb: 1.6, }}/>
                        <Title sx={{ mb: 0.6 }}>
                            Агрегатор курьерской службы
                        </Title>
                        <Text1 sx={{ fontFamily: 'MuseoSansCyrl-300', mb: 2.6 }}>
                            Доход до 5000 рублей в день
                        </Text1>
                        <ToFormButton1>
                            Стать курьером
                        </ToFormButton1>
                    </Box>
                    <img src='/images/general_img.svg'/>
                </Box>
            </Container>
        </Box>
    )
}

export default General;