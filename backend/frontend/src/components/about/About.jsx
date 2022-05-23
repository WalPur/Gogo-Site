import './About.css'

import iphone from './iphone.svg'
import macbook from './macbook.svg'
import samsung from './samsung.svg'

function About(){
    return(
        <div className='about__block block'>
            <div className='about__header'>
                <div className="about__titles">
                    <div className='about__title'>
                        <span>Gogo</span>Курьер<span> это</span>
                    </div>
                    <div className='about__subtitle'>
                        Экосистема доставки еды и не только (цветы, магазины, аптеки)
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__item'>
                        <p>1</p>
                        <p>Доставка из ресторанов</p>
                    </div>
                    <div className='about__item'>
                        <p>2</p>
                        <p>Доставка из магазинов</p>
                    </div>
                </div>
            </div>
            <div className='about__images'>
                <div>
                    <img src={iphone} className='about__image' alt='iphone' />
                    <p>iOS</p>
                </div>
                <div>
                    <img src={samsung} className='about__image' alt='samsung' />
                    <p>Android</p>
                </div>
                <div>
                    <img src={macbook} className='about__image' alt='macbook' />
                    <p>Web</p>
                </div>
            </div>
        </div>
    )
}

export default About;