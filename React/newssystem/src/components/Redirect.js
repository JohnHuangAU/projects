/*
 * @Descripttion: your project
 * @Author: John Huang
 * @Date: 2022-05-12 17:46:27
 * @LastEditors: John Huang
 * @LastEditTime: 2022-05-14 22:46:56
 */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect(to) {
  const navigate = useNavigate()
  useEffect(() => { 
      navigate(to,{replace:true})
  })

  return null
}
