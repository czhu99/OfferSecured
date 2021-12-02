import React from "react";
import "../css/UserPage.css"
import defaultPhoto from '../assets/default_image.png'
import {Card} from 'antd'
import 'antd/dist/antd.css';

function UserPage() {
    let userInfo = {name: "User Name", photo: defaultPhoto}
    return (
        <div>
            <div className="profile-wrapper">
                <div className="profile-header">
                    <img className="profile-photo" src={defaultPhoto}></img>
                    <div className=""> {userInfo.name} </div>
                </div>

                
            </div>

            <Card title="User Info">
                <p>Industry:</p>
                <p>Years of Experience:</p>
                <p>Job Role:</p>
                <p>Resume Link:</p>
            </Card>
        </div>
    )
}

export default UserPage;