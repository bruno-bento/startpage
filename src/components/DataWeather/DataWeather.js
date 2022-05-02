import CardDate from '../Cards/CardDate/CardDate';
import CardWeather from '../Cards/CardWeather/CardWeather';
import style from './DataWeather.module.scss';

const DataWeather = () => {
    return(
        <div className={style.dataWeather}>
            <CardDate/>
            <CardWeather/>
        </div>
    );

}

export default DataWeather;