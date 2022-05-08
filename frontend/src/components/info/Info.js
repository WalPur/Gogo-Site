import './Info.css'
import roadmap from './roadmap.svg'

function Info(){
    return(
        <div className='info__block block'>
            <div className='info__title caption'>
                3 дня до первого заказа
            </div>
            <div className='content'>
                <img src={roadmap} alt='roadmap' />
            </div>
        </div>
    )
}

export default Info;