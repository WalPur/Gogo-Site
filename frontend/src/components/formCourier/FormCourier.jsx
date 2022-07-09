import "./FormCourier.css"

import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Input from 'react-phone-number-input/input'
import Select from 'react-select';
import axios from "axios";
import russia from "./ru.json";
import kazakhstan from "./kz.json";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { validate } from 'react-email-validator';

function FormCourier() {
    const { t } = useTranslation();

    const [country, setCountry] = useState("RUSSIA");
    const [city, setCity] = useState("Москва");
    const [last_name, setLastName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("WALK");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    });

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

    function checkEmail(value) {
        setEmail(value);
        if (validate(value)) {
            setIsEmailValid(true)
        } 
    }

    return (
        <div className="FormCourier Courier">
            <div className="Form_container">
                <div className="formTitle">
                    <a name={"form"}></a>
                    {t("courierForm.title")}
                </div>
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>{t("courierForm.fields.country.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Select required value={country} onChange={e => setCountry(e.target.value)} name="country">
                            <option value="RUSSIA">{t("courierForm.fields.country.options.1")}</option>
                            <option value="KAZAKHSTAN">{t("courierForm.fields.country.options.2")}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasisCourierCity">
                        <Form.Label>{t("courierForm.fields.city.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Select
                            options={country == "RUSSIA" ? russia : kazakhstan}
                            required
                            onChange={opt => setCity(opt.value)}
                            placeholder={t("courierForm.fields.city.placeholder")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCourierSurname">
                        <Form.Label>{t("courierForm.fields.lastName.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Control required type="text" value={last_name} onChange={e => setLastName(e.target.value)} name="courierLastName" placeholder={t("courierForm.fields.lastName.placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCourierName">
                        <Form.Label>{t("courierForm.fields.firstName.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Control required type="text" value={first_name} onChange={e => setFirstName(e.target.value)} name="courierFirstName" placeholder={t("courierForm.fields.firstName.placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCourierPatronymic">
                        <Form.Label>{t("courierForm.fields.middleName.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Control required type="text" value={middle_name} onChange={e => setMiddleName(e.target.value)} name="courierMiddleName" placeholder={t("courierForm.fields.middleName.placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCourierNumber">
                        <Form.Label>{t("courierForm.fields.number.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Input placeholder={t("courierForm.fields.number.placeholder")} pattern=".{16}" maxlength="16" value={number} onChange={setNumber} className="form-control" international country="RU" withCountryCallingCode id="formBasicCourierNumber"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCourierEmail">
                        <Form.Label>{t("courierForm.fields.email.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Control required type="email" value={email} onChange={e => checkEmail(e.target.value)} className={isEmailValid ? 'is-valid' : 'is-invalid'} name="courierEmail" placeholder={t("courierForm.fields.email.placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCourierType">
                        <Form.Label>{t("courierForm.fields.courierType.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Select required value={type} onChange={e => setType(e.target.value)} name="courierType">
                            <option value="WALK">{t("courierForm.fields.courierType.options.1")}</option>
                            <option value="BYCYCLE">{t("courierForm.fields.courierType.options.2")}</option>
                            <option value="MOTORBIKE">{t("courierForm.fields.courierType.options.3")}</option>
                            <option value="CAR">{t("courierForm.fields.courierType.options.4")}</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {t("courierForm.submit")}
                    </Button>
                    <div className="agreement">
                        {t("courierForm.agreement")}
                    </div>
                </Form>
            </div>
        </div>
    )
}


export default FormCourier;  