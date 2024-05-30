"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  //handle event onSubmit
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    //tampilkan loading di button menggunakan spinner
    axios
      .post(
        "https://belajar-api.unama.ac.id/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200) {
          alert("Ops.. Login Gagal" + response.data.data.name);
        } else {
          alert(
            "Hore.. Login berhasil. Selamat Datang, Nama Kamu Adalah " +
              response.data.data.name
          );
        }

        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          const errors = error.response.data.errors;
          let errorMessage = "Ops... Terjadi kesalahan:\n";
          for (const key in errors) {
            errorMessage += `${key}: ${errors[key].join(", ")}\n`;
          }
          alert(errorMessage);
        } else {
          alert("Ops... Terjadi kesalahan: " + error.message);
        }
        setIsLoading(false);
      });
  }

  return (
    <div className="card">
      <div className="card-header">LOGIN</div>
      <div className="card-body">
        <h1>Login</h1>
        <div className="col-md-5">
          <form onSubmit={handleLogin} method="post">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              className="form-control mt-2"
              autoFocus
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control mt-2"
            />
            <button className="btn btn-primary mt-2" type="submit">
              {isLoading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
