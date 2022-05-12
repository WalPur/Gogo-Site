import React, {useEffect, useState} from 'react';
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup'

import './Documents.css'
// TODO: сделать так, чтобы эти документы были получены с бекенда и в соответствии им генерились ссылки на них

function Documents(){
    const [docs, setDocs] = useState([]);
    const url = "http://127.0.0.1:8000/api/documents/"
    useEffect(() => {
        axios.get(url, {
        }).then(response => {
            setDocs(response.data)
        })
    }, [])

    return(
        <div className='documents__block'>
            <div className='documents__title'>
                Правовая информация
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