"use client";

type Props = { open: boolean; onClose: () => void };

export default function ModeModal({ open, onClose }: Props) {
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

        <div className="modeTitle">Light Mode</div>
        <div className="modeLink">Switch to Dark Mode</div>
      </div>
    </div>
  );
}
