import React, {useState} from 'react';
import { Form,Button ,Spinner,Alert} from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData]= useState({});
    const {user,loginUser,isLoading} = useAuth();

    const location = useLocation();
    const history  = useHistory();

    const redirect_uri = location.state?.from || '/home' ; 

    const handleOnChange = e =>{
       const field = e.target.name ;
       const value = e.target.value ;
       const newLoginData = {...loginData};
       newLoginData[field] = value ;
       setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email,loginData.password)
        .then((userCredential) => {
                 
            // Signed in 
            // const user = userCredential.user;
            history.push(redirect_uri) ;
            // ...
        })
        e.preventDefault();
    }
    return (
        <>
        <h1 style={{margin:'50px 0'}}>Please Login</h1>
            { !isLoading && <Form onSubmit={handleLoginSubmit} style={{width:'40%',margin:'0 auto',textAlign:'left'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    name='email'
                    onChange={handleOnChange}
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    name='password'
                    onChange={handleOnChange}
                />
            </Form.Group>
             
             
            <Button style={{marginBottom:'15px'}} variant="primary" type="submit">
                Login
            </Button>
            <br/>
            <NavLink style={{textDecoration:'none' }} to='/register'>New User? Please Register</NavLink>
            <br/>
            </Form>}
            {isLoading && <Spinner animation="grow" />}
            {user?.email && <Alert variant="success">
                <p>
                    Your Login SuccessFull
                </p>
            </Alert> }
        </>
    );
};

export default Login;