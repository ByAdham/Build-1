
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {CardBody, Card, CardTitle, CardText, CardImg} from "reactstrap";


import Review from './Review'

export default function PostsFeed (props) {
    ////SET STATES
    //Initialize the feed data state
    const [feedData, setFeedData] = useState([]);

    
    ////CREATE ACTIONS. SET THE INITIAL FEED AND CREATE AN EVENT HANDLER FOR REFRESHING THE FEED IN 1 SPOT
    const getFeed = () => {
        axios
            .get("https://bw-comake.herokuapp.com/posts")
            .then((res) => {
                setFeedData(res.data);
            })
    };
    
    ////SIDE EFFECTS
    //On any render invoke getFeed
    useEffect(()=>{
        getFeed();
    }, [])

    console.log(feedData);

    return (
        <>

            <h1>Welcome to the neighborhood feed</h1>
            <div className="feed-wrapper">
                {feedData.map((post) => {
                    return (
                        <Card>
                            <CardImg top width="100%" src="{post.imgSrc}" alt="Card image cap" />
                            <CardBody>
                                <CardTitle id="post-title"> {post.title} </CardTitle>
                                <CardText id="post-description"> {post.description} </CardText>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        </>
     
        
           
        
    );
};
