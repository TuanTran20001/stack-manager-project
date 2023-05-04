import React from 'react'
import Styless from '../TopBar/Top.module.css'
import Ring from '../../assets/image/Frame271.png'
import Ava from '../../assets/image/avatar1.webp'
import { Link } from 'react-router-dom'
  
const TopBar = () => {
  return (
    <div className={Styless.TopBar}>
      <div className={Styless.ContentLeft}>
          <p>Thông tin cá nhân</p>
      </div>
      <div className={Styless.ImgRing}>
          <img src={Ring} ></img>
      </div>
      <div className={Styless.ImgAvt}>
          <Link to="" ><img src={Ava}></img></Link>
      </div>
      <div className={Styless.ContentRight}>
        <p className={Styless.Name}>Xin Chào</p>
        <p className={Styless.Names}>Trần Anh Tuấn</p>
      </div>
    </div>
  )
}
export default TopBar;
