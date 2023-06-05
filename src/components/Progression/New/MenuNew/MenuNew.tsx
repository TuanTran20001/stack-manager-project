import React from 'react'
import LogoLeft from '../../../../assets/image/LogoAlta.png'
import Styless from './MenuNew.module.css'
import CapSo from '../../../../assets/image/icon3.png'
import { LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuNew = () => {
  return (
    <div className={Styless.ListMenuBar}>
      <div className={Styless.Logo}><img src={LogoLeft} alt=''/>
      </div>
      <div className={Styless.MenuBar}>
        <div className={Styless.ItemCapso} ><img src={CapSo} alt=''/>
            <Link to="/List">Cấp số</Link>
        </div>
        <div className={Styless.ButtonLogout} >
          <Link to="/login"><button><LoginOutlined />Đăng Xuất</button></Link>
        </div>
      </div>
    </div>
  )
}
export default MenuNew
