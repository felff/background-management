import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DemoContext } from '../../context/company'
import { ToastContainer, toast } from 'react-toastify';
import customerInformation from '../../server/customerInformation'
import './index.css'

const Revise: React.FC = () => {
    const { companyName } = useParams()
    const { material, reget } = useContext(DemoContext)
    const [backgroundInformation, setBackgroundInformation] = useState<any>()
    const [businessExecutionStatu, setbusinessExecutionStatu] = useState<any>()
    const navigate = useNavigate()
    useEffect(() => {
        const newdata = material && material.filter((todo: any) => {
            return todo.backgroundInformation.companyName === companyName
        })
        setBackgroundInformation(newdata && newdata[0].backgroundInformation)
        setbusinessExecutionStatu(newdata && newdata[0].businessExecutionStatu)
    }, [companyName, material])

    const setText = (e: any, todos: any, name: any) => {
        const newdata = businessExecutionStatu.map((todo: any) => {
            if (name === 'state') {
                if (todos.id === todo.id) return { ...todo, state: e.target.value }
                else return todo
            } else {
                if (todos.id === todo.id) return { ...todo, date: e.target.value }
                else return todo
            }
        })
        setbusinessExecutionStatu(newdata)
    }

    const sed = () => {
        const newdate = { backgroundInformation, businessExecutionStatu }
        customerInformation.updataCompanyData(newdate).then(() => {
            navigate('/')
            reget()
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
            })
        }
        )
    }
    return (
        <div className='bg1'>
            <div className='container'>
                <div className='form-grot'>
                    <div className='row mt-2'>
                        <h3>Fill in the company personnel information</h3>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, negotiateYear: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.negotiateYear} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-calendar-days"></i>Negotiate Year</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, area: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.area} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-location-dot"></i>Area</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, country: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.country} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-earth-americas"></i>Country</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, city: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.city} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-city"></i>City</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, companyName: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.companyName} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-building"></i>Company Name</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, compantPhone: e.target.value })} type="phone" value={backgroundInformation && backgroundInformation.compantPhone} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-phone"></i>Compant Phone</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, employeeName: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.employeeName} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-user"></i>Employee Name</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, position: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.position} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-address-card"></i>Position</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, cellPhone: e.target.value })} type="phone" value={backgroundInformation && backgroundInformation.cellPhone} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-mobile-screen"></i>Cell Phone</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, email: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.email} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-envelope"></i>Email</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, areaAddress: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.areaAddress} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-address-book"></i>Area Address</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, companyUrl: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.companyUrl} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-cloud"></i>Company Url</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, industryType: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.industryType} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-rotate-right"></i>Industry Type</label>
                        </div>
                        <div className="col-6  form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, fax: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.fax} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-phone-volume"></i>Fax</label>
                        </div>
                        <div className="col-12 form__group">
                            <input required onChange={e => setBackgroundInformation({ ...backgroundInformation, remark: e.target.value })} type="text" value={backgroundInformation && backgroundInformation.remark} />
                            <label  ><i className="pe-2 fa-sharp fa-solid fa-tag"></i>Remark</label>
                        </div>
                        <div className="col-12 mt-3 business">
                            <label ><i className="fa-solid fa-folder-open pe-2"></i>Business Execution Status</label>
                            {
                                businessExecutionStatu && businessExecutionStatu.map((todo: any, i: any) => {
                                    return <div key={i}>
                                        <input type="date" value={todo.date.split('T')[0]} onChange={e => setText(e, todo, 'date')} />
                                        <input type="text" value={todo.state} onChange={e => setText(e, todo, 'state')} />
                                    </div>
                                })
                            }
                        </div>
                        <button onClick={sed} className='mt-4 btu'>Up Data</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Revise;