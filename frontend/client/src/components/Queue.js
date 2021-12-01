import React, {State, useState} from 'react';
import { Card, Button} from 'antd';
import 'antd/dist/antd.css';
import '../css/Queue.css'

function Queue(props) {
    const {q, desc, onQChange, setCurCount} = props;
    const [queue, setQ] = useState(q);

    function removeFromQueue(index) {
        q.splice(index, 1);
        let updatedQueue = [...q];
        console.log(updatedQueue);
        setQ([...updatedQueue]);
        onQChange([...updatedQueue]);
        setCurCount([...updatedQueue].length)
    }

    console.log("Queue:" + q.length);

    return (
        <div className='queue-wrapper'>
            <p className="queue-name">{desc}</p>
            
            {q.map(({name, topic, zoomLink}, index) =>
                <Card title={name} extra={<Button onClick={(e)=>removeFromQueue(index)}>Remove</Button>}>
                    <p>{topic}</p>
                    <p>{zoomLink}</p>
                </Card>
            )}
            
        </div>
    )
}

export default Queue;