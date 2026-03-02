"use client";
import { useEffect, useState } from "react";

export default function useStoreStatus() {
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

      if (day === 5 || day === 6) close = 23;
      if (day === 0) {
        open = 12;
        close = 21;
      }

      const timeString = `${open === 11.5 ? "11:30" : "12:00"} — ${close}:00 Uhr`;

      if (currentTime >= open && currentTime < close) {
        // HIER: Nutzt jetzt die Variable 'success' statt green-500
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
  }, []);

  return info;
}
