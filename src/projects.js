import {Row, Col, Card, Button} from 'react-bootstrap';

export default () => {
    return <div style={{marginBottom: '320px'}}>
        <h3>Projects</h3>
        <div style={{color: "black"}}>
            <Col>
                <Row>
                 
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                   Rack-O Card game (Java). Demonstrates use of stacks.
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/TamarMill/RackoGame")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Text>
                                    Context Switching Simulation (Java)
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/TamarMill/ContextSwitch")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 3</Card.Title>
                                <Card.Text>
                                    Tic-Tac-Toe Game -N*N size board (Python)
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/TamarMill/TicTacToe")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Project 4</Card.Title>
                                <Card.Text>
								Election Outcome Generator- Demonstrates use of Observable and Strategy
								Patterns (Java)
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/TamarMill/electionsProject-ObservableandStrategyPatterns")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
            </Col>
        </div>
    </div>
}