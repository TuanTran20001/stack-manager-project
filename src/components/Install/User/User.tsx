import React from 'react'
import { useState } from "react";
import Styless from './User.module.css'
import { Input, Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import Vector from '../../../assets/image/Vector.png'
import Arrow from '../../../assets/image/arrow.png'

const Equipment = () => {
    const [Click1, setValue1] = useState('Click1');
    // const [Click2, setValue2] = useState('Click2');
    const { Search } = Input;
    const handleClick1Change = (e: any) => {
        setValue1(e.target.value);
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
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
                <p>Cài đặt hệ thống <img src={Arrow} alt=''/> <a href="/Equipment">Nhật ký hoạt động</a></p>
            </div>
            
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
                <table>
                    <thead>
                        <tr>
                            <th style={{width:'10px'}}>Tên đăng nhập</th>

                            <th>Thời gian tác động</th>

                            <th style={{width:'50px'}}>IP thực hiện</th>

                            <th style={{width:'150px'}}>Thao tác thực hiện</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>
                            
                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>
                            
                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        
                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>
                        
                        <tr>
                            <td className={Styless.BoxText}>tuyetnguyen@12</td>

                            <td className={Styless.BoxText}>01/12/2021 15:12:17</td>

                            <td className={Styless.BoxText}>192.168.3.1</td>

                            <td className={Styless.BoxText}>Cập nhật thông tin dịch vụ DV_01</td>
                        </tr>

                    </tbody>
                </table>
            </div>

                        <div className={Styless.Contents}>
                            <Pagination defaultCurrent={1} total={50}/>
                        </div>
        </div>
    )
}
export default Equipment