import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


class FormPartner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: "",
            orgCity: "",
            fullName: "",
            orgNumber: "",
            orgEmail: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify({
            org_name: event.target[0].value,
            city: event.target[1].value,
            full_name: event.target[2].value,
            org_number: event.target[3].value,
            org_email: event.target[4].value
        });
        const response = fetch('http://127.0.0.1:8000/api/partner/', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
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
            <div className="FormPartner">
                <div className="formTitle">
                    Заявление на подключение заведения
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicOrgName">
                        <Form.Label>Название организации</Form.Label>
                        <Form.Control required type="text" value={this.state.orgName} onChange={this.handleInputChange} name="orgName" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgCity">
                        <Form.Label>Город</Form.Label>
                        <Form.Control required type="text" value={this.state.orgCity} onChange={this.handleInputChange} name="orgCity" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFullName">
                        <Form.Label>ФИО ответственного</Form.Label>
                        <Form.Control required type="text" value={this.state.fullName} onChange={this.handleInputChange} name="fullName" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgNumber">
                        <Form.Label>Номер ответственного</Form.Label>
                        <Form.Control required type="text" value={this.state.orgNumber} onChange={this.handleInputChange} name="orgNumber" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Электроннная почта</Form.Label>
                        <Form.Control required type="email" value={this.state.orgEmail} onChange={this.handleInputChange} name="orgEmail" placeholder="пример" />
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
  
  export default FormPartner;
  