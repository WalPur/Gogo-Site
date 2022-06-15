import './About.css'

import { useTranslation } from "react-i18next";
import Images from '../../images/index'

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
                    <img src={Images.iphone} className='about__image' alt='iphone' />
                    <img src={Images.apple_icon} className='about__icon' alt='apple'/>
                </div>
                <div>
                    <img src={Images.samsung} className='about__image' alt='samsung' />
                    <img src={Images.android_icon} className='about__icon' alt='android'/>
                </div>
                <div>
                    <img src={Images.macbook} className='about__image' alt='macbook' />
                    <img src={Images.web_icon} className='about__icon' alt='web'/>
                </div>
            </div>
        </div>
    )
}

export default About;