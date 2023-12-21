import { useState } from "react";

export const WeatherApp = () => {

    const urlBase ='https://api.openweathermap.org/data/2.5/weather'
    const apiKey='a432799e146b35ab1b431764583fd210'
    const diferenciaKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const[dataClima,setDataClima]=useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(ciudad.length > 0) fetchClima()
    }

const fetchClima = async () => {
    try {
        const response= await fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        const data= await response.json()
        console.log(data)
        setDataClima(data)
    } catch (error) {
        console.error('Ocurrio el siguiente problema: ', error)
    }
}

    return (
        <div className="container">
            <h1>Aplicacion de Clima</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura:{parseInt(dataClima?.main?.temp - diferenciaKelvin)}*C </p>
                        <img src={` https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                        
                    </div>
                )
            }
        </div>
    )
}

