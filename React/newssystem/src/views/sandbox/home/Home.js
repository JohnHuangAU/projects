/*
 * @Descripttion: your project
 * @Author: John Huang
 * @Date: 2022-05-12 00:56:04
 * @LastEditors: John Huang
 * @LastEditTime: 2022-05-30 22:47:47
 */
import { Button } from "antd"
import React from "react"
import axios from "axios"

export default function Home() {
    const ajax = () => {
        // 获取数据
        // axios.get("http://localhost:8000/posts/1").then(res=>{
        //     console.log(res.data)
        // })
        // 增
        // axios.post("http://localhost:8000/posts", {
        //     titile: "3333",
        //     author: "xiaoming",
        // })
        // 改 直接替换，author被删了
        // axios.put("http://localhost:8000/posts/2",{
        //     title:"11111-修改"
        // }).then(res =>{
        //     console.log(res.data)
        // })
        // 更新 补丁请求
        // axios.patch("http://localhost:8000/posts/2", {
        //     title:"222222"
        // }).then(res=>{
        //     console.log(res.data)
        // })
        // 删除 delete
        // axios.delete("http://localhost:8000/posts/2")

        // _embed
        // axios.get("http://localhost:8000/posts?_embed=comments").then(res=>{
        //     console.log(res.data)
        // })
        // _expand
        axios.get("http://localhost:8000/comments?_expand=post").then((res) => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <Button type="primary" onClick={ajax}>
                Button
            </Button>
        </div>
    )
}
