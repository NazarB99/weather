import axios from 'axios';
import {CITIES} from "../constnts";
import {SET_WEATHER} from './types';

export const getMainWeather = () => async dispatch => {
    let weather = [];
    CITIES.map(city => {
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=a0559b6caf2f4eceaf25fa209d20c0fc&lang=en`)
            .then(res => {
                weather.push(res.data);
                dispatch({type:SET_WEATHER,payload:weather});
                console.log(weather);
            })
            .catch(err => console.log(err))
    });
};