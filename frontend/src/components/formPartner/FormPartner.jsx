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

function FormPartner() {
    const { t } = useTranslation();

    const [country, setCountry] = useState("RUSSIA");
    const [org_name, setOrg_name] = useState("");
    const [city, setCity] = useState("Москва");
    const [full_name, setFull_name] = useState("");
    const [org_number, setOrg_number] = useState("");
    const [org_email, setOrg_email] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    function submitForm(e) {
        e.preventDefault();
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

    function checkEmail(value) {
        setOrg_email(value);
        if (validate(value)) {
            setIsEmailValid(true)
        } 
    }

    return (
        <div className="FormPartner Courier">
            <div className="Form_container">
                <div className="formTitle">
                    {t("formPartner.title")}
                </div>
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>{t("courierForm.fields.country.label")} <span className="requiredFormStar">*</span></Form.Label>
                        <Form.Select required value={country} onChange={e => setCountry(e.target.value)} name="country">
                            <option value="RUSSIA">{t("courierForm.fields.country.options.1")}</option>
                            <option value="KAZAKHSTAN">{t("courierForm.fields.country.options.2")}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgName">
                        <Form.Label>{t("formPartner.fields.name.label")}</Form.Label>
                        <Form.Control required type="text" value={org_name} onChange={e => setOrg_name(e.target.value)} name="orgName" placeholder={t("formPartner.fields.name.placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgCity">
                        <Form.Label>{t("formPartner.fields.city.label")}</Form.Label>
                        <Select
                            options={country == "RUSSIA" ? russia : kazakhstan}
                            required
                            onChange={opt => setCity(opt.value)}
                            placeholder={t("formPartner.fields.city.placeholder")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFullName">
                        <Form.Label>{t("formPartner.fields.fullName.label")}</Form.Label>
                        <Form.Control required type="text" value={full_name} onChange={e => setFull_name(e.target.value)} name="fullName" placeholder={t("formPartner.fields.fullName.placeholder")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgNumber">
                        <Form.Label>{t("formPartner.fields.number.label")}</Form.Label>
                        <Input placeholder={t("formPartner.fields.number.placeholder")} pattern=".{16}" maxlength="16" value={org_number} onChange={setOrg_number} className="form-control" international country="RU" withCountryCallingCode id="formBasicOrgNumber"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("formPartner.fields.email.label")}</Form.Label>
                        <Form.Control required type="email" value={org_email} onChange={e => checkEmail(e.target.value)} className={isEmailValid ? 'is-valid' : 'is-invalid'} name="orgEmail" placeholder={t("formPartner.fields.email.placeholder")} />
                    </Form.Group>
                    <Button type="submit" variant="primary">
                        {t("formPartner.submit")}
                    </Button>
                </Form>
                <div className="agreement">
                    {t("formPartner.agreement")}
                </div>
            </div>
        </div>
    )
}
  
export default FormPartner;
  