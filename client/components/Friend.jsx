import React from 'react';
import { Link } from 'react-router-dom';
import PublicProfile from './PublicProfile.jsx'

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    log() {
        console.log('cat mix');
    }

    changeFriend() {
        this.props.changeFriend(this.props.friend.username);
    }

    render() {
        console.log('Friends props', this.props);
        return (
            <div>
                <li>
                <Link to={`/publicprofiles/${this.props.friend.username}`} >{ this.props.friend.profilePicUrl } { this.props.friend.username }</Link>
                </li>
            </div>
        );
    }
}

export default Friend;