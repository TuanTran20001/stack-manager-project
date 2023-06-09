import React, { useState } from 'react'
import Styless from './Dashboard3.module.css'
import MenuBar from '../../pages/MenuBar/Menu'
import TopDash from '../../pages/TopDash/TopDash'
import Update from '../../../assets/Image/EditNote.png'
import { Link, useNavigate } from 'react-router-dom';
import Capso from '../../assets/image/Dashboard/capso.png'
import Dichvu from '../../assets/image/Dashboard/dichvu.png'
import Thietbi from '../../assets/image/Dashboard/thietbi.png'
import CS1 from '../../assets/image/Dashboard/CS1.png'
import CS2 from '../../assets/image/Dashboard/CS2.png'
import CS3 from '../../assets/image/Dashboard/CS3.png'
import CS4 from '../../assets/image/Dashboard/CS4.png'
import Percent76 from '../../assets/image/Dashboard/Percent76.png'
import Percent86 from '../../assets/image/Dashboard/Percent86.png'
import Percent90 from '../../assets/image/Dashboard/Percent90.png'
import Up32 from '../../assets/image/Dashboard/up32.png'
import Up56 from '../../assets/image/Dashboard/up56.png'
import Down32 from '../../assets/image/Dashboard/down32.png'
import Down22 from '../../assets/image/Dashboard/down22.png'
import BieuDo from '../../assets/image/Dashboard/bieudo.png'
import Dau from '../../assets/image/Dashboard/dau.png'
import Cot from '../../assets/image/Dashboard/cot.png'
import Number from '../../assets/image/Dashboard/num.png'
import DatePickerProps from '../../utils/DatePicker';

const Dashboard1 = ()=> {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (e: { target: { value: any; }; }) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue);
      };
  return (
    <div className={Styless.DashBoard3}>
              <div className={Styless.Dashheader}>
                  <MenuBar></MenuBar>               
              </div>

              <div className={Styless.Dash}>
                 <h1>Dashboard</h1>
                 <h2>Biểu đồ cấp số</h2>
              </div>
            <div className={Styless.DashBoards}>
                <div className={Styless.DashTop1}>
                    <div className={Styless.DashImg}>
                        <Link to='/List'><img src={CS1} alt=""/></Link>
                        <Link to='/List'><p>Số thứ tự đã cấp</p></Link>
                    </div>

                    <div className={Styless.DashTexts}>
                        <Link to='/List'><p>4.221</p></Link>
                        <Link to='/List'><img src={Up32} alt="" /></Link>
                    </div>
                </div>

                 <div className={Styless.DashTop2}>
                    <div className={Styless.DashImg}>
                        <Link to='/List'><img src={CS2} alt=""/></Link>
                        <Link to='/List'><p style={{width: '70px'}}>Số thứ tự đã sử dụng</p></Link>
                    </div>

                    <div className={Styless.DashTexts}>
                        <Link to='/List'><p>3.721</p></Link>
                        <Link to='/List'><img src={Down32} alt="" /></Link>
                    </div>
                </div>

                <div className={Styless.DashTop3}>
                    <div className={Styless.DashImg}>
                        <Link to='/List'><img src={CS3} alt=""/></Link>
                        <Link to='/List'><p style={{width: '70px'}}>Số thứ tự đang chờ</p></Link>
                    </div>

                    <div className={Styless.DashTexts}>
                        <Link to='/List'><p style={{left: '40px'}}>468</p></Link>
                        <Link to='/List'><img src={Up56} alt="" /></Link>
                    </div>
                </div>

                <div className={Styless.DashTop4}>
                    <div className={Styless.DashImg}>
                        <Link to='/List'><img src={CS4} alt=""/></Link>
                        <Link to='/List'><p style={{width: '70px'}}>Số thứ tự đã bỏ qua</p></Link>
                    </div>

                    <div className={Styless.DashTexts}>
                        <Link to='/List'><p style={{left: '10px'}}>32</p></Link>
                        <Link to='/List'><img src={Down22} alt="" /></Link>
                    </div>
                </div>

                {/* BoxDown */}
                <div className={Styless.DashDown}>
                    <div className={Styless.DashNum1}>
                       <h2>Bảng thống kê theo tháng</h2>
                    </div>
                    <div className={Styless.DashNum2}>
                      <h1>Năm 2021</h1>
                    </div>
                    <div className={Styless.DashNum3}>
                      <h1>Xem theo</h1>
                    </div>
                    <div className={Styless.DashCombobox}>
                        <select 
                            value={selectedOption} 
                            onChange={handleOptionChange}>
                            <option  id='default' value="/DashBoard3">Tháng</option>
                            <option value="/DashBoard1">Ngày</option>
                            <option value="/DashBoard2">Tuần</option>
                        </select>
                    </div>
                    {/* Bieu Do */}
                    <div className={Styless.DashQuanlity}>
                        <div className={Styless.DashNum4}>
                            <h1>6000</h1>
                        </div>
                            <div className={Styless.Gach1}></div>
                        <div className={Styless.DashNum5}>
                            <h1>5000</h1>
                        </div>
                            <div className={Styless.Gach2}></div>
                        <div className={Styless.DashNum6}>
                            <h1>4000</h1>
                        </div>
                            <div className={Styless.Gach3}></div>
                        <div className={Styless.DashNum7}>
                            <h1>3000</h1>
                        </div>
                            <div className={Styless.Gach4}></div>
                        <div className={Styless.DashNum8}>
                            <h1>2000</h1>
                        </div>
                            <div className={Styless.Gach5}></div>
                        <div className={Styless.DashNum9}>
                            <h1>1000</h1>
                        </div>
                            <div className={Styless.Gach6}></div>
                        <div className={Styless.DashNum10}>
                            <h1>0</h1>
                        </div>
                            <div className={Styless.Gach7}></div>
                        <div className={Styless.DashNum11}>
                            <h1>sl</h1>
                        </div>
                        <div className={Styless.DashNum12}>
                            <h1>/</h1>
                        </div>
                        <div className={Styless.DashNum13}>
                            <h1>ngày</h1>
                        </div>
                        <div className={Styless.Num1}>
                            <h1>1</h1>
                        </div>
                        <div className={Styless.Num2}>
                            <h1>2</h1>
                        </div>
                        <div className={Styless.Num3}>
                            <h1>3</h1>
                        </div>
                        <div className={Styless.Num4}>
                            <h1>4</h1>
                        </div>
                        <div className={Styless.Num5}>
                            <h1>5</h1>
                        </div>
                        <div className={Styless.Num6}>
                            <h1>6</h1>
                        </div>
                        <div className={Styless.Num7}>
                            <h1>7</h1>
                        </div>
                        <div className={Styless.Num8}>
                            <h1>8</h1>
                        </div>
                        <div className={Styless.Num9}>
                            <h1>9</h1>
                        </div>
                         <div className={Styless.Num10}>
                            <h1>10</h1>
                        </div>
                        <div className={Styless.Num11}>
                            <h1>11</h1>
                        </div>
                        <div className={Styless.Num12}>
                            <h1>12</h1>
                        </div>
                        <div className={Styless.Hinh1}>
                            <img src={BieuDo} alt=''/>
                        </div>
                        <div className={Styless.Hinh2}>
                            <img src={Cot} alt=''/>
                        </div>
                        <div className={Styless.Hinh3}>
                            <img src={Dau} alt=''/>
                        </div>
                        <div className={Styless.Hinh4}>
                            <img src={Number} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={Styless.DashRight}>
                    <TopDash></TopDash> 
                    <div className={Styless.DashBox}>
                        <h2>Tổng quan</h2>
                  {/* BoxR1 */}
                        <div className={Styless.DashRight1}>
                            <div className={Styless.DashItem1}>
                                <Link to='/Equipment'><img src={Percent90} alt="" /></Link>
                                <div className={Styless.DashBig}>
                                    <Link to='/Equipment'><p>4.221</p></Link>
                                    <Link to='/Equipment'><img src={Thietbi} alt="" /></Link>
                                        <div className={Styless.DashSmall}>
                                            <Link to='/Equipment'><p style={{color:"#FF7506"}}>Thiết bị</p></Link>
                                        </div>
                                         
                                        <div className={Styless.DashLittle}>
                                            <span className={Styless.DashColor} style={{backgroundColor:'#FFD130'}}></span>
                                            <Link to='/Equipment'><p>Đang hoạt động</p></Link>
                                            <Link to='/Equipment'><h4 className={Styless.dashText} style={{color:'#FF7506'}}>3.799</h4></Link>
                                            <Link to='/Equipment'><h4 className={Styless.dashText1} style={{color:'#FF7506'}}>422</h4></Link>
                                        </div>
                                        <div className={Styless.DashLittle1}>
                                            <span className={Styless.DashColor} style={{backgroundColor:'#7E7D88'}}></span>
                                            <Link to='/Equipment'><p>Ngưng hoạt động</p></Link>
                                        </div>
                                </div>
                            </div>  
                        </div>
                        {/* BoxR2 */}
                        <div className={Styless.DashRight2}>
                            <div className={Styless.DashItem1}>
                                    <Link to='/ServiceList'><img src={Percent76} alt="" /></Link>
                                    <div className={Styless.DashBig}>
                                    <Link to='/ServiceList'><p>276</p></Link>
                                        <Link to='/ServiceList'><img src={Dichvu} alt="" /></Link>
                                            <div className={Styless.DashSmall}>
                                                <p style={{color:"#4277FF"}}>Dịch vụ</p>
                                            </div>
                                            <div className={Styless.DashLittle}>
                                                <span className={Styless.DashColor} style={{backgroundColor:'#4277FF'}}></span>
                                                <Link to='/ServiceList'><p>Đang hoạt động</p></Link>
                                                <Link to='/ServiceList'><h4 className={Styless.dashText} style={{color:'#4277FF'}}>210</h4></Link>
                                                <Link to='/ServiceList'><h4 className={Styless.dashText1} style={{color:'#4277FF'}}>66</h4></Link>
                                            </div>
                                            <div className={Styless.DashLittle1}>
                                                <span className={Styless.DashColor} style={{backgroundColor:'#7E7D88'}}></span>
                                                <Link to='/ServiceList'><p>Ngưng hoạt động</p></Link>
                                            </div>
                                    </div>
                            </div>  
                        </div>
                        {/* BoxR3 */}
                        <div className={Styless.DashRight3}>
                            <div className={Styless.DashItem1}>
                                        <Link to='/List'><img src={Percent86} alt="" /></Link>
                                        <div className={Styless.DashBig}>
                                            <Link to='/List'><p>4.221</p></Link>
                                            <Link to='/List'><img src={Capso} alt="" /></Link>
                                                <div className={Styless.DashSmall}>
                                                    <p style={{color:"#35C75A"}}>Dịch vụ</p>
                                                </div>
                                                <div className={Styless.DashLittle}>
                                                    <span className={Styless.DashColor} style={{backgroundColor:'#35C75A', bottom:'49px'}}></span>
                                                    <Link to='/List'><p style={{bottom:'25px'}}>Đã sử dụng</p></Link>
                                                    <Link to='/List'><h4 className={Styless.dashText} style={{color:'#35C75A', bottom:'17px' }}>3.721</h4></Link>
                                                    <Link to='/List'><h4 className={Styless.dashText1} style={{color:'#35C75A'}}>486</h4></Link>
                                                    <Link to='/List'><h4 className={Styless.dashText2} style={{color:'#35C75A'}}>32</h4></Link>
                                                </div>
                                                <div className={Styless.DashLittle1}>
                                                    <span className={Styless.DashColor} style={{backgroundColor:'#7E7D88', bottom:'29px'}}></span>
                                                    <Link to='/List'><p style={{ bottom:'5px' }}>Đang chờ</p></Link>
                                                </div>
                                                <div className={Styless.DashLittle2}>
                                                    <span className={Styless.DashColor} style={{backgroundColor:'#F178B6'}}></span>
                                                    <Link to='/List'><p>Bỏ qua</p></Link>
                                                </div>
                                        </div>
                            </div>  
                        </div>
                    </div>
                
                        <div className={Styless.DashRight4}>
                            <DatePickerProps></DatePickerProps> 
                        </div>
                </div>
            </div>        
    </div>
  )
}
export default Dashboard1;

