import React, { useState } from "react";
import EditMode from "../EditMode";
import { Props } from "./AddNew.types";

export default function AddNew({ isEdit, parentId, Submit, count }: Props) {

    const [addNew, setAddNew] = useState({
        rowName: '',
        mainCosts: 0,
        equipCosts: 0,
        overheads: 0,
        estimated: 0,
        parentId: parentId || null,
    })

    const handleAddNew = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddNew((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    console.log("parentId: ", parentId)

    return (
        <tr onKeyDown={(e) => Submit(e, parentId, addNew)} >
            <EditMode count={count} isEdit={isEdit} />
            <td><input type="text" name="rowName" placeholder={'Наименование работ'} value={addNew.rowName} onChange={handleAddNew} className="input" /></td>
            <td><input type="text" name="mainCosts" placeholder={'Основнaя з/п'} value={addNew.mainCosts} onChange={handleAddNew} className="input" /></td>
            <td><input type="text" name="equipCosts" placeholder={'Оборудование'} value={addNew.equipCosts} onChange={handleAddNew} className="input" /></td>
            <td><input type="text" name="overheads" placeholder={'Накладные расходы'} value={addNew.overheads} onChange={handleAddNew} className="input" /></td>
            <td><input type="text" name="estimated" placeholder={'Сметная прибыль'} value={addNew.estimated} onChange={handleAddNew} className="input" /></td>
        </tr >
    )
}
