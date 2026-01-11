"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();

  // State Popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedKolam, setSelectedKolam] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");

  const leftWidth = "900px";
  const rightWidth = "350px";

  const tiketList = [
    {
      title: "Kolam Renang Utama",
      price: "50.000 / orang",
      desc: "Kolam renang utama menyediakan berbagai wahana air, cocok untuk keluarga.",
      image:
        "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/05/Kolam-Renang-di-Tangerang-1.webp",
      link: "/screen/kolamUtama",
    },
    {
      title: "Kolam Olimpik",
      price: "75.000 / orang",
      desc: "Kolam dengan standar olimpik, cocok untuk latihan renang profesional.",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqew_gQx3l3-vC4FYkfXyZhDs2yJK7va6AHYdsUrmdQPGjj1I01z9S_bV0mUoWkDLoHxwWuNhYsA2Laa1neCSqDvHsz_tHbsyR1U8naMlBwOfhSB8CyaYY-MXFpDTB4I14x8atdhLq3gA/s1600/kolam-olympic+-+PURBALINGGA+DOT+INFO.jpg",
      link: "/screen/kolamOlimpik",
    },
    {
      title: "Kolam Renang Anak",
      price: "10.000 / orang",
      desc: "Kolam renang khusus anak dengan wahana ember tumpah dan area aman.",
      image:
        "https://travelspromo.com/wp-content/uploads/2022/08/Wahana-ember-tumpah-di-kolam-renang-anak.jpg",
      link: "/screen/kolamAnak",
    },
  ];

  // HANDLE TOMBOL PESAN
  const handlePesanClick = (kolam: string) => {
    setSelectedKolam(kolam);
    setShowPopup(true);
  };

  const handleSubmit = () => {
    alert(
      `Tiket dipesan!\nNama: ${nama}\nAlamat: ${alamat}\nKolam: ${selectedKolam}`
    );
    setShowPopup(false);
    setNama("");
    setAlamat("");
  };

  return (
    <div className="w-full min-h-screen bg-[#eef4ff] pt-16">
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 bg-[#3559c7] text-white py-4 px-6 
        flex items-center justify-between shadow-md z-50"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-semibold">MyTiket</h1>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/screen/menu" className="hover:underline">
            Beranda
          </Link>
          <a className="hover:underline">Pesan Tiket</a>
          <a className="hover:underline">Cetak Tiket</a>
        </div>

        <button className="text-white hover:underline text-sm">Log in</button>
      </nav>

      {/* CONTENT */}
      <div className="px-6 mt-10 pb-10">
        <h2 className="text-3xl text-center font-bold text-[#1f2f5f]">
          Pesan Tiket
        </h2>

        <div className="mt-8 flex flex-col gap-8 items-center">
          {tiketList.map((item, index) => (
            <div key={index} className="flex gap-6 w-full justify-center">
              {/* CARD KIRI */}
              <div
                onClick={() => router.push(item.link)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                style={{ width: leftWidth }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={450}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-5">
                  <p className="text-white text-lg">{item.price}</p>
                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* CARD KANAN */}
              <div
                className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between"
                style={{ width: rightWidth, height: "224px" }}
              >
                <div>
                  <h3 className="text-xl font-bold text-[#1f2f5f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{item.desc}</p>
                  <p className="font-semibold text-[#3559c7]">{item.price}</p>
                </div>

                <button
                  onClick={() => handlePesanClick(item.title)}
                  className="mt-3 cursor-pointer bg-[#3559c7] text-white py-2 rounded-lg hover:bg-[#2d4dac] transition"
                >
                  Pesan Tiket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[380px] shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-[#1f2f5f]">
              Pesan Tiket – {selectedKolam}
            </h3>

            <input
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg mb-3 placeholder-gray-500 text-black"
            />

            <input
              type="text"
              placeholder="Masukkan alamat lengkap Anda"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg mb-4 placeholder-gray-500 text-black"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-[#3559c7] text-white py-2 rounded-lg hover:bg-[#2d4dac]"
            >
              Pesan Sekarang
            </button>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-gray-300 mt-2 py-2 rounded-lg hover:bg-gray-400"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}






