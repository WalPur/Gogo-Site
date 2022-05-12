import "./Slide_4.css";

import courier_1 from "./slide_4_1.svg";
import courier_2 from "./slide_4_2.svg";
import courier_3 from "./slide_4_3.svg";
import courier_4 from "./slide_4_4.svg";

function Slide_4() {
    return (
        <div className="Slide_4">
            <div className="Slide_4_text">
                <span className="Slide_4_bold">Курьеры</span> <span className="GogoSpan">Gogo</span> Курьер
            </div>
            <img src={courier_1} className="courier_1"/>
            <img src={courier_2} className="courier_2"/>
            <img src={courier_3} className="courier_3"/>
            <img src={courier_4} className="courier_4"/>
        </div>
    )
}

export default Slide_4;