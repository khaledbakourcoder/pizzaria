"use client";
import { useEffect, useState } from "react";

interface OpeningHoursListProps {
  hours?: any[] | null;
}

export default function OpeningHoursList({ hours }: OpeningHoursListProps) {
  const [dayIndex, setDayIndex] = useState<number | null>(null);

  useEffect(() => {
    // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
    setDayIndex(new Date().getDay());
  }, []);

  // Helper to format hours
  const getHoursForDay = (days: number[]) => {
    if (!hours || hours.length === 0) {
      if (days.includes(1)) return "11:30 - 22:00"; // Mo-Do
      if (days.includes(5)) return "11:30 - 23:00"; // Fr-Sa
      return "12:00 - 21:00"; // So
    }

    const dayHours = hours.filter(h => days.includes(h.day_of_week));
    if (dayHours.length === 0) return "Geschlossen";

    // If all days in group have same time, show once
    const first = dayHours[0];
    const allSame = dayHours.every(h => h.open_time === first.open_time && h.close_time === first.close_time && h.is_closed === first.is_closed);

    if (allSame) {
      if (first.is_closed) return "Geschlossen";
      return `${first.open_time?.substring(0, 5)} - ${first.close_time?.substring(0, 5)}`;
    }

    return "Variiert";
  };

  const isMoDo = dayIndex !== null && dayIndex >= 1 && dayIndex <= 4;
  const isFrSa = dayIndex !== null && (dayIndex === 5 || dayIndex === 6);
  const isSo = dayIndex === 0;

  return (
    <ul className="space-y-3 text-sm text-muted font-light text-[11px]">
      <li
        className={`flex justify-between border-b border-border pb-1 transition-colors ${isMoDo ? "text-primary font-bold border-primary/30" : ""}`}
      >
        <span>Mo - Do:</span>
        <span className={isMoDo ? "text-primary" : "text-foreground"}>
          {getHoursForDay([1, 2, 3, 4])}
        </span>
      </li>
      <li
        className={`flex justify-between border-b border-border pb-1 transition-colors ${isFrSa ? "text-primary font-bold border-primary/30" : ""}`}
      >
        <span>Fr - Sa:</span>
        <span className={isFrSa ? "text-primary" : "text-foreground"}>
          {getHoursForDay([5, 6])}
        </span>
      </li>
      <li
        className={`flex justify-between transition-colors ${isSo ? "text-primary font-bold" : ""}`}
      >
        <span>So:</span>
        <span className={isSo ? "text-primary" : "text-foreground"}>
          {getHoursForDay([0])}
        </span>
      </li>
    </ul>
  );
}
