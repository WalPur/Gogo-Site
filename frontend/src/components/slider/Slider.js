import './slider.css'

function Slider(){
    return(
        <div id="sliderExampleIndicators" className="slider slide" data-bs-ride="slider">
            <div class="slider-indicators">
                <button type="button" data-bs-target="#sliderExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#sliderExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#sliderExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#sliderExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="slider-inner">
                <div className="slider-item active">
                    <svg src="" className="d-block w-100"/>
                </div>
                <div className="slider-item">
                    <svg src="" className="d-block w-100"/>
                </div>
                <div className="slider-item">
                    <svg src="" className="d-block w-100"/>
                </div>
                <div className="slider-item">
                    <svg src="" className="d-block w-100"/>
                </div>
            </div>
            <button className="slider-control-prev" type="button" data-bs-target="#sliderExampleIndicators" data-bs-slide="prev">
                <span className="slider-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="slider-control-next" type="button" data-bs-target="#sliderExampleIndicators" data-bs-slide="next">
                <span className="slider-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;