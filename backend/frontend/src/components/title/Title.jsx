import { useEffect } from "react";

function Title(title) {
    useEffect (() => {
        document.title = "GoGo Technology - " + title;
    }, []);
    return;
}

export default Title;