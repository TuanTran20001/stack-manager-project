import React from 'react'
import LogoLeft from '../../assets/image/LogoAlta.png'
import Styless from '../MenuBar/Menu.module.css'
import DashBoard from '../../assets/image/element4.png'
import ThietBi from '../../assets/image/monitor.png'
import DichVu from '../../assets/image/Frame332.png'
import CapSo from '../../assets/image/icon3.png'
import BaoCao from '../../assets/image/Frame1.png'
import CaiDat from '../../assets/image/setting.png'
import { LoginOutlined, MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div className={Styless.ListMenuBar}>
      <div className={Styless.Logo}><img src={LogoLeft} alt=''/>
      </div>
      <div className={Styless.MenuBar}>
        <div className={Styless.ItemDashBoard}><img src={DashBoard} alt=''/>
            <Link to="/Dashboard1">Dashboard</Link>
        </div>
        <div className={Styless.ItemThiebi} ><img src={ThietBi} alt=''/>
            <Link to="/Equipment">Thiết bị</Link>
        </div>
        <div className={Styless.ItemDichvu} ><img src={DichVu} alt=''/>
            <Link to="/ServiceList">Dịch vụ</Link>
        </div>
        <div className={Styless.ItemCapso} ><img src={CapSo} alt=''/>
            <Link to="/List">Cấp số</Link>
        </div>
        <div className={Styless.ItemBaocao}><img src={BaoCao} alt=''/>
            <Link to="/Reported">Báo cáo</Link>
        </div>
        <div className={Styless.ItemCaidat} ><img src={CaiDat} alt=''/>
            <Link to="/RoleList">Cài đặt thiết bị<MoreOutlined/></Link>
            <div className={Styless.BoxCaiDat}>
              <a style={{marginLeft:'28px'}} className={Styless.PT1} href="/RoleList">Quản lý vai trò</a><br/>
              <a style={{marginLeft:'28px'}} className={Styless.PT2} href="/AccountList">Quản lý tài khoản</a><br/>
              <a style={{marginLeft:'28px'}} className={Styless.PT3} href="/User">Nhật ký người dùng</a> 
            </div>
        </div>
      </div>  
      <div className={Styless.ButtonLogout} >
          <Link to="/login"><button> <LoginOutlined />Đăng Xuất</button></Link>
        </div>
    </div>
  )
}
export default MenuBar;
