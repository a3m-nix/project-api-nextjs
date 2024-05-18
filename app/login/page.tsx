"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  //handle event onSubmit
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    //tampilkan loading di button menggunakan spinner
    axios
      .post(
        "https://belajar-api.unama.ac.id/api/login",
        {
          email: username,
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
        alert("Hore.. Login berhasil. " + response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Ops... " + error);
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
              name="username"
              id="username"
              placeholder="Username"
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
