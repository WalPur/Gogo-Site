import "./Slide_3.css";

import bigdata from './slide_3.svg';
import textBlock_1 from "./Rectangle 150.png";
import textBlock_2 from "./Rectangle 149.png";

function Slide_3() {
    return(
        <div className="slider-item slide_3">
            <img src={textBlock_1} className="textBlock_1" alt="" />
            <div className='quote qoute_1'>
                <span className='GogoSpan'>Gogo</span>Курьер предоставляет аналитические информации в городах нашего присутствия нашим партнерам для возможности вашего масштабирования
            </div>
            <img src={bigdata} className="bigdata" alt=""/>
            <img src={textBlock_2} className="textBlock_2" alt="" />
            <div className='quote quote_2'>
                <ul>
                    <li>
                        Помогаем найти партнеров в других городах
                    </li>
                    <li>
                        Предоставляем партнерских сити контактов
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Slide_3;