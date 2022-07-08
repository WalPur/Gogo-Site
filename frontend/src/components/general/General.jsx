import './General.css'

import { useTranslation } from "react-i18next";

import Images from '../../images/index';

function General(){
    const { t } = useTranslation();

    return(
        <div className='general__block'>
            <div className='container general__container'>
                <div className='general__content'>
                    <div className='general__title'>
                        <div className='general__image'>
                            {/* <img src={title} alt='general title' /> */}
                            <span>Gogo</span>{t("mainPage.general.title")}
                        </div>
                        <p className='general__subtitle'>
                            {t("mainPage.general.subtitle")}
                        </p>
                        <p className='general__text'>
                            {t("mainPage.general.text")}
                        </p>
                    </div>
                </div>
                <div className="general__images">
                    <div className='general__logo'>
                        <img src={Images.gogo_icon} alt='gogo icon' />
                    </div>
                    <div className='general__phone'>
                        <img src={Images.phone_img} alt='phone img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General;