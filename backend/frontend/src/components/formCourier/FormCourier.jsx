import "./FormCourier.css"

import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Input from 'react-phone-number-input/input'
import axios from "axios";
import regions from "./data_file.json";
import { useNavigate } from "react-router-dom";

function FormCourier() {
    const [city, setCity] = useState("Москва");
    const [last_name, setLastName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("WALK");
    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        const data = JSON.stringify({
            city: city,
            last_name: last_name,
            first_name: first_name,
            middle_name: middle_name,
            number: number,
            email: email,
            type: type,
        });
        const headers = {
            'Content-Type': 'application/json'
        }
        const url = process.env.REACT_APP_COURIER_URL;
        axios.post(url, data, { headers })
            .then(response => navigate("/recieved/" + response.data.id))
    }

    return (
        <div className="FormCourier Courier">
            <div className="formTitle">
                Заявление на курьера
            </div>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasisCourierCity">
                    <Form.Label>Город <span className="requiredFormStar">*</span></Form.Label>
                    <Form.Select required value={city} onChange={e => setCity(e.target.value)} name="courierCity">
                        {regions.map(region => (
                            <optgroup label={region.region}>
                                {region.cities.map(city => (
                                    <option value={city} key={city}>
                                        {city}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierSurname">
                    <Form.Label>Фамилия <span className="requiredFormStar">*</span></Form.Label>
                    <Form.Control required type="text" value={last_name} onChange={e => setLastName(e.target.value)} name="courierLastName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierName">
                    <Form.Label>Имя <span className="requiredFormStar">*</span></Form.Label>
                    <Form.Control required type="text" value={first_name} onChange={e => setFirstName(e.target.value)} name="courierFirstName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierPatronymic">
                    <Form.Label>Отчество <span className="requiredFormStar">*</span></Form.Label>
                    <Form.Control required type="text" value={middle_name} onChange={e => setMiddleName(e.target.value)} name="courierMiddleName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierNumber">
                    <Form.Label>Номер телефона <span className="requiredFormStar">*</span></Form.Label>
                    <Input placeholder="пример" pattern=".{16}" value={number} onChange={setNumber} className="form-control" international country="RU" withCountryCallingCode id="formBasicCourierNumber"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierEmail">
                    <Form.Label>Электроннная почта <span className="requiredFormStar">*</span></Form.Label>
                    <Form.Control required type="email" value={email} onChange={e => setEmail(e.target.value)} name="courierEmail" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierType">
                    <Form.Label>Тип курьеров <span className="requiredFormStar">*</span></Form.Label>
                    <Form.Select required value={type} onChange={e => setType(e.target.value)} name="courierType">
                        <option value="WALK">Пеший</option>
                        <option value="BYCYCLE">Велосипед</option>
                        <option value="MOTORBIKE">Мотоциклист</option>
                        <option value="CAR">Автомобилист</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Принять
                </Button>
                <div className="agreement">
                    Нажимая на любую кнопку вы соглашаетесь с условиями пользования и политикой конфиденциальности
                </div>
            </Form>
        </div>
    )
}


export default FormCourier;  