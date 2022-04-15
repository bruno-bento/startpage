import './CardDate.css';
import {useState, useEffect} from 'react';
const CardDate = () => {
    const [day, setDay] = useState('');
    const [month, setMounth] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');

    useEffect(() => {
        const interval = setInterval(() =>{ 
            let fomatedDay = new Date().toLocaleString("pt-BR", {hour: '2-digit', minute:'2-digit', second:'2-digit'});
            setDay(fomatedDay);
            let fomatedMounth = new Date().toLocaleString("pt-BR", {month: '2-digit', day:'2-digit'});
            setMounth(fomatedMounth);
            let fomatedDayOfWeek = new Date().toLocaleString("pt-BR", {weekday: 'long'});
            setDayOfWeek(fomatedDayOfWeek);
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    return (
        <div className="card card-date">
            <h1>{day}</h1>
            <p>{month}</p>
            <p>{dayOfWeek}</p>
        </div>
    );
}

export default CardDate;