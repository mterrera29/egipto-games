import { useState, useEffect } from 'react';
import reloj from '../Images/reloj-de-arena.png';

const Time = ({ win, isReload }) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(true);

  const formatTimeUnit = (timeUnit) => {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
  };
  const minutos = time.minutes;
  const segundos = formatTimeUnit(time.seconds);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          return { minutes: newMinutes, seconds: newSeconds % 60 };
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handlePauseResume = () => {
    setIsRunning(false);
  };
  const handlePauseRun = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setTime({ minutes: 0, seconds: 0 });
    setIsRunning(true);
  };

  useEffect(() => {
    const saveLocal = () => {
      localStorage.setItem('minutos', JSON.stringify(`${minutos}`));
      localStorage.setItem('segundos', JSON.stringify(`${segundos}`));
    };
    if (win) {
      handlePauseResume();
      saveLocal();
    } else {
      handlePauseRun();
    }
  }, [win, minutos, segundos]);

  useEffect(() => {
    handleReset();
    console.log('reset!');
  }, [isReload]);

  return (
    <div className='tiempo'>
      <h4
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img style={{ width: '25px' }} src={reloj} alt='' />
        {time.minutes}:{formatTimeUnit(time.seconds)}
      </h4>
    </div>
  );
};

export default Time;
