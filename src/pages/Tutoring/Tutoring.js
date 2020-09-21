import React, { Component } from 'react';
import {
	Card,
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import './Tutoring.css';

class Tutoring extends Component {
    render() {
        return (
            <div>
				<Container fluid style={{ padding: '2em' }}>
					<Row>
						<Col md='6' className='order-md-0'>
							<div className='tutoring'>
								<h1>Tutoring</h1>
								<p style={{textAlign: "justify", maxWidth: 470}}>
                                    CougarCS offers weekly tutoring time slots for many of our
                                    degree's toughest classes. If you need help in your
                                    coursework, please do not hesitate to reach out to our tutoring
                                    team! Email <a href='mailto:tutoring@CougarCS.com'>tutoring@CougarCS.com</a> with your course code
                                    (COSC XXXX) in the subject line and our tutors will contact you
                                    within 24 - 48 hours. Note that CougarCS' tutoring program is
                                    to give students an opportunity to seek help conceptually from
                                    people who have already taken and passed the class they may
                                    be struggling with. Please do not expect our volunteer tutors
                                    to debug or write your assignments for you.
								</p>
								<p style={{textAlign: "justify", maxWidth: 470}}>
                                    Interested in becoming a tutor? Email our Director of Tutoring,
                                    Madeleine Wilson, at <a href='mailto:mfwilson@CougarCS.com'>mfwilson@CougarCS.com</a>
								</p>
							</div>
						</Col>
					</Row>
				</Container>
            </div>
        );
    }
}
export default Tutoring;