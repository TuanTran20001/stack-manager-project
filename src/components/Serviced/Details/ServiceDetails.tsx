import React from 'react'
import { useState } from 'react'
import Styless from './ServiceDetails.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import Edit  from '../../../assets/image/EditSquare.png'
import Return from '../../../assets/image/Back.png'
import { Link } from 'react-router-dom';
import Arrow from '../../../assets/image/arrow.png'

const ServiceDetails = () => {
    const [select1Value, setSelect1Value] = useState('option1');
    const { Search } = Input;
    const handleSelect1Change = (event: any) => {
        setSelect1Value(event.target.value);
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const inputSearch = (value: string) => console.log(value);
    
    return (
        <div className={Styless.ServiceDetails}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Styless.AddHeader}>
                <p>Dịch vụ <img src={Arrow} alt=''/> <a className={Styless.ds} href="/ServiceList">Danh sách dịch vụ</a> <img src={Arrow} alt=''/> <a href="/ServiceDetails">Chi tiết</a></p>
            </div>
            <h1>Quản lý dịch vụ</h1>
            <div className={Styless.InfoLeft}>
                <h1>Thông tin dịch vụ</h1>
                <div className={Styless.InfoBox}>
                    <div className={Styless.Info1}>
                        <span className={Styless.NameCode}>Mã dịch vụ:
                        </span>
                        <span className={Styless.Title}>201</span>
                    </div>
                    <div className={Styless.Info1}>
                        <span className={Styless.NameCode}>Tên dịch vụ:
                        </span>
                        <span className={Styless.Title}>Khám tim mạch</span>
                    </div>
                    <div className={Styless.Info1}>
                        <span className={Styless.NameCode}>Mô tả:
                        </span>
                        <span className={Styless.Title}>Chuyên các bệnh lý về tim</span>
                    </div>
                </div>
                <div className={Styless.InfoUnder}>
                    <h2>Quy tắc cấp số</h2>
                    <div className={Styless.Option}>
                        <p className={Styless.NameCode}>Tăng tự động từ: </p>
                        <div className={Styless.rangeTitle}>
                            <p>0001</p>
                        </div>
                        <p className={Styless.NameCode}>đến</p>
                        <div className={Styless.rangeTitle}>
                            <p>9999</p>
                        </div>
                    </div>
                    <div className={Styless.Option}>
                        <p className={Styless.NameCode}>Prefix: </p>
                        <div className={Styless.rangeTitles}>
                            <p>0001</p>
                        </div>
                    </div>
                    <div className={Styless.Option}>
                        <p className={Styless.NameCode}>Reset mỗi ngày </p>
                    </div>
                    <div className={Styless.Options}>
                        <p className={Styless.NameCodes}>ví dụ: 201-2001 </p>
                    </div>
                </div>

            </div>
            <div className={Styless.InfoRight}>
                <div className={Styless.BoxAction}>
                    <p>Trạng thái</p>
                    <select id="option1" value={select1Value} onChange={handleSelect1Change}>
                        <option value="option1">Tất cả</option>
                        <option value="option2">Đã hoàn thành</option>
                        <option value="option3">Đã thực hiện</option>
                        <option value="option4">vắng</option>
                    </select>

                </div>
                <div className={Styless.DateStart}>
                    <p>Chọn thời gian</p>
                    < DatePicker onChange={onChange} className={Styless.date}/>
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

                <table className={Styless.Table}>
                    <thead>
                        <tr>
                            <th>Số thứ tự</th>
                            <th style={{ width: '100px' }}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={Styless.Stt}>2010001</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnect}></span>
                                    <p className={Styless.titleConnect}>Đã hoàn thành</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={Styless.Stt}>2010002</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnect}></span>
                                    <p className={Styless.titleConnect}>Đã hoàn thành</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={Styless.Stt}>2010003</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnects}></span>
                                    <p className={Styless.titleConnect}>Đang thực hiện</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={Styless.Stt}>2010004</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnectss}></span>
                                    <p className={Styless.titleConnect}>Vắng</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={Styless.Stt}>2010005</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnect}></span>
                                    <p className={Styless.titleConnect}>Đã hoàn thành</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={Styless.Stt}>2010006</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnects}></span>
                                    <p className={Styless.titleConnect}>Đã thực hiện</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={Styless.Stt}>2010007</td>
                            <td>
                                <div className={Styless.statusConnect}>
                                    <span className={Styless.actionsConnectss}></span>
                                    <p className={Styless.titleConnect}>Vắng</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className={Styless.Pagination}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <div className={Styless.EditService}>
                <Link to='/ServiceUpdate'><img src={Edit} alt=''/> Cập nhập danh sách</Link>
            </div>
            <div className={Styless.Back}>
                <Link to='/ServiceList'><img src={Return} alt=''/>Quay lại</Link>
            </div>

        </div>
    )
}
export default ServiceDetails
