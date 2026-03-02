"use client";
import { useEffect, useRef, useState } from "react";

export default function useScrollSpy(categories: any[]) {
  // Initialer State
  const firstCatName =
    typeof categories[0] === "string" ? categories[0] : categories[0].name;
  const [activeCategory, setActiveCategory] = useState(firstCatName);
  const isScrollingRef = useRef(false);

  // Observer für das Scrollen
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-220px 0px -70% 0px", // Deine originalen Werte
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    categories.forEach((cat) => {
      const name = typeof cat === "string" ? cat : cat.name;
      const element = document.getElementById(name);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [categories]);

  // Funktion zum Scrollen bei Klick
  const scrollToCategory = (id: string) => {
    isScrollingRef.current = true;
    setActiveCategory(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 210; // Header Höhe Offset
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      // Timeout, damit der Observer während des Scrollens nicht feuert
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return { activeCategory, scrollToCategory };
}
