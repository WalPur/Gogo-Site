import roadmap from './slide_1.svg';
import "./Slide_1.css";

function Slide_1() {
    return(
        <div className="slider-item slide_1">
            <div className="caption">
                Как работает приложение
            </div>
            <img src={roadmap} alt=""/>
        </div>
    )
}

export default Slide_1;