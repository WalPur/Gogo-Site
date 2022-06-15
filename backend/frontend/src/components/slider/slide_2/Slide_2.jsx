import "./slide__2.css"

import { useTranslation } from "react-i18next";

import Images from "../../../images/index";

function Slide_2(){
    const { t } = useTranslation();
    
    return(
        <div className="slider-item slide_2">
            <h3 className="slider-2__header caption">{t("mainPage.slider.slide2.title")}</h3>
            <div className="slider-container">
                <div className='slide_2__row slide_2__main_obj'>
                    <div className="slide_2__column slide_2__main_column">
                        <div className="slide_2__row">
                            <div className="slide_2__column slide_2__obj slide_2__half">
                                <div className="slide_2__header">
                                    {t("mainPage.slider.slide2.block1.header")}
                                </div>
                                <div className="slide_2__content">
                                    {t("mainPage.slider.slide2.block1.text")}
                                </div>
                            </div>
                            <div className="slide_2__column slide_2__obj slide_2__half">
                                <div className="slide_2__header">
                                    {t("mainPage.slider.slide2.block2.header")}
                                </div>
                                <div className="slide_2__content">
                                    {t("mainPage.slider.slide2.block2.text")}
                                </div>
                            </div>
                        </div>
                        <div className="slide_2__column slide_2__obj slide_2__full">
                            <div className="slide_2__header">
                                {t("mainPage.slider.slide2.block3.header")}
                            </div>
                            <div className="slide_2__content">
                                {t("mainPage.slider.slide2.block3.text")}
                            </div>
                        </div>
                        <div className="slide_2__column slide_2__obj slide_2__full altColor">
                            <div className="slide_2__header">
                                {t("mainPage.slider.slide2.block4.header")}
                            </div>
                            <div className="slide_2__content">
                                {t("mainPage.slider.slide2.block4.text")}
                            </div>
                        </div>
                    </div>
                    <div className="slide_2__column slide_2__obj slide_2__vertical">
                        <div className="slide_2__header">
                            {t("mainPage.slider.slide2.block5.header")}
                        </div>
                        <div className="slide_2__content">
                            <ul>
                                <li><span>10 %</span> {t("mainPage.slider.slide2.block5.list.1")}</li>
                                <li><span>20 %</span> {t("mainPage.slider.slide2.block5.list.2")}</li>
                                <li><span>20 %</span> {t("mainPage.slider.slide2.block5.list.3")}</li>
                                <li><span>50 %</span> {t("mainPage.slider.slide2.block5.list.4")}</li>
                            </ul>
                            <div className="slide_2__svg">
                                <div className='imgBorder'><img src={Images.man} alt=""/></div>
                                <div className='imgBorder'><img src={Images.car} alt=""/></div>
                                <div className='imgBorder'><img src={Images.bycicle} alt=""/></div>
                                <div className='imgBorder'><img src={Images.motorbike} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide_2;