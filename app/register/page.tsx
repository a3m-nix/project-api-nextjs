"use client";
import React, { useRef } from "react";
import axios from "axios";

export default function Page() {
  //handle event onSubmit
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
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
      })
      .catch((error) => {
        alert("Ops... " + error);
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
            <input
              type="submit"
              value="Login"
              className="btn btn-primary mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
