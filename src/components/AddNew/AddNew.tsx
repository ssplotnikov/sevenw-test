import React from "react";
import EditMode from "../EditMode";


export default function AddNew({ isEdit, parantId, Submit, count, createParent, createChild, data }) {
    const handleSubmit = () => {
        Submit(parantId || null)
    }
    return (
        <tr onDoubleClick={handlerChangeEdit} onKeyDown={handleSubmit} onMouseEnter={() => console.log("mouse up")}>
            <EditMode isEdit={isEdit} count={count} createParent={createParent} createChild={createChild} deleteRow={deleteRow} />
            <td><input type="text" placeholder={'Наименование работ'} value={data.rowName} onChange={handlerRowName} className="input" /></td>
            <td><input type="text" placeholder={'Основнaя з/п'} value={data.mainCosts} onChange={handlerMainCosts} className="input" /></td>
            <td><input type="text" placeholder={'Оборудование'} value={data.equipCosts} onChange={handlerEquipCosts} className="input" /></td>
            <td><input type="text" placeholder={'Накладные расходы'} value={data.overheads} onChange={handlerOverheads} className="input" /></td>
            <td><input type="text" placeholder={'Сметная прибыль'} value={data.estimated} onChange={handlerEstimated} className="input" /></td>
        </tr>
    )
}
