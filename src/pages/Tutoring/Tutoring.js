import React from "react";
import Button from "react-bootstrap/Button";
import Tutoring1 from "../../assets/Tutoring.svg";
import discordIcon from "../../assets/discordIcon.svg";
import tutors from "../../tutors";
import Tutor from "../../components/Tutors/Tutor";
import { Col, Container, Row } from "react-bootstrap";
import "./Tutoring.css";

const Tutoring = () => {
  return (
    <div>
      <Container fluid style={{ padding: "2em" }}>
        <Row>
          <Col md="6">
            <div className="order-md-0" className="tutoring">
              <h1>Tutoring</h1>
              <p style={{ textAlign: "justify", maxWidth: 470 }}>
                CougarCS offers weekly tutoring time slots for many of our
                degree's toughest classes. If you need help in your coursework,
                please do not hesitate to reach out to our tutoring team! Email{" "}
                <a href="mailto:tutoring@CougarCS.com?subject=CougarCS Tutor Application">
                  tutoring@CougarCS.com
                </a>{" "}
                with your course code (COSC XXXX) in the subject line and our
                tutors will contact you within 24 - 48 hours.
              </p>
            </div>
            <div>
              <Button
                variant=""
                target="_blank"
                className="DiscordButton  "
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://discord.gg/eXMqUz", "_blank");
                }}
              >
                <img src={discordIcon} className="DiscordIcon mr-2" />
                Join Discord
              </Button>
              <Button variant="outline-danger" className="TutorButton">
                Become a Tutor
              </Button>
              <div></div>
            </div>
          </Col>
          <Col md="6" className="order-md-2">
            <img src={Tutoring1} alt="Tutoring 2 svg" className="img-fluid" />
          </Col>
        </Row>

        <h3 className="my-4 text-center">Tutoring Available For</h3>
        <div className="course-list">
          <div className="course">COSC 1360</div>
          <div className="course">COSC 1430</div>
          <div className="course">COSC 2430</div>
          <div className="course">COSC 2440</div>
          <div className="course">COSC 3380</div>
        </div>

        <h3 className="my-4 text-center">Tutoring is Possible Because of</h3>
        <Row className="cnt">
          <div className="officerImages">
            {tutors.map((tutor) => (
              <Tutor tutors={tutor} key={tutor.id} />
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Tutoring;
