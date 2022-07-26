import {
    General,
    Wait,
    HowBeCourier,
    CourierTypes,
    CourierSlider,
} from "../components";

function Courier() {
    return(
        <div>
            <General/>
            <Wait/>
            <HowBeCourier/>
            <CourierTypes/>
            <CourierSlider/>
        </div>
    );
}
  
export default Courier;