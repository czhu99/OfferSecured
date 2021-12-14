import axios from "axios";
import React, { useState, useEffect } from "react";
import JoinQueue from "../components/JoinQueue";
import Queue from "../components/Queue";
import '../css/QueuePage.css'

function Behavioral(props) {

    const[queue, setQ] = useState([]);
    const[curCount, setCurCount] = useState(queue.length);

    useEffect(() => {
        axios.get('http://localhost:4000/queues/behavioral')
        .then(response => {
            if (response.data) {
                setQ(response.data.queue);
                setCurCount(response.data.queue.length);
            }
        });
    }, []);

    return (
        <div className="queue-page-items"> 
            <JoinQueue q={queue} onQChange={setQ} setCurCount={setCurCount}/>
            <div className="separator"></div>
            <Queue q={queue} desc={'Behavioral Interview Queue (' + curCount + ' currently in queue)' } onQChange={setQ} setCurCount={setCurCount}/>
        </div>
    )
}

export default Behavioral;