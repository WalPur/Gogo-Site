import {
    General,
    Wait,
    HowBeCourier,
    CourierTypes,
    CourierSlider,
    Calculator,
    CourierFaq,
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
            <CourierFaq/>
        </div>
    );
}
  
export default Courier;