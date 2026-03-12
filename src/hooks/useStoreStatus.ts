"use client";
import { useEffect, useState } from "react";

export default function useStoreStatus(openingHours?: any[] | null) {
  const [info, setInfo] = useState({
    status: "Lade...",
    color: "bg-muted", // Standardfarbe grau
    timeRange: "11:30 — 22:00",
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();
      const currentTime = hour + min / 60;

      let open = 11.5;
      let close = 22;
      let isClosedToday = false;

      if (openingHours && openingHours.length > 0) {
        const todayHours = openingHours.find(h => h.day_of_week === day);
        if (todayHours) {
          if (todayHours.is_closed) {
            isClosedToday = true;
          } else if (todayHours.open_time && todayHours.close_time) {
            const [oH, oM] = todayHours.open_time.split(':').map(Number);
            const [cH, cM] = todayHours.close_time.split(':').map(Number);
            open = oH + (oM || 0) / 60;
            close = cH + (cM || 0) / 60;
          }
        }
      } else {
        // Fallback to static logic
        if (day === 5 || day === 6) close = 23;
        if (day === 0) {
          open = 12;
          close = 21;
        }
      }

      const formatTime = (t: number) => {
        const h = Math.floor(t);
        const m = Math.round((t - h) * 60);
        return `${h}:${m.toString().padStart(2, '0')}`;
      };

      const timeString = isClosedToday ? "Heute Geschlossen" : `${formatTime(open)} — ${formatTime(close)} Uhr`;

      if (!isClosedToday && currentTime >= open && currentTime < close) {
        setInfo({
          status: "Jetzt Geöffnet",
          color: "bg-success",
          timeRange: timeString,
        });
      } else {
        setInfo({
          status: "Geschlossen",
          color: "bg-error",
          timeRange: timeString,
        });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, [openingHours]);

  return info;
}
