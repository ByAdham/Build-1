import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {Button} from 'reactstrap';
import PostsFeed from './PostsFeed';


export default function Landing (props) {
    ////CREATE BUTTON CLICK HANDLERS USING USEHISTORY
    //Store the useHistory hook -envoked- in a variable
    const history = useHistory();

    //Login button
    const routeToLogin = function (evt) {
        evt.preventDefault();
        history.push('/login');
    }

    //Signup button
    const routeToSignup = function (evt) {
        evt.preventDefault();
        history.push('/signup');
    }

    return (
        <>
        <div> 
            <StyledBanner>
                <div className='banner-wrapper'> 
                    <img className='banner-image' src= 'https://relaxedpowerful.s3.us-east-2.amazonaws.com/landing-banner.jpg' alt='banner'/> 
                </div>
                <div className='headline-wrapper'>
                    <h1>
                        <span>
                            Co-Make
                        </span>
                    </h1>
                    <h3> 
                        <span>
                            The best place for community cooperation
                        </span>
                    </h3>
                </div>
                <div className='buttons-wrapper'> 
                   {/* Big buttons for desktop */}

                    
                    <Button color='primary' size='lg' className='big' onClick={routeToSignup}>
                        Sign up 
                    </Button> {'  '}
                    
                    <div className='hdivider'></div>
                    <Button color='primary' size='lg' className='big' onClick={routeToLogin}>
                        Already co-making? Login
                    </Button> {'  '}

                {/* Small buttons for smaller screens*/}
                    <Button size="sm" color='primary' className='small' onClick={routeToSignup}>
                        Sign up 
                    </Button>
                    <div className='vdivider'></div>
                    <Button size="sm" color='primary' className='small' onClick={routeToLogin}>
                        Existing Member? Login
                    </Button>
                  
                </div>
            </StyledBanner>
        </div>
        </>    
    )
};

const StyledBanner =styled.div `
    html {
    scroll-behavior: smooth;
    }

    border: purple 2px dashed;
    position: relative;
    margin-top: 20px;    
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    ////MEDIA QUERIES
    @media (max-width: 500px){
    /* border: 5px red dashed; */
    flex-flow: column wrap;
    max-width: 100%;
        Button {
            
        }
        .buttons-wrapper {
            flex-flow: column;
            position: absolute;
            bottom: 1%;
        }
        .big {
            display: none;
        }
        /* .headline-wrapper{
            border: 1px yellow solid;
        } */
        h1 h3 {
            font-size: 1vh;
        }
        .hdivider {
            display: none;
        }
    }
    

    @media (min-width: 501px) {
        .small{
            display: none;
        }
    }


////STYLING
    Button {
        width: 100%;
        
    }
    .banner-wrapper{
        /* border: 1px red solid; */
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        /* max-width: 90%; */
        /* max-height: 20%; */
    }
    .banner-image {
        width: 100%;
        height: auto;
    }
    .headline-wrapper {
        /* border: white  2px solid; */
        display: flex;
        flex-flow: column;
        position: absolute; 
        top: 5%; 
        align-items: baseline;
        width: 100%; 
    }
    .buttons-wrapper {
        /* border: yellow 2px solid; */
        position: absolute;
        display: flex;
        justify-content: space-around;
        min-width: 30%;
    }

    span { 
        color: white; 
        font: bold Helvetica, Sans-Serif; 
        letter-spacing: -1px;  
        background: rgb(0, 0, 0); /* fallback color */
        background: rgba(0, 0, 0, 0.7);
   }
   .hdivider{
    width:15px;
    height:auto;
    display:inline-block;
    }
    .vdivider{
    width:auto;
    height:5px;
    /* display:block; */
}
`

