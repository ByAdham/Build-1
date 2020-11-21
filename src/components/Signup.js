import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap'; 
import {useForm} from 'react-hook-form';

export default function Signup () {

    //Create form state
    //Pass data from the form to the form state
    //Send the data through a post request
    //
    //Click handler to prevent default, call 
    
    ////FORM VALIDATION
    //Extract the useForm hook methods
    const { register, handleSubmit, errors } = useForm();
    
    //Event handler
    const onSubmit = (data, e) => {
        //Do something
        console.log(data);
        //Reset the form
        e.target.reset();
    };



    return (
        
        <StyledSignUp>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" name="email" id="email" placeholder="Email" ref={register({required: "Email is required"} )}/>
                    {errors.email && errors.email.message} 
                    
                    <input type='name' name='name' id='name' placeholder='Enter your name' ref={register({required: "Name is required", minLength: {value: 2, message: "Enter 2 characters or more"}})}/>
                    {errors.name && errors.name.message} 

                    <input type='text' name='username' id='username' placeholder='Username' ref={register({required: "Please choose a user name", minLength: {value: 4, message: "Username needs to be 4 or more characters"}})}/>
                    {errors.username && errors.username.message} 

                    <input type="password" name="password" id="password" placeholder="Password" ref={register({required: "Please choose a password", minLength: {value: 6, message: "Password needs to be 6 or more characters"}})}/>
                    {errors.password && errors.password.message} 

                    <div className='accept-wrapper'>
                        <input type="checkbox" name="accept" ref={register}/>
                        {'  '}I accept the terms and conditions
                        {errors.name && errors.name.message} 
                    </div>

                    <div className='button-wrapper'>
                        <Button type="submit" size="large" color='primary'>Sign Up</Button>
                    </div>
            </form>
        </StyledSignUp>
        
    );
};

const StyledSignUp = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding-top: 1%;
    /* border: 2px blue dashed; */
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    min-width: 50%;


    form {
        /* border: green 1px solid; */
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        max-width: 33%;
        min-height: 50vh;
        font-size: 2vw;
    }


    .button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        /* padding-top: 5%; */
        /* padding-bottom: 5%; */
    }
    .accept-wrapper {
        display: flex;
        flex-flow: column;
        font-size: 2vw;
    }
`