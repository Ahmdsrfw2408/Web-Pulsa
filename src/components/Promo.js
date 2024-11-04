// src/components/Home.js
import React from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";

const Promo = () => {
  return (
    <div>
      {/* Section Promo */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Promo Terbatas</h2>
        <Row className="justify-content-center">
          {/* Promo Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiARk5dTwpr3PkIJWBRddgwzLj_jo2GPOHqgYVJPoF90Wph4YUq6txoWpMBV7rlRCmVRLPHdPAe1yiVgwq4fvhPL7BW9UqzDmvG0vmayCR3TwXMte0eqx9OxdhhQHr-SdQqpX4WMr60ww6/w1200-h630-p-k-no-nu/Bukalapak-diskon-20-pulsa.jpg"
                alt="Promo Image"
              />
              <Card.Body>
                <Card.Title>Diskon 20% untuk Pembelian Pertama</Card.Title>
                <Card.Text>
                  Dapatkan potongan harga 20% untuk transaksi pertama Anda di
                  PulsaKu. Jangan lewatkan kesempatan ini!
                </Card.Text>
                <Button variant="primary" className="w-100">
                  Dapatkan Promo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Promo Card 2 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://s.kaskus.id/images/2016/09/09/4461023_20160909045119.jpg"
                alt="Promo Image"
              />
              <Card.Body>
                <Card.Title>Bonus Pulsa 10%</Card.Title>
                <Card.Text>
                  Top up pulsa sekarang dan dapatkan bonus pulsa 10% setiap kali
                  Anda melakukan pengisian ulang.
                </Card.Text>
                <Button variant="primary" className="w-100">
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Promo Card 3 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIeBYScvVg5ckWOeljvHjDDK9kn4KszG7ZQ&s"
                alt="Promo Image"
              />
              <Card.Body>
                <Card.Title>Gratis Ongkir untuk Voucher Pulsa</Card.Title>
                <Card.Text>
                  Gunakan kode promo ONGKIRPULSA untuk menikmati gratis ongkir
                  pada voucher pulsa Anda.
                </Card.Text>
                <Button variant="primary" className="w-100">
                  Gunakan Sekarang
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Promo;
