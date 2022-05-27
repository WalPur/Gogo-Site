import './General.css'

import gogo_icon from './gogo_icon.svg'
import phone_img from './phone_img.svg'
import title from './general_title.svg'

// TODO:Делаю адаптивку для блока General

function General(){
    return(
        <div className='general__block'>
            <div className='container general__container'>
                <div className='general__content'>
                    <div className='general__title'>
                        <div className='general__image'>
                            <img src={title} alt='general title' />
                        </div>
                        <p className='general__subtitle'>
                            Агрегатор курьерской службы
                        </p>
                        <p className='general__text'>
                            Теперь клиенты доступны вам для коммуникаций, за доставку платит клиент, а мы по-прежнему быстро доставляем!
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