import "./idPage.css"

import { useNavigate, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function IdPage() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const params = useParams();
    const prodId = params.id;

    function goToMainPage() {
        navigate("/")
    }

    return (
        <div className="idPage Recieved">
            <div className="gotId">
                <h2>{t("id.title")}</h2>
                <p>{t("id.text")} - #{prodId}</p>
            </div>
            <div className="goToMain">
                <p>
                    {t("id.callback")}
                </p>
                <Button variant="primary" onClick={goToMainPage}>
                    {t("id.goto")}
                </Button>
                <Button variant="primary" size="sm" onClick={goToMainPage}>
                    {t("id.goto")}
                </Button>
            </div>
        </div>
    );
  }
  
export default IdPage;
