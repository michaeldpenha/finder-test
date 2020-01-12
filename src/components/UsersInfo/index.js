import React from 'react';
import { useStateValue } from '../../context/state';
import Link from '../Link';

import  "./styles.css";

const UsersInfo =  () => {
    const context = useStateValue();
    const { user } = context;

    const { login, avatar_url, company, public_repos, html_url, name, public_gists } = user;

    return (
        <div className="user-info-wrapper">
            <div  className="user-avatar-wrapper">
                <img src={avatar_url} alt={'avatar'}/>
                <div className="visit-button">
                    <Link to={html_url}><div>Visit Profile</div></Link>
                </div>
            </div>
            <div className="user-content-wrapper">
                <div className="user-content">
                    <label name="username" className="user-content-label">Name</label>
                    <label className="user-content-value">{name}</label>
                </div>
                <div className="user-content">
                    <label name="username" className="user-content-label">Username</label>
                    <label className="user-content-value">{login}</label>
                </div>
                <div className="user-content">
                    <label name="company" className="user-content-label">Company</label>
                    <label className="user-content-value">{company}</label>
                </div>
                <div className="user-content">
                    <label name="public-repos" className="user-content-label">Public Repos</label>
                    <label className="user-content-value">{public_repos}</label>
                </div>
                <div className="user-content">
                    <label name="public-repos" className="user-content-label">Public Gists</label>
                    <label className="user-content-value">{public_gists}</label>
                </div>
            </div>
        </div>
    )
}

export default UsersInfo;
