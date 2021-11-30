import React from 'react';
import { Button} from 'antd';
import { Link } from 'react-router-dom'
import '../css/QueueOptions.css';

function QueueOptions() {
    return (
    //     <Row gutter={24}>
    //     <Col className="gutter-row" onClick={console.log("Success")} span={8}>
    //       <div style={style}>Behavioral Interview</div>
    //     </Col>
    //     <Col className="gutter-row" span={8}>
    //       <div style={style}>Resume Review</div>
    //     </Col>
    //     <Col className="gutter-row" span={8}>
    //       <div style={style}>Coding Interview</div>
    //     </Col>
    //   </Row>
    <div class="flex-grid-thirds">
        <div class="col">
            <Link to="/behavioral">
                <Button style={{ height: 300, fontSize: 40 }} type="primary">Behavioral</Button> 
            </Link>
        </div>
        
        <div class="col"> 
            <Button style={{ height: 300, fontSize: 40 }} type="primary">Resume Review</Button>
        </div>

        <div class="col"> 
            <Button style={{ height: 300, fontSize: 40 }} type="primary">Coding</Button> </div>
        </div>
    )
}

export default QueueOptions;