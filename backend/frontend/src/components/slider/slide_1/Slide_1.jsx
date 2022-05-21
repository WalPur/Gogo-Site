import "./Slide_1.css";

import slide_1_arrow from './slide_1_arrow.svg'
import slide_1_icon_1 from './slide_1_icon_1.svg'
import slide_1_icon_2 from './slide_1_icon_2.svg'
import slide_1_icon_3 from './slide_1_icon_3.svg'
import slide_1_icon_4 from './slide_1_icon_4.svg'
import slide_1_icon_5 from './slide_1_icon_5.svg'
import slide_1_icon_6 from './slide_1_icon_6.svg'
import slide_1_icon_7 from './slide_1_icon_7.svg'
import slide_1_phone from './slide_1_phone.svg'

function Slide_1() {
    return(
        <div className="slider-item slide_1">
            <h3 className="slider__title caption">
                Как работает приложение
            </h3>
            <div className="slider-container">
                <div className="slider__content">
                    <div className="slider__row_1">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons">
                                <img src={slide_1_icon_1} />
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                Клиент оформляет заказ на вашем сайте или в приложении
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_2} />
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                Информация о заказе отправляется в заведение
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_3} />
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                Заведение подтверждает заказ и начинает его собирать
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_4} />
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                Система подбирает оптимальный вариант ближайшего курьера
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons rotate-1">
                                <img src={slide_1_icon_5} />
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                Курьер <span>Gogo</span> забирает собранный заказ
                            </p>
                        </div>
                    </div>
                    <div className="slider__row_2">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons rotate-2">
                                <img src={slide_1_icon_7} />
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                Мы собираем обратную связь и стимулируем новые заказы
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img className="lastIcon" src={slide_1_icon_6} />
                            </div>
                            <p>
                                Курьер <span>Gogo</span> передает заказ клиенту
                            </p>
                        </div>
                    </div>
                    <img src={slide_1_phone} />
                </div>
            </div>
        </div>
    )
}

export default Slide_1;