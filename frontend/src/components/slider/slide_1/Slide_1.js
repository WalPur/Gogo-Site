import roadmap from './slide_1.svg'

function Slide_1() {
    return(
        <div className="carousel-item active slider__item">
            <div className="caption">
                Как работает приложение
            </div>
            <img src={roadmap} alt=""/>
        </div>
    )
}

export default Slide_1;