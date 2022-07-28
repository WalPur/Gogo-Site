import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

/* Texts */
const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '40px',
    lineHeight: '120%',
    color: '#000000',
}));
const Subtitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '32px',
    lineHeight: '106.25%',
    color: '#000000',
}));
const Text1 = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '24px',
    lineHeight: '120.8%',
    color: '#000000',
}));
const Text2 = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-300',
    fontSize: '16px',
    lineHeight: '118.75%',
    color: '#000000',
}));
const Text3 = styled(Typography)(({ theme }) => ({
    fontFamily: 'MuseoSansCyrl-300',
    fontSize: '20px',
    lineHeight: '120.8%',
    color: '#000000',
}));


/* Buttons */
const ToFormButton1 = styled(Box)(({ theme }) => ({
    maxWidth: '320px',
    padding: '18px 0',
    textAlign: 'center',
    background: '#1F89DB',
    borderRadius: '28px',
    cursor: 'pointer',
    transition: '0.5s',

    color: '#FFFFFF',
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '24px',
    lineHeight: '120.8%',

    '&:hover': {
        background: '#38A8FF',
        transition: '0.5s',
    },
}));
const ToFormButton2 = styled(Box)(({ theme }) => ({
    maxWidth: '320px',
    padding: '18px 0',
    textAlign: 'center',
    background: '#FFFFFF',
    borderRadius: '28px',
    cursor: 'pointer',
    transition: '0.5s',
    
    color: '#1F89DB',
    fontFamily: 'MuseoSansCyrl-700',
    fontSize: '24px',
    lineHeight: '120.8%',

    '&:hover': {
        color: '#000000',
        background: '#EBEBEB',
        transition: '0.5s',
    },
}));

/* Boxes */
const Container = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    maxWidth: '880px',
}))
const ContainerBig = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    maxWidth: '1240px',
    background: '#1F89DB',
    borderRadius: '109px',
}))

export {
    Title,
    Subtitle,
    Text1,
    Text2,
    Text3,
    ToFormButton1,
    ToFormButton2,
    Container,
    ContainerBig,
}