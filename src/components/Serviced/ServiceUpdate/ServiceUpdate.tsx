// import { useState } from 'react'
import Class from './ServiceUpdate.module.css'
import MenuBar from '../../../pages/MenuBar/Menu'
import TopBar from '../../../pages/TopBar/Top'
import { Button, Input, Space, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
// import { flattenDiagnosticMessageText } from 'typescript';
import { Link } from 'react-router-dom'
import Arrow from '../../../assets/image/arrow.png'

const ServiceAdd =() => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const { TextArea } = Input;

    const ClickChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };

    return (
        <div className={Class.Add}>
            <MenuBar></MenuBar>
            <TopBar></TopBar>
            <div className={Class.AddHeader}>
                <p>Dịch vụ <img src={Arrow}/> <a className={Class.ds} href="/ServiceList">Danh sách dịch vụ</a> <img src={Arrow}/> <a href="/ServiceUpdate">Cập nhật</a></p>
            </div>
            <div className={Class.Title}>
                <h1>Quản lý dịch vụ</h1>
            </div>
            <div className={Class.BoxAdd}>

                <h1>Thông tin dịch vụ</h1>

                <div className={Class.BoxLeft}>
                    <div className={Class.Code}>
                        <span className={Class.Title}>Mã dịch vụ: </span>
                        <span className={Class.Icon}>*</span>
                        <Input placeholder='201' />
                    </div>
                    <div className={Class.NameCode}>
                        <span className={Class.Title}>Tên dịch vụ: </span>
                        <span className={Class.Icon} >*</span>
                        <Input placeholder='Khám tim mạch' />
                    </div>
                </div>
                <div className={Class.BoxRight}>
                    <div className={Class.Descrip}>
                        <span className={Class.Title}>Mô tả: </span>
                        <TextArea
                            showCount
                            maxLength={500}
                            style={{ height: 120, width: 550, top: 5, resize: 'none' }}
                            onChange={ClickChange}
                            placeholder="Mô tả dịch vụ"
                        />
                    </div>
                </div>
                <div className={Class.BoxUnder}>
                    <h1>Quy tắc cấp số</h1>

                    <div className={Class.Option}>

                        <div className={Class.StyleOption}>
                            <div className={Class.Options}>
                                <label> <Checkbox onChange={onChange}>Tăng tự động từ: </Checkbox></label>

                            </div>
                            <div className={Class.Options1}>
                                <div className={Class.rangeTitle}>
                                    <p>0001</p>
                                </div>
                                <p className={Class.titleBox1}>đến</p>
                                <div className={Class.rangeTitle}>
                                    <p>9999</p>
                                </div>

                            </div>
                            <div className={Class.Options}>
                                <Checkbox onChange={onChange}>Prefix: </Checkbox>


                            </div>
                            <div className={Class.Options1}>
                                <div className={Class.rangeTitle}>
                                    <p>0001</p>
                                </div>
                            </div>
                            <div className={Class.Options}>
                                <Checkbox onChange={onChange}>Surfix: </Checkbox>

                            </div>
                            <div className={Class.Options1}>
                                <div className={Class.rangeTitle}>
                                    <p>0001</p>
                                </div>
                            </div>
                        </div>


                        <div className={Class.Options}>
                            <Checkbox onChange={onChange}>Reset mỗi ngày</Checkbox>
                        </div>

                        <div className={Class.Note}>
                            <span className={Class.Icon}>*</span>
                            <span className={Class.Titles}>Là trường thông tin bắt buộc</span>
                        </div>
                    </div>
                    <div className={Class.BtnCance}>

                        <Link to='/ServiceList'>  <button type='button' >Huỷ bỏ</button></Link>
                    </div>
                    <div className={Class.BtnAdd}>
                        <Link to='/ServiceList'><button type='button' >Cập nhật</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceAdd
