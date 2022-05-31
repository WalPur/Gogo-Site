import "./Slide_3.css";

import bigdata from './slide_3.svg';

function Slide_3() {
    return(
        <div className="slider-item slide_3_over">
            <div className="slide_3_title caption">Аналитика</div>
            <div className="slider-container slide_3">
                <div className='quote quote_1'>
                    <span className='GogoSpan'>Gogo</span>Курьер предоставляет аналитические информации в городах нашего присутствия нашим партнерам для возможности вашего масштабирования
                </div>
                <img src={bigdata} className="bigdata" alt=""/>
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
        </div>
    )
}

export default Slide_3;