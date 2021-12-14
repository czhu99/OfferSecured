import React, {State, useState, useEffect} from 'react';
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

    return (
        <div className='queue-wrapper'>
            <p className="queue-name">{desc}</p>
            
            {q.map(({name, topic, link}, index) =>
                <Card title={name} extra={<Button onClick={(e)=>removeFromQueue(index)}>Remove</Button>}>
                    <p>{topic}</p>
                    <p>{link}</p>
                </Card>
            )}
            
        </div>
    )
}

export default Queue;