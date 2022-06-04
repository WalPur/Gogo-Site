import './General.css'

import gogo_icon from './gogo_icon.svg'
import phone_img from './phone_img.svg'
import title from './general_title.svg'
import { useTranslation } from "react-i18next";

// TODO:Делаю адаптивку для блока General

function General(){
    const { t } = useTranslation();

    return(
        <div className='general__block'>
            <div className='container general__container'>
                <div className='general__content'>
                    <div className='general__title'>
                        <div className='general__image'>
                            {/* <img src={title} alt='general title' /> */}
                            <span>Gogo</span>{t("general.title")}
                        </div>
                        <p className='general__subtitle'>
                            {t("general.subtitle")}
                        </p>
                        <p className='general__text'>
                            {t("general.text")}
                        </p>
                    </div>
                </div>
                <div className="general__images">
                    <div className='general__logo'>
                        <img src={gogo_icon} alt='gogo icon' />
                    </div>
                    <div className='general__phone'>
                        <img src={phone_img} alt='phone img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General;