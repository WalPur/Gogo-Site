import "./Slide_1.css";

import { useTranslation } from "react-i18next";

import Images from "../../../images/index";

function Slide_1() {
    const { t } = useTranslation();
    return(
        <div className="slider-item slide_1">
            <h3 className="slider__title caption">
                {t("mainPage.slider.slide1.title")}
            </h3>
            <div className="slider-container">
                <div className="slider__content">
                    <div className="slider__row_1">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_1} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.1")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_2} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.2")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_3} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.3")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_4} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.4")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons rotate-1">
                                <img src={Images.slide_1_icon_5} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.5.1")} <span>Gogo</span>{t("mainPage.slider.slide1.5.2")}
                            </p>
                        </div>
                    </div>
                    <div className="slider__row_2">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons rotate-2">
                                <img src={Images.slide_1_icon_7} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.6")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img className="lastIcon" src={Images.slide_1_icon_6} />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.7.1")} <span>Gogo</span>{t("mainPage.slider.slide1.7.2")}
                            </p>
                        </div>
                    </div>
                    <div className="slider__row_3">
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_1} alt='icon'/>
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.1")}
                            </p>
                        </div>
                        <img src={Images.slide_1_arrow} alt='arrow' />
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_2} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.2")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_3} alt='icon'/>
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.3")}
                            </p>
                        </div>
                        <img src={Images.slide_1_arrow} alt='arrow' />
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img src={Images.slide_1_icon_4} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.4")}
                            </p>
                        </div>
                        <div className="slider__item">
                            <div className="slider__icons rotate-1">
                                <img src={Images.slide_1_icon_5} alt='icon'/>
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.5.1")} <span>Gogo</span>{t("mainPage.slider.slide1.5.2")}
                            </p>
                        </div>
                        <img src={Images.slide_1_arrow} alt='arrow' />
                        <div className="slider__item">
                            <div className="slider__icons">
                                <img className="lastIcon" src={Images.slide_1_icon_6} alt='icon'/>
                                <img src={Images.slide_1_arrow} alt='arrow' />
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.7.1")} <span>Gogo</span>{t("mainPage.slider.slide1.7.2")}
                            </p>
                        </div>
                        <div className="slider__item highlight__icon">
                            <div className="slider__icons rotate-2">
                                <img src={Images.slide_1_icon_7} alt='icon'/>
                            </div>
                            <p>
                                {t("mainPage.slider.slide1.6")}
                            </p>
                        </div>
                    </div>
                    <img src={Images.slide_1_phone} />
                </div>
            </div>
        </div>
    )
}

export default Slide_1;