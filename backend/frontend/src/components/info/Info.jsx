import './Info.css'

import info_arrow_1 from './info_arrow_1.svg'
import info_arrow_2 from './info_arrow_2.svg'
import info_arrow_3 from './info_arrow_3.svg'
import info_arrow_4 from './info_arrow_4.svg'
import info_icon_1 from './info_icon_1.svg'
import info_icon_2 from './info_icon_2.svg'
import info_icon_3 from './info_icon_3.svg'
import info_icon_4 from './info_icon_4.svg'
import info_icon_5 from './info_icon_5.svg'
import info_icon_6 from './info_icon_6.svg'

function Info(){
    return(
        <div className='info__block block'>
            <div className='info__title caption'>
                3 дня до первого заказа
            </div>
            <div className='content'>
                <div className='info__row-1'>
                    <div className='info__column'>
                        <img src={info_icon_1} alt='info icon'/>
                        <p>
                            Подписание договора (оферты)
                        </p>
                    </div>
                    <img src={info_arrow_1} alt='arrow' />
                    <div className='info__column info__column-2'>
                        <img src={info_icon_2} alt='info icon'/>
                        <p>
                            Оплата подписки
                        </p>
                    </div>
                    <img src={info_arrow_2} alt='arrow' />
                    <div className='info__column info__relative-1'>
                        <img src={info_icon_3} alt='info icon'/>
                        <p>
                            Обучение персонала заведения пользованием приложением
                        </p>
                        <img className='info__absolute-1' src={info_arrow_3} alt='arrow' />
                    </div>
                </div>
                <div className='info__row-2 info__relative-2'>
                    <div className='info__column'>
                        <img src={info_icon_4} alt='info icon'/>
                        <p>
                            Закрепляем персонального менеджера за вами на первый месяц работы
                        </p>
                    </div>
                    <img className='info__absolute-2' src={info_arrow_4} alt='arrow' />
                </div>
                <div className='info__row-3'>
                    <div className='info__column'>
                        <div className='info__column-row'>
                            <img src={info_icon_5} alt='info icon'/>
                            <p>
                                Вместе с вами анализируем результаты и статистику
                            </p>
                        </div>
                        <div className='info__column-row'>
                            <img src={info_icon_6} alt='info icon'/>
                            <p>
                                Даем рекомендации экспертов по оптимизации конверсии и способам увеличения охвата новых клиентов
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;