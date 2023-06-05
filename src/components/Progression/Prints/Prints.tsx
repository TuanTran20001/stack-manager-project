import React, { useState } from 'react'
import classes from './Prints.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopMenuBar from '../../../pages/TopBar/Top'
import Update from '../../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Arrow from '../../../assets/image/arrow.png'
import Cancel  from '../../../assets/image/icon_x.png'
const Detail = ()=> {
    // const [choose2, setValue2] = useState('designation2');
    // const handleSelect2Change = (e: any) => 
    // {
    //     setValue2(e.target.value);
    // };

  return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={classes.A}>
                 <h1>Cấp số<img src={Arrow} alt=''/><a className={classes.TB} href="/List">Danh sách cấp số</a><img src={Arrow} alt=''/><a href='/New'>Cấp số mới</a></h1>
                 <h2>Quản lý cấp số</h2>
              </div>
                <div className={classes.DetailEqui}>
                    <div className={classes.DetailText}>
                        <label>Số Thứ tự được cấp</label>
                    </div>

                    <div className={classes.DetailTexts}>
                        <label>2001201</label>
                    </div>

                    <div className={classes.DetailTexts2}>
                        <label>DV: Khám răng hàm mặt (tại quầy số 1)</label>
                    </div>

                </div>
                <div className={classes.DetailEquis}>
                    <div className={classes.DetailTexts3}>
                        <label>Thời gian cấp:</label>
                        <p>09:30 11/10/2021</p>
                    </div>

                    <div className={classes.DetailTexts4}>
                        <label>Hạn sử dụng:</label>
                        <p>17:30 11/10/2021</p>
                    </div>
                </div>

                <div className={classes.ThemTB}>
                    <Link to='/New'><img src={Cancel} alt=''/></Link>
                </div>
                
    </div>
  )
}
export default Detail;

