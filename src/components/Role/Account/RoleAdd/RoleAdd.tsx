import React from 'react'
import { Link } from 'react-router-dom'
import Styless from './RoleAdd.module.css'
import MenuBar from '../../../../pages/MenuBar/Menu'
import TopBar from '../../../../pages/TopBar/Top'
import { Button, Input, Space } from 'antd';
import Arrow from '../../../../assets/image/arrow.png'
import { useState } from 'react'
const AddEquip = () => {
    const [chooseValue, setSelectValue] = useState('1');
    const handleChooseChange = (event: any) => {
        setSelectValue(event.target.value);
    };
    
return (
        <div className={Styless.AddEquip}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            {/* Thanh header phần thêm tài khoản */}
            <div className={Styless.AddHeader}>
                <p>Cài đặt hệ thống <img src={Arrow}/> <a className={Styless.ds} href="/Equipment">Quản lý tài khoản</a> <img src={Arrow}/> <a href="/AddEquip">Thêm tài khoản</a></p>
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
                </div>

                <div className={Styless.AddRight}>
                    <div className={Styless.typeEquip}>
                        <span className={Styless.titlePage}>Loại thiết bị: </span>
                        <span className={Styless.Icon}>*</span>
                        <select id="designation" value={chooseValue} onChange={handleChooseChange} >
                            <option disabled={false} value="1">Chọn loại thiết bị</option>
                            <option value="2">Kiosk</option>
                            <option value="3">Display counter</option>
                        </select>
                    </div>
                    <div className={Styless.nameInput}>
                        <span className={Styless.titlePage}>Tên đăng nhập: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Nhập tài khoản' />
                    </div>
                    <div className={Styless.passInput}>
                        <span className={Styless.titlePage}>Mật Khẩu: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Nhập mật khẩu' />
                    </div>
                </div>

                <div className={Styless.useSevice}>
                <div className={Styless.AddRight}>
                    <div className={Styless.typeEquip}>
                        <span className={Styless.titlePage}>Loại thiết bị: </span>
                        <span className={Styless.Icon}>*</span>
                        <select id="designation" value={chooseValue} onChange={handleChooseChange} >
                            <option disabled={false} value="1">Chọn loại thiết bị</option>
                            <option value="2">Kiosk</option>
                            <option value="3">Display counter</option>
                        </select>
                    </div>
                    <div className={Styless.nameInput}>
                        <span className={Styless.titlePage}>Tên đăng nhập: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Nhập tài khoản' />
                    </div>
                </div>
                </div>
            </div>

            {/* Button phần thiết bị */}
                <div className={Styless.btnCancel}>
                    <Link to='/Equipment'><button type='button' >Huỷ</button></Link>
                </div>

                <div className={Styless.btnAdd}>
                    <Link to='/Equipment'><button type='button' >Thêm thiết bị</button></Link>
                </div>

        </div>
    )
}
export default AddEquip;