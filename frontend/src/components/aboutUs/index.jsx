import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { Container, Subtitle, Text3 } from '../../global-styles';

const MyTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '48px',
    lineHeight: '58px',
    color: '#000000',
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-300',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#000000',
}));

function AboutUs(){
    
    return(
        <Box>
            <Container>
                <Box>
                    <MyTitle>
                        Gogo Курьер — лидер рынка доставки готовой еды и один из лидеров рынка доставки продуктов питания в Якутии
                    </MyTitle>
                    <Box>
                        <MyText>
                            Ежемесячное количество выполняемых сервисом заказов превышает 10 тысяч. По итогам 2019 года количество заказов за день составил около 500. К Gogo Курьер подключено свыше 100 партнеров более чем в 10 городах страны. Во всех городах через приложение Gogo Курьер можно доставлять не только готовую еду из ресторанов, но и доставку товаров из магазинов, аптек, и документы.
                        </MyText>
                        <MyText>
                            Gogo Курьер развивает направление заказа еды «навынос», доставку медикаментов, товаров для животных.
                        </MyText>
                    </Box>
                </Box>
                <Box>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default AboutUs;