import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { Container, Subtitle, Text3 } from '../../global-styles';


function Addres(){
    
    return(
        <Box>
            <Container sx = {{padding: '0 0 75px 0'}}>
                <Box>
                    <Subtitle sx = {{ mb: '20px'}}>
                        Адрес
                    </Subtitle>
                    <Text3 sx = {{ mb: '40px'}}>
                        677000, г. Якутск, проспект Ленина, д. 1, этаж 4, It park “Eagle Go”
                    </Text3>
                </Box>
                <Box sx = {{mb: '80px'}}>
                    <iframe
                        style={{
                            width: "100%",
                            height: '50vh',
                        }}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0178235abbac998064d38e935ed781f3619414268ba9a5ea6915da42f244bdb6&amp;source=constructor" frameBorder="0"></iframe>
                </Box>
                <Box>
                    <Subtitle sx = {{ mb: '20px'}}>
                        Юридический адрес
                    </Subtitle>
                    <Text3 sx = {{ mb: '20px'}}>
                        ООО “Eagle go”
                    </Text3>
                    <Text3 sx = {{ mb: '20px'}}>
                        677000, г. Якутск, проспект Ленина, д. 1, этаж 4, It park “Eagle Go”
                    </Text3>
                    <Box sx = {{ display: 'flex', flexDirection: 'row'}}>
                        <Text3 sx={{ whiteSpace: 'pre-wrap' }}>
                            Офис-Менеджер: <span  style={{color: '#1F89DB'}}>1234@gmail.com</span>
                        </Text3>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Addres;