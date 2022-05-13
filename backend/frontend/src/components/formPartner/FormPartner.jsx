import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import regions from "./data_file.json";
import { useNavigate } from "react-router-dom";

function FormPartner() {
    const [org_name, setOrg_name] = useState("");
    const [city, setCity] = useState("");
    const [full_name, setFull_name] = useState("");
    const [org_number, setOrg_number] = useState("");
    const [org_email, setOrg_email] = useState("");

    const navigate = useNavigate();

    function submitForm() {
        const data = JSON.stringify({
            org_name: org_name,
            city: city,
            full_name: full_name,
            org_number: org_number,
            org_email: org_email,
        });
        const headers = {
            'Content-Type': 'application/json'
        }
        const url = process.env.REACT_APP_PARTNER_URL;
        axios.post(url, data, { headers })
            .then(response => navigate("/recieved/" + response.data.id))
        
    }

    return (
        <div className="FormPartner Courier">
                <div className="formTitle">
                    Заявление на подключение заведения
                </div>
                <Form.Group className="mb-3" controlId="formBasicOrgName">
                    <Form.Label>Название организации</Form.Label>
                    <Form.Control required type="text" value={org_name} onChange={e => setOrg_name(e.target.value)} name="orgName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicOrgCity">
                    <Form.Label>Город</Form.Label>
                    <Form.Select required value={city} onChange={e => setCity(e.target.value)} data-live-search="true" className="selectpicker" name="courierCity">
                        {regions.map(region => (
                            <optgroup label={region.region}>
                                {region.cities.map(city => (
                                    <option value={city}>
                                        {city}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>ФИО ответственного</Form.Label>
                    <Form.Control required type="text" value={full_name} onChange={e => setFull_name(e.target.value)} name="fullName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicOrgNumber">
                    <Form.Label>Номер ответственного</Form.Label>
                    <Form.Control required type="text" value={org_number} onChange={e => setOrg_number(e.target.value)} name="orgNumber" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Электроннная почта</Form.Label>
                    <Form.Control required type="email" value={org_email} onChange={e => setOrg_email(e.target.value)} name="orgEmail" placeholder="пример" />
                </Form.Group>
                <Button variant="primary" onClick={submitForm}>
                    Принять
                </Button>
                <div className="agreement">
                    Нажимая на любую кнопку вы соглашаетесь с условиями пользования и политикой конфиденциальности
                </div>
        </div>
    )
}
  
export default FormPartner;
  