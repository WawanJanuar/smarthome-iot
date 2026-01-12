"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ModeModal({ open, onClose }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!open) return;
    setIsDark(document.body.classList.contains("theme-dark"));
  }, [open]);

  function toggleTheme() {
    const nextDark = !document.body.classList.contains("theme-dark");
    document.body.classList.toggle("theme-dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDark(nextDark);
    onClose();
  }

  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal modeModal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modalClose" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <div className="modeTitle">{isDark ? "Dark Mode" : "Light Mode"}</div>

        <button className="modeLink" type="button" onClick={toggleTheme}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}
