import React from 'react';
import { Button, Input} from 'antd';
import 'antd/dist/antd.css';
import '../css/Queue.css'

function JoinQueue() {
    return (
        <div className="queue-input">
            <Input size="default" placeholder="Name" />
            <Input size="default" placeholder="Topic" />
            <Input size="default" placeholder="Zoom Link" />
            <Button style={{ height: 30, fontSize: 15 }} type="primary">Join Queue</Button> 
        </div>
    )
}

export default JoinQueue;