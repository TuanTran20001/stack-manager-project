import React from 'react'
import classes from './Details.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopMenuBar from '../../../pages/TopBar/Top'
import Update from '../../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Vector from '../../../assets/image/arrow.png'
import Return from '../../../assets/image/Back.png'
const Detail = ()=> {
  return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={classes.A}>
                 <p>Cấp số <img src={Vector} alt=''/><a className={classes.TB} href="/List">Danh sách cấp số</a><img src={Vector} alt=''/><a href='/Details'>Chi tiết</a></p>
                 <h1>Quản lý cấp số</h1>
              </div>
      <div className={classes.DetailEqui}>
                <div className={classes.DetailText}>
                    <label>Thông tin cấp số</label>
                </div>
          <div className={classes.DetailEquiR}>
            <div className={classes.TextDetail}>
              <p className={classes.Text}>Họ tên:</p>
              <p className={classes.DetailText}>Nguyễn Thị Dung</p>
            </div>
            
            <div className={classes.TextDetail}>
              <p className={classes.Text}>Tên dịch vụ:</p>
              <p className={classes.DetailText}>Khám tim mạch</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Số thứ tự:</p>
              <p className={classes.DetailText}>2001201</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Thời gian cấp:</p>
              <p className={classes.DetailText}>14:35 - 07/11/2021</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Hạn sử dụng:</p>
              <p className={classes.DetailText}>18:00 - 07/11/2021</p>
            </div>
          </div>

          <div className={classes.DetailEquiL}>
            <div className={classes.TextDetails}>
              <p className={classes.Text}>Nguồn cấp:</p>
              <p className={classes.DetailText}>Kiosk</p>
            </div>

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Trạng thái:</p>
              <p className={classes.Green}></p>
              <p style={{ paddingLeft: '20px' }} className={classes.DetailText}>Đang chờ</p>
            </div>
                

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Số điện thoại:</p>
              <p className={classes.DetailText}>0948523623</p>
            </div>

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Địa chỉ Email:</p>
              <p className={classes.DetailText}>nguyendung@gmail.com</p>
            </div>

          </div>

        {/* <div className={classes.DetailS}>
          <p className={classes.Text}>Dịch vị sử dụng:</p>
          <p className={classes.DetailTexts}> Khám tim mạch, Khám sản - Phụ khoa,Khám răng hàm mặt, Khám tai mũi họng, khám hô hấp, Khám tổng quát.</p>
        </div> */}

                <div className={classes.Return}>
                    <Link to='/List'><img src={Return} alt=''/>Quay lại</Link>
                </div>
     </div>
    </div>
  )
}
export default Detail