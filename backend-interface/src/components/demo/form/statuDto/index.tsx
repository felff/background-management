import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import customerInformation from '../../../../server/customerInformation'
import './index.css'
interface prop {
    show: boolean;
    setShow: Function;
    object: any;
    reget: Function;
}

const Statu: React.FC<prop> = ({ show, setShow, object, reget }) => {
    const [date, setDate] = useState('')
    const [state, setState] = useState('')
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()
    const add = async () => {
        if (date === '' || state === '') setAlert(true)
        else setAlert(false)
        const newdata = [{ companyName: object.backgroundInformation.companyName, date, state }]
        const rep = await customerInformation.postCompanyStatu(newdata)
        const data = await rep.data.message
        if (data === "新增成功!") {
            reget()
            setState('')
            setDate('')
            setShow(false)
        }
    }
    const dele = (id:any) =>{
        customerInformation.deleteCompanyStatu(id).then(
            ()=>{
                reget()
                setShow(false)
            }
        )
    }
    return (
        <Modal size='lg' show={show} onHide={() => {
            setShow(false)
            setAlert(false)
        }} className='bg-alert rounded'>
            <Modal.Header >
                <Modal.Title className='title-mod'>
                    <h3><span className='co'>{object.backgroundInformation && object.backgroundInformation.companyName.charAt(0).toUpperCase() + object.backgroundInformation.companyName.slice(1)}</span>
                        <span className='title'> Company Business Execution Status</span> </h3>
                    <button onClick={() => navigate(`/revise/${object.backgroundInformation && object.backgroundInformation.companyName}`)}><i className="fa-sharp fa-solid fa-pen-nib pe-1"></i>Revise</button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <ul>
                    {
                        object.businessExecutionStatu && object.businessExecutionStatu.map((todo: any) => {
                            return <li key={todo.id} className='mt-2'><span className='da'>{todo.date.split('T')[0]}</span> <span className='st'>{todo.state}</span><button onClick={()=>dele(todo.id)}><i className="fa-solid fa-trash"></i> Delete</button></li>
                        })
                    }
                </ul>
            </Modal.Body>
            <Modal.Footer className='foot'>
                <input type="date" onChange={e => setDate(e.target.value)} />
                <input type='text' size={55} onChange={e => setState(e.target.value)} />
                <button onClick={add}><i className="fa-sharp fa-solid fa-plus pe-2"></i>Add</button>
                {
                    alert && (<div className='alert me-auto'>
                        <span><i className="fa-sharp fa-solid fa-circle-exclamation me-2"></i>資料不能為空值</span>
                    </div>)
                }
            </Modal.Footer>
        </Modal>
    )
}
export default Statu;