// src/components/Pulsa.js
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Pulsa = () => {
  const [nomor, setNomor] = useState("");
  const [nominal, setNominal] = useState("");
  const [operator, setOperator] = useState("");
  const [email, setEmail] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Nomor: ${nomor}, Operator: ${operator}, Nominal Pulsa: ${nominal}, Email: ${email}, Metode Pembayaran: ${metodePembayaran}`
    );
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Beli Pulsa</h2>
        <Form onSubmit={handleSubmit}>
          {/* Nomor Telepon */}
          <Form.Group controlId="nomorTelepon">
            <Form.Label>Nomor Telepon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nomor telepon"
              value={nomor}
              onChange={(e) => setNomor(e.target.value)}
              required
            />
          </Form.Group>

          {/* Operator */}
          <Form.Group controlId="operator" className="mt-3">
            <Form.Label>Operator</Form.Label>
            <Form.Control
              as="select"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              required
            >
              <option value="">Pilih Operator</option>
              <option value="Telkomsel">Telkomsel</option>
              <option value="Indosat">Indosat</option>
              <option value="XL">XL</option>
              <option value="Tri">Tri</option>
              <option value="Smartfren">Smartfren</option>
            </Form.Control>
          </Form.Group>

          {/* Nominal Pulsa */}
          <Form.Group controlId="nominalPulsa" className="mt-3">
            <Form.Label>Nominal Pulsa</Form.Label>
            <Form.Control
              as="select"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              required
            >
              <option value="">Pilih Nominal</option>
              <option value="10000">Rp 10,000</option>
              <option value="20000">Rp 20,000</option>
              <option value="50000">Rp 50,000</option>
              <option value="100000">Rp 100,000</option>
            </Form.Control>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan email untuk konfirmasi"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {/* Metode Pembayaran */}
          <Form.Group controlId="metodePembayaran" className="mt-3">
            <Form.Label>Metode Pembayaran</Form.Label>
            <Form.Control
              as="select"
              value={metodePembayaran}
              onChange={(e) => setMetodePembayaran(e.target.value)}
              required
            >
              <option value="">Pilih Metode Pembayaran</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Kartu Kredit">Kartu Kredit</option>
              <option value="Gopay">Gopay</option>
              <option value="OVO">OVO</option>
              <option value="Dana">Dana</option>
            </Form.Control>
          </Form.Group>

          {/* Tombol Submit */}
          <Button variant="primary" type="submit" className="mt-4 w-100">
            Beli Sekarang
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Pulsa;
