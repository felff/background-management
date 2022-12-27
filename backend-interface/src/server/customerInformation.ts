import axios from 'axios';


const COMPANT_API_DATA = 'https://localhost:5001/api/';

class customerInformation {
    //拿取公司資料
    getCompanyData() {
        return axios.get(COMPANT_API_DATA + 'Crm/getData')
    }
    //新增客戶資料
    postCompanyData(data: object) {
        return axios.post(COMPANT_API_DATA + 'Crm/postData', data)
    }
    //新增工作狀態
    postCompanyStatu(data: object) {
        return axios.post(COMPANT_API_DATA + 'Crm/insertChildProfile', data)
    }
    //修改員工資料
    updataCompanyData(data:object){
        return axios.put(COMPANT_API_DATA+'Crm/updateData',data)
    }
    //刪除整筆資料
    deleteCompanyData(id:any){
        return axios.delete(COMPANT_API_DATA+`Crm/deleteData/${id}`)
    }
    //刪除單筆
    deleteCompanyStatu(id:any){
        return axios.delete(COMPANT_API_DATA+`Crm/deleteChildData/${id}`)
    }
}

export default new customerInformation()