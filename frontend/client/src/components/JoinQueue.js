import React, {useState} from 'react';
import { Button, Input} from 'antd';
import 'antd/dist/antd.css';
import '../css/JoinQueue.css'

function JoinQueue(props) {
    const {q, onQChange, setCurCount} = props;
    const [queue, setQ] = useState(q);
    const [curName, setName] = useState('');
    const [curTopic, setTopic] = useState('');
    const [curZoom, setZoom] = useState('');

    return (
        <div className="queue-input">
            <Input onChange={(e) => {setName(e.target.value)}} size="default" placeholder="Name" />
            <Input onChange={(e) => {setTopic(e.target.value)}} size="default" placeholder="Topic" />
            <Input onChange={(e) => {setZoom(e.target.value)}} size="default" placeholder="Zoom Link" />
            <Button style={{ height: 30, fontSize: 15}} type="primary" onClick={(e=> {
                q.push({name: curName, topic: curTopic, zoomLink: curZoom});
                setQ([...q]);
                onQChange([...q]);
                setCurCount(q.length);
            })}>Join Queue</Button> 
        </div>
    )
}

export default JoinQueue;