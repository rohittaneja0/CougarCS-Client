import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Tutor.css";
import LinkedIn from "../../assets/LinkedIn.svg";

<<<<<<< HEAD
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
=======
const Tutor = ({ tutors }) => { 
    return (
       <>
            <Row>
                <Col>
                    <div className='tutors'>
                        <div>
                           <img style={{alignItems: 'left', marginRight:'10px', marginBottom: '10px'}} src={LinkedIn}></img>
                           {tutors.prioritize ? <span style={{color: '#ECD00A' }}>{tutors.name}</span> : <span>{tutors.name}</span>}
                        </div>
                        {tutors.courses.map((course, index) => (
                            <div class="cardSubjects">{course}</div>
                        ))}
                    </div>
                </Col>
            </Row>
       </>
    );
>>>>>>> 3998a92163b016b4a554b5cc7f35efc99ced682e
};

export default Tutor;
