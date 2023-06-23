import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        //create state
        //whole state is one big object
        this.state={
            userInfo:{
              name:"Dummy Name",
              location:"Dummy Location"
            },
          };
        console.log("child-constructor");
        
    }
   async componentDidMount(){
        //API CALL
        const data= await fetch("https://api.github.com/users/priya-172");
        const json = await data.json();
        this.setState({
          userInfo: json,
        });
    //    this.timer=setInterval(()=>{
    //         console.log("namste darsakho");
    //     },1000);
        console.log("child-componentDidMount");   
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count != prevState.count){

        }
    }
componentWillUnmount(){
 //clearInterval(this.timer);
 console.log("componentWillUnmount");  
}
render()    {

    const {count} = this.state;
    console.log("child-render"); 
   return (
    <div>
    <h1>profile class component</h1>
    <img src={this.state.userInfo.avatar_url}/>
    <h2>Name:{this.state.userInfo.name}</h2>
    <h2>location:{this.state.userInfo.bio}</h2>
   </div>);
    }

}
export default Profile;