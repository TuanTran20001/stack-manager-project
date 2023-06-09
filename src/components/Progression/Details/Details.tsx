import React from 'react'
import classes from './Details.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopMenuBar from '../../../pages/TopBar/Top'
import Update from '../../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Vector from '../../../assets/image/arrow.png'
import Return from '../../../assets/image/Back.png'
const Details = ()=> {
  return (
    <div className={classes.DetailsBox}>
              <div className={classes.Details1}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={classes.DetailsItem}>
                 <p>Cấp số <img src={Vector} alt=''/><a className={classes.TB} href="/List">Danh sách cấp số</a><img src={Vector} alt=''/><a href='/Details'>Chi tiết</a></p><h1>Quản lý cấp số</h1>
              </div>
              <div className={classes.DetailContainer}>
                <div className={classes.DetailInfor}>
                    <label>Thông tin cấp số</label>
                </div>
              <div className={classes.DetailBody }>
                <div className={classes.DetailCheck}>
                  <p className={classes.DetailText}>Họ tên:</p>
                  <p className={classes.DetailInfor}>Nguyễn Thị Dung</p>
                </div>
                
                <div className={classes.DetailCheck}>
                  <p className={classes.DetailText}>Tên dịch vụ:</p>
                  <p className={classes.DetailInfor}>Khám tim mạch</p>
                </div>

                <div className={classes.DetailCheck}>
                  <p className={classes.DetailText}>Số thứ tự:</p>
                  <p className={classes.DetailInfor}>2001201</p>
                </div>

                <div className={classes.DetailCheck}>
                  <p className={classes.DetailText}>Thời gian cấp:</p>
                  <p className={classes.DetailInfor}>14:35 - 07/11/2021</p>
                </div>

                <div className={classes.DetailCheck}>
                  <p className={classes.DetailText}>Hạn sử dụng:</p>
                  <p className={classes.DetailInfor}>18:00 - 07/11/2021</p>
                </div>
              </div>

              <div className={classes.DetailFoot}>
                <div className={classes.DetailCheck1}>
                  <p className={classes.DetailText}>Nguồn cấp:</p>
                  <p className={classes.DetailInfor}>Kiosk</p>
                </div>

                <div className={classes.DetailCheck1}>
                  <p className={classes.DetailText}>Trạng thái:</p>
                  <p className={classes.Bule}></p>
                  <p style={{ paddingLeft: '25px' }} className={classes.DetailInfor}>Đang chờ</p>
                </div>
                    

                <div className={classes.DetailCheck1}>
                  <p className={classes.DetailText}>Số điện thoại:</p>
                  <p className={classes.DetailInfor}>0948523623</p>
                </div>

                <div className={classes.DetailCheck1}>
                  <p className={classes.DetailText}>Địa chỉ Email:</p>
                  <p className={classes.DetailInfor}>nguyendung@gmail.com</p>
                </div>

          </div>
                <div className={classes.BtnOut}>
                    <Link to='/List'><img src={Return} alt=''/>Quay lại</Link>
                </div>
     </div>
    </div>
  )
}
export default Details