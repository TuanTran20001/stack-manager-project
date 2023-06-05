import React, { useState } from 'react'
import LogoLeft from '../../assets/image/LogoAlta.png'
import LogoRight from '../../assets/image/Group 341.png'
import HeThong from '../../assets/image/HeThong.png'
import QLXH from '../../assets/image/QuanLyXepHang.png'
import Styless from '../ForgotPass/Forgotpass.module.css'
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const Forgotpass = () => {
  return (
    <div className={Styless.Forgotpss}>
      <div className={Styless.BoxForgotpss}>
        <div className={Styless.ForgotLeft}>
          <div className={Styless.Logoleft} >
            <img src={LogoLeft}/>
          </div>
          <div className={Styless.txtLeft}>
            <label>Đặt lại mật khẩu</label>
          </div>
          <div className={Styless.txtLefts}>
            <label>Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
          </div>
          <div className={Styless.InputFg}>
              <Input placeholder='' />
          </div>
          <div className={Styless.Cancel}>
          <Link to='/Login'><button type='button'>Hủy</button></Link>
          </div>
          <div className={Styless.Continue}>
            <Link to='/Reset'><button type='button'>Tiếp tục</button></Link>
          </div>
        </div>
          <div className={Styless.ForgotRight}>
            <div className={Styless.LogoRight}>
                <img src={LogoRight}/>
            </div>
            <div className={Styless.txtRight}>
                <img src={HeThong}/>
            </div>
            <div className={Styless.txtRights}>
                <img src={QLXH}/>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Forgotpass;
