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
      <div className={Styless.Logo}><img src={LogoLeft}></img>
      </div>
      <div className={Styless.MenuBar}>
        <div className={Styless.ItemDashBoard}><img src={DashBoard}></img>
            <Link to="/Login">Dashboard</Link>
        </div>
        <div className={Styless.ItemThiebi} ><img src={ThietBi}></img>
            <Link to="/Equipment">Thiết bị</Link>
        </div>
        <div className={Styless.ItemDichvu} ><img src={DichVu}></img>
            <Link to="">Dịch vụ</Link>
        </div>
        <div className={Styless.ItemCapso} ><img src={CapSo}></img>
            <Link to="">Cấp số</Link>
        </div>
        <div className={Styless.ItemBaocao} ><img src={BaoCao}></img>
            <Link to="">Báo cáo</Link>
        </div>
        <div className={Styless.ItemCaidat} ><img src={CaiDat}></img>
            <Link to="">Cài đặt thiết bị<MoreOutlined/></Link>
        </div>
        <div className={Styless.ButtonLogout} >
          <Link to="/login"><button> <LoginOutlined />Đăng Xuất</button></Link>
        </div>
      </div>
    </div>
  )
}
export default MenuBar;
