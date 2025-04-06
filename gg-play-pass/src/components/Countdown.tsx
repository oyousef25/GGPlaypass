import { useEffect, useState } from "react";
import '../Countdown.css'; // Import the custom CSS for countdown styles

const Countdown = () => {
  const calculateTimeLeft = (): Record<string, number> => {
    const targetDate = new Date("2025-05-01T00:00:00");
    const difference = +targetDate - +new Date();

    let timeLeft: Record<string, number> = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-unit mx-3">
          <div className="display-4 font-weight-bold">{value}</div>
          <div className="small">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;