"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!nama || !email || !password) {
      alert("Semua field harus diisi.");
      return;
    }

    alert("Register Berhasil!");
    router.push("/screen/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url("/backgroundd.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Overlay gelap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      ></div>

      {/* CARD BIRU SEMI TRANSPARAN */}
      <div
        style={{
          position: "relative",
          width: 360,
          padding: "25px 25px",
          borderRadius: 20,
          backgroundColor: "rgba(233, 239, 255, 0.75)", 
          border: "3px solid #3559c7",
          boxShadow: "0 0 20px rgba(53, 89, 199, 0.3)",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: 130,
            margin: "0 auto 5px auto",
            marginTop: -5,
          }}
        />

        <h1
          style={{
            fontSize: 22,
            marginBottom: 20,
            color: "#3559c7",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          REGISTER
        </h1>

        {/* Input Nama */}
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          style={{
            padding: 10,
            width: "100%",
            borderRadius: 10,
            border: "2px solid #3559c7",
            marginBottom: 12,
            background: "rgba(255,255,255,0.6)", 
            color: "#3559c7",
            fontSize: 15,
            outline: "none",
          }}
        />

        {/* Input Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 10,
            width: "100%",
            borderRadius: 10,
            border: "2px solid #3559c7",
            marginBottom: 12,
            background: "rgba(255,255,255,0.6)",
            color: "#3559c7",
            fontSize: 15,
            outline: "none",
          }}
        />

        {/* Input Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: 10,
            width: "100%",
            borderRadius: 10,
            border: "2px solid #3559c7",
            marginBottom: 15,
            background: "rgba(255,255,255,0.6)",
            color: "#3559c7",
            fontSize: 15,
            outline: "none",
          }}
        />

        {/* Tombol Daftar */}
        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 40,
            fontSize: 16,
            border: "none",
            color: "#fff",
            cursor: "pointer",
            marginBottom: 10,
            background: "#3559c7",
            boxShadow: "0 4px 10px rgba(53, 89, 199, 0.4)",
          }}
        >
          Daftar
        </button>

        {/* Tombol Kembali */}
        <button
          onClick={() => router.push("/screen/login")}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 40,
            fontSize: 16,
            border: "none",
            color: "#fff",
            cursor: "pointer",
            background: "#4d6fe0",
            boxShadow: "0 4px 10px rgba(53, 89, 199, 0.3)",
          }}
        >
          Kembali ke Login
        </button>
      </div>
    </div>
  );
}
