import "./Slide_4.css";

import courier_1 from "./courier_1.png";
import courier_2 from "./courier_2.png";
import courier_3 from "./courier_3.png";
import courier_4 from "./courier_4.png";
import group from "./group.png";

function Slide_4() {
    return (
        <div className="Slide_4">
            <div className="Slide_4_text caption">
                <span className="Slide_4_bold">Курьеры</span><span className="GogoSpan"> Gogo</span>Курьер
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