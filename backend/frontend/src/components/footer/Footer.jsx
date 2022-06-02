import './Footer.css'

import { Link } from 'react-router-dom';
import instagram from './instagram_icon.svg'
import telegram from './telegram_icon.svg'
import whatsapp from './whatsapp_icon.svg'

function Footer(){
    return(
        <div className='footer__block'>
            <div className='footer__top'>
                <div className='footer__header container-sm'>
                    <div className='footer__title'>
                        <p>
                            Работайте с нами
                        </p>
                    </div>
                    <div className='footer__buttons'>
                        <Link to='/courier'>
                            Стать курьером
                        </Link>
                        <Link to='/partner'>
                            Стать партнером
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
                        По всем вопросам пишите в телеграм или в Whatsapp
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