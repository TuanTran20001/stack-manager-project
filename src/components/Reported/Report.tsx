import React from 'react'
import { useState } from "react";
import Styless from './Report.module.css'
import MenuBar from '../../pages/MenuBar/Menu'
import TopBar from '../../pages/TopBar/Top'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Download from '../../assets/image/download.png'
import Arrow from '../../assets/image/arrow.png'

const List = () => {
    const [Click1, setValue1] = useState('Click1');
    const [Click2, setValue2] = useState('Click2');
    const { Search } = Input;
    const handleClick1Change = (e: any) => {
        setValue1(e.target.value);
    };

    const handleClick2Change = (e: any) => {
        setValue2(e.target.value);
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const inputSearch = (value: string) => console.log(value);

    return (
        <div className={Styless.Equipment}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Styless.EquipHeader}>
                <p>Báo cáo <img src={Arrow} alt=''/> <a href="/List">Lập báo cáo</a></p>
            </div>
            <div>
                
            </div>

            {/* <div className={Styless.TextEquip}>
                <h1>Quản lý cấp số</h1>
            </div> */}

            {/* <div className={Styless.BoxAction}>
                <h3>Tên dịch vụ</h3>
                <select id="Click1" value={Click1} onChange={handleClick1Change}>
                    <option value="option1">Tất cả</option>
                    <option value="option2">Khám sản - Phụ Khoa</option>
                    <option value="option3">Khám răng hàm mặt</option>
                    <option value="option4">Khám tai mũi họng</option>
                </select>
            </div>

            <div className={Styless.BoxConect}>
                <h3>Tình Trạng</h3>
                <select id="Click2" value={Click2} onChange={handleClick2Change}>
                    <option value="option4">Tất cả</option>
                    <option value="option2">Đang chờ</option>
                    <option value="option3">Đã sử dụng</option>
                    <option value="option4">Bỏ qua</option>
                </select>
            </div>

            <div className={Styless.BoxPower}>
                <h3>Nguồn cấp</h3>
                <select id="Click2" value={Click2} onChange={handleClick2Change}>
                    <option value="option4">Tất cả</option>
                    <option value="option5">Kiosk</option>
                    <option value="option6">Hệ thống</option>
                </select>
            </div> */}

            <div className={Styless.DateStart}>
                <h3>Chọn thời gian</h3>
                <DatePicker onChange={onChange} className={Styless.date} />
            </div>

            <div className={Styless.IconNext}>
                <CaretRightOutlined />
            </div>

            <div className={Styless.DateEnd}>
                <DatePicker onChange={onChange} className={Styless.dates}/>
            </div>

            <div className={Styless.BoxSearch}>
                <h3>Từ khoá</h3>
                <Search id="Search" placeholder="Mời nhập từ khóa" allowClear onSearch={inputSearch}></Search>
            </div>

            <div className={Styless.t}>
            <table style={{top:'222px'}}>
                <thead>
                    <tr>
                        <th style={{width:'130px'}}>Số thứ tự</th>

                        <th className={Styless.Active}>Tên dịch vụ</th>

                        <th className={Styless.Active}>Thời gian cấp</th>

                        <th className={Styless.Connect}>Tình trạng</th>

                        <th style={{width:'130px'}}>Nguồn cấp</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={Styless.BoxText}>2010001</td>
                        
                        <td className={Styless.BoxText}>Khám tim mạch</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actions}></span> */}
                            {/* <p className={Styless.title}>Ngưng hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                            
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleSuccess}>Đang chờ</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Kiosk</td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>2010002</td>

                        <td className={Styless.BoxText}>Khám răng hàm mặt</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actionsSuccess}></span> */}
                            {/* <p className={Styless.titleSuccess}>Hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actions}></span>
                                <p className={Styless.title}>Đã sử dụng</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Hệ thống</td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>2010003</td>

                        <td className={Styless.BoxText}>Khám sản - Phụ Khoa</td>
                        
                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actionsSuccess}></span> */}
                            {/* <p className={Styless.titleSuccess}>Hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Bỏ qua</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Kiosk</td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>2010004</td>

                        <td className={Styless.BoxText}>Khám răng hàm mặt</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actions}></span> */}
                            {/* <p className={Styless.title}>Ngưng hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleSuccess}>Đang chờ</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Hệ thống</td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>2010005</td>

                        <td className={Styless.BoxText}>Khám tai mũi họng</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actions}></span> */}
                            {/* <p className={Styless.title}>Ngưng hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleSuccess}>Đang chờ</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Kiosk</td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>2010006</td>

                        <td className={Styless.BoxText}>Khám tổng quát</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actionsSuccess}></span> */}
                            {/* <p className={Styless.title}>Hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Bỏ qua</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Hệ thống</td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>2010007</td>

                        <td className={Styless.BoxText}>Khám hô hấp</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actionsSuccess}></span> */}
                            {/* <p className={Styless.title}>Hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsSuccess}></span>
                                <p className={Styless.titleSuccess}>Đang chờ</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Kiosk</td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>2010008</td>

                        <td className={Styless.BoxText}>Khám hô hấp</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actionsSuccess}></span> */}
                            {/* <p className={Styless.title}>Hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actions}></span>
                                <p className={Styless.title}>Đã sử dụng</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Kiosk</td>
                    </tr>
                    <tr>
                        <td className={Styless.BoxText}>2010009</td>

                        <td className={Styless.BoxText}>Khám tai mũi họng</td>

                        <td className={Styless.statusAction}>
                            {/* <span className={Styless.actionsSuccess}></span> */}
                            {/* <p className={Styless.title}>Hoạt động</p> */}
                            <p className={Styless.text}>07:20 - 07/10/2021</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <span className={Styless.actionsConnect}></span>
                                <p className={Styless.titleConnect}>Bỏ qua</p>
                            </div>
                        </td>
                        <td className={Styless.link}>Hệ thống</td>
                    </tr>
                </tbody>
            </table>
            </div>

                        <div className={Styless.Contents}>
                            <Pagination defaultCurrent={1} total={50}/>
                        </div>
                        
                        <div className={Styless.AddEquip}>
                            <Link to=''><img src={Download} alt=''/>Tải về</Link>
                        </div>
        </div>
    )
}
export default List