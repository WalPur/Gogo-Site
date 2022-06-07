import './Equipment.css'

import { Col, Container, Row } from "react-bootstrap";

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
                <Container fluid className='equipment__row'>
                    <Row>
                        <Col className='equipment__column'>
                            <Col className='equipment_images'>
                                <Col className='equipment__column equipment__column_1'>
                                    <img src={equipment_1} alt='equipment img 1' />
                                </Col>
                                <Col className='equipment__column equipment__column_2'>
                                    <img src={equipment_2} alt='equipment img 2' />
                                </Col>
                                <Col className='equipment__column equipment__column_3'>
                                    <img src={equipment_3} alt='equipment img 3' />
                                </Col>
                            </Col>
                            <Col className='equipment__column-1'>
                                <Col md="auto" className='equipment__column-row'>
                                    <div className="equipmentTitle">
                                        ДВОЙНОЙ ТЕПЛОИЗОЛИРУЮЩИЙ СЛОЙ
                                    </div>
                                    <p>
                                        Еда сохраняет температуру приготовления
                                    </p>
                                </Col>
                                <Col md="auto" className='equipment__column-row'>
                                    <div className="equipmentTitle">
                                        ГИДРОФОБНЫЙ СЛОЙ
                                    </div>
                                    <p>
                                        Отталкивает воду и грязь
                                    </p>
                                </Col>
                            </Col>
                        </Col>
                        <Col md="auto" className='equipment__table'>
                            <Col className='equipment__column-row__title'>
                                собственная разработка
                            </Col>
                            <Col className='equipment__column-row equipment__column-row_1'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
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
                            </Col>
                        </Col>
                    </Row>
                    <Row className='equipment__column-2'>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                ВМЕСТИМОСТЬ
                            </div>
                            <p>
                                До 7 кг
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                УСИЛЕННЫЙ КАРКАС ЖЕСТКОСТИ
                            </div>
                            <p>
                                Товар в сохранности, курьеру удобно
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                УДОБНЫЕ РУЧКИ
                            </div>
                            <p>
                                Горизонтальное и вертикальное положение
                            </p>
                        </Col>
                    </Row>
                    <Row className='equipment__column-3'>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Equipment;