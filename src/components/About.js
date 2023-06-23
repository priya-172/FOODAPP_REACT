import { Outlet } from 'react-router-dom';
import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';
class About extends Component{
  constructor(props){
    super(props);
    console.log("parent-constructor");
  }
 componentDidMount(){
 
    console.log("parent-componentDidMount");
  }
render(){
  console.log("parent-render");
  return (
    <div>
        <h1>About us Page</h1>
        <UserContext.Consumer>
          {({user})=><h4 className='nav_header'>{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
        <p>
           
            This is the About Page of foodgasm
        </p>
        <ProfileFunctionalComponent name={"priya"}/>
        <Profile name={"PriyaClass"}/> 
    </div>
  ); 
}
}
export default About;