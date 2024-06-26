import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
    }
    // You can destructure props in many way 
    // {name , location , contact} = this.props
    render(){
        return (
            <div className="userclass">
             <h2>Name : {this.props.name}</h2>
             <h2>Locatoin :{this.props.location}</h2>
             <h3>Contact :{this.props.contact}</h3>
            </div>
        );
    }
}

export default User;