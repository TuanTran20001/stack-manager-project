import React, { useState } from 'react'
import classes from './New.module.css'
import MenuBar from '../../../components/Progression/New/MenuNew/MenuNew'
import TopBar from '../../../pages/TopBar/Top'
// import Update from '../../../assets/Image/EditNote.png'
import { Link } from 'react-router-dom';
import Vector from '../../../assets/image/arrow.png'

const Detail = ()=> {
    const [Click, setValue] = useState('designation2');
    const handleSelect2Change = (e: any) => 
    {
        setValue(e.target.value);
    };
    return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
                  <TopBar></TopBar>
              </div>
              <div className={classes.A}>
                 <h1>Cấp số <img src={Vector} alt=''/><a className={classes.TB} href="/List">Danh sách cấp số</a><img src={Vector} alt=''></img><a href='/New'>Cấp số mới</a></h1>
                 <h2>Quản lý cấp số</h2>
              </div>
                <div className={classes.DetailEqui}>
                    <div className={classes.DetailText}>
                        <label>CẤP SỐ MỚI</label>
                    </div>

                    {/* hop trang thai 2*/}
                    <div className={classes.Combobox2}>
                        <label>Dịch vụ khách hàng lựa chọn</label>
                        <select 
                            value={Click} 
                            onChange={handleSelect2Change}>
                            <option disabled={true} value="5">Chọn dịch vụ</option>
                            <option value="6">Khám tim mạch</option>
                            <option value="7">Khám sản - Phụ khoa</option>
                            <option value="8">Khám răng hàm mặt</option>
                            <option value="9">Khám tai mũi họng</option>
                        </select>
                    </div>

                    <div className={classes.ButtonHuy}>
                        <Link to='/List'>
                        <button type='button' >Huỷ bỏ</button>
                        </Link>
                    </div>

                    <div className={classes.ButtonEquiA}>
                        <Link to='/Prints'>
                        <button type='button'>In số</button>
                        </Link>
                    </div>
                </div>
            
    </div>
  )
}
export default Detail

