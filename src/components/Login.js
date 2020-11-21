import React from 'react';
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import { Button, Form, Input, FormFeedback, FormGroup } from 'reactstrap'; 
import axios from 'axios';


export default function Login () {

    ////FORM STATE
    // const [initialFormValues, setInitialFormValues] = useState({
    //     email: '',
    //     password: '',
    //     }
    // )
    // const [formData, setFormData] = useState(initialFormValues);

    ////FORM VALIDATION
    //Extract the useForm hook methods
    const { register, handleSubmit, errors } = useForm();
    
    //Event handler
    const onSubmit = (data, e) => {
        //On submitting the form do something
        console.log(data);

        //Reset the form upon submitting
        e.target.reset();
    };


    return (
        
        <StyledLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input type="email" name="email" id="email" placeholder="Email" ref={register({required: true} )}/>
                    {errors.email && "Email is required"} 
                    
                    
                    <input type="password" name="password" id="password" placeholder="Password" ref={register({required: 'Please enter your password', minLength: {value: 8, message: 'Min length is 8 characters'} })}/>
                    {errors.password && <p> {errors.password.message} </p>} 
                    
                    
                    <Button color='primary' type='submit'> Submit </Button>  
            </form>          
        </StyledLogin>
        
    );
};

const StyledLogin = styled.div`
display: flex;
padding-top: 1%;
border: 2px blue dashed;
flex-flow: column wrap;
justify-content: center;
align-items: center;
min-width: 50%;

form {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    border: red solid 1px;
    min-height: 25vh;
}

.button-wrapper {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
}
`