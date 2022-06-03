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
import { useTranslation } from "react-i18next";

function Slide_1() {
    const { t } = useTranslation();
    return(
        <div className="slider-item slide_1">
            <h3 className="slider__title caption">
                {t("slider.slide1.title")}
            </h3>
            <div className="slider-container">
                <div className="slider__content">
                    <div className="slider__row_1">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons">
                                <img src={slide_1_icon_1} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.1")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_2} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.2")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_3} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.3")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_4} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.4")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons rotate-1">
                                <img src={slide_1_icon_5} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.5.1")} <span>Gogo</span>{t("slider.slide1.5.2")}
                            </p>
                        </div>
                    </div>
                    <div className="slider__row_2">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons rotate-2">
                                <img src={slide_1_icon_7} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.6")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img className="lastIcon" src={slide_1_icon_6} />
                            </div>
                            <p>
                                {t("slider.slide1.7.1")} <span>Gogo</span>{t("slider.slide1.7.2")}
                            </p>
                        </div>
                    </div>
                    <div className="slider__row_3">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons">
                                <img src={slide_1_icon_1} alt='icon'/>
                            </div>
                            <p>
                                {t("slider.slide1.1")}
                            </p>
                        </div>
                        <img src={slide_1_arrow} alt='arrow' />
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_2} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.2")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_3} alt='icon'/>
                            </div>
                            <p>
                                {t("slider.slide1.3")}
                            </p>
                        </div>
                        <img src={slide_1_arrow} alt='arrow' />
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={slide_1_icon_4} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.4")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons rotate-1">
                                <img src={slide_1_icon_5} alt='icon'/>
                            </div>
                            <p>
                                {t("slider.slide1.5.1")} <span>Gogo</span>{t("slider.slide1.5.2")}
                            </p>
                        </div>
                        <img src={slide_1_arrow} alt='arrow' />
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img className="lastIcon" src={slide_1_icon_6} alt='icon'/>
                                <img src={slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("slider.slide1.7.1")} <span>Gogo</span>{t("slider.slide1.7.2")}
                            </p>
                        </div>
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons rotate-2">
                                <img src={slide_1_icon_7} alt='icon'/>
                            </div>
                            <p>
                                {t("slider.slide1.6")}
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