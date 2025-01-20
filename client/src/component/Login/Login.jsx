import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit (event){
        event.preventDefault()
    }
  return (
    <div>
       <Form onSubmit = {handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        
        <Col sm="10">
          <Form.Control type = "email" placeholder='Enter Email'
          onChange = {e => setEmail (e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" onChange = {e => setPassword (e.target.value)}/>
        </Col>

        <button> Login </button>
      </Form.Group>
    </Form>

    </div>
  )
}

export default Login