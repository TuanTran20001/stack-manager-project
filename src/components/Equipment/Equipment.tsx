import React from 'react'
import { useState } from "react";
import Styless from './Equipment.module.css'
import MenuBar from '../../pages/MenuBar/Menu'
import TopBar from '../../pages/TopBar/Top'
import { Input, Space } from 'antd';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

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
            <div className={Styless.TextEquip}>
                <h1>Danh sách thiết bị</h1>
            </div>

            <div className={Styless.BoxAction}>
                <h3>Trạng thái hoạt động</h3>
                <select id="Click1" value={Click1} onChange={handleClick1Change}>
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

            <table>
                <thead>
                    <tr>
                        <th>Mã thiết bị</th>

                        <th>Tên thiết bị</th>

                        <th>Địa chỉ IP</th>

                        <th >Trạng thái hoạt động</th>

                        <th>Trạng thái kết nối</th>

                        <th>Dịch vụ sử dụng</th>

                        <th></th>

                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>
                        
                        <td>192.168.1.10</td>

                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><Link to="/details-device">Chi tiết</Link></td>
                        <td className={Styless.linkUpdate}><Link to="/manage-device">Cập nhật</Link></td>
                    </tr>

                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><a href="">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>
                        
                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><a href="">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><a href="">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><a href="">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><a href="">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td>KIO_01</td>

                        <td>Kiosk</td>

                        <td>192.168.1.10</td>

                        <td className={Styless.iconacti}>
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
                            <a href="" className={Styless.linkUpdate1}>Xem thêm</a>
                        </td>
                        <td className={Styless.link}><a href="">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="">Cập nhật</a></td>
                    </tr>
                </tbody>
            </table>

                        <div className={Styless.Pagination}>
                            <Pagination defaultCurrent={1} total={50}/>
                        </div>
        </div>
    )
}
export default Equipment