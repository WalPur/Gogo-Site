import { Carousel } from 'react-bootstrap';


import Slide_1 from './slide_1/Slide_1';
import Slide_2 from './slide_2/Slide_2';

function Slider(){
    return(
        <div className="block">
            <Carousel>
                <Carousel.Item>
                    <Slide_1/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide_2/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;