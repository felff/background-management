import React, { useContext, useState, useEffect } from 'react'
import Form from './form';
import { useNavigate } from 'react-router-dom'
import { DemoContext } from '../../context/company'
import './index.css'

const Demo: React.FC = () => {
    const navigate = useNavigate()
    const { material, reget } = useContext(DemoContext)
    const [keys, setKeys] = useState<string[]>();
    const [search, setSearch] = useState('')
    //DATA YEAR
    const [y, setY] = useState('')
    const year: any = []
    const years = new Set(material && material.map((todo: any) => todo.backgroundInformation.negotiateYear))
    years.forEach(todo => year.push(todo))
    //AREA
    const [a, setA] = useState('')
    const area: any = []
    const areas = new Set(material && material.map((todo: any) => todo.backgroundInformation.area))
    areas.forEach(todo => area.push(todo))
    //Country
    const [c, setC] = useState('')
    const country: any = []
    const countrys = new Set(material && material.map((todo: any) => todo.backgroundInformation.country))
    countrys.forEach(todo => country.push(todo))
    //City
    const [i, setI] = useState('')
    const city: any = []
    const citys = new Set(material && material.map((todo: any) => todo.backgroundInformation.city))
    citys.forEach(todo => { if (todo !== 'No') return city.push(todo) })
    //Company Name
    const [n, setN] = useState('')
    const companyName: any = []
    const companyNames = new Set(material && material.map((todo: any) => todo.backgroundInformation.companyName))
    companyNames.forEach((todo: any) => companyName.push(todo.slice(0, 19)))

    useEffect(() => {
        if (material && material.length !== 0) {
            const a = Object.keys(material[0].backgroundInformation)
            setKeys(a.filter(todo => todo !== 'areaAddress'))
        }
    }, [material])

    //過濾塞選fun
    const seach = (data: any) => {
        return data && data.filter((item: any) =>
            keys?.some(key => typeof item.backgroundInformation[key] === 'string'
                && item.backgroundInformation[key].includes(search)
                && item.backgroundInformation['negotiateYear'].includes(y)
                && item.backgroundInformation['area'].includes(a)
                && item.backgroundInformation['country'].includes(c)
                && item.backgroundInformation['city'].includes(i)
                && item.backgroundInformation['companyName'].includes(n)
            ))
    }
    return (
        <div className='formHome container-fluid'>
            <span className='label'><i className="fa-solid fa-house pe-3"></i>DIF Backend System / from</span>
            <div className='title'>
                <div className='text'>Customer Backend Form</div>
                <div className='butn'>
                    <button className='E me-3'><i className="fa-solid fa-file-excel pe-2"></i>Excel</button>
                    <button onClick={()=>navigate('/form')} className='B mt-3 me-2' ><i className="fa-solid fa-plus pe-2"></i>Create customer</button>
                </div>
            </div>
            <div className='tour '>
                <div className='inp'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type='search' placeholder='Search anything...' onChange={e => setSearch(e.target.value)} />
                </div>
                <div className='sels'>
                    <label className='sel'>
                        <i className="fa-solid fa-calendar"></i>
                        <select id="year" value={y} onChange={e => setY(e.target.value)}>
                            <option value=''>Data year</option>
                            {
                                year.map((todo: any, i: number) => {
                                    return <option value={todo} key={i}>{todo}</option>
                                })
                            }
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-globe"></i>
                        <select id="year" value={a} onChange={e => setA(e.target.value)}>
                            <option value="" >Area</option>
                            {
                                area.map((todo: any, i: number) => {
                                    return <option value={todo} key={i}>{todo}</option>
                                })
                            }
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-location-dot"></i>
                        <select id="year" value={c} onChange={e => setC(e.target.value)}>
                            <option value="" >Country</option>
                            {
                                country.map((todo: any, i: number) => {
                                    return <option value={todo} key={i}>{todo}</option>
                                })
                            }
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-building"></i>
                        <select id="year" value={i} onChange={e => setI(e.target.value)}>
                            <option value="" >City</option>
                            {
                                city.map((todo: any, i: number) => {
                                    return <option value={todo} key={i}>{todo}</option>
                                })
                            }
                        </select>
                    </label>
                    <label className='sel '>
                        <i className="fa-solid fa-briefcase"></i>
                        <select id="year" value={n} onChange={e => setN(e.target.value)}>
                            <option value="" >Conpany name</option>
                            {
                                companyName.map((todo: any, i: number) => {
                                    return <option value={todo} key={i}>{todo}</option>
                                })
                            }
                        </select>
                    </label>
                </div>
            </div>
            <div className='nave mx-3 mt-3'>
                <span className='customers'>All customers</span>
                <span className='nb'>{material && material.length}</span>
            </div>
            <div className='form mt-3'>
                <Form data={seach(material)} reget={reget} />
            </div>
        </div>  
    )
}
export default Demo;