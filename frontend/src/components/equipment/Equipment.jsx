import './Equipment.css'

import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import { useTranslation } from "react-i18next";

import Images from '../../images/index'

function Equipment(){
    const { t } = useTranslation();
    const [collapseStatus, setCollapse] = useState(false);

    return(
        <div className='equipment__block block'>
            <div className='equipment__title caption' onClick={() => setCollapse(!collapseStatus)}>
                {t("mainPage.equipment.title")}
            </div>
            <Collapse in={collapseStatus}>
                <div className='equipment__content'>
                    <Container fluid className='equipment__row'>
                        <Row>
                            <Col className='equipment_images'>
                                <Col className='equipment__column equipment__column_1'>
                                    <img src={Images.equipment_1} alt='equipment img 1' />
                                </Col>
                                <Col className='equipment__column equipment__column_2'>
                                    <img src={Images.equipment_2} alt='equipment img 2' />
                                </Col>
                                <Col className='equipment__column equipment__column_3'>
                                    <img src={Images.equipment_3} alt='equipment img 3' />
                                </Col>
                            </Col>
                            <Col md="auto" className='equipment__table'>
                                <Col className='equipment__column-row__title'>
                                    {t("mainPage.equipment.tiles.1")}
                                </Col>
                                <Col className='equipment__column-row equipment__column-row_1 equipment__column-right'>
                                    <div className="textWrapper">
                                        <div className="equipmentTitle">
                                            {t("mainPage.equipment.tiles.2.title")}
                                        </div>
                                        <div className="textLine">
                                            <p>
                                                {t("mainPage.equipment.tiles.2.1")}
                                            </p>
                                            <p>
                                                {t("mainPage.equipment.tiles.2.2")}
                                            </p>
                                            <p>
                                                {t("mainPage.equipment.tiles.2.3")}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                        <Row className='equipment__column-1'>
                            <Col md="auto" className='equipment__column-row'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
                                        {t("mainPage.equipment.tiles.3.title")}
                                    </div>
                                    <p>
                                        {t("mainPage.equipment.tiles.3.text")}
                                    </p>
                                </div>
                            </Col>
                            <Col md="auto" className='equipment__column-row equipment__column-right'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
                                        {t("mainPage.equipment.tiles.4.title")}
                                    </div>
                                    <p>
                                        {t("mainPage.equipment.tiles.4.text")}
                                    </p>
                                </div>
                            </Col>
                            <Col md="auto" className='equipment__column-row'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
                                        {t("mainPage.equipment.tiles.5.title")}
                                    </div>
                                    <p>
                                        {t("mainPage.equipment.tiles.5.text")}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='equipment__column-2'>
                            <Col md="auto" className='equipment__column-row equipment__column-right'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
                                        {t("mainPage.equipment.tiles.6.title")}
                                    </div>
                                    <p>
                                        {t("mainPage.equipment.tiles.6.text")}
                                    </p>
                                </div>
                            </Col>
                            <Col md="auto" className='equipment__column-row'>
                                <div className="textWrapper">
                                    <div className="equipmentTitle">
                                        {t("mainPage.equipment.tiles.7.title")}
                                    </div>
                                    <p>
                                        {t("mainPage.equipment.tiles.7.text")}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='equipment__column-3'>
                            <Col md="auto" className='equipment__column-row equipment__column-right'>
                                <div className="textWrapper">
                                    <p>
                                        {t("mainPage.equipment.tiles.8")}
                                    </p>
                                </div>
                            </Col>
                            <Col md="auto" className='equipment__column-row'>
                                <div className="textWrapper">
                                    <p>
                                        {t("mainPage.equipment.tiles.9")}
                                    </p>
                                </div>
                            </Col>
                            <Col md="auto" className='equipment__column-row equipment__column-right'>
                                <div className="textWrapper">
                                    <p>
                                        {t("mainPage.equipment.tiles.10")}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Collapse>
        </div>
    )
}

export default Equipment;