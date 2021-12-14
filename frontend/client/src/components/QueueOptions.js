import React, {State, useState, useEffect} from 'react';
import { Button} from 'antd';
import { Link } from 'react-router-dom'
import '../css/QueueOptions.css';
import axios from 'axios';

function QueueOptions() {
    const [behavioralQueue, setBQ] = useState([]);
    const [codingQueue, setCQ] = useState([]);
    const [resumeQueue, setRQ] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:4000/queues/behavioral')
        .then(response => {
            if (response.data) {
                setBQ(response.data.queue);
            }
        });

        axios.get('http://localhost:4000/queues/coding')
        .then(response => {
            if (response.data) {
                setCQ(response.data.queue);
            }
        });

        axios.get('http://localhost:4000/queues/resume')
        .then(response => {
            if (response.data) {
                setRQ(response.data.queue);
            }
        });
    }, []);


    return (
    <div class="flex-grid-thirds">
        <div class="col">
            <Link to="/behavioral">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Behavioral ({behavioralQueue.length} in Queue)</Button> 
            </Link>
        </div>
        
        <div class="col"> 
        <Link to="/resume-rev">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Resume Review ({resumeQueue.length} in Queue)</Button> 
            </Link>
        </div>

        <div class="col"> 
            <Link to="/coding">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Coding ({codingQueue.length} in Queue)</Button> 
            </Link>
        </div>
    </div>
    )
}

export default QueueOptions;