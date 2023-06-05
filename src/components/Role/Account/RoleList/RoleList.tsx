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
                <p>Cài đặt hệ thống <img src={Arrow} alt=''/> <a href="/Equipment">Quản lý tài khoản</a></p>
            </div>

            <div className={Styless.TextEquip}>
                <h1>Danh sách tài khoản</h1>
            </div>

            <div className={Styless.BoxAction}>
                <h3>Tên vai trò</h3>
                <select id="Click1" value={Click1} onChange={handleClick1Change}>
                    <option value="option1">Tất cả</option>
                    <option value="option2">tuyetnguyen@12</option>
                    <option value="option3">tuyetnguyen@10</option>
                    <option value="option2">tuyetnguyen@22</option>
                    <option value="option3">tuyetnguyen@18</option>
                    <option value="option2">tuyetnguyen@19</option>
                    <option value="option3">tuyetnguyen@18</option>
                    <option value="option2">tuyetnguyen@16</option>
                    <option value="option3">tuyetnguyen@14</option>
                    <option value="option2">tuyetnguyen@13</option>
                </select>

            </div>

            {/* <div className={Styless.BoxConect}>
                <h3>Trạng thái kết nối</h3>
                <select id="Click2" value={Click2} onChange={handleClick2Change}>
                    <option value="option4">Tất cả</option>
                    <option value="option5">Kết nối</option>
                    <option value="option6">Mất kết nối</option>
                </select>
            </div> */}

            <div className={Styless.BoxSearch}>
                <h3>Từ khoá</h3>
                <Search id="Search" placeholder="Mời nhập từ khóa" allowClear onSearch={inputSearch}></Search>
            </div>

            <div className={Styless.t}>
            <table>
                <thead>
                    <tr>
                        <th style={{width:'100px'}}>Tên đăng nhập</th>

                        <th>Họ tên</th>

                        <th style={{width:'100px'}}>Số điện thoại</th>

                        <th className={Styless.Active}>Email</th>

                        <th className={Styless.Connect}>Vai trò</th>

                        <th style={{width:'100px'}}>Trạng thái hoạt động</th>

                        <th style={{width:'60px'}}></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@12</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>
                        
                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p> 
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>
                        
                        <td className={Styless.linkUpdate}><Link to="/UpdateEquip">Cập nhật</Link></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@13</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>
                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@14</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>
                        
                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>
                        <td className={Styless.statusAction}>
                            <span className={Styless.actions}></span>
                            <p className={Styless.title}>Ngưng hoạt động</p>
                        </td>
                       
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@15</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>

                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@16</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>

                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@17</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>

                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@18</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>
                    
                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@19</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actions}></span>
                            <p className={Styless.title}>Ngưng hoạt động</p>
                        </td>
                        
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>
                    
                    <tr>
                        <td className={Styless.BoxText}>tuyetnguyen@20</td>

                        <td className={Styless.BoxText}>Nguyen Văn A</td>

                        <td className={Styless.BoxText}>192.168.1.10</td>

                        <td>
                            <p className={Styless.element}>tuyetnguyen123@gmail.com</p>
                        </td>

                        <td>
                            <div className={Styless.statusConnect}>
                                <p className={Styless.titleConnect}>Kế toán</p>
                            </div>
                        </td>

                        <td className={Styless.statusAction}>
                            <span className={Styless.actionsSuccess}></span>
                            <p className={Styless.titleSuccess}>Hoạt động</p>
                        </td>
                        <td className={Styless.linkUpdate}><a href="/UpdateEquip">Cập nhật</a></td>
                    </tr>
                </tbody>
            </table>
            </div>

                        <div className={Styless.Contents}>
                            <Pagination defaultCurrent={1} total={50}/>
                        </div>
                        
                        <div className={Styless.AddEquip}>
                            <Link to='/RoleAdd'><img src={Vector} alt=''/>Thêm tài khoản</Link>
                        </div>
        </div>
    )
}
export default Equipment