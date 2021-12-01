import React, { useState } from "react";
import JoinQueue from "../components/JoinQueue";
import Queue from "../components/Queue";
import '../css/QueuePage.css'

function Behavioral(props) {
    var q = [];
    var p1 = {name: 'Chris Zhu', topic: 'MS Interview', zoomLink: 'zoom.com'};
    var p2 = {name: 'Abhi C', topic: 'Google Interview', zoomLink: 'zoom.com'};
    var p3 = {name: 'Lam Tran', topic: 'FB Interview', zoomLink: 'zoom.com'};

    q.push(p1);
    q.push(p2);
    q.push(p3);

    const[queue, setQ] = useState(q);
    const[curCount, setCurCount] = useState(queue.length);

    return (
        <div className="queue-page-items"> 
            <JoinQueue q={queue} onQChange={setQ} setCurCount={setCurCount}/>
            <div className="separator"></div>
            <Queue q={queue} desc={'Behavioral Interview Queue (' + curCount + ' currently in queue)' } onQChange={setQ} setCurCount={setCurCount}/>
        </div>
    )
}

export default Behavioral;