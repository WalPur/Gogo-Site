import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import axios from 'axios';

import { Box, Typography, Select, MenuItem, Slider, SliderThumb, Checkbox } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { styled } from '@mui/system';

import { Title, Container, Text2, Text1 } from '../../global-styles';

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: '#1F89DB',
    '& .MuiSlider-thumb': {
        height: 45,
        width: 45,
        backgroundColor: '#D9D9D9',
        '&:hover': {
          boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .custom-text': {
            fontFamily: 'MuseoSansCyrl-700',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#000',
        },
    },
    '& .MuiSlider-track': {
        height: 16,
    },
    '& .MuiSlider-rail': {
        color: '#bfbfbf',
        height: 16,
    },
}));
const SmallText = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-300',
    fontSize: '14px',
    lineHeight: '118.75%',
    color: '#000000',
}))

function CustomThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="custom-text">
                {children.props.value}
            </span>
        </SliderThumb>
    );
}

CustomThumbComponent.propTypes = {
    children: PropTypes.node,
};

function Calculator(){
    const [cities, setCities] = useState([]);
    const [cityId, setCityId] = useState(-1);
    const [type, setType] = useState(-1);
    const [days, setDays] = useState(1);
    const [hours, setHours] = useState(3);
    const [checked, setChecked] = useState(false);
    const [self, setSelf] = useState(1);
    const [salary, setSalary] = useState(0);
    const types = [
        {
            id: 0,
            name: 'Автокурьер',
        },
        {
            id: 1,
            name: 'Мотокурьер',
        },
        {
            id: 2,
            name: 'Велокурьер',
        },
        {
            id: 3,
            name: 'Пеший курьер',
        }
    ];
    
    
    useEffect(() => {
        axios
            .get('https://gogotech.ru/api/cities/')
            .then(response => {
                const request = response.data
                setCities(request)
                console.log(request)
            }).catch((error) => {
                console.log('error', error)
            })
    }, []);
    
    const handleCity = (e) => {
        setCityId(e.target.value)
        if (type !== -1) setSalary(cities.find(x => x.id === e.target.value).city_salary[type]*days*hours*self)
    };
    const handleType = (e) => {
        setType(e.target.value)
        if (cityId !== -1) setSalary(cities.find(x => x.id === cityId).city_salary[e.target.value]*days*hours*self)
    };
    const handleDays = (e, value) => {
        setDays(value)
        if (cityId !== -1 && type !== -1) setSalary(cities.find(x => x.id === cityId).city_salary[type]*days*hours*self)
    };
    const handleHours = (e, value) => {
        setHours(value)
        if (cityId !== -1 && type !== -1) setSalary(cities.find(x => x.id === cityId).city_salary[type]*days*hours*self)
    };
    const handleChecked = (e) => {
        let selfValue
        setChecked(e.target.checked)
        if (e.target.checked){ 
            setSelf(1.5)
            selfValue = 1.5
        } else {
            setSelf(1)
            selfValue = 1
        }
        if (cityId !== -1 && type !== -1) setSalary(cities.find(x => x.id === cityId).city_salary[type]*days*hours*selfValue)
    };
    return(
        <Box>
            <Container>
                <Box sx={{
                    pt: '80px',
                    pb: '70px',
                }}>
                    <Title sx={{
                        mb: '40px',
                    }}>
                        Калькулятор дохода
                    </Title>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{
                            width: '53%',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: '20px',
                            }}>
                                <Select
                                    sx={{
                                        width: '48%',
                                        background: '#1F89DB',
                                        borderRadius: '66px',
                                        color: '#FFFFFF',
                                    }}
                                        value={cityId}
                                        onChange={handleCity}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        IconComponent={KeyboardArrowDown}
                                    >
                                    <MenuItem disabled value={-1}>
                                        <Text2 sx={{
                                            color: '#fff',
                                            textAlign: 'center',
                                        }}>
                                            Выберите город
                                        </Text2>
                                    </MenuItem>
                                    {cities.map(( item, index ) => (
                                        <MenuItem key={index} value={item.id}>
                                            <Text2 sx={{
                                                color: '#FFFFFF',
                                                textAlign: 'center',
                                            }}>
                                                {item.city_name}
                                            </Text2>
                                        </MenuItem>
                                    ))}
                                </Select>
                                <Select
                                    sx={{
                                        width: '48%',
                                        background: '#1F89DB',
                                        borderRadius: '66px',
                                        color: '#FFFFFF',
                                    }}
                                        value={type}
                                        onChange={handleType}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        IconComponent={KeyboardArrowDown}
                                >
                                    <MenuItem disabled value={-1}>
                                        <Text2 sx={{
                                            color: '#fff',
                                            textAlign: 'center',
                                        }}>
                                            Выберите тип курьера
                                        </Text2>
                                    </MenuItem>
                                    {types.map(( item, index ) => (
                                        <MenuItem key={index} value={item.id}>
                                            <Text2 sx={{
                                                textAlign: 'center',
                                                color: '#FFFFFF',
                                            }}>
                                                {item.name}
                                            </Text2>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>
                            <Box>
                                <Text2 sx={{
                                    fontFamily: 'MuseoSansCyrl-700',
                                    mb: '20px',
                                }}>
                                    Сколько дней в месяц вы планируете работать?
                                </Text2>
                                <CustomSlider 
                                    sx={{
                                        mb: '20px',
                                    }}
                                    value={days}
                                    min={1}
                                    max={30}
                                    step={1}
                                    onChange={handleDays}
                                    components={{ Thumb: CustomThumbComponent }}
                                />
                                <Text2 sx={{
                                    fontFamily: 'MuseoSansCyrl-700',
                                    mb: '20px',
                                }}>
                                    Сколько часов в день вы планируете работать?
                                </Text2>
                                <CustomSlider 
                                    sx={{
                                        mb: '20px',
                                    }}
                                    value={hours}
                                    min={3}
                                    max={12}
                                    step={1}
                                    onChange={handleHours}
                                    components={{ Thumb: CustomThumbComponent }}
                                />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChecked}
                                    sx={{
                                        mr: '10px',
                                        width: '17px',
                                        height: '17px',
                                        background: '#F2F2F2',
                                        borderRadius: '3px',
                                        border: 'none',
                                    }}
                                />
                                <SmallText>
                                    Я буду работать самозанятым
                                </SmallText>
                            </Box>
                        </Box>
                        <Box sx={{
                            padding: '28px 40px',
                            width: '43%',
                            background: '#1F89DB',
                            borderRadius: '25px',
                            color: '#ffffff',
                        }}>
                            <Text1 sx={{
                                color: '#ffffff',
                                mb: '20px',
                            }}>
                                Возможный доход
                            </Text1>
                            <Typography sx={{
                                mb: '30px',
                                fontFamily: 'MuseoSansCyrl-500',
                                fontSize: '48px',
                                lineHeight: '58px',
                            }}>
                                {salary} ₽
                            </Typography>
                            <Text2 sx={{
                                color: '#e8e8e8',
                            }}>
                                *Данные могут отличаться от указанных. Обозначен средний показатель дохода на основе данных за последние полгода. Оставьте заявку для подробностей.
                            </Text2>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Calculator;