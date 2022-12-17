import { Form, Button, Row, Col, Container,  Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import {addUser} from '../state_management/reducers/signup';
export default function SignUp() {
  const val = useSelector((state)=>state.signupUpdatedState.signupUpdatedState.value);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const setData = (event) => {
    event.preventDefault();
    setUserData({...userData,[event.target.name]: event.target.value})
  }
  if(val.length > 0){
    console.log(val);
  }
  return (
    <>
    <Container className='my-5'>
      <Card className='w-75 mx-auto'>
        <Card.Header>
          <h4 className='text-center'>Sign Up</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addUser(userData));
          }}>
            <Row className='justify-content-center'>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="name" onChange={setData} placeholder="Enter first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={setData} placeholder="Enter email" />
                </Form.Group>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" name="password" onChange={setData} placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                  <Button variant="primary" type="submit">
                    Sign up
                  </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Link to='/'>
            Login
          </Link>
        </Card.Footer>
      </Card>
    </Container>
    </>
  )
}
