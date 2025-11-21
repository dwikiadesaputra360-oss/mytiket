import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#eef4ff] pt-16">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-[#3559c7] text-white py-4 px-6 flex items-center justify-between shadow-md z-50">
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
          <a href="#" className="hover:underline">
            Beranda
          </a>
          <a href="#" className="hover:underline">
            Pesan Tiket
          </a>
          <a href="#" className="hover:underline">
            Cetak Tiket
          </a>
        </div>

        <button className="text-white hover:underline text-sm">Log in</button>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 h-150 relative overflow-hidden">
        <h1 className="text-4xl font-bold text-[#1f2f5f]">
          Selamat Datang di Website MyTiket
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-xl">
          Website yang menyediakan pemesanan tiket kolam renang Laguna Biru
          Wisata Air Yang Menyajikan Indahnya Pemandangan Alam dan Segarnya
          Udara Pegunungan
        </p>

        <Link
          href="/screen/halamanUtama"
          className="mt-8 bg-[#3559c7] hover:bg-[#2e4fac] transition text-white px-6 py-3 rounded-xl flex items-center gap-2 mx-auto"
        >
          <span>🛒</span> Beli Tiket Masuk
        </Link>
      </section>

      {/* ⭐ SECTION LOKASI • HARGA • JAM BUKA (TAMBAHAN) */}
      <section className="w-full bg-white py-16 px-6 flex flex-col lg:flex-row gap-12 justify-center items-start">
        {/* Kolom Lokasi + Map */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-[#1f2f5f] mb-4">Lokasi</h2>
          <p className="text-gray-700 mb-4">
            Jl. Raya Ciapus, Kec. Tamansari, Kabupaten Bogor, Jawa Barat
          </p>

          {/* Google Map Iframe */}
          <div className="w-full h-80 border rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5847021308783!2d106.786245!3d-6.650079000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c6f5e8a8dfa7%3A0x343acceb2b5bdb9d!2sKolam%20Renang%20Tirta%20Bawana!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Kolom Harga + Jam Buka */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-[#1f2f5f] mb-6">
            Harga Tiket
          </h2>

          <p className="text-gray-800 text-lg">
            <strong>@ Rp 10.000</strong>
          </p>
          <p className="mt-2 text-gray-600">
            Dapat <strong>2 voucher gratis masuk</strong> tiap pembelian 10
            tiket
          </p>

          <hr className="my-6" />

          <h2 className="text-2xl font-bold text-[#1f2f5f] mb-4">Jam Buka</h2>

          <ul className="text-gray-700 space-y-2 text-lg">
            <li className="flex justify-between">
              <span>Minggu</span> <span>09:00 - 16:00</span>
            </li>
            <li className="flex justify-between text-red-500">
              <span>Senin</span> <span>Tutup</span>
            </li>
            <li className="flex justify-between">
              <span>Selasa</span> <span>09:00 - 16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Rabu</span> <span>09:00 - 16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Kamis</span> <span>09:00 - 16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Jumat</span> <span>09:00 - 16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sabtu</span> <span>09:00 - 16:00</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
