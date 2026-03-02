"use client";
import { useEffect, useState } from "react";

export default function OpeningHoursList() {
  const [dayIndex, setDayIndex] = useState<number | null>(null);

  useEffect(() => {
    // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
    setDayIndex(new Date().getDay());
  }, []);

  // Hilfsfunktion: Prüft ob der aktuelle Tag in die Gruppe fällt
  // Gruppe 1: Mo-Do (1, 2, 3, 4)
  // Gruppe 2: Fr-Sa (5, 6)
  // Gruppe 3: So (0)
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
          11:30 - 22:00
        </span>
      </li>
      <li
        className={`flex justify-between border-b border-border pb-1 transition-colors ${isFrSa ? "text-primary font-bold border-primary/30" : ""}`}
      >
        <span>Fr - Sa:</span>
        <span className={isFrSa ? "text-primary" : "text-foreground"}>
          11:30 - 23:00
        </span>
      </li>
      <li
        className={`flex justify-between transition-colors ${isSo ? "text-primary font-bold" : ""}`}
      >
        <span>So:</span>
        <span className={isSo ? "text-primary" : "text-foreground"}>
          12:00 - 21:00
        </span>
      </li>
    </ul>
  );
}
