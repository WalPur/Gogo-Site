import './Equipment.css'

import arrow_1 from './arrow_1.svg'
import arrow_2 from './arrow_2.svg'
import equipment_1 from './equipment_1.svg'
import equipment_2 from './equipment_2.svg'
import equipment_3 from './equipment_3.svg'

function Equipment(){
    return(
        <div className='equipment__block block'>
            <div className='equipment__header'>
                <div className='equipment__title caption'>
                    Экипировка курьера
                </div>
                <div className='equipment__subtitle'>
                    высокотехнологическая сумка
                </div>
            </div>
            <div className='equipment__content'>
                <div className='equipment__row'>
                    <div className='equipment__column'>
                        <img src={equipment_1} alt='equipment img 1' />
                    </div>
                    <div className='equipment__column equipment__column_2'>
                        <img src={equipment_2} alt='equipment img 2' />
                        <img src={arrow_1} className='equipment__column-arrow-1' alt='arrow' />
                    </div>
                    <div className='equipment__column equipment__column_3'>
                        <img src={equipment_3} alt='equipment img 3' />
                        <img src={arrow_2} className='equipment__column-arrow-2' alt='arrow' />
                    </div>
                    <div className='equipment__column equipment__table'>
                        <div className='equipment__column-row__title'>
                            собственная разработка
                        </div>
                        <div className='equipment__column-row equipment__column-row_1'>
                            <div>
                                Размеры сумки
                            </div>
                            <p>
                                высота - 40 см
                            </p>
                            <p>
                                длина - 40 см
                            </p>
                            <p>
                                ширина - 25 см
                            </p>
                        </div>
                    </div>
                </div>
                <div className='equipment__column'>
                    <div className='equipment__column-1'>
                        <div className='equipment__column-row'>
                            <div>
                                ДВОЙНОЙ ТЕПЛОИЗОЛИРУЮЩИЙ СЛОЙ
                            </div>
                            <p>
                                Еда сохраняет температуру приготовления
                            </p>
                        </div>
                        <div className='equipment__column-row'>
                            <div>
                                ГИДРОФОБНЫЙ СЛОЙ
                            </div>
                            <p>
                                Отталкивает воду и грязь
                            </p>
                        </div>
                        <div className='equipment__column-row'>
                            <div>
                                ВМЕСТИМОСТЬ
                            </div>
                            <p>
                                До 7 кг
                            </p>
                        </div>
                    </div>
                    <div className='equipment__column-2'>
                        <div className='equipment__column-row'>
                            <div>
                                УСИЛЕННЫЙ КАРКАС ЖЕСТКОСТИ
                            </div>
                            <p>
                                Товар в сохранности, курьеру удобно
                            </p>
                        </div>
                        <div className='equipment__column-row'>
                            <div>
                                УДОБНЫЕ РУЧКИ
                            </div>
                            <p>
                                Горизонтальное и вертикальное положение
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipment;