import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Tutoring1 from '../../assets/Tutoring1.svg';
import Tutoring2 from '../../assets/Tutoring2.svg';
import discordIcon from '../../assets/discordIcon.svg';
import tutors from '../../tutors';
import Tutor from '../../components/Tutors/Tutor';
import {
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
                        <Col md='6' className='order-md-2'>
                            <img src={Tutoring2} 
                                alt='Tutoring 2 svg' 
                                className='img-fluid'
                                >
                            </img>
                            <img src={Tutoring1} 
                                alt='Tutoring 2 svg' 
                                className='img-fluid'
                            /> 
                        </Col>
                        <Col>
                            <div md='6' className='order-md-0' className='tutoring'>
								<h1>Tutoring</h1>
								<p style={{textAlign: "justify", maxWidth: 470}}>
                                    CougarCS offers weekly tutoring time slots for many of our
                                    degree's toughest classes. If you need help in your
                                    coursework, please do not hesitate to reach out to our tutoring
                                    team! Email <a href='mailto:tutoring@CougarCS.com?subject=CougarCS Tutor Application'>tutoring@CougarCS.com</a> with your course code
                                    (COSC XXXX) in the subject line and our tutors will contact you
                                    within 24 - 48 hours.
								</p>
							</div>
                            <div>
                                <Button variant='' target='_blank' className='DiscordButton' onClick={(e) => {e.preventDefault();
                                    window.open('https://discord.gg/eXMqUz', '_blank')}}>
                                        <img src={discordIcon} className='DiscordIcon'></img> Join Discord</Button>
                                <Button variant="outline-danger" className='TutorButton'>Become a Tutor</Button>{' '}
                            </div>
						</Col>
                    </Row>
				</Container>
                <Container>
                    <h1 style={{ marginTop: '1.8em', textAlign: 'center' }}>Tutoring Available For</h1>
					<Row>
						<div>
							<div className='row1'><p>COSC 1360</p></div>
                            <div className='row1'><p>COSC 1430</p></div>
                            <div className='row1'><p>COSC 2430</p></div>
                            <br/>
                            <div className='row2'><p>COSC 3360</p></div>
                            <div className='row2'><p>COSC 3380</p></div>
						</div>
					</Row>
                </Container>
                <Container fluid className='tutoringCard'>
                    <h1 style={{ marginTop: '1.8em' }}>Tutoring is Possible Because of</h1>
					<Row className='cnt'>
						<div className='officerImages'>
							{tutors.map((tutor) =>
								<Tutor tutors={tutor} key={tutor.id} />
							)}
						</div>
					</Row>
                </Container>
            </div>
        );
    }
}
export default Tutoring;