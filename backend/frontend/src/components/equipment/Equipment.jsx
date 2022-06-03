import './Equipment.css'

import { Col, Container, Row } from "react-bootstrap";

import equipment_1 from './equipment_1.svg'
import equipment_2 from './equipment_2.svg'
import equipment_3 from './equipment_3.svg'
import { useTranslation } from "react-i18next";

function Equipment(){
    const { t } = useTranslation();

    return(
        <div className='equipment__block block'>
            <div className='equipment__header'>
                <div className='equipment__title caption'>
                    {t("equipment.title")}
                </div>
                <div className='equipment__subtitle'>
                    {t("equipment.subtitle")}
                </div>
            </div>
            <div className='equipment__content'>
                <Container fluid className='equipment__row'>
                    <Row>
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
                        <Col md="auto" className='equipment__table'>
                            <Col className='equipment__column-row__title'>
                                {t("equipment.tiles.1")}
                            </Col>
                            <Col className='equipment__column-row equipment__column-row_1'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
                                        {t("equipment.tiles.2.title")}
                                    </div>
                                    <p>
                                        {t("equipment.tiles.2.1")}
                                    </p>
                                    <p>
                                        {t("equipment.tiles.2.2")}
                                    </p>
                                    <p>
                                        {t("equipment.tiles.2.3")}
                                    </p>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    <Row className='equipment__column-1'>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                {t("equipment.tiles.3.title")}
                            </div>
                            <p>
                                {t("equipment.tiles.3.text")}
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                {t("equipment.tiles.4.title")}
                            </div>
                            <p>
                                {t("equipment.tiles.4.text")}
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                {t("equipment.tiles.5.title")}
                            </div>
                            <p>
                                {t("equipment.tiles.5.text")}
                            </p>
                        </Col>
                    </Row>
                    <Row className='equipment__column-2'>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                {t("equipment.tiles.6.title")}
                            </div>
                            <p>
                                {t("equipment.tiles.6.text")}
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <div className="equipmentTitle">
                                {t("equipment.tiles.7.title")}
                            </div>
                            <p>
                                {t("equipment.tiles.7.text")}
                            </p>
                        </Col>
                    </Row>
                    <Row className='equipment__column-3'>
                        <Col md="auto" className='equipment__column-row'>
                            <p>
                                {t("equipment.tiles.8")}
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <p>
                                {t("equipment.tiles.9")}
                            </p>
                        </Col>
                        <Col md="auto" className='equipment__column-row'>
                            <p>
                                {t("equipment.tiles.10")}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Equipment;