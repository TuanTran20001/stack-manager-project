import React from 'react'
import { useState } from "react";
import Styless from './ServiceList.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Vector from '../../../assets/image/Vector.png'
import Arrow from '../../../assets/image/arrow.png'

const ServiceList = () => {
    const [Click, setValue] = useState('1');
    const { Search } = Input;
    const handleClickChange = (e: any) => {
        setValue(e.target.value);
    };
    const onSearch = (value: string) => console.log(value);
    // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    //     console.log(date, dateString);
    // };
    return (
        <div className={Styless.Device}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Styless.ServiceHeader}>
                <p>Dịch vụ <img src={Arrow}/> <a href="/ServiceList">Danh sách dịch vụ</a></p>
            </div>

            <div className={Styless.TextService}>
                <h1>Quản lý dịch vụ</h1>
            </div>

            <div className={Styless.Dropdown}>
                <h3>Trạng thái hoạt động</h3>

                <select id="1" value={Click} onChange={handleClickChange}>
                    <option value="1">Tất cả</option>
                    <option value="2">Hoạt động</option>
                    <option value="3">Ngưng hoạt động</option>
                </select>

            </div>
            {/* <div className={Styless.DateStart}>
                <p>Chọn thời gian</p>
                <DatePicker onChange={onChange} style={{
                    top: 185, left: 550, height: 44
                }} />
            </div>
            <div className={Styless.IconNext}>
                <CaretRightOutlined />
            </div>
            <div className={Styless.DateEnd}>
                <DatePicker onChange={onChange} style={{
                    top: 141, left: 750, height: 44
                }} />
            </div> */}
            <div className={Styless.SearchBar}>
                <p>Từ khoá</p>
                <Search id="Search" placeholder="" allowClear onSearch={onSearch} style={{
                    width: 300, height: 44,
                }} />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Mã dịch vụ</th>
                        <th>Tên dịch vụ</th>
                        <th>Mô tả</th>
                        <th style={{ width: '120px' }}>Trạng thái hoạt động</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsConnect}></span>
                            <p className={Styless.titleConnect}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsConnect}></span>
                            <p className={Styless.titleSuccess}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>KIO_01</td>
                        <td className={Styless.BoxText}>Kiosk</td>
                        <td className={Styless.BoxText}>Hoạt động</td>

                        <td>
                            <div className={Styless.statusConnect}>
                            <span className={Styless.actionsConnect}></span>
                            <p className={Styless.titleSuccess}>Ngưng hoạt động</p>
                            </div>
                        </td>
                        <td className={Styless.link}><a href="/ServiceDetails">Chi tiết</a></td>
                        <td className={Styless.linkUpdate}><a href="/ServiceUpdate">Cập nhật</a></td>
                    </tr>
                </tbody>
            </table>

            <div className={Styless.Pagination}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className={Styless.AddDevice}>
                <Link to='/ServiceAdd'><img src={Vector} alt=''/> Thêm dịch vụ</Link>
            </div>
        </div>

    )
}
export default ServiceList

