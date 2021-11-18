import React,{useState} from 'react';
import { Form ,Button,Spinner,Alert} from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData]= useState({});
    const history = useHistory();

    const {user,registerUser,isLoading} = useAuth();

    const handleOnChange = e =>{
       const field = e.target.name ;
       const value = e.target.value ;
       const newLoginData = {...loginData};
       newLoginData[field] = value ;
    //    console.log(field,value)
       setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your Password Did not Match') ; 
            return ;
        }
        registerUser(loginData.email, loginData.password, history)
        e.preventDefault();
    }

    return (
        <>
        <h1 style={{margin:'50px 0'}}>Please Register</h1>
            { !isLoading && <Form onSubmit={handleLoginSubmit} style={{width:'40%',margin:'0 auto',textAlign:'left'}}>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name "
                     name='name'
                     onChange={handleOnChange}
                 />
                
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
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
                <Form.Control type="password" placeholder=" Enter Password"
                     name='password'
                     onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-Enter Password"
                     name='password2'
                     onChange={handleOnChange}
                />
            </Form.Group>
             
            <Button style={{marginBottom:'15px'}} variant="primary" type="submit">
                Register
            </Button>
            <br/>
            <NavLink style={{textDecoration:'none' }} to='/login'>Already Register? Please Login</NavLink>
            <br/>
            </Form>}
            {isLoading && <Spinner animation="grow" />}
            {user?.email && <Alert variant="success">
                <p>
                    Your Registration SuccessFull
                </p>
            </Alert> }
        </>
    );
};

export default Register;