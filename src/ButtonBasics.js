import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!');
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="mb-3">
            <Button
              onClick={() => window.open('https://www.linkedin.com/in/ai-software-developer/', '_blank')}
              variant="primary"
              size="lg"
              block
            >
              Connect on LinkedIn
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button
              onClick={() => window.open('https://github.com/AlexaEngine', '_blank')}
              variant="dark"
              size="lg"
              block
            >
              Explore My GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ButtonBasics;
