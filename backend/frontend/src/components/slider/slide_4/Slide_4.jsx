import "./Slide_4.css";

import group from "./group.png"

function Slide_4() {
    return (
        <div className="Slide_4">
            <div className="Slide_4_text caption">
                <span className="Slide_4_bold">Курьеры</span><span className="GogoSpan"> Gogo</span>Курьер
            </div>
            <img src={group} className="courier_group"/>
        </div>
    )
}

export default Slide_4;