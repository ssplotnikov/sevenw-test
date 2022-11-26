import React, { useState } from "react";
import EditMode from "../EditMode";


export default function AddNew({ isEdit, parantId, Submit, count, createParent, createChild }) {
    const handleSubmit = () => {
        Submit(parantId || null)
    }
    const [form, setForm] = useState({
        rowName: '',
        mainCosts: 0,
        equipCosts: 0,
        overheads: 0,
        estimated: 0

    })
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <tr onKeyDown={handleSubmit} >
            <EditMode count={count} isEdit={true} />
            <td><input type="text" name="rowName" placeholder={'Наименование работ'} value={form.rowName} onChange={handleForm} className="input" /></td>
            <td><input type="text" name="mainCosts" placeholder={'Основнaя з/п'} value={form.mainCosts} onChange={handleForm} className="input" /></td>
            <td><input type="text" name="equipCosts" placeholder={'Оборудование'} value={form.equipCosts} onChange={handleForm} className="input" /></td>
            <td><input type="text" name="overheads" placeholder={'Накладные расходы'} value={form.overheads} onChange={handleForm} className="input" /></td>
            <td><input type="text" name="estimated" placeholder={'Сметная прибыль'} value={form.estimated} onChange={handleForm} className="input" /></td>
        </tr >
    )
}
