import React, { useState } from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { Title, Text1, Text2, Container } from '../../global-styles';

function Comminication(){
    const data = [
        {
            title: 'Телефоны контактных центров',
            desc: 'Круглосуточно, без выходных',
            texts: [
                {
                    name: 'Якутск',
                    value: '+7 (495) 663-77-22 ',
                    color: 'default',
                },
                {
                    name: '',
                    value: '',
                    color: '#dsfsdf',
                },
            ],
            underDesc: '',
        },
        {
            title: '',
            desc: '',
            texts: [
                {
                    name: '',
                    value: '',
                    color: 'default',
                },
                {
                    name: '',
                    value: '',
                    color: '#dsfsdf',
                },
            ],
            underDesc: '',
        },
    ]
    return(
       <Box>
            {data.map(( item, index ) => (
                <Box>

                </Box>
            ))}
       </Box>
    )
}

export default Comminication;