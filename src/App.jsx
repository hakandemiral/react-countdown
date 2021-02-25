import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Countdown from './components/Countdown';

const App = () => {
  const [date, setDate] = useState(() => {
    const localDate = localStorage.getItem("date");
    return localDate
    ? moment(JSON.parse(localDate))
    : moment().add(10, 'hours');
  });

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    startCount();
  }, [date])


  const startCount = () => {
    const count = setInterval(() => {
      const now = moment(),
            distance = date - now,
            hours = moment.duration(distance).hours(),
            minutes = moment.duration(distance).minutes(),
            seconds = moment.duration(distance).seconds();
      
      if(distance < 0){
        clearInterval(count)
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        localStorage.setItem("date", JSON.stringify(date));
      }

    },1000)
  }

  return (
    <Countdown hours={hours} minutes={minutes} seconds={seconds} />
  );
};

export default App;
