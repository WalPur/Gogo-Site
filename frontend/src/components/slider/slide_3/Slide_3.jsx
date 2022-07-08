import "./Slide_3.css";

import { useTranslation } from "react-i18next";

import Images from "../../../images/index";

function Slide_3() {
    const { t } = useTranslation();

    return(
        <div className="slider-item slide_3_over">
            <div className="slide_3_title caption">{t("mainPage.slider.slide3.title")}</div>
            <div className="slider-container slide_3">
                <div className='quote quote_1'>
                    <span className='GogoSpan'>Gogo</span>{t("mainPage.slider.slide3.quote1")}
                </div>
                <img src={Images.bigdata} className="bigdata" alt=""/>
                <div className='quote quote_2'>
                    <ul>
                        <li>
                            {t("mainPage.slider.slide3.quote2.1")}
                        </li>
                        <li>
                            {t("mainPage.slider.slide3.quote2.2")}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slide_3;