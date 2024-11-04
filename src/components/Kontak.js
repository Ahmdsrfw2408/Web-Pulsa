// src/components/Home.js
import React from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";

const Kontak = () => {
  return (
    <div>
      {/* Section Promo */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Kontak Kami</h2>
        <Row className="justify-content-center">
          {/* Promo Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>As'ad</Card.Title>
                <Card.Text>
                  Owner website pulsaKu kalau berminta menjadi distributor
                  silahkan klik tombol chat di bawah ini
                </Card.Text>
                <Button variant="primary" className="w-100" href="/forum">
                  Chat
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kontak;
