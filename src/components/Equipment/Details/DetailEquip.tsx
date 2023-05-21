import React from 'react'
import Styless from './DetailEquip.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import Square from '../../../assets/image/Edit Square.png'
import Arrow from '../../../assets/image/arrow.png'
import { Link } from 'react-router-dom';
const  DetailEquip= () => {

return (
    <div className={Styless.DetailInfor}>
      <MenuBar></MenuBar>
      <TopBar></TopBar>
         {/* Thanh header phần cập nhật thiết bị */}
         <div className={Styless.DetailHeader}>
                <p>Thiết bị <img src={Arrow}/> Danh sách thiết bị <img src={Arrow}/> <a href="/AddEquip">Chi tiết thiết bị</a></p>
        </div>

         <div className={Styless.DetailText}>
            <h1>Quản lý thiết bị</h1>
        </div>

        <div className={Styless.DetailInfo}>
            
            <p>Thông tin thiết bị</p>
          
            <div className={Styless.DetailLeft}>
                <div className={Styless.inforLeft}>
                    <h4 className={Styless.menuDetail}>Mã thiết bị:</h4>
                    <h4 className={Styless.InforDetail}>KIO_01</h4>
                    
                </div>

                <div className={Styless.inforLeft}>
                    <h4 className={Styless.menuDetail}>Tên thiết bị:</h4>
                    <h4 className={Styless.InforDetail}> Kiosk</h4>
                </div>

                <div className={Styless.inforLeft}>
                    <h4 className={Styless.menuDetail}>Địa chỉ IP:</h4>
                    <h4 className={Styless.InforDetail}>128.172.308</h4>
                </div>
            </div>

            <div className={Styless.DetailRight}>
                <div className={Styless.inforRight}>
                    <h4 className={Styless.menuDetail}>Loại thiết bị:</h4>
                    <h4 className={Styless.InforDetail}> Kiosk</h4>
                </div>

                <div className={Styless.inforRight}>
                    <h4 className={Styless.menuDetail}>Tên đăng nhập:</h4>
                    <h4 className={Styless.InforDetail}> Linhkyo011</h4>
                </div>

                <div className={Styless.inforRight}>
                    <h4 className={Styless.menuDetail}>Mật khẩu:</h4>
                    <h4 className={Styless.InforDetail}> CMS</h4>
                </div>
            </div>

            <div className={Styless.Inline}>
                    <h4 className={Styless.menuDetail}>Dịch vụ sử dụng:</h4>
                    <h4 className={Styless.InforDetails}> Khám tim mạch, Khám sản - Phụ khoa,Khám răng hàm mặt, Khám tai mũi họng, khám hô hấp, Khám tổng quát.</h4>
            </div>

            <div className={Styless.UpdateDetail}>
                    <Link to='/UpdateEquip'><img src={Square}/> Cập nhật thiết bị</Link>
            </div>
        </div>
    </div>

    )
}
export default DetailEquip
