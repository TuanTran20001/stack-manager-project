import React, { useState } from 'react'
import Styless from './Prints.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopMenuBar from '../../../pages/TopBar/Top'
import Update from '../../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Arrow from '../../../assets/image/arrow.png'
import Cancel  from '../../../assets/image/icon_x.png'
const Prints = ()=> {
  return (
    <div className={Styless.Prints}>
              <div className={Styless.Printsheader}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={Styless.PrinsContainer}>
                 <h1>Cấp số<img src={Arrow} alt=''/><a className={Styless.PrintLink} href="/List">Danh sách cấp số</a><img src={Arrow} alt=''/><a href='/New'>Cấp số mới</a></h1><h2>Quản lý cấp số</h2>
              </div>
                <div className={Styless.PrintsBody}>
                    <div className={Styless.PrintText}>
                        <label>Số Thứ tự được cấp</label>
                    </div>

                    <div className={Styless.PrintText1}>
                        <label>2001201</label>
                    </div>

                    <div className={Styless.PrintText2}>
                        <label>DV: Khám răng hàm mặt (tại quầy số 1)</label>
                    </div>

                </div>
                <div className={Styless.PrintsFoot}>
                    <div className={Styless.PrintText3}>
                        <label>Thời gian cấp:</label>
                        <p>09:30 11/10/2021</p>
                    </div>

                    <div className={Styless.PrintText4}>
                        <label>Hạn sử dụng:</label>
                        <p>17:30 11/10/2021</p>
                    </div>
                </div>

                <div className={Styless.BtnTat}>
                    <Link to='/New'><img src={Cancel} alt=''/></Link>
                </div>
                
    </div>
  )
}
export default Prints

