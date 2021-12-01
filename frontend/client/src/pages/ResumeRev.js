import React, { useState } from "react";
import JoinQueue from "../components/JoinQueue";
import Queue from "../components/Queue";
import '../css/QueuePage.css'

function Resume() {
    var q = [];
    var p1 = {name: 'Chris Zhu', topic: 'Experience', zoomLink: 'zoom.com'};
    var p2 = {name: 'Abhi C', topic: 'Format', zoomLink: 'zoom.com'};
    var p3 = {name: 'Lam Tran', topic: 'Cover Letter', zoomLink: 'zoom.com'};

    q.push(p1);
    q.push(p2);
    q.push(p3);

    const[queue, setQ] = useState(q);

    return (
        <div className="queue-page-items"> 
            <JoinQueue q={queue} onQChange={setQ}/>
            <div className="separator"></div>
            <Queue q={queue} desc={'Resume Review Queue'} onQChange={setQ}/>
        </div>
    )
}

export default Resume;