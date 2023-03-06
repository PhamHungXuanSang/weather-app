import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from './components/Weather';

export default function App() {
    const REACT_PUBLIC_WEATHER_KEY = 'aa7abbe550f01a786e23af2af90538f3';
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_PUBLIC_WEATHER_KEY}`)
            .then((response) => {
                setWeather(response.data);
            });
    };

    if (Object.getOwnPropertyNames(weather).length === 0) {
    }

    return (
        <>
            <div className="bg-black/20 w-full h-screen absolute top-0 left-0 -z-10"></div>
            <div className="w-full h-screen">
                <img
                    className="w-full h-full object-cover"
                    src="https://static.vecteezy.com/system/resources/thumbnails/007/515/187/original/timelapse-of-beautiful-blue-sky-in-pure-daylight-with-puffy-fluffy-white-clouds-background-amazing-flying-through-beautiful-thick-fluffy-clouds-nature-and-cloudscape-concept-free-video.jpg"
                    alt="weather-img"
                />
            </div>
            {/* Search bar */}
            <div className="fixed top-6 left-0 w-full h-[38px]">
                <form className="flex items-center justify-between mx-auto max-w-[300px] w-full h-full border-2 rounded-lg border-solid border-slate-300 bg-transparent">
                    <div className="flex-1 h-full">
                        <input
                            onSubmit={handleSearch}
                            onChange={(e) => setCity(e.target.value)}
                            className="focus:outline-none caret-white text-slate-300 w-full h-full px-4 bg-transparent"
                            type={'text'}
                            placeholder={'Search City'}
                        />
                    </div>
                    <button onClick={handleSearch} className="text-slate-300 mr-2 hover:opacity-30">
                        <BsSearch className="text-2xl" size={'24'} />
                    </button>
                </form>
            </div>
            {Object.getOwnPropertyNames(weather).length === 0 && (
                <div className="fixed top-20 w-full h-[90vh]">
                    <p className="max-w-[300px] w-full mx-auto text-slate-300 text-3xl text-center mt-12">
                        Haven't searched any city
                    </p>
                </div>
            )}
            {/* Weather */}
            {weather.main && (
                <div className={'fixed top-16 w-full h-[90vh]'}>
                    <Weather data={weather} />
                </div>
            )}
        </>
    );
}
