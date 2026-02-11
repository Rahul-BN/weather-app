import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error , setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getweatherInfo = async () => {
        try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
                let responseJson = await response.json();
                let result = {
                    city : city,
                    temp : responseJson.main.temp,
                    temp_min : responseJson.main.temp_min,
                    temp_max : responseJson.main.temp_max,
                    humidity : responseJson.main.humidity,
                    feelslike : responseJson.main.feels_like,
                    weather : responseJson.weather[0].description,
                }
                console.log(result);
                return result
        } catch (err) {
            throw err;
        }
       
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    } 

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getweatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
        
    }

    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>

                {error && <p style={{color : "red"}}>No such place exists! Please check the city name.</p>}
            </form>
        </div>
    )
}