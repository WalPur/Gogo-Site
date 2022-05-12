import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./idPage.css"



function IdPage() {
    const navigate = useNavigate();
    const params = useParams();
    const prodId = params.id;

    function goToMainPage() {
        navigate("/")
    }

    return (
        <div className="idPage">
            <div className="gotId">
                <h2>ЗАЯВКА ОТПРАВЛЕНА!</h2>
                <p>Ваш номер заявки - #{prodId}</p>
            </div>
            <div className="goToMain">
                <p>
                    Мы свяжемся с Вами в течении 24 часов после проверки ваших данных
                </p>
                <Button variant="primary" onClick={goToMainPage}>
                    НА ГЛАВНУЮ
                </Button>
            </div>
            
        </div>
    );
  }
  
export default IdPage;
