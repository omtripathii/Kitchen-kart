import User from "./UserClass";
import UserF from "./UserFun";

const About = ()=>{
    return (
        <div>
            <h1>This is about page of my application</h1>
            <UserF name = "Om (Functional)" location = "Bhopal" contact = "tripathi111om@gmail.com"/>
            <User name = "Om (Class)" location = "Bhopal" contact = "tripathi111om@gmail.com"/>

        </div>
        
    );
}

export default About;