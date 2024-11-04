// src/components/Topic.js
import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const Topic = ({ topics }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = topics.find((t) => t.id === parseInt(id));

  // Ambil data komentar dari localStorage atau gunakan default jika tidak ada
  const initialComments =
    JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  // Simpan komentar ke localStorage setiap kali ada perubahan
  useEffect(() => {
    localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
  }, [comments, id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment("");
    }
  };

  if (!topic) {
    return (
      <Container className="mt-5 text-center">
        <h2>Topik tidak ditemukan.</h2>
        <Button variant="primary" onClick={() => navigate("/forum")}>
          Kembali ke Forum
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>

        <h4 className="mt-4">Diskusi</h4>
        <ListGroup variant="flush">
          {comments.map((comment) => (
            <ListGroup.Item key={comment.id}>{comment.text}</ListGroup.Item>
          ))}
        </ListGroup>

        <Form onSubmit={handleCommentSubmit} className="mt-3">
          <Form.Group controlId="comment">
            <Form.Label>Komentar Anda</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tulis komentar..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Kirim Komentar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Topic;
