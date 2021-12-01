import React, { useState } from "react";
import JoinQueue from "../components/JoinQueue";
import Queue from "../components/Queue";
import '../css/QueuePage.css'

function Coding() {
    var q = [];
    var p1 = {name: 'Chris Zhu', topic: 'TwoSum', zoomLink: 'zoom.com'};
    var p2 = {name: 'Abhi C', topic: 'Reverse Linked List', zoomLink: 'zoom.com'};
    var p3 = {name: 'Lam Tran', topic: 'Invert BST', zoomLink: 'zoom.com'};

    q.push(p1);
    q.push(p2);
    q.push(p3);

    const[queue, setQ] = useState(q);

    return (
        <div className="queue-page-items"> 
            <JoinQueue q={queue} onQChange={setQ}/>
            <div className="separator"></div>
            <Queue q={queue} desc={'Coding Interview Queue'} onQChange={setQ}/>
        </div>
    )
}

export default Coding;