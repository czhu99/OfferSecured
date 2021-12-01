import React, {State, useState} from 'react';
import { Card} from 'antd';
import 'antd/dist/antd.css';
import '../css/Queue.css'

function Queue(props) {
    const {q} = props;
    //props.q.push({name: 'Vetrie S', topic: 'Jump Interview', zoomLink: 'zoom.com'})
    //q.shift();
    const [queue, setQ] = useState(q);

    return (
        <div className='queue-wrapper'>
            <p className="queue-name">Behavioral Interview Queue</p>
            
            {q.map(({name, topic, zoomLink}) =>
                <Card title={name} extra={<a href="#">More</a>}>
                    <p>{topic}</p>
                    <p>{zoomLink}</p>
                </Card>
            )}
            
        </div>
    )
}

export default Queue;