import axios from 'axios';

const baseURL = 'http://185.244.172.108:8081/'
const instance = axios.create({
    baseURL,
    headers: { accept: "application/json", 'Content-Type': "application/json" }
})
const eID = {
    "id": 22600,
    "rowName": "3a0a19a7-7637-4e7b-89b3-2ab57c27fb21"
}
type Row = {
    "equipmentCosts": number,
    "estimatedProfit": number,
    "machineOperatorSalary": number,
    "mainCosts": number,
    "materials": number,
    "mimExploitation": number,
    "overheads": number,
    "rowName": string,
    "salary": number,
    "supportCosts": number,
    "id": number
}

export const API = {
    async getID() {
        const response = await instance.post('v1/outlay-rows/entity/create')
        return response
    },
    async createRow(row: Row) {
        const response = await instance.post(`v1/outlay-rows/entity/${eID.id}/row/create`, row)
        return response
    },
    async updateRow(row: Row) {
        const response = await instance.post(`v1/outlay-rows/entity/${eID.id}/row/${row.id}/update`, row)
        return response
    },
    async deleteRow(id: number) {
        const response = await instance.delete(`v1/outlay-rows/entity/${eID.id}/row/${id}/delete`)
        return response
    },
    async getRowList() {
        const response = await instance.get(`v1/outlay-rows/entity/${eID.id}/row/list`)
        return response
    }
}
