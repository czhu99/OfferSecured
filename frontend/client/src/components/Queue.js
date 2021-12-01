import React from 'react';
import { Card} from 'antd';
import 'antd/dist/antd.css';
import '../css/Queue.css'

function Queue(props) {
    const { name, email } = props;

    return (
        <div className='queue-wrapper'>
            <p className="queue-name">Behavioral Interview Queue</p>
            <Card title="Name" extra={<a href="#">More</a>}>
                <p>Topic</p>
                <p>Zoom Link</p>
            </Card>

            <Card title="Name" extra={<a href="#">More</a>}>
                <p>Topic</p>
                <p>Zoom Link</p>
            </Card>

            <Card title="Name" extra={<a href="#">More</a>}>
                <p>Topic</p>
                <p>Zoom Link</p>
            </Card>

            
        </div>
    )
}

export default Queue;