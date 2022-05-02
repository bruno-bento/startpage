import style from './CardDate.module.scss';
import {useState, useEffect} from 'react';
const CardDate = () => {
    const [hours, setHours] = useState('');
    const [month, setMounth] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');

    useEffect(() => {
        const interval = setInterval(() =>{ 
            setHours(new Date().toLocaleString("pt-BR", {hour: '2-digit', minute:'2-digit', second:'2-digit'}));
            setMounth(new Date().toLocaleString("pt-BR", {month: '2-digit', day:'2-digit'}));
            setDayOfWeek(new Date().toLocaleString("pt-BR", {weekday: 'long'}));
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    return (
        <div className={`card ${style.cardDate}`}>
            <h1>{hours}</h1>    
            <p>{month}</p>
            <p>{dayOfWeek}</p>
        </div>
    );
}

export default CardDate;