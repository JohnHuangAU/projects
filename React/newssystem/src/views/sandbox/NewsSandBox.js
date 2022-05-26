/*
 * @Descripttion: your project
 * @Author: John Huang
 * @Date: 2022-05-11 00:16:00
 * @LastEditors: John Huang
 * @LastEditTime: 2022-05-16 23:10:43
 */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideMenu from "../../components/sanbox/SideMenu";
import TopHeader from "../../components/sanbox/TopHeader";
import Home from "./home/Home";
import Nopermission from "./nopermission/Nopermission";
import RightList from "./right-manage/RightList";
import RoleList from "./right-manage/RoleList";
import UserList from "./user-manage/UserList";

import { Layout } from "antd";
import "./NewSandBox.css"
const { Content } = Layout;

export default function NewsSandBox() {
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/user-manage/list" element={<UserList />} />
                        <Route path="/right-manage/role/list" element={<RoleList />} />
                        <Route path="/right-manage/right/list" element={<RightList />} />
                        <Route path="/" element={<Navigate to="/home" />} exact />
                        <Route path="*" element={<Nopermission />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}
