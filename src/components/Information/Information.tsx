import React from 'react'
import MenuBar from '../../pages/MenuBar/Menu'
// import LogoLeft from '../../assets/image/LogoAlta.png'
import TopBar from '../../pages/TopBar/Top'
import Styless from '../Information/Information.module.css'
import Avatar from '../../assets/image/avatar1.webp'
import Cam from '../../assets/image/Camera.png'
import Input from 'antd/es/input/Input' 
const Information = () => {
  return (
    <div className={Styless.Information}>
      <div className={Styless.MenuBar}>
        <MenuBar></MenuBar>
      </div>
      <div className={Styless.TopBar}>
        <TopBar></TopBar>
      </div>
      <div className={Styless.ContentInfor}>
        <p>Thông tin cá nhân</p>
      </div>
      <div className={Styless.TableInfo}>
        <div className={Styless.Avatar}>
          <img src={Avatar} alt=''/>
        </div>
        <div className={Styless.Camera}>
          <img src={Cam} alt=''/>
        </div>
        <div className={Styless.Names}>
          <label>Trần Anh Tuấn</label>
        </div>
        <div className={Styless.InforLeft}>
          <div className={Styless.NameUser}>
            <p>Tên người dùng</p>
            <Input placeholder='Trần Anh Tuấn'/>
          </div>
          <div className={Styless.Number}>
            <p>Số điện thoại</p>
            <Input placeholder='0344334984'/>
          </div>
          <div className={Styless.Email}>
            <p>Email :</p>
            <Input placeholder='anhtuancntt2001@gmail.com'/>
          </div>
        </div>
        <div className={Styless.InforRight}>
          <div className={Styless.NameLogin}>
            <p>Tên đăng nhập</p>
            <Input placeholder='anhtuan123'/>
          </div>
          <div className={Styless.Pass}>
            <p>Mật khẩu</p>
            <Input placeholder='123456'/>
          </div>
          <div className={Styless.Vaitro}>
            <p>Vai Trò :</p>
            <Input placeholder='Intership Frontend'/>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Information;
