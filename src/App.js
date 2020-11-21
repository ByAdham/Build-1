
import './App.css';

import SiteNav from './components/SiteNav';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import PostsFeed from './components/PostsFeed'
import Test from './components/Test'

import {Link, Route} from 'react-router-dom';
import SubmitNewPost from './components/SubmitNewPost';


function App() {  

  const posts = [
    {
    id: 0,
    userName: 'Adham',
    reviewTitle: 'I like React',
    reviewBody: 'It is starting to make sense'
    },
    {
    id: 1,
    userName: 'Chase',
    reviewTitle: 'I like React Hook Forms',
    reviewBody: 'It helps me build quickly'
    },
    {
    id: 2,
    userName: 'Sean',
    reviewTitle: 'I like Node',
    reviewBody: "I don't have to learn another language"
    }
  ]
  
  return (
  <>
  
    {/* SETTING UP ROUTES FOR THE APPLICATION  */}
    {/* No routing for the site navigation so it shows everywhere */}
    <SiteNav />
    
    {/* Route for root URL to render the landing page */}
    <Route exact path='/'>
      <Landing PostsFeed={PostsFeed}/>
    </Route>

    {/* Route to a logged in home page called PostsFeed */}
    <Route path='/feed' >
      <PostsFeed PostsFeed={posts} />
    </Route>
    
    {/* Route for the signup url to display the signup form*/}
    <Route path='/signup' >
      <Signup />
    </Route>

    {/* This is just for display for now to test the login form */}
    <Route path='/login'>
      <Login />
    </Route>
    
      {/* This is just for display for now to test the login form */}
    <Route path='/submitnewpost'>
      <SubmitNewPost />
    </Route>
    

    {/* This component will be the lower section of the landing page showing member PostsFeed*/}
    {/* <MemberPostsFeed /> */}
 
    </>
  );
}

export default App;
