import { useEffect, useState } from "react";

const REG_DATE = new Date(new Date().getFullYear(), 7, 20, 0, 0, 0, 0); // August 20, midnight
const MS_IN_DAY = 1000 * 60 * 60 * 24;

function getTimeLeft() {
  const now = new Date();
  const diff = REG_DATE.getTime() - now.getTime();
  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, percent: 100 };
  const days = Math.floor(diff / MS_IN_DAY);
  const hours = Math.floor((diff % MS_IN_DAY) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // Progress percent (from 1 month before REG_DATE to REG_DATE)
  const countdownStart = new Date(REG_DATE);
  countdownStart.setMonth(REG_DATE.getMonth() - 2);
  countdownStart.setHours(0, 0, 0, 0);
  const total = REG_DATE.getTime() - countdownStart.getTime();
  const elapsed = now.getTime() - countdownStart.getTime();
  const percent = Math.min(
    100,
    Math.max(0, Math.round((elapsed / total) * 100))
  );
  return { days, hours, minutes, seconds, percent };
}

export function CountdownToRegistration() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Google Calendar link
  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=PINNACLE+Registration+Opens&dates=${REG_DATE.getFullYear()}08${(
    "0" + REG_DATE.getDate()
  ).slice(-2)}T000000Z/${REG_DATE.getFullYear()}08${(
    "0" + REG_DATE.getDate()
  ).slice(
    -2
  )}T235900Z&details=PINNACLE+Hackathon+registration+opens!&sf=true&output=xml`;

  const isOpen =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  // Circular progress bar SVG
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = isOpen ? 1 : timeLeft.percent / 100;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-2">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
          <circle
            stroke="#222"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8BE8FF" />
              <stop offset="50%" stopColor="#9D71FD" />
              <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex flex-col items-center justify-center text-white font-mono-rubik text-lg">
          {isOpen ? "OPEN" : timeLeft.days}
          <span className="text-xs text-white/60">{isOpen ? "" : "days"}</span>
        </span>
      </div>
      <span className="font-mono-rubik text-lg sm:text-2xl bg-gradient-to-r from-[#B4FF00] via-[#5271FF] to-[#7C4DFF] text-transparent bg-clip-text">
        {isOpen ? "Registration is open!" : "Registration opens soon"}
      </span>
      <a
        href={googleCalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block px-4 py-2 rounded-full bg-[#5271FF] hover:bg-[#7C4DFF] text-white font-mono-rubik text-xs shadow-lg transition-all"
      >
        Add to Google Calendar
      </a>
    </div>
  );
}
