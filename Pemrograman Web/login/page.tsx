"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      {/* CARD sedikit transparan */}
      <div
        style={{
          position: "relative",
          width: 420,
          padding: "40px 30px",
          borderRadius: 25,
          backgroundColor: "rgba(238, 244, 255, 0.7)", 
          border: "4px solid #3559c7",
          boxShadow: "0 0 25px rgba(53, 89, 199, 0.9)",
          textAlign: "center",
          color: "#3559c7",
          backdropFilter: "blur(3px)", 
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="MyTiket Logo"
          style={{
            width: 160,
            margin: "0 auto 10px auto",
            marginTop: -10,
          }}
        />

        <h1
          style={{
            fontSize: 26,
            marginBottom: 25,
            color: "#3559c7",
            fontWeight: 700,
            textShadow: "0 0 8px rgba(53, 89, 199, 0.5)",
          }}
        >
          LOGIN
        </h1>

        {/* Input Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 12,
            width: "100%",
            borderRadius: 10,
            border: "3px solid #3559c7",
            marginBottom: 20,
            background: "rgba(220, 228, 255, 0.8)", 
            color: "#0a1a55",
            fontSize: 16,
            outline: "none",
            boxShadow: "0 0 12px rgba(53, 89, 199, 0.5)",
          }}
        />

        {/* Input Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: 12,
            width: "100%",
            borderRadius: 10,
            border: "3px solid #3559c7",
            marginBottom: 20,
            background: "rgba(220, 228, 255, 0.8)", 
            color: "#0a1a55",
            fontSize: 16,
            outline: "none",
            boxShadow: "0 0 12px rgba(53, 89, 199, 0.5)",
          }}
        />

        {/* Tombol Login */}
        <button
          style={{
            width: "100%",
            padding: 15,
            borderRadius: 40,
            fontSize: 18,
            border: "none",
            color: "#fff",
            cursor: "pointer",
            marginBottom: 12,
            background: "linear-gradient(90deg, #3559c7, #5a78e6)",
            boxShadow: "0 4px 10px rgba(53, 89, 199, 0.5)",
          }}
          onClick={() => router.push("/screen/halamanUtama")}
        >
          Login
        </button>

        {/* Tombol Register */}
        <button
          style={{
            width: "100%",
            padding: 15,
            borderRadius: 40,
            fontSize: 18,
            border: "none",
            color: "#fff",
            cursor: "pointer",
            background: "linear-gradient(90deg, #3559c7, #5a78e6)",
            boxShadow: "0 4px 10px rgba(53, 89, 199, 0.5)",
          }}
          onClick={() => router.push("/screen/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
