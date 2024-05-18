"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = "Register Page";
  }, []);
  //handle event onSubmit
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    const nama = event.currentTarget.nama.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    //post data ke server axios dengan method post, dengan header accept json, body email dan password
    axios
      .post(
        "https://belajar-api.unama.ac.id/api/register",
        {
          name: nama,
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
        if (response.status == 201) {
          alert("Horee... Daftar berhasil. ");
        } else {
          alert("Ops.." + response.data.message);
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
      <div className="card-header">REGISTER</div>
      <div className="card-body">
        <h1>Pendaftaran</h1>
        <div className="col-md-5">
          <form onSubmit={handleLogin} method="post">
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama Lengkap"
              className="form-control mt-2"
              autoFocus
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
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
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
