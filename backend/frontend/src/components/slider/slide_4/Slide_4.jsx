import "./Slide_4.css";

import courier_1 from "./courier_1.png";
import courier_2 from "./courier_2.png";
import courier_3 from "./courier_3.png";
import courier_4 from "./courier_4.png";
import group from "./group.png";
import { useTranslation } from "react-i18next";

function Slide_4() {
    const { t } = useTranslation();

    return (
        <div className="Slide_4">
            <div className="Slide_4_text caption">
                <span className="Slide_4_bold">{t("mainPage.slider.slide4.title.1")}</span><span className="GogoSpan"> Gogo</span>{t("mainPage.slider.slide4.title.2")}
            </div>
            <img src={group} className="courier_group"/>
            <div className="couriers">
                <div className="couriers_1">
                    <img src={courier_1} className="courier" />
                    <img src={courier_2} className="courier" />
                </div>
                <div className="couriers_2">
                    <img src={courier_3} className="courier" />
                    <img src={courier_4} className="courier" />
                </div>
            </div>
        </div>
    )
}

export default Slide_4;