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
            <Form>
                <Form.Group className="mb-3" controlId="formBasisCourierCity">
                    <Form.Label>Город</Form.Label>
                    <Form.Control type="text" value={this.state.courierCity} onChange={this.handleInputChange} name="CourierCity" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierSurname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" value={this.state.courierSurname} onChange={this.handleInputChange} name="CourierSurname" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" value={this.state.courierName} onChange={this.handleInputChange} name="CourierName" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierPatronymic">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control type="text" value={this.state.courierPatronymic} onChange={this.handleInputChange} name="CourierPatronymic" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierNumber">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control type="text" value={this.state.courierNumber} onChange={this.handleInputChange} name="CourierNumber" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierEmail">
                    <Form.Label>Электроннная почта</Form.Label>
                    <Form.Control type="email" value={this.state.courierEmail} onChange={this.handleInputChange} name="CourierEmail" placeholder="пример" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourierType">
                    <Form.Label>Тип курьеров</Form.Label>
                    <Form.Select value={this.state.courierType} onChange={this.handleInputChange} name="CourierType">
                        <option disabled>Пожалуйста, выберите</option>
                        <option value="1">Пеший</option>
                        <option value="2">Велосипед</option>
                        <option value="3">Мотоциклист</option>
                        <option value="4">Автомобилист</option>
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
  