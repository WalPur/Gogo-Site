import './Footer.css'

import { Link } from 'react-router-dom';
import discord from './discord_icon.svg'
import instagram from './instagram_icon.svg'
import telegram from './telegram_icon.svg'
import vk from './vk_icon.svg'
import whatsapp from './whatsapp_icon.svg'
import yandex_zen from './yandexzen_icon.svg'
import youtube from './youtube_icon.svg'

function Footer(){
    return(
        <div className='footer_block'>
            <div className='footer__header'>
                <div className='footer__title'>
                    Работайте с нами
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
            <div className='footer__content'>
                <div className='footer__social-network'>
                    <p>
                        Мы в социальных сетях
                    </p>
                    <div className='footer__icons'>  {/* TODO: запросите ссылки на соцсети и выставьте настоящие */}
                        <a href='#'>
                            <img src={youtube} alt='#' />
                        </a>
                        <a href='https://www.instagram.com/gogocourier/'>
                            <img src={instagram} alt='#' />
                        </a>
                        <a href='#'>
                            <img src={discord} alt='#' />
                        </a>
                        <a href='#'>
                            <img src={telegram} alt='#' />
                        </a>
                        <a href='#'>
                            <img src={whatsapp} alt='#' />
                        </a>
                        <a href='#'>
                            <img src={vk} alt='#' />
                        </a>
                        <a href='#'>
                            <img src={yandex_zen} alt='#' />
                        </a>
                    </div>
                </div>
                <div className='footer_asks'>
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