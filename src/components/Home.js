// src/components/Home.js
import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-primary text-white text-center"
        style={{ padding: "5rem 0" }}
      >
        <Container>
          <h1>Selamat Datang di PulsaKu</h1>
          <p>Beli pulsa murah, cepat, dan mudah dengan harga bersahabat!</p>
          <Button variant="light" href="/pulsa">
            Beli Sekarang
          </Button>
        </Container>
      </div>

      {/* Section 1 - Promo */}
      <Container
        className="my-5 text-center"
        style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}
      >
        <h2>Promo Terbatas</h2>
        <p>Dapatkan diskon spesial untuk pembelian pertama Anda!</p>
        <Button variant="primary" href="/promo">
          Lihat Promo
        </Button>
      </Container>

      {/* Section 2 - Keunggulan */}
      <Container
        className="my-5 text-center"
        style={{ padding: "2rem", backgroundColor: "#e9ecef" }}
      >
        <h2>Kenapa Memilih PulsaKu?</h2>
        <p>
          Kami menawarkan pulsa dengan harga terjangkau dan layanan terpercaya.
        </p>
        <div className="d-flex justify-content-center">
          <div style={{ margin: "1rem", textAlign: "center" }}>
            <h3>Murah</h3>
            <p>Harga bersaing untuk semua provider.</p>
          </div>
          <div style={{ margin: "1rem", textAlign: "center" }}>
            <h3>Cepat</h3>
            <p>Proses transaksi hanya dalam hitungan detik.</p>
          </div>
          <div style={{ margin: "1rem", textAlign: "center" }}>
            <h3>Aman</h3>
            <p>Data Anda dijamin aman dan terlindungi.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
