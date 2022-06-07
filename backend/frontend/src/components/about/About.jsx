import './About.css'

import android_icon from './android_icon.svg'
import apple_icon from './apple_icon.svg'
import iphone from './iphone.svg'
import macbook from './macbook.svg'
import samsung from './samsung.svg'
import { useTranslation } from "react-i18next";
import web_icon from './web_icon.svg'

function About(){
    const { t } = useTranslation();

    return(
        <div className='about__block block'>
            <div className='about__header'>
                <div className="about__titles">
                    <div className='about__title'>
                        <span>Gogo</span>{t("mainPage.about.title.t1")}<span> {t("mainPage.about.title.t2")}</span>
                    </div>
                    <div className='about__subtitle'>
                        {t("mainPage.about.subtitle")}
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__item'>
                        <p>1</p>
                        <p>{t("mainPage.about.items.1")}</p>
                    </div>
                    <div className='about__item'>
                        <p>2</p>
                        <p>{t("mainPage.about.items.2")}</p>
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