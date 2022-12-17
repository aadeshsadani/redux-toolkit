import React from 'react'
import { Card, Container } from 'react-bootstrap'
import {Link,  useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux'; 
// import SweetAlert from 'react-bootstrap-sweetalert';
import swal from 'sweetalert';
const Signin = () => {
    const navigate = useNavigate();
    const stateUPdatedUserRecord = useSelector((state) => state.signupUpdatedState.signupUpdatedState.value);
    const authentication = (e) => {
        e.preventDefault();
        if(stateUPdatedUserRecord.length === 0){
            swal({
                title: "Oops?",
                text: "Sorry you're not authorizd to login before registration!",
                icon: "error",
                buttons: ["Cancel", "Sign up"],
                dangerMode: true,
              })
              .then((goLogin) => {
                if (goLogin) {
                    navigate("/signup");
                } 
              });
        }

    }
  return (
    <Container>
        <Card className='w-50 mx-auto my-5'>
            <Card.Header>
                <h4 className='text-center'>Sing In</h4>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={authentication}>
                    <Form.Group>
                        <Form.Label>User Email</Form.Label>
                        <Form.Control type='email' name='email' required placeholder='Enter Email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='text' name='password' required placeholder='Enter Password' />
                    </Form.Group>
                    <Button variant='primary' type='submit' className='mt-2'>
                        Sign in
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer className='text-center'>
                <Link to='/signup'>
                    Sign up                    
                </Link>
            </Card.Footer>
        </Card>
    </Container>
  )
}
export default Signin