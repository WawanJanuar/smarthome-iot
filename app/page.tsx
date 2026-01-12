import Link from "next/link";
import "./pagestyle.css";

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        {/* bagian kirinyaL */}
        <div className="left">
          <h2>Welcome Back!</h2>
          <p>
            To keep connected with us, please login <br />
            with your personal information
          </p>
          <Link href="/halaman/login" className="btn-outline">
            Sign In
          </Link>
        </div>

        {/* container bgn kanan */}
        <div className="right">
          <h1>CREATE ACCOUNT</h1>

          <div className="form-box">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <Link href="halaman/dashboard" className="sign-btn">Sign Up</Link>

            {/* <button className="btn-outline small">Sign Up</button> */}
          </div>
        </div>
      </div>
    </main>
  );
}
