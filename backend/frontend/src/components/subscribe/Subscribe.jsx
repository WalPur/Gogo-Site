import './Subscribe.css'

import subscribe_img from './subscribe_image.svg'
import { useTranslation } from "react-i18next";

function Subscribe(){
    const { t } = useTranslation();

    return(
        <div className='subscribe__block block'>
            <div className='subscribe__title caption'>
                {t("subscribe.title")}
            </div>
            <div className='subscribe__content'>
                <div className='subscribe__column'>
                    <div className='subscribe__subscribe-conditions'>
                        <div className='subscribe-conditions__title'>
                            {t("subscribe.subscriptionTerms.title")}
                        </div>
                        <div className='subscribe-conditions__number'>
                            <p>10 000 ₽</p>
                        </div>
                        <div className='subscribe-conditions__text'>
                            {t("subscribe.subscriptionTerms.text")}
                        </div>
                    </div>
                    <div className='subscribe__image'>
                        <img src={subscribe_img} alt='subscribe img' />
                    </div>
                </div>
                <div className='delivery__column'>
                    <div className='subscribe__delivery-conditions'>
                        <div className='delivery-conditions__title'>
                        {t("subscribe.deliveryTerms.title")}
                        </div>
                        <div className='delivery-conditions__table'>
                            <ul>
                                <li className='delivery__table-row'>
                                    <div>
                                        {t("subscribe.deliveryTerms.list.1.header")}
                                    </div>
                                    <p>
                                        <span>200 </span> {t("subscribe.deliveryTerms.list.1.text")}
                                    </p>
                                </li>
                                <li className='delivery__table-row'>
                                    <div>
                                        {t("subscribe.deliveryTerms.list.2.header")}
                                    </div>
                                    <p>
                                        <span>200 </span> {t("subscribe.deliveryTerms.list.2.text.1")}
                                    </p>
                                    <p>
                                        <span>50 </span> {t("subscribe.deliveryTerms.list.2.text.2")}
                                    </p>
                                </li>
                                <li className='delivery__table-row'>
                                    <div>
                                        {t("subscribe.deliveryTerms.list.3.header")}
                                    </div>
                                    <p>
                                        <span>200 </span> {t("subscribe.deliveryTerms.list.3.text.1")}
                                    </p>
                                    <p>
                                        <span>50 </span> {t("subscribe.deliveryTerms.list.3.text.2")}
                                    </p>
                                </li>
                                <li className='delivery__table-row'>
                                    <div>
                                        
                                    </div>
                                    <p>
                                        <span>200 </span> {t("subscribe.deliveryTerms.list.4.text.1")}
                                    </p>
                                    <p>
                                        <span>50 </span> {t("subscribe.deliveryTerms.list.4.text.2")}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;