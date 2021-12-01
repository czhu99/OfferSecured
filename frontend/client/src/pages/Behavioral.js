import React from "react";
import JoinQueue from "../components/JoinQueue";
import Queue from "../components/Queue";
import '../css/QueuePage.css'

function Behavioral() {
    return (
        <div className="queue-page-items"> 
            <JoinQueue/>
            <div className="separator"></div>
            <Queue/>
        </div>
    )
}

export default Behavioral;