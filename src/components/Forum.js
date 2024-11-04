// src/components/Forum.js
import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Forum = ({ topics = [] }) => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Forum Diskusi</h2>
      <ListGroup>
        {topics.map((topic) => (
          <ListGroup.Item key={topic.id}>
            <h5>{topic.title}</h5>
            <p>{topic.description}</p>
            <Link to={`/topic/${topic.id}`}>
              <Button variant="primary" size="sm" href="/Topic">
                Lihat Diskusi
              </Button>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Link to="/new-topic" className="d-block mt-4">
        <Button variant="success">Buat Topik Baru</Button>
      </Link>
    </Container>
  );
};

export default Forum;
