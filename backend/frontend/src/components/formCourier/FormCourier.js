import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./FormCourier.css"


class FormCourier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courierCity: "",
            courierSurname: "",
            courierName: "",
            courierPatronymic: "",
            courierNumber: "",
            courierEmail: "",
            courierType: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify({
            city: event.target[0].value,
            surname: event.target[1].value,
            name: event.target[2].value,
            patronymic: event.target[3].value,
            number: event.target[4].value,
            email: event.target[5].value,
            type: event.target[6].value
        });
        console.log(data)
        fetch('http://127.0.0.1:8000/api/courier/', {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'application/json'
        }
        }).catch(error => {
            console.log(error);
        });
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    render () {
        return (
        <div className="FormCourier">
            <div className="formTitle">
                Заявление на курьера
            </div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasisCourierCity">
                    <Form.Label>Город</Form.Label>
                    <Form.Control required type="text" value={this.state.courierCity} onChange={this.handleInputChange} name="courierCity" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierSurname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control required type="text" value={this.state.courierSurname} onChange={this.handleInputChange} name="courierSurname" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control required type="text" value={this.state.courierName} onChange={this.handleInputChange} name="courierName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierPatronymic">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control required type="text" value={this.state.courierPatronymic} onChange={this.handleInputChange} name="courierPatronymic" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierNumber">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control required type="text" value={this.state.courierNumber} onChange={this.handleInputChange} name="courierNumber" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierEmail">
                    <Form.Label>Электроннная почта</Form.Label>
                    <Form.Control required type="email" value={this.state.courierEmail} onChange={this.handleInputChange} name="courierEmail" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierType">
                    <Form.Label>Тип курьеров</Form.Label>
                    <Form.Select required value={this.state.courierType} onChange={this.handleInputChange} name="courierType">
                        <option disabled>Пожалуйста, выберите</option>
                        <option value="WALK">Пеший</option>
                        <option value="BYCYCLE">Велосипед</option>
                        <option value="MOTORBIKE">Мотоциклист</option>
                        <option value="CAR">Автомобилист</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Принять
                </Button>
                </Form>
                <div className="agreement">
                    Нажимая на любую кнопку вы соглашаетесь с условиями пользования и политикой конфиденциальности
                </div>
        </div>
        );
    }
}
  
  export default FormCourier;
  