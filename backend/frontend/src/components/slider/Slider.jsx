import { Carousel } from 'react-bootstrap';


import Slide_1 from './slide_1/Slide_1';
import Slide_2 from './slide_2/Slide_2';
import Slide_3 from './slide_3/Slide_3';
import Slide_4 from './slide_4/Slide_4';
import "./slider.css";

// TODO: данные для слайдов храните в обьекте и рендерите из него, а не из нескольких slide компонентов, лучше сделать один слайд и структуру по типу [{text: blabla, image: img1/png}, {text: blabla, image: img1/png}]
function Slider(){
    return(
        <div className="block">
            <Carousel variant="dark">
                <Carousel.Item>
                    <Slide_1/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide_2/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide_3/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide_4/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;