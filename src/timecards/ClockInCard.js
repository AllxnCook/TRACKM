import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

class ClockInCard extends Component {
    render() {
        return (<Card className="clock-in-card" bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Body>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {`Bus Number`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">----</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">----</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">----</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form>
                    <Form.Check
                        label={`Pre-Trip Inspection`}
                    />
                </Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Card.Link href="#">{`Clock In`}</Card.Link>
            </Card.Body>
        </Card>)

    }
}
export default ClockInCard;

