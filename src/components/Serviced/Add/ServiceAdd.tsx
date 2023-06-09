import React from 'react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Styless from './ServiceAdd.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopMenuBar from '../../../pages/TopBar/Top'
import {  Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import Arrow from '../../../assets/image/arrow.png'

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
            <h1>Dịch vụ  
                <img src={Arrow} alt=''/> 
                <a className={Styless.SHeader} href="/ServiceList"> Danh sách dịch vụ</a>
                <img src={Arrow} alt=''/>                          
                <a href="/ServiceAdd">Thêm dịch vụ</a> 
            </h1>
            <h2>Quản lý dịch vụ</h2>
            </div>
               
            <div className={Styless.TextService}>
                <h1>Thông tin dịch vụ</h1>
                
                <div className={Styless.BoxService}>
                    <div>
                            <span className={Styless.CodeService}>Mã dịch vụ:</span>
                            <label className={Styless.Arrow}>*</label>
                            <Input  placeholder='201'></Input>
                    </div>
                    <div>
                        <span className={Styless.CodeService}>Tên dịch vụ:</span>
                        <label className={Styless.Arrow}>*</label>                      
                        <Input placeholder='Khám tim mạch'></Input>
                    </div>
                </div>
                <div className={Styless.BoxServicess}>
                    <div>
                        <span className={Styless.CodeService}>Mô tả:</span>
                        <label className={Styless.Arrow}>*</label>
                        <div className={Styless.DesDetail}>
                            <TextArea
                                showCount
                                maxLength={500}
                                placeholder="Mô tả"
                                onChange={ClickChange}/>                  
                        </div>
                    </div>
                </div>
                <div className={Styless.TextServices}>
                    <h2>Quy tắc cấp số</h2>
                    <div>
                        <div>
                            <div className={Styless.BoxMenu}>
                                    <Checkbox
                                     onChange={onChange}>Tăng tự động từ: </Checkbox>
                            </div>
                            <div className={Styless.CheckBox}>
                                <div className={Styless.TextBox}>
                                    <p>0001</p>                         
                                </div>
                                <label className={Styless.Arrive}>đến</label>
                                <div className={Styless.TextBox}>                                  
                                    <p>9999</p>                                   
                                </div>

                            </div>
                            <div className={Styless.BoxMenu}>
                                    <Checkbox 
                                    onChange={onChange}>Prefix: </Checkbox>
                            </div>
                            <div className={Styless.CheckBox}>
                                <div className={Styless.TextBoxs}>
                                   <p>0001</p>                                     
                                </div>
                            </div>
                            <div className={Styless.BoxMenu}>
                                    <Checkbox 
                                    onChange={onChange}>Surfix: </Checkbox>
                            </div>
                            <div className={Styless.CheckBox}>
                                <div className={Styless.TextBoxs}>
                                    <p>0001</p>                               
                                </div>
                            </div>
                        </div>
                        <div className={Styless.BoxMenu}>
                                 <Checkbox 
                                 onChange={onChange}>Reset mỗi ngày</Checkbox>                        
                        </div>
                        <div>
                            <span className={Styless.Arrow}>*</span>
                            <label className={Styless.CodeServices}>Là trường thông tin bắt buộc</label>
                        </div>
                    </div>
                     
                          <div className={Styless.ButtonC}>
                                <Link to='/ServiceList'>  
                                    <button type='button'>Huỷ bỏ</button>
                                </Link>
                            </div>
                            <div className={Styless.ButtonCN}>
                                <Link to='/ServiceList'>
                                    <button type='button'>Thêm</button>
                                </Link>
                            </div>                   
                </div>
            </div>
        </div>
    )
}
export default ServiceUpdate
