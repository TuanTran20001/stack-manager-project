import React from 'react'
import { Link } from 'react-router-dom'
import Styless from './AccountAdd.module.css'
import MenuBar from '../../../../pages/MenuBar/Menu'
import TopBar from '../../../../pages/TopBar/Top'
import { Button, Input, Space } from 'antd';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Arrow from '../../../../assets/image/arrow.png'
import { useState } from 'react'

const AddEquip = () => {
    const [chooseValue, setSelectValue] = useState('1');
    const handleChooseChange = (event: any) => {
        setSelectValue(event.target.value);
    };
    const [showPassWord1, setShowPass1] = useState(false);
    const eyePass1 = showPassWord1 ? faEye : faEyeSlash;
    const HandShowPass1 = () => {
         setShowPass1(!showPassWord1);
    }
    const inputPassword1 = showPassWord1 ? 'text' : 'password';

    const [showPassWord2, setShowPass2] = useState(false);
    const eyePass2 = showPassWord2 ? faEye : faEyeSlash;
    const HandShowPass2 = () => {
         setShowPass2(!showPassWord2);
    }
    const inputPassword2 = showPassWord2 ? 'text' : 'password';
    
    
return (
        <div className={Styless.AddEquip}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            {/* Thanh header phần thêm tài khoản */}
            <div className={Styless.AddHeader}>
                <p>Cài đặt hệ thống <img src={Arrow} alt=''/> <a className={Styless.ds} href="/Equipment">Quản lý tài khoản</a> <img src={Arrow} alt=''/> <a href="/AddEquip">Thêm tài khoản</a></p>
            </div>

            <div className={Styless.AddText}>
                <h1>Quản lý tài khoản</h1>
            </div>

            {/* Bảng thêm tài khoản */}
            <div className={Styless.AddInfor}>
                <p>Thông tin thiết bị</p>

                <div className={Styless.AddLeft}>
                    <div className={Styless.Cipher}>
                        <span className={Styless.titlePage}>Họ tên</span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Nhập họ tên' />
                    </div>
                    <div className={Styless.nameEquip}>
                        <span className={Styless.titlePage}>Số điện thoại</span>
                        <span className={Styless.Icon} >*</span>
                        <Input placeholder='Nhập số điện thoại' />
                    </div>
                    <div className={Styless.localEquip}>
                        <span className={Styless.titlePage}>Email</span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Nhập email' />
                    </div>
                    <div className={Styless.localEquips}>
                        <span className={Styless.titlePage}>Vai trò</span>
                        <span className={Styless.Icon}>*</span>
                        <select id="designation" value={chooseValue} onChange={handleChooseChange} >
                            <option disabled={false} value="1">Chọn vai trò</option>
                            <option value="2">Kế toán</option>
                            <option value="3">Quản lý</option>
                            <option value="4">Admin</option>
                        </select>
                    </div>
                </div>

                <div className={Styless.AddRight}>

                    <div className={Styless.nameInput}>
                        <span className={Styless.titlePage}>Tên đăng nhập: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Nhập tài khoản' />
                    </div>
                    <div className={Styless.passInput}>
                        <span className={Styless.titlePage}>Mật Khẩu: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input className={Styless.passLogin} id="password" type={inputPassword1}></Input> 

                        <div className={Styless.EyesPass1}>
                            <FontAwesomeIcon icon={eyePass1} onClick={HandShowPass1}/>
                        </div>
                    </div>
                   
                    <div className={Styless.nameInput}>
                        <span className={Styless.titlePage}>Nhập lại mật khẩu: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input className={Styless.passLogin} id="password" type={inputPassword2}></Input> 
                        <div className={Styless.EyesPass2}>
                            <FontAwesomeIcon icon={eyePass2} onClick={HandShowPass2}/>
                        </div>
                    </div>
                    <div className={Styless.typeEquip } style={{marginTop:'7.7px'}}>
                        <span className={Styless.titlePage}>Tình trạng</span>
                        <span className={Styless.Icon}>*</span>
                        <select id="designation" value={chooseValue} onChange={handleChooseChange} >
                            <option disabled={false} value="1">Hoạt động</option>
                            <option value="2">Tất cả</option>
                            <option value="3">Ngưng hoạt động</option>
                            <option value="4">Hoạt động</option>
                        </select>
                    </div>   
                </div>
            </div>

            {/* Button phần thêm tài khoản */}
                <div className={Styless.btnCancel}>
                    <Link to='/AccountList'><button type='button' >Huỷ</button></Link>
                </div>

                <div className={Styless.btnAdd}>
                    <Link to='/AccountList'><button type='button' >Thêm</button></Link>
                </div>

        </div>
    )
}
export default AddEquip;