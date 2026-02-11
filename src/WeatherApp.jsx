import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Bihar",
        feelslike: 13.81,
        temp: 14.05,
        temp_min: 14.05,
        temp_max: 14.05,
        humidity: 72,
        weather: "mist",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign : "center"}}>
            <h2>Weather Application by Rahul</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}