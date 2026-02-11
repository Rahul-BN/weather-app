import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1667242418072-64544fb7052f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1496034663057-6245f11be793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMGZhbGxpbmd8ZW58MHx8MHx8fDA%3D"

    return (
        <div className="info-box">
            <div className="cardcontainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                                info.humidity > 80 
                                ? RAIN_URL : info.temp > 11 
                                ? HOT_URL :  COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           <p>{info.city}  {
                                    info.humidity > 80 
                                    ? <ThunderstormIcon /> : info.temp > 11 
                                    ? <SunnyIcon /> : <AcUnitIcon />
                                }
                            </p>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}%</p>
                        <p>Min Temperature : {info.temp_min}&deg;C</p>
                        <p>Max Temperature : {info.temp_max}&deg;C</p>
                        <p>the weather can discribe as <b><i>{info.weather}</i></b> and it feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}