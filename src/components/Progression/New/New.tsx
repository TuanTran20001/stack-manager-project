import React, { useState } from 'react'
import Styless from './New.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Link } from 'react-router-dom';
import Vector from '../../../assets/image/arrow.png'

const New = ()=> {
    const [Click, setValue] = useState('designation2');
    const handleSelect2Change = (e: any) => 
    {
        setValue(e.target.value);
    };
    return (
    <div className={Styless.News}>
              <div className={Styless.Newsheader}>
                  <MenuBar></MenuBar>
                  <TopBar></TopBar>
              </div>
              <div className={Styless.NewText}>
                 <h1>Cấp số <img src={Vector} alt=''/><a className={Styless.NewLink} href="/List">Danh sách cấp số</a><img src={Vector} alt=''></img><a href='/New'>Cấp số mới</a></h1>
                 <h2>Quản lý cấp số</h2>
              </div>
                <div className={Styless.NewBox}>
                    <div className={Styless.NewBox1}>
                        <label>CẤP SỐ MỚI</label>
                    </div>

                    <div className={Styless.NewCombobox}>
                        <label>Dịch vụ khách hàng lựa chọn</label>
                        <select value={Click} onChange={handleSelect2Change}>
                            <option disabled={true} value="1">Chọn dịch vụ</option>
                            <option value="2">Khám tim mạch</option>
                            <option value="3">Khám sản - Phụ khoa</option>
                            <option value="4">Khám răng hàm mặt</option>
                            <option value="5">Khám tai mũi họng</option>
                        </select>
                    </div>

                    <div className={Styless.BtnCancel}>
                        <Link to='/List'><button type='button' >Huỷ bỏ</button></Link>
                    </div>

                    <div className={Styless.BtnIn}>
                        <Link to='/Prints'><button type='button'>In số</button></Link>
                    </div>
                </div>
            
    </div>
  )
}
export default New

