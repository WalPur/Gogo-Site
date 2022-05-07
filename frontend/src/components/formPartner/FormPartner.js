import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./FormCourier.css"


function FormPartner() {
    return (
      <div className="FormPartner">
          <div className="formTitle">
            Заявление на подключение заведения
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название организации</Form.Label>
                <Form.Control type="text" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Город</Form.Label>
                <Form.Select>
                    <option disabled>Пожалуйста, выберите</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ФИО ответственного</Form.Label>
                <Form.Control type="text" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Номер ответственного</Form.Label>
                <Form.Control type="text" placeholder="пример" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Электроннная почта</Form.Label>
                <Form.Control type="email" placeholder="пример" />
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
  
  export default FormPartner;
  