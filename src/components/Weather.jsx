import React from 'react';

const Weather = ({ data }) => {
    console.log(data);

    const exchangeDegree = (K) => {
        return K - 273.15;
    };

    return (
        <div className="w-full h-full">
            <div className="max-w-[300px] mx-auto flex justify-between items-center mt-12 text-slate-300">
                <p className="text-2xl">{data.weather[0].main}</p>
                <p className="text-8xl">{exchangeDegree(data.main.temp).toFixed(0)}&#176;C</p>
            </div>
        </div>
    );
};

export default Weather;
