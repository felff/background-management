import React, { createContext, useState, useEffect } from 'react';
import customerInformation from '../server/customerInformation';

export const DemoContext = createContext<any>({})
export const DemoContextProvider = (prop: any) => {
    const [material, setMaterial] = useState()
    const reget = async () => {
        const rep = await customerInformation.getCompanyData()
        const data = await rep.data
        setMaterial(data)
    }
    useEffect(() => {
        const featch = async () => {
            const rep = await customerInformation.getCompanyData()
            const data = await rep.data
            setMaterial(data)
        }
        featch()
    }, [])

    return (
        <DemoContext.Provider value={{
            material,
            reget
        }}>
            {prop.children}
        </DemoContext.Provider>
    )
}
