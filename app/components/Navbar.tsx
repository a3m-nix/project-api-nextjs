"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          React & Next.js
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={path === "/" ? "nav-item active" : "nav-item"}>
              <Link href="/" className="nav-link">
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <li className={path === "/login" ? "nav-item active" : "nav-item"}>
              <Link href="/login" className="nav-link">
                <i className="fa fa-sign-in"></i> Login
              </Link>
            </li>
            <li
              className={path === "/register" ? "nav-item active" : "nav-item"}
            >
              <Link
                href="/register"
                className="nav-link {router.pathname === '/register' ? 'nav-item active' : 'nav-item'}"
              >
                <i className="fa fa-user-plus" aria-hidden="true"></i> Register
              </Link>
            </li>
            <li
              className={path === "/mahasiswa" ? "nav-item active" : "nav-item"}
            >
              <Link
                href="/mahasiswa"
                className="nav-link {router.pathname === '/mahasiswa' ? 'nav-item active' : 'nav-item'}"
              >
                <i className="fa fa-users" aria-hidden="true"></i> Data
                Mahasiswa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
