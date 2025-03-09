import React, { useState, useEffect } from "react";
import Button from "./button";

interface TimerProps {
  maxTime: number;
  label: string;
  activeColor?: string;
  inactiveColor?: string;
}

const Timer: React.FC<TimerProps> = ({
  maxTime,
  label,
  activeColor = "#ff6b00",
  inactiveColor = "#444444",
}) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time < maxTime) {
      timer = setTimeout(() => setTime(time + 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, time, maxTime]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const totalBars = maxTime + 1;
  const step = maxTime / 3;
  const markers = Array.from({ length: 4 }, (_, i) => Math.round(i * step));

  return (
    <div className="flex flex-col bg-black rounded-4xl p-6 w-75 h-36 shadow-xl my-4">
      {/* Timer bar container */}
      <div className="w-full flex flex-col items-center mt-2">
        {/* Marker numbers */}
        <div className="flex justify-between text-xs px-2 w-full">
          {markers.map((marker, index) => (
            <span
              key={index}
              className="transition-all duration-500 text-xs font-semibold"
              style={{
                color: marker <= time ? activeColor : inactiveColor,
              }}
            >
              {marker}
            </span>
          ))}
        </div>

        {/* Actual timer bars */}
        <div className="flex w-full h-8 items-center">
          {Array.from({ length: totalBars }).map((_, index) => {
            const isBlurred = index < 4 || index >= totalBars - 4;
            return (
              <div
                key={index}
                className="transition-all duration-500 rounded-full"
                style={{
                  backgroundColor: index <= time ? activeColor : inactiveColor,
                  opacity: index <= time ? 1 : 0.6,
                  width: `${120 / totalBars}%`,
                  height: "70%",
                  margin: "0 1.5px",
                  filter: `blur(${isBlurred ? 3 : 0}px)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between align-middle mx-3">
        <span className="text-2xl font-normal" style={{ color: activeColor }}>
          {time}s
        </span>

        <Button
          className="relative w-7 h-7 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform ml-5"
          onClick={handleStartStop}
          hover={false}
          color="bg-amber-900"
          icon={
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: activeColor }}
            ></div>
          }
        />

        <span className="text-lg font-normal" style={{ color: inactiveColor }}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default Timer;
