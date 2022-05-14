import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3"> Auction - timed, winner is the highest bidder, 
	         This is a game where players submit a number within a certain range and players that submit a unique number get a percentage of the pot.</p>


                    <h2 className="text-left">How to Use</h2>
                    <p className="text-left mt-3">This is a game where players place a bid before the timer counts down and the highest bidder wins.</p>
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;
