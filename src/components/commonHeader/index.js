import React from 'react'
import { Layout, Avatar, Button, Dropdown } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './index.css'
import{ useDispatch } from 'react-redux'
import { collapseMenu } from '../../store/reducers/tab'

const { Header } = Layout;

const CommonHeader = ({collapsed}) => {
    // 登出
    const logout = () => {

    }
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" >
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a  onClic={() => logout} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            )
        }
    ];
    // 创建 dispatch
    const dispatch = useDispatch()
    //点击展开收起按钮 click
    const setCollapsed= () =>{
        console.log(collapsed)
        dispatch(collapseMenu())

    }
    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={<MenuUnfoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
                onClick={() => setCollapsed()}
            />
            <Dropdown menu={{items}}>
                <Avatar size={36} src={<img src={require("../../assets/images/user.png")} />} />
            </Dropdown>
            
            

        </Header>
    )
}
export default CommonHeader