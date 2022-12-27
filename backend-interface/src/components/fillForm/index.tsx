import React, { useState , useContext} from 'react'
import customerInformation from '../../server/customerInformation'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { DemoContext } from '../../context/company'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
const Form: React.FC = () => {
    const { reget } = useContext(DemoContext)
    const [backgroundInformation, setBackgroundInformation] = useState({})
    const [businessExecutionStatu] = useState([{ companyName: '', date: '', state: '' }, { companyName: '', date: '', state: '' }])
    const navigate = useNavigate()

    const sed = () => {
        const newdata = businessExecutionStatu.filter(e => e.state !== '')
        const data = { backgroundInformation, businessExecutionStatu: newdata }
        customerInformation.postCompanyData(data).then(
            () => {
                reget()
                navigate('/')
            }, () => {
                return toast.error('請填寫完整資料', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        )
    }


    return (
        <div className='bg'>
            <div className='container'>
                <div className='form-gro'>
                    <div className='row mt-2'>
                        <h3>Fill in the company personnel information</h3>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, negotiateYear: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-calendar-days"></i>Negotiate Year</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, area: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-location-dot"></i>Area</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, country: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-earth-americas"></i>Country</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, city: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-city"></i>City</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => {
                                setBackgroundInformation({ ...backgroundInformation, companyName: e.target.value })
                                businessExecutionStatu[0].companyName = e.target.value;
                                businessExecutionStatu[1].companyName = e.target.value
                            }
                            } type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-building"></i>Company Name</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, compantPhone: e.target.value })} type="phone" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-phone"></i>Compant Phone</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, employeeName: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-user"></i>Employee Name</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, position: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-address-card"></i>Position</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, cellPhone: e.target.value })} type="phone" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-mobile-screen"></i>Cell Phone</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, email: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-envelope"></i>Email</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, areaAddress: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-address-book"></i>Area Address</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, companyUrl: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-cloud"></i>Company Url</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, industryType: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-rotate-right"></i>Industry Type</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, fax: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-phone-volume"></i>Fax</label>
                        </div>
                        <div className="col-12 form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, remark: e.target.value })} type="text" />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-tag"></i>Remark</label>
                        </div>
                        <div className="col-12 mt-3 business">
                            <label ><i className="fa-solid fa-folder-open pe-2"></i>Business Execution Status</label>
                            <input required type="date" onChange={e => businessExecutionStatu[0].date = e.target.value} />
                            <input required type="text" onChange={e => businessExecutionStatu[0].state = e.target.value} placeholder='當天業務狀況.....' />
                            <input required type="date" onChange={e => businessExecutionStatu[1].date = e.target.value} />
                            <input required type="text" onChange={e => businessExecutionStatu[1].state = e.target.value} placeholder='當天業務狀況.....' />
                        </div>
                        <button onClick={sed} className='mt-4 btu'>Send Out</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;