import './Documents.css'

import React, {useEffect, useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup'
import axios from "axios";
import { useTranslation } from "react-i18next";

function Documents(){
    const { t } = useTranslation();

    const [docs, setDocs] = useState([]);
    useEffect(() => {
        axios.get("https://gogotech.ru/api/documents", {
        }).then(response => {
            setDocs(response.data)
        })
    }, [])

    return(
        <div className='documents__block'>
            <div className='documents__title'>
                {t("documents.title")}
            </div>
            <div className='documents__documents'>
                <ListGroup>
                    {docs.map( doc => (
                        <ListGroup.Item>
                            <a href={doc.document} download>
                                {doc.title}
                            </a>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        </div>
    )
}

export default Documents;
