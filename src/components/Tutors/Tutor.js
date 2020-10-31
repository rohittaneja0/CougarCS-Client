import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Tutor.css";
import LinkedIn from "../../assets/LinkedIn.svg";

const Tutor = ({ tutors }) => {
  return (
    <>
      <Row>
        <Col>
          <div className="tutors">
            <div>
              <a
                style={{ alignItems: "left", marginRight: "10px" }}
                href={tutors.linkedin}
              >
                <img src={LinkedIn}></img>
              </a>
              {tutors.name}
            </div>
            {tutors.courses}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Tutor;
