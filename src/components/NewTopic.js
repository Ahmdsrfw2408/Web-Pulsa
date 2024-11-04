// src/components/NewTopic.js
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewTopic = ({ addTopic }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTopic(title, description); // Menambahkan topik baru
    navigate("/forum"); // Redirect ke halaman Forum
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Buat Topik Baru</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Judul Topik</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan judul topik"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="description" className="mt-3">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan deskripsi topik"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-4 w-100">
          Buat Topik
        </Button>
      </Form>
    </Container>
  );
};

export default NewTopic;
