import { useState, useEffect } from 'react';

type TimerProps = {
  time: number;
  onEnd?: () => void;
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`
}

export const Timer = ({ time, onEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => formatTime(time));
  const [timeWarning, setTimeWarning] = useState(false);

  useEffect(() => {
    let remaining = time;
    const id = setInterval(() => {
      remaining -= 1;
      if (remaining < 10) setTimeWarning(true);
      if (remaining <= 0) {
        clearInterval(id);
        onEnd && onEnd();
      }
      setTimeLeft(formatTime(remaining))
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  const color = timeWarning ? 'text-red' : 'text-primary';
  return <span className={`text-2xl ${color}`}>{timeLeft}</ span>;
}
