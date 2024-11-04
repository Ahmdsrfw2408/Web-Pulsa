// src/App.js
import React, { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import Pulsa from "./components/Pulsa";
import Kuota from "./components/Kuota";
import Promo from "./components/Promo";
import Kontak from "./components/Kontak";
import Forum from "./components/Forum";
import Topic from "./components/Topic";
import NewTopic from "./components/NewTopic";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // Ambil data topics dari localStorage atau gunakan default jika tidak ada
  const initialTopics = JSON.parse(localStorage.getItem("topics")) || [
    {
      id: 1,
      title: "Cara Menggunakan PulsaKu",
      description: "Diskusi tentang penggunaan aplikasi PulsaKu",
    },
    {
      id: 2,
      title: "Promo Terbaik Bulan Ini",
      description: "Bagikan informasi promo menarik di bulan ini",
    },
  ];

  const [topics, setTopics] = useState(initialTopics);

  // Simpan topics ke localStorage setiap kali topics berubah
  useEffect(() => {
    localStorage.setItem("topics", JSON.stringify(topics));
  }, [topics]);

  const addTopic = (title, description) => {
    const newTopic = { id: topics.length + 1, title, description };
    setTopics([...topics, newTopic]);
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pulsa" element={<Pulsa />} />
        <Route path="/kuota" element={<Kuota />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/forum" element={<Forum topics={topics} />} />
        <Route path="/topic/:id" element={<Topic topics={topics} />} />
        <Route path="/new-topic" element={<NewTopic addTopic={addTopic} />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
