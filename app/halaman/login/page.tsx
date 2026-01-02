import "./loginstyle.css";

export default function LoginPage() {
  return (
    <main className="login-wrap">
      <div className="login-topbar" />

      <h1 className="login-title">SMART HOME</h1>

      <section className="login-card">
        <div className="login-fields">
          <input className="login-input" type="text" placeholder="Username" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />

          <button className="login-btn" type="button">
            Log In
          </button>

          <p className="login-footer">
            New User? <a href="#">Register</a>
          </p>
        </div>
      </section>
    </main>
  );
}
