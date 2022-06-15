import "./Slide_4.css";

import { useTranslation } from "react-i18next";

import Images from "../../../images/index";

function Slide_4() {
    const { t } = useTranslation();

    return (
        <div className="Slide_4">
            <div className="Slide_4_text caption">
                <span className="Slide_4_bold">{t("mainPage.slider.slide4.title.1")}</span><span className="GogoSpan"> Gogo</span>{t("mainPage.slider.slide4.title.2")}
            </div>
            <img src={Images.group} className="courier_group"/>
            <div className="couriers">
                <div className="couriers_1">
                    <img src={Images.courier_1} className="courier" />
                    <img src={Images.courier_2} className="courier" />
                </div>
                <div className="couriers_2">
                    <img src={Images.courier_3} className="courier" />
                    <img src={Images.courier_4} className="courier" />
                </div>
            </div>
        </div>
    )
}

export default Slide_4;