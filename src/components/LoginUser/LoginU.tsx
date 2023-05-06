import React, { useState } from 'react'
import LogoLeft from '../../assets/image/LogoAlta.png'
import LogoRight from '../../assets/image/Group 341.png'
import Styless from '../LoginUser/LoginU.module.css'
import HeThong from '../../assets/image/HeThong.png'
import QLXH from '../../assets/image/QuanLyXepHang.png'
import { Link } from 'react-router-dom';
import { Button, Input, Space } from 'antd';

const LoginU = () => {
return (
    <div className={Styless.LoginUser}>
        <div className={Styless.BoxLoginU}>
            <div className={Styless.LoginLeft}>
                <div className={Styless.Logoleft} >
                    <img src={LogoLeft}></img>
                </div>
                <div className={Styless.InputLg}>
                    <label>Tên đăng nhập *</label>
                    <Input placeholder='' />
                </div>
                <div className={Styless.PassLg}>
                    <label>Mật khẩu *</label>
                    <Input.Password placeholder="" />
                </div>
                <div className={Styless.PassForgot}>
                    <Link to="/Forgot">Quên mật khẩu ?</Link>
                </div>
                <div className={Styless.ButtonLg}>
                    <Link to="/Information"><button>Đăng nhập</button></Link>
                </div>
            </div>

            <div className={Styless.LoginRight}>
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
export default LoginU;
