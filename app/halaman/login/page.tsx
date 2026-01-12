import "./loginstyle.css";
import Link from "next/link";

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

          <Link href="/halaman/dashboard" className="login-btn">Log In</Link>


          <p className="login-footer">
            New User? <Link href="/" className="regis">Register</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
