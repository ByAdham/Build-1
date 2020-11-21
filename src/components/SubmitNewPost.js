import React, {useEffect, useState} from 'react';

import styled from 'styled-components';
import { Button } from 'reactstrap'; 
import {useForm} from 'react-hook-form';
import axios from 'axios';


export default function SubmitNewPost () {
    ////STATES
    //Form data state to store the data before sending it to the API
    const [postFormData, setPostFormData] = useState({});
    
    
    //Submit event handler
    const onSubmit = function (data, event) {
        // console.log(data);
        
        //Update form state
        setPostFormData(data);
        

        // axios
        //     .post 

        //Clear the form
        event.target.reset();

        //Redirect the user to the posts page showing all posts
    
    };

    console.log(postFormData);
    ////FORM VALIDATION
    const { register, handleSubmit, errors } = useForm();

    ////SIDE EFFECTS
    //Send the data to the API
    useEffect((postFormData)=> {
        axios
            .post('https://bw-comake.herokuapp.com/posts', postFormData)
            .then(res => {console.log(res);
            }, [postFormData])
    });

    return (
        <StyledFormWrapper>
        <div className='new-post-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    ref={register({required: 'Please choose a title for your post', minLength: {value: 4, message: "Title can't be shorter than 4 characters"}})}
                    name='title'
                    type='text'
                    placeholder="Post Title"
                    >
                </input>
                {errors.title && errors.title.message}
                

                <textarea
                    ref={register({required: 'Please enter a description', maxLength:{value: 25, message: 'Post limit is 250 characters'}})}
                    name='description'
                    type="text"
                    placeholder="Tell us what's happening"
                    >
                </textarea>
                {errors.description && errors.description.message}

                <input
                    ref={register}
                    name='imgSrc'
                    type='file'
                    accept="image/png, image/jpeg"
                    >
                </input>

                <Button 
                type='submit'
                color='primary'>
                    Submit
                </Button>
            </form>
        </div>
        </StyledFormWrapper>
    )
}

const StyledFormWrapper = styled.div `
    border: green 5px dashed;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-flow: column;
        min-height: 25vh;
        justify-content: space-between;
    }
`