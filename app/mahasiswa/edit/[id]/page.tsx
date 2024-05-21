"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page(data: any) {
  const id = data.params.id;

  const [mahasiswa, setMahasiswa] = useState({
    nim: "",
    nama: "",
    tanggal_lahir: "",
    program_studi: "",
    foto: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://belajar-api.unama.ac.id/api/mahasiswa/${id}`
        );
        const dataMahasiswa = await response.json();
        setMahasiswa(dataMahasiswa.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMahasiswa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Proses pengiriman data yang sudah diedit, misal dengan API request
    console.log("Data yang disubmit:", mahasiswa);
  };

  return (
    <div className="container mt-5">
      <h1>Edit Mahasiswa {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nim" className="form-label">
            NIM
          </label>
          <input
            type="text"
            className="form-control"
            id="nim"
            name="nim"
            value={mahasiswa.nim}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control"
            id="nama"
            name="nama"
            value={mahasiswa.nama}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tanggal_lahir" className="form-label">
            Tanggal Lahir
          </label>
          <input
            type="date"
            className="form-control"
            id="tanggal_lahir"
            name="tanggal_lahir"
            value={mahasiswa.tanggal_lahir}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="program_studi" className="form-label">
            Program Studi
          </label>
          <select
            className="form-control"
            id="program_studi"
            name="program_studi"
            value={mahasiswa.program_studi}
            onChange={handleChange}
          >
            <option value="Manajemen">Manajemen</option>
            <option value="Informatika">Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Akuntansi">Akuntansi</option>
            {/* Tambahkan opsi lainnya sesuai kebutuhan */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="foto" className="form-label">
            Foto
          </label>
          <input type="file" name="foto" id="foto" />

          {mahasiswa.foto && (
            <img
              width="150"
              height="150"
              src={mahasiswa.foto}
              alt="Foto Mahasiswa"
              className="img-fluid mt-3"
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Simpan
        </button>
      </form>
    </div>
  );
}
