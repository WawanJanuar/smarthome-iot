"use client";

import { useEffect, useState } from "react";
import "./dashboard.css";

import Sidebar from "./Sidebar";
import UserModal from "./UserModal";
import ModeModal from "./ModeModal";
import DoorModal from "./DoorModal";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [modeModalOpen, setModeModalOpen] = useState(false);

  const [doorModalOpen, setDoorModalOpen] = useState(false);
  const [doorIsOpen, setDoorIsOpen] = useState(true);

  
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
        setUserModalOpen(false);
        setModeModalOpen(false);
        setDoorModalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const doorLabel = doorIsOpen ? "OPEN" : "CLOSE";

  function openUser() {
    setSidebarOpen(false);
    setUserModalOpen(true);
  }

  function openPersonalize() {
    setSidebarOpen(false);
    setModeModalOpen(true);
  }

  function toggleDoor() {
    setDoorIsOpen((v) => !v);
    setDoorModalOpen(false);
  }

  return (
    <main className="dash">
      <header className="topbar">
        <button
          className="iconBtn"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </span>
        </button>

        <div className="brand">SMART HOME</div>
        <div className="address">Jl. Asia No. 138</div>
      </header>

      {/* konten */}
      <section className="content">
        <h1 className="hello">Hello, steven Putera Wijaya Sok Asik</h1>

        <div className="grid">
          {/* DOOR */}
          <button
            className={`card ${doorIsOpen ? "" : "activeCard"}`}
            onClick={() => setDoorModalOpen(true)}
          >
            <div className="cardTop">
              <div className="cardIcon">🚪</div>
              <div className="cardTitle">DOOR</div>
            </div>
            <div className="cardValue">{doorLabel}</div>
          </button>

          {/* OBJECT */}
          <div className="card">
            <div className="cardTop">
              <div className="cardIcon">🚶‍♂️</div>
              <div className="cardTitle">OBJECT DETECTION</div>
            </div>
            <div className="cardValue">15 CM</div>
          </div>

          {/* LED */}
          <div className="card">
            <div className="cardTop">
              <div className="cardIcon">💡</div>
              <div className="cardTitle">LED</div>
            </div>
            <div className="cardValue">ON</div>
          </div>

          {/* ALARM */}
          <div className="card">
            <div className="cardTop">
              <div className="cardIcon">🔊</div>
              <div className="cardTitle">ALARM</div>
            </div>
            <div className="cardValue">ON</div>
          </div>

          {/* TEMP */}
          <div className="card">
            <div className="cardTop">
              <div className="cardIcon">🌡️</div>
              <div className="cardTitle">TEMPERATURE</div>
            </div>
            <div className="cardValue">34°C</div>
            <div className="pill">HOT</div>
          </div>

          {/* HUMID */}
          <div className="card">
            <div className="cardTop">
              <div className="cardIcon">💧</div>
              <div className="cardTitle">HUMIDITY</div>
            </div>
            <div className="cardValue">85%</div>
          </div>
        </div>
      </section>

      {/* sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenUser={openUser}
        onOpenPersonalize={openPersonalize}
      />

      {/* usermodal */}
      <UserModal open={userModalOpen} onClose={() => setUserModalOpen(false)} />

      {/* personalisasi */}
      <ModeModal open={modeModalOpen} onClose={() => setModeModalOpen(false)} />

      {/* pintu */}
      <DoorModal
        open={doorModalOpen}
        onClose={() => setDoorModalOpen(false)}
        doorLabel={doorLabel}
        actionText={doorIsOpen ? "Close" : "Open"}
        onAction={toggleDoor}
      />
    </main>
  );
}
