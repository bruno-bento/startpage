import CardDate from '../Cards/CardDate/CardDate';
import CardWeather from '../Cards/CardWeather/CardWeather';
import './DataWeather.css';

const DataWeather = () => {
    return(
        <div>
            <CardDate/>
            <CardWeather/>
        </div>
    );

}

export default DataWeather;