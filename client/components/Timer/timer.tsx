import React, { useEffect, useState } from 'react';

type TimerProps = {
  seconds: number;
  onEnd?: () => void;
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`
}

export const Timer = ({ seconds, onEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => formatTime(seconds));
  const [timeWarning, setTimeWarning] = useState(false);

  useEffect(() => {
    let remaining = seconds;
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
  }, [seconds, onEnd]);

  const color = timeWarning ? 'text-red' : 'text-primary';
  return <span className={`text-2xl ${color}`}>{timeLeft}</ span>;
}
