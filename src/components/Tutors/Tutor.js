import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Tutor.css'
import LinkedIn from '../../assets/LinkedIn.svg'

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
};

export default Tutor;