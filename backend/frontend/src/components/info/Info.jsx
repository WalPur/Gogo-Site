import './Info.css'

import React, { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import { useTranslation } from "react-i18next";

import Images from '../../images/index';

function Info(){
const { t } = useTranslation();
const [collapseStatus, setCollapse] = useState(false);

return(
<div className='info__block block'>
    <div className='info__title caption' onClick={()=> setCollapse(!collapseStatus)}>
        {t("mainPage.info.title")}
    </div>
    <Collapse in={collapseStatus}>
        <div className='info__content'>
            <div className='info__row-1'>
                <div className='info__column'>
                    <img src={Images.info_icon_1} alt='info icon' />
                    <p>
                        {t("mainPage.info.icon1")}
                    </p>
                </div>
                <img src={Images.info_arrow_1} className="infoArrow" alt='arrow' />
                <div className='info__column info__column-2'>
                    <img src={Images.info_icon_2} alt='info icon' />
                    <p>
                        {t("mainPage.info.icon2")}
                    </p>
                </div>
                <img src={Images.info_arrow_2} className="infoArrow" alt='arrow' />
                <div className='info__column info__relative-1'>
                    <img src={Images.info_icon_3} alt='info icon' />
                    <p>
                        {t("mainPage.info.icon3")}
                    </p>
                    <img className='info__absolute-1 infoArrow' src={Images.info_arrow_3} alt='arrow' />
                </div>
            </div>
            <div className='info__row-2 info__relative-2'>
                <div className='info__column'>
                    <img src={Images.info_icon_4} alt='info icon' />
                    <p>
                        {t("mainPage.info.icon4")}
                    </p>
                </div>
                <img className='info__absolute-2 infoArrow' src={Images.info_arrow_4} alt='arrow' />
            </div>
            <div className='info__row-3'>
                <div className='info__column'>
                    <div className='info__column-row'>
                        <img src={Images.info_icon_5} alt='info icon' />
                        <p>
                            {t("mainPage.info.icon5")}
                        </p>
                    </div>
                    <div className='info__column-row'>
                        <img src={Images.info_icon_6} alt='info icon' />
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