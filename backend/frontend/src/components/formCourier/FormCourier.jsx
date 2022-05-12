import "./FormCourier.css"

import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormCourier() {
    const [city, setCity] = useState("");
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("WALK");

    const navigate = useNavigate();

    function submitForm() {
        const data = JSON.stringify({
            city: city,
            last_name: surname,
            first_name: name,
            middle_name: patronymic,
            number: number,
            email: email,
            type: type,
        });
        const headers = {
            'Content-Type': 'application/json'
        }
        const url = "http://127.0.0.1:8000/api/courier/"
        axios.post(url, data, { headers })
            .then(response => navigate("/recieved/" + response.data.id))
    }

    return (
        <div className="FormCourier Courier">
            <div className="formTitle">
                Заявление на курьера
            </div>
            <Form.Group className="mb-3" controlId="formBasisCourierCity">
                <Form.Label>Город</Form.Label>
                <Form.Control required type="text" value={city} onChange={e => setCity(e.target.value)} name="courierCity" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCourierSurname">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control required type="text" value={surname} onChange={e => setSurname(e.target.value)} name="courierSurname" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCourierName">
                <Form.Label>Имя</Form.Label>
                <Form.Control required type="text" value={name} onChange={e => setName(e.target.value)} name="courierName" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCourierPatronymic">
                <Form.Label>Отчество</Form.Label>
                <Form.Control required type="text" value={patronymic} onChange={e => setPatronymic(e.target.value)} name="courierPatronymic" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCourierNumber">
                <Form.Label>Номер телефона</Form.Label>
                <Form.Control required type="text" value={number} onChange={e => setNumber(e.target.value)} name="courierNumber" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCourierEmail">
                <Form.Label>Электроннная почта</Form.Label>
                <Form.Control required type="email" value={email} onChange={e => setEmail(e.target.value)} name="courierEmail" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCourierType">
                <Form.Label>Тип курьеров</Form.Label>
                <Form.Select required value={type} onChange={e => setType(e.value)} name="courierType">
                    <option disabled>Пожалуйста, выберите</option>
                    <option value="WALK">Пеший</option>
                    <option value="BYCYCLE">Велосипед</option>
                    <option value="MOTORBIKE">Мотоциклист</option>
                    <option value="CAR">Автомобилист</option>
                </Form.Select>
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


export default FormCourier;  