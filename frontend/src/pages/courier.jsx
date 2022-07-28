import {
    General,
    Wait,
    HowBeCourier,
    CourierTypes,
    CourierSlider,
    Calculator,
} from "../components";

function Courier() {
    return(
        <div>
            <General/>
            <Wait/>
            <HowBeCourier/>
            <CourierTypes/>
            <CourierSlider/>
            <Calculator/>
        </div>
    );
}
  
export default Courier;