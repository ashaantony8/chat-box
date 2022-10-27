import React from 'react';
import './Profile.css'
import {Link} from 'react-router-dom';
class Profile extends React.Component{
    render(){
        return(
            <div>
              
                <h2>{this.props.name}</h2>
                <Link to="/">Back to chat</Link>
            </div>
        );
    }
}

export default Profile;