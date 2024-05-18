"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Mahasiswa {
  nim: string;
  nama: string;
  program_studi: string;
}

interface ApiResponse {
  data: Mahasiswa[];
}

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Mahasiswa[]>([]);

  useEffect(() => {
    document.title = "Data Mahasiswa";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get<ApiResponse>(
          "https://belajar-api.unama.ac.id/api/mahasiswa"
        );
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      console.log("Data has been updated", data);
    }
  }, [data]);

  return (
    <div className="card">
      <div className="card-header">Data Mahasiswa</div>
      <div className="card-body">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>NIM</th>
                <th>Nama</th>
                <th>Program Studi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nim}</td>
                  <td>{item.nama}</td>
                  <td>{item.program_studi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Page;
