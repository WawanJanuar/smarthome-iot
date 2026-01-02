"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function UserModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modalClose" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <div className="userHeader">
          <div className="avatar">🙂</div>
          <div className="userNameRow">
            <div className="userName">Andrew</div>
            <div className="editIcon">✎</div>
          </div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">
            Username <span className="editIcon small">✎</span>
          </div>
          <div className="infoValue">andrew123</div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">
            Address <span className="editIcon small">✎</span>
          </div>
          <div className="infoValue">Jl. Asia No. 138</div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">
            Password <span className="editIcon small">✎</span>
          </div>
          <div className="infoValue">********</div>
        </div>

        <button className="modalBtn">Log Out</button>
      </div>
    </div>
  );
}
