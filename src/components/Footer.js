// src/components/Footer.js
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Pulsa'adKu. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
