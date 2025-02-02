import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KURUMETI JAGADEESH </span>
            from <span className="purple"> Vijayawada, India.</span>
            <br />
            I am currently studying B.tech at KL University.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fictional books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the opportunity to try!"{" "}
          </p>
          <footer className="blockquote-footer">Jagadeesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
