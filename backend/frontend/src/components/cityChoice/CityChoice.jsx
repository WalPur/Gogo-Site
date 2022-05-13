import "bootstrap-select";

import regions from "./data_file.json";

function CityChoice(){
    return (
        <select class="selectpicker" data-live-search="true">
                {regions.map(region => (
                    <optgroup label={region.region}>
                        {region.cities.map(city => (
                            <option value={city}>
                                {city}
                            </option>
                        ))}
                    </optgroup>
                ))}
        </select>
      
    )
}

export default CityChoice;