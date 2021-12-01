import React from 'react';
import { Button} from 'antd';
import { Link } from 'react-router-dom'
import '../css/QueueOptions.css';

function QueueOptions(props) {
    const {counts} = props;

    return (
    <div class="flex-grid-thirds">
        <div class="col">
            <Link to="/behavioral">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Behavioral ({counts[0]} in Queue)</Button> 
            </Link>
        </div>
        
        <div class="col"> 
        <Link to="/resume-rev">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Resume Review ({counts[0]} in Queue)</Button> 
            </Link>
        </div>

        <div class="col"> 
            <Link to="/coding">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Coding ({counts[0]} in Queue)</Button> 
            </Link>
        </div>
    </div>
    )
}

export default QueueOptions;