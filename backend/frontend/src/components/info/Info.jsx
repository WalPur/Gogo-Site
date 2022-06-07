import './Info.css'

import React, { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
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
import { useTranslation } from "react-i18next";

function Info(){
    const { t } = useTranslation();
    const [collapseStatus, setCollapse] = useState(false);

    return(
        <div className='info__block block'>
            <div className='info__title caption' onClick={() => setCollapse(!collapseStatus)}>
                {t("mainPage.info.title")}
            </div>
            <Collapse in={collapseStatus}>
                <div className='info__content'>
                    <div className='info__row-1'>
                        <div className='info__column'>
                            <img src={info_icon_1} alt='info icon'/>
                            <p>
                                {t("mainPage.info.icon1")}
                            </p>
                        </div>
                        <img src={info_arrow_1} className="infoArrow" alt='arrow' />
                        <div className='info__column info__column-2'>
                            <img src={info_icon_2} alt='info icon'/>
                            <p>
                                {t("mainPage.info.icon2")}
                            </p>
                        </div>
                        <img src={info_arrow_2} className="infoArrow" alt='arrow' />
                        <div className='info__column info__relative-1'>
                            <img src={info_icon_3} alt='info icon'/>
                            <p>
                                {t("mainPage.info.icon3")}
                            </p>
                            <img className='info__absolute-1 infoArrow' src={info_arrow_3} alt='arrow' />
                        </div>
                    </div>
                    <div className='info__row-2 info__relative-2'>
                        <div className='info__column'>
                            <img src={info_icon_4} alt='info icon'/>
                            <p>
                                {t("mainPage.info.icon4")}
                            </p>
                        </div>
                        <img className='info__absolute-2 infoArrow' src={info_arrow_4} alt='arrow' />
                    </div>
                    <div className='info__row-3'>
                        <div className='info__column'>
                            <div className='info__column-row'>
                                <img src={info_icon_5} alt='info icon'/>
                                <p>
                                    {t("mainPage.info.icon5")}
                                </p>
                            </div>
                            <div className='info__column-row'>
                                <img src={info_icon_6} alt='info icon'/>
                                <p>
                                    {t("mainPage.info.icon6")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default Info;