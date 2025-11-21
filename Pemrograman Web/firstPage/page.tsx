"use client";

import { useRouter } from "next/navigation";

export default function FirstPage() {
  const router = useRouter();

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

      {/* CARD (sedikit transparan) */}
      <div
        style={{
          position: "relative",
          width: 450,
          padding: "40px 30px",
          borderRadius: 25,
          background: "rgba(238, 244, 255, 0.9)", 
          border: "4px solid #3559c7",
          textAlign: "center",

          // Glow biru
          boxShadow: "0 0 30px rgba(53, 89, 199, 0.9)",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="MyTiket Logo"
          style={{
            width: 220,
            margin: "0 auto 10px auto",
            marginTop: -30,
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: 28,
            marginTop: 10,
            marginBottom: 40,
            color: "#3559c7",
            fontWeight: 700,
            letterSpacing: 1,
            textShadow: "0 0 10px rgba(53, 89, 199, 0.7)",
            filter: "brightness(1.3)",
          }}
        >
          SELAMAT DATANG
        </h1>

        {/* Tombol */}
        <button
          onClick={() => router.push("/screen/login")}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: 40,
            fontSize: 18,
            border: "none",
            color: "#fff",
            cursor: "pointer",

            background: "linear-gradient(90deg, #3559c7, #5a78e6)",
            boxShadow: "0 4px 10px rgba(53, 89, 199, 0.6)",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
