import React from 'react'
import { useState } from "react";
import Styless from './RoleList.module.css'
import MenuBar from '../../../../pages/MenuBar/Menu'
import TopBar from '../../../../pages/TopBar/Top'
import { Input, Space } from 'antd';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import Vector from '../../../../assets/image/Vector.png'
import Arrow from '../../../../assets/image/arrow.png'

const Equipment = () => {
    const [Click1, setValue1] = useState('Click1');
    // const [Click2, setValue2] = useState('Click2');
    const { Search } = Input;
    const handleClick1Change = (e: any) => {
        setValue1(e.target.value);
    };

    // const handleClick2Change = (e: any) => {
    //     setValue2(e.target.value);
    // };

    const inputSearch = (value: string) => console.log(value);
    return (
        <div className={Styless.Equipment}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Styless.EquipHeader}>
                <p>Cài đặt hệ thống <img src={Arrow} alt=''/> <a href="/RoleList">Quản lý vai trò</a></p>
            </div>

            <div className={Styless.TextEquip}>
                <h1>Danh sách vai trò</h1>
            </div>

            <div className={Styless.BoxSearch}>
                <h3>Từ khoá</h3>
                <Search id="Search" placeholder="Mời nhập từ khóa" allowClear onSearch={inputSearch}></Search>
            </div>

            <div className={Styless.t}>
            <table style={{top:'157px'}}>
                <thead>
                    <tr>
                        <th style={{width:'100px'}}>Tên vai trò</th>

                        <th>Số người dùng</th>

                        <th style={{width:'170px'}}>Mô tả</th>

                        <th style={{width:'60px'}}></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={Styless.BoxText}>Kế toán</td>

                        <td className={Styless.BoxText}>6</td>
                        
                        <td className={Styless.BoxText}>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                        
                        <td className={Styless.linkUpdate}><Link to="/RoleUpdate">Cập nhật</Link></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>Bác sĩ</td>

                        <td className={Styless.BoxText}>6</td>

                        <td className={Styless.BoxText}>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

                        <td className={Styless.linkUpdate}><a href="/RoleUpdate">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>Lễ tân</td>

                        <td className={Styless.BoxText}>6</td>

                        <td className={Styless.BoxText}>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                       
                        <td className={Styless.linkUpdate}><a href="/RoleUpdate">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>Quản lý</td>

                        <td className={Styless.BoxText}>6</td>

                        <td className={Styless.BoxText}>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

                        <td className={Styless.linkUpdate}><a href="/RoleUpdate">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>Admin</td>

                        <td className={Styless.BoxText}>6</td>

                        <td className={Styless.BoxText}>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

                        <td className={Styless.linkUpdate}><a href="/RoleUpdate">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>Superadmin</td>

                        <td className={Styless.BoxText}>6</td>

                        <td className={Styless.BoxText}>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

                        <td className={Styless.linkUpdate}><a href="/RoleUpdate">Cập nhật</a></td>
                    </tr>
                </tbody>
            </table>

            </div>
                        
                        <div className={Styless.AddEquip}>
                            <Link to='/RoleAdd'><img src={Vector} alt=''/>Thêm vai trò</Link>
                        </div>
        </div>
    )
}
export default Equipment