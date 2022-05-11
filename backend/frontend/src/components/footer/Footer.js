import './Footer.css'
import { Link } from 'react-router-dom';

import youtube from './youtube_icon.svg'
import instagram from './instagram_icon.svg'
import discord from './discord_icon.svg'
import telegram from './telegram_icon.svg'
import whatsapp from './whatsapp_icon.svg'
import vk from './vk_icon.svg'
import yandex_zen from './yandexzen_icon.svg'

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
                        <Link to='#'>
                            <img src={youtube} alt='#' />
                        </Link>
                        <Link to='#'>
                            <img src={instagram} alt='#' />
                        </Link>
                        <Link to='#'>
                            <img src={discord} alt='#' />
                        </Link>
                        <Link to='#'>
                            <img src={telegram} alt='#' />
                        </Link>
                        <Link to='#'>
                            <img src={whatsapp} alt='#' />
                        </Link>
                        <Link to='#'>
                            <img src={vk} alt='#' />
                        </Link>
                        <Link to='#'>
                            <img src={yandex_zen} alt='#' />
                        </Link>
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