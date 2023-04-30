import React from 'react'
import LogoLeft from '../../assets/image/LogoAlta.png'
import LogoRight from '../../assets/image/Frame.png'
import Styless from '../ResetPass/Reset.module.css'
import { Button, Input, Space } from 'antd';
import { Link } from 'react-router-dom'
 
const ResetPass = () =>{ 
    return (
        <div className={Styless.ResetPass}>
            <div className={Styless.BoxReset}>
                <div className={Styless.LoginLeft}>
                    <div className={Styless.Logoleft} >
                        <img src={LogoLeft}></img>
                    </div>
                    <div className={Styless.TitleRs}>
                        <label>Đặt lại mật khẩu mới</label> 
                    </div>
                    <div className={Styless.InputRs}>
                        <label>Mật khẩu</label>
                        <Input.Password placeholder="" />
                    </div>
                    <div className={Styless.PassRs}>
                        <label>Nhập lại mật khẩu</label>
                        <Input.Password placeholder="" />
                    </div>
                    <div className={Styless.BtnLogin}> 
                     <Link to='/Login'><button type='button'>Xác nhận</button></Link>
                    </div>
                </div>
                <div className={Styless.LoginRight}>
                    <div className={Styless.LogoRight}> 
                        <img src={LogoRight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  ResetPass;