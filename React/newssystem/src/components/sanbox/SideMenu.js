/*
 * @Descripttion: your project
 * @Author: John Huang
 * @Date: 2022-05-12 00:47:47
 * @LastEditors: John Huang
 * @LastEditTime: 2022-05-19 22:23:10
 */
import React from "react";
import { Layout, Menu } from "antd";
import "./index.css";
import { UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;
function getItem(key, label, icon, children) {
    return {
        key,
        label,
        icon,
        children,
    };
}

const items = [
    getItem("/home", "首页", <UserOutlined />),
    getItem("/user-manage", "用户管理", <UserOutlined />, [
        getItem("/user-manage/list", "用户列表", <UserOutlined />)]),
    getItem("/right-manage", "权限管理", <UserOutlined />, [
        getItem("/right-manage/role/list", "角色管理", <UserOutlined />),
        getItem("/right-manage/right/list", "权限列表", <UserOutlined />),
    ]),
];
function SideMenu(props) {
    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo">全球新闻发布系统</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={items}
                onClick ={()=>props.history.push(items.key)}
            />
        </Sider>
    );
}
export default withRouter(SideMenu)