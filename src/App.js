import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

function App() {
  const [ email, setEmail ] = useState("");
  const user = useUser();
  const supabase = useSupabaseClient();

  return (
   <Container align="center" className="container-sm mt-4">
    
    { user === null ?
      <>
        <h1>Welcome to Imagewall</h1>
        <Form>
          <Form.Group className="mb-3" stlye={{ maxWidth: "500px"}}>
            <Form.Label>Enter an email to sign in with a Supabase Magic Link</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary">
            Get Magic Link
          </Button>
        </Form>
      </>

    :
      <>
        <h1>Your Imagewall</h1>
      </>
    }
   </Container> 
  );
}

export default App;
