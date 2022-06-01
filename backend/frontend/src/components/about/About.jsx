import './About.css'

import iphone from './iphone.svg'
import macbook from './macbook.svg'
import samsung from './samsung.svg'
import android_icon from './android_icon.svg'
import apple_icon from './apple_icon.svg'
import web_icon from './web_icon.svg'

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
                    <img src={apple_icon} className='about__icon' alt='apple'/>
                </div>
                <div>
                    <img src={samsung} className='about__image' alt='samsung' />
                    <img src={android_icon} className='about__icon' alt='android'/>
                </div>
                <div>
                    <img src={macbook} className='about__image' alt='macbook' />
                    <img src={web_icon} className='about__icon' alt='web'/>
                </div>
            </div>
        </div>
    )
}

export default About;