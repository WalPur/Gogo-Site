import './Documents.css'
// TODO: сделать так, чтобы эти документы были получены с бекенда и в соответствии им генерились ссылки на них
function Documents(){
    return(
        <div className='documents__block'>
            <div className='documents__title'>
                Правовая информация
            </div>
            <div className='documents__documents'>
                <ol>
                    <li>
                        <a href="#" download="">Документ</a>
                    </li>
                    <li>
                        <a href="#" download="">Документ</a>
                    </li>
                    <li>
                        <a href="#" download="">Документ</a>
                    </li>
                    <li>
                        <a href="#" download="">Документ</a>
                    </li>
                    <li>
                        <a href="#" download="">Документ</a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Documents;