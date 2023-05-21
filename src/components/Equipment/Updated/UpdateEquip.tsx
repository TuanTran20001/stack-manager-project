import React from 'react'
import Styless from './UpdateEquip.module.css'
import { Link } from 'react-router-dom'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Button, Input, Space } from 'antd';
import Arrow from '../../../assets/image/arrow.png'
import { useState } from 'react'
const UpdateEquip = () =>{
    const [chooseValue, setSelectValue] = useState('1');
    const handleChooseChange = (e: any) => {
        setSelectValue(e.target.value);
    };

return (
        <div className={Styless.UpdateEquip}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            {/* Thanh header phần cập nhật thiết bị */}
            <div className={Styless.UpdateHeader}>
                <p>Thiết bị <img src={Arrow}/> Danh sách thiết bị <img src={Arrow}/> <a href="/AddEquip">Cập nhật thiết bị</a></p>
            </div>
            <div className={Styless.UpdateText}>
                <h1>Quản lý thiết bị</h1>
            </div>
       
            {/* Bảng cập nhật thông tin thiết bị */}
            <div className={Styless.UpdateInfor}>

                <p>Thông tin thiết bị</p>

                <div className={Styless.UpdateLeft}>
                    <div className={Styless.Cipher}>
                        <span className={Styless.titlePage}>Mã thiết bị: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='KIO_01' />
                    </div>
                    <div className={Styless.nameEquip}>
                        <span className={Styless.titlePage}>Tên thiết bị: </span>
                        <span className={Styless.Icon} >*</span>
                        <Input placeholder='Kiosk' />
                    </div>
                    <div className={Styless.localEquip}>
                        <span className={Styless.titlePage}>Địa chỉ IP: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='128.172.308' />
                    </div>

                </div>
                <div className={Styless.UpdateRight}>
                    <div className={Styless.typeEquip}>
                        <span className={Styless.titlePage}>Loại thiết bị: </span>
                        <span className={Styless.Icon}>*</span>
                        <select id="option1" value={chooseValue} onChange={handleChooseChange} >
                            <option disabled={true} value="1">Chọn loại thiết bị</option>
                            <option value="2">Kiosk</option>
                            <option value="3">Display counter</option>
                        </select>
                    </div>
                    <div className={Styless.nameInput}>
                        <span className={Styless.titlePage}>Tên đăng nhập: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='Linhkyo011' />
                    </div>
                    <div className={Styless.passInput}>
                        <span className={Styless.titlePage}>Địa chỉ IP: </span>
                        <span className={Styless.Icon}>*</span>
                        <Input placeholder='CMS' />
                    </div>
                </div>
                <div className={Styless.useSevice}>
                    <span className={Styless.titlePage}>Dịch vụ sử dụng: </span>
                    <span className={Styless.Icon}>*</span>
                    <Input placeholder='Khám tim mạch x    Khám sản phụ khoa x      Khám răng hàm mặt x     Khám tai mũi họng x    Khám hô hấp x    Khám tổng quát x'/>

                <div className={Styless.Required}>
                    <span className={Styless.Icon}>*</span>
                    <span className={Styless.titlePages}>Là trường thông tin bắt buộc</span>
                </div>
                </div>
            </div>

             {/* Button phầm cập nhật thiết bị */}
            <div className={Styless.btnCancel}>
                    <Link to='/AddEquip'>  <button type='button' >Huỷ</button></Link>
            </div>

            <div className={Styless.btnAdd}>
                    <Link to='/Equipment'><button type='button'>Cập nhập</button></Link>
            </div>
        </div>
    )
}
export default UpdateEquip;
