import React from 'react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Styless from './RoleUpdate.module.css'
import MenuBar from '../../../../pages/MenuBar/Menu'
import TopMenuBar from '../../../../pages/TopBar/Top'
import {  Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import Arrow from '../../../../assets/image/arrow.png'

const ServiceUpdate =()=> 
{
    const ClickChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('transform:', e.target.value);
    };

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`tap = ${e.target.checked}`);
    };

    const { TextArea } = Input;
    return (
        <div className={Styless.DichVuCapNhat}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
           
            
            <div className={Styless.ServiceHeader}>
            <h1>Cài đặt hệ thống<img src={Arrow} alt=''/> <a className={Styless.SHeader} href="/RoleList">Quản lý vai trò</a><img src={Arrow} alt=''/><a href="/ServiceAdd">Thêm vai trò</a></h1>
            <h2>Danh sách vai trò</h2>
            </div>
               
            <div className={Styless.TextService}>
                <h1>Thông tin vai trò</h1>
                
                <div className={Styless.BoxService}>
                    <div>
                            <span className={Styless.CodeService}>Tên vai trò</span>
                            <label className={Styless.Arrow}>*</label>
                            <Input  placeholder='Kế toán'></Input>
                    </div>
                    <div className={Styless.BoxServicess}>
                    <div>
                        <span className={Styless.CodeService}>Mô tả</span>
                        <label className={Styless.Arrow}>*</label>
                        <div className={Styless.DesDetail}>
                            <TextArea
                                showCount
                                maxLength={50}
                                placeholder="Chịu trách nhiệm thống kê số liệu và kiểm toán"
                                onChange={ClickChange}/>                  
                        </div>
                    </div>
                </div>
                </div>
                <div className={Styless.TextServices}>
                  
                        <div style={{marginTop: "50px"}}>
                            <span className={Styless.Arrow}>*</span>
                            <label className={Styless.CodeServices}>Là trường thông tin bắt buộc</label>
                        </div>
                     
                        <div className={Styless.ButtonC}>
                                <Link to='/RoleList'>  
                                    <button type='button'>Huỷ bỏ</button>
                                </Link>
                        </div>
                        <div className={Styless.ButtonCN}>
                                <Link to='/RoleList'>
                                    <button type='button'>Cập nhật</button>
                                </Link>
                        </div>                   
                </div>

                <div style={{marginTop: "67px", marginLeft:"600px"}}>
                        <span className={Styless.CodeService1}>Phân quyền chức năng</span>
                        <label className={Styless.Arrow1}>*</label>
                </div>
                <div className={Styless.TextService1}>
                    <div>
                    <h1 style={{marginTop: "5px"}} >Nhóm Chức năng A</h1>
                        <div style={{marginTop: "55px",marginLeft:"23px"}}>
                            <div className={Styless.BoxMenu}>
                                    <Checkbox
                                     onChange={onChange}>Tất cả</Checkbox>
                            </div>
                     
                            <div className={Styless.BoxMenu}>
                                    <Checkbox 
                                    onChange={onChange}>Chức năng x</Checkbox>
                            </div>
                            
                            <div className={Styless.BoxMenu}>
                                    <Checkbox 
                                    onChange={onChange}>Chức năng y</Checkbox>
                            </div>
                            <div className={Styless.BoxMenu}>
                                    <Checkbox 
                                    onChange={onChange}>Chức năng z</Checkbox>                        
                            </div>
                        </div>
                    <h1 style={{marginTop: "32%"}} >Nhóm Chức năng B</h1>
                            <div style={{marginTop: "52px",marginLeft:"23px"}}>
                                <div className={Styless.BoxMenu1}>
                                        <Checkbox
                                        onChange={onChange}>Tất cả</Checkbox>
                                </div>
                        
                                <div className={Styless.BoxMenu1}>
                                        <Checkbox 
                                        onChange={onChange}>Chức năng x</Checkbox>
                                </div>
                                
                                <div className={Styless.BoxMenu1}>
                                        <Checkbox 
                                        onChange={onChange}>Chức năng y</Checkbox>
                                </div>
                                <div className={Styless.BoxMenu1}>
                                        <Checkbox 
                                        onChange={onChange}>Chức năng z</Checkbox>                        
                                </div>
                            </div>
                           
    
                    </div>       
                </div>
            </div>
            
        </div>
    )
}
export default ServiceUpdate
