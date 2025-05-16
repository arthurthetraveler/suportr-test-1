import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-06-21') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'), 
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
               minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

  if (+new Date('2025-06-21') > +new Date()) {
    /*const timeLeft = formatTime();*/ // Study if this line can be useful for the code later // 
    return (
      <div className="bg-[#000449] text-white p-0">
        <p className="text-center font-extrabold">PRESALE STARTS IN</p>
        <div className="flex justify-around mt-0 gap-10">
          <div className="text-center">
            <p className="font-extrabold">{timeLeft.days}</p>
            <p className="text-sm">DAYS</p>
          </div>
          <div className="text-center">
            <p className="font-extrabold">{timeLeft.hours}</p>
            <p className="text-sm">HOURS</p>
          </div>
          <div className="text-center">
            <p className="font-extrabold">{timeLeft.minutes}</p>
            <p className="text-sm">MINUTES</p>
          </div>
          <div className="text-center">
            <p className="font-extrabold">{timeLeft.seconds}</p>
            <p className="text-sm">SECONDS</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#000449] text-white p-4 text-center">
        <p>Presale has started!</p>
      </div>
    );
  }
};

export default CountdownTimer;