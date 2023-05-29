import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogoLeft from '../../assets/image/LogoAlta.png'
import Styless  from "../../components/LoginUser/LoginU.module.css";
import LogoRight from '../../assets/image/Group 341.png'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeThong from '../../assets/image/HeThong.png'
import QLXH from '../../assets/image/QuanLyXepHang.png'
import { Input } from 'antd';

const Login = () => {
   const [showPassWord, setShowPass] = useState(false);
   const eyePass = showPassWord ? faEye : faEyeSlash;
   const HandShowPass = () => {
        setShowPass(!showPassWord);
   }
   const inputPassword = showPassWord ? 'text' : 'password';
   
return (
    <div className={Styless.LoginUser}>

      <div className={Styless.BoxLoginU}>

            <div className={Styless.LogoLeft}>
                <img src={LogoLeft}></img>
            </div>

            <div className={Styless.LoginLeft}>
                <div className={Styless.NameLogin}>
                    <p>Tên đăng nhập *</p>
                    <Input className={Styless.textLogin} id="text"></Input>
                </div>
                
                <div className={Styless.NamePass}>
                    <p>Mật khẩu *</p>
                    <Input className={Styless.passLogin} id="password" type={inputPassword}></Input>          
                </div>
                
                <div className={Styless.EyesPass}>
                    <FontAwesomeIcon icon={eyePass} onClick={HandShowPass}/>
                </div>

                    <div className={Styless.Forget}>
                        <Link to="/Forgot">Quên mật khẩu?</Link>
                    </div>
            </div>

                    <div className={Styless.BtnLogin}>
                        <Link to="/Information">
                            <button>Đăng nhập</button>
                        </Link>
                    </div>
        </div>
                    <div>
                        <div className={Styless.LogoRight}> 
                            <img src={LogoRight}></img>
                        </div>
                        <div className={Styless.Right}>
                            <img src={HeThong}></img>
                            <img src={QLXH}></img>
                        </div>
                    </div>
    </div>
  )
}
export default Login;
