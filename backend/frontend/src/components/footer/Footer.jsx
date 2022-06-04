import './Footer.css'

import { Link } from 'react-router-dom';
import instagram from './instagram_icon.svg'
import telegram from './telegram_icon.svg'
import { useTranslation } from "react-i18next";
import whatsapp from './whatsapp_icon.svg'

function Footer(){
    const { t } = useTranslation();

    return(
        <div className='footer__block'>
            <div className='footer__top'>
                <div className='footer__header container-sm'>
                    <div className='footer__title'>
                        <p>
                            {t("footer.title")}
                        </p>
                    </div>
                    <div className='footer__buttons'>
                        <Link to='/courier'>
                            {t("footer.courier")}
                        </Link>
                        <Link to='/partner'>
                            {t("footer.partner")}
                        </Link>
                    </div>
                </div>
            </div>
            <div className='footer__content container-sm'>
                <div className='footer__social-network'>
                    <div className='footer__icons'>  {/* TODO: запросите ссылки на соцсети и выставьте настоящие */}
                        <a href='https://www.instagram.com/gogocourier/'>
                            <img src={instagram} className="socialIcon" alt='#' />
                        </a>
                        <a href='/'>
                            <img src={telegram} className="socialIcon" alt='#' />
                        </a>
                        <a href='/'>
                            <img src={whatsapp} className="socialIcon" alt='#' />
                        </a>
                    </div>
                    <p>
                        LLC “GOGO TECHNOLOGY”
                    </p>
                </div>
                <div className='footer__asks'>
                    <p>
                        {t("footer.ask")}
                    </p>
                    <p>
                        +7(914)286-85-48
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;