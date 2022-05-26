/*
 * @Descripttion: your project
 * @Author: John Huang
 * @Date: 2022-05-12 00:47:34
 * @LastEditors: John Huang
 * @LastEditTime: 2022-05-19 00:15:53
 */
import React, { useState } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    UserOutlined  
} from "@ant-design/icons";

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const menu = (
        <Menu
            items={[
                {
                    label: "超级管理员",
                },

                {
                    label: "退出登录",
                    danger: true,
                },
            ]}
        />
    );

    return (
        <Header className="site-layout-background" style={{ padding: "0 16px" }}>
            {collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />}
            <div style={{ float: "right" }}>
                <span>欢迎Admin回来</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    );
}
