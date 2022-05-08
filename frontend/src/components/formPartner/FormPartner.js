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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicOrgName">
                        <Form.Label>Название организации</Form.Label>
                        <Form.Control type="text" value={this.state.orgName} onChange={this.handleInputChange} name="orgName" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgCity">
                        <Form.Label>Город</Form.Label>
                        <Form.Control type="text" value={this.state.orgCity} onChange={this.handleInputChange} name="orgCity" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFullName">
                        <Form.Label>ФИО ответственного</Form.Label>
                        <Form.Control type="text" value={this.state.fullName} onChange={this.handleInputChange} name="fullName" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOrgNumber">
                        <Form.Label>Номер ответственного</Form.Label>
                        <Form.Control type="text" value={this.state.orgNumber} onChange={this.handleInputChange} name="orgNumber" placeholder="пример" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Электроннная почта</Form.Label>
                        <Form.Control type="email" value={this.state.orgEmail} onChange={this.handleInputChange} name="orgEmail" placeholder="пример" />
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
  