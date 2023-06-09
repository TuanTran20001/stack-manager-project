import React from 'react'
import { useState } from "react";
import Styless from './Equipment.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Input, Space } from 'antd';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import Vector from '../../../assets/image/Vector.png'
import Arrow from '../../../assets/image/arrow.png'

const Equipment = () => {
    const [Click1, setValue1] = useState('Click1');
    const [Click2, setValue2] = useState('Click2');
    const { Search } = Input;
    const handleClick1Change = (e: any) => {
        setValue1(e.target.value);
    };

    const handleClick2Change = (e: any) => {
        setValue2(e.target.value);
    };

    const inputSearch = (value: string) => console.log(value);
    return (
        <div className={Styless.Equipment}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Styless.EquipHeader}>
                <p>Thiết bị <img src={Arrow} alt=''/> <a href="/Equipment">Danh sách thiết bị</a></p>
            </div>

            <div className={Styless.TextEquip}>
                <h1>Danh sách thiết bị</h1>
            </div>

            <div className={Styless.BoxAction}>
                <h3>Trạng thái hoạt động</h3>
                <select id="Click1" value={Click1} onChange={handleClick1Change}>
                    <Link to="/RoleList">aaaa</Link>
                    <option value="option1">Tất cả</option>
                    <option value="option2">Hoạt động</option>
                    <option value="option3">Ngưng hoạt động</option>
                </select>

            </div>

            <div className={Styless.BoxConect}>
                <h3>Trạng thái kết nối</h3>
                <select id="Click2" value={Click2} onChange={handleClick2Change}>
                    <option value="option4">Tất cả</option>
                    <option value="option5">Kết nối</option>
                    <option value="option6">Mất kết nối</option>
                </select>

            </div>
            <div className={Styless.BoxSearch}>
                <h3>Từ khoá</h3>
                <Search id="Search" placeholder="Mời nhập từ khóa" allowClear onSearch={inputSearch}></Search>
            </div>

            <div className={Styless.t}>
            <table>
                <thead>
                    <tr>
                        <th>Mã thiết bị</th>

                        <th>Tên thiết bị</th>

                        <th>Địa chỉ IP</th>

                        <th className={Styless.Active}>Trạng thái hoạt động</th>

                        <th className={Styless.Connect}>Trạng thái kết nối</th>

                        <th className={Styless.Usage}>Dịch vụ sử dụng</th>

                        <th></th>

                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>
                        
                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actions}></span>
                            <p className={Styless.title}>Ngưng hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                            {/* Box */}
                            <div className={Styless.BoxDetail}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><Link to="/DetailEquip">Chi tiết</Link></td>
                        <td className={Styless.linkUpdate}><Link to="/UpdateEquip">Cập nhật</Link></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleConnect}>Kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                            {/* Box 1 */}
                            <div className={Styless.BoxDetail1}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/DetailEquip">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>
                        
                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleSuccess}>Kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                            {/* Box 2*/}
                            <div className={Styless.BoxDetail2}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/DetailEquip">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actions}></span>
                            <p className={Styless.title}>Ngưng hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                            {/* Box 3*/}
                            <div className={Styless.BoxDetail3}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/DetailEquip">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actions}></span>
                            <p className={Styless.title}>Ngưng hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Mất kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                             {/* Box 4*/}
                             <div className={Styless.BoxDetail4}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/DetailEquip">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.title}>Hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleConnect}>Kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                             {/* Box 5*/}
                             <div className={Styless.BoxDetail5}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/DetailEquip">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>

                        <td className={Styless.BoxText}>Kiosk</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.title}>Hoạt động</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleConnect}>Kết nối</p>
                            </div>
                        </td>

                        <td>
                            <p className={Styless.element}>Khám tim mạch, Khám mắt</p>
                            <a href="/DetailEquip" className={Styless.LinkWatch}>Xem thêm</a>
                             {/* Box 6*/}
                             <div className={Styless.BoxDetail6}>
                                   <Link to="/DetailEquip"><label>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</label></Link> 
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/DetailEquip">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>
                </tbody>
            </table>
            </div>

                        <div className={Styless.Contents}>
                            <Pagination defaultCurrent={1} total={50}/>
                        </div>
                        
                        <div className={Styless.AddEquip}>
                            <Link to='/AddEquip'><img src={Vector} alt=''/>Thêm thiết bị</Link>
                        </div>
        </div>
    )
}
export default Equipment