import React, { useEffect }from 'react'
import { Col, Row, Card } from 'antd';
import './home.css'
import { getData } from '../../api'


const Home = () => {
    const userImg = require("../../assets/images/user-default.png")
    useEffect(()=>{
        getData().then(() =>{

        })
    },[]) 
    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={userImg} />
                        <div className="userinfo">
                            <p className="name">Admin</p>
                            <p className="access">超级管理员</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p>上次登陆的时间： <span>today</span></p>
                        <p>上次登陆的地点： <span>Bordeaux</span></p>
                    </div>
                </Card>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
}

export default Home