import React, { useState } from 'react';
import useInput from '../../hooks/useInput/useInput';
import { Props } from './ProjItem.types'
import './ProjItem.style.sass'
import { addRowThunk, deleteRowThunk, updateRowThunk, toggleEdit, toggleAdd } from '../../store/RowSlice/rowSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import EditMode from '../EditMode';
import { shallowEqual } from 'react-redux';
import AddNew from '../AddNew/AddNew';

export default function ProjItem({ data, count }: Props) {
    const dispatch = useAppDispatch()
    const isEdit = useAppSelector((state) => state.rows.isEdit)

    const handlerEdit = () => {
        dispatch(toggleEdit())
    }
    const handlerChangeEdit = () => {
        setChange(false)
        handlerEdit()
    }
    const [add, setAdd] = useState(false)
    const [change, setChange] = useState(false)
    const [rowName, handlerRowName] = useInput(data.rowName)
    const [mainCosts, handlerMainCosts] = useInput(data.mainCosts)
    const [equipCosts, handlerEquipCosts] = useInput(data.equipmentCosts)
    const [overheads, handlerOverheads] = useInput(data.overheads)
    const [estimated, handlerEstimated] = useInput(data.estimatedProfit)

    const addRow = (id: number | null) => {
        dispatch(addRowThunk({
            "equipmentCosts": equipCosts,
            "estimatedProfit": estimated,
            "machineOperatorSalary": 0,
            "mainCosts": mainCosts,
            "materials": 0,
            "mimExploitation": 0,
            "overheads": overheads,
            "parentId": id || null,
            "rowName": rowName,
            "salary": 0,
            "supportCosts": 0
        }))
    }

    const updateRow = () => {
        if (
            !shallowEqual({
                "equipmentCosts": data.equipmentCosts,
                "estimatedProfit": data.estimatedProfit,
                "machineOperatorSalary": 0,
                "mainCosts": data.mainCosts,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": data.overheads,
                "rowName": data.rowName,
                "salary": 0,
                "supportCosts": 0,
                "id": data.id
            }, {
                "equipmentCosts": equipCosts,
                "estimatedProfit": estimated,
                "machineOperatorSalary": 0,
                "mainCosts": mainCosts,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": overheads,
                "rowName": rowName,
                "salary": 0,
                "supportCosts": 0,
                "id": data.id
            })) {
            dispatch(updateRowThunk({
                "equipmentCosts": equipCosts,
                "estimatedProfit": estimated,
                "machineOperatorSalary": 0,
                "mainCosts": mainCosts,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": overheads,
                "rowName": rowName,
                "salary": 0,
                "supportCosts": 0,
                "id": data.id
            }))
        }
    }

    const Submit = (e: { code: string; }, id: number | null) => {
        if (e.code === 'Enter' && !data.id) {
            handlerEdit()
            setAdd(false)
            addRow(null)
        }
        if (add && e.code === 'Enter') {
            handlerEdit()
            setAdd(false)
            addRow(id)

        }
        if (e.code === 'Enter') {
            handlerEdit()
            setAdd(false)
            updateRow()
        }
    }
    const createParent = () => {
        setAdd(true)
        setParantId(null)
        handlerEdit()
    }
    const deleteRow = () => {
        dispatch(deleteRowThunk(data.id))
    }
    const createChild = () => {
        setAdd(true)
        setParantId(data.id)
        handlerEdit()
    }
    const [parantId, setParantId] = useState<number | null>(null)
    return (
        <>
            <tr onDoubleClick={handlerChangeEdit} onKeyDown={Submit} onMouseEnter={() => console.log("mouse up")}>
                {change ?
                    (
                        <>
                            <EditMode isEdit={isEdit} count={count} createParent={createParent} createChild={createChild} deleteRow={deleteRow} />
                            <td><input type="text" placeholder={rowName || 'Наименование работ'} value={rowName} onChange={handlerRowName} className="input" /></td>
                            <td><input type="text" placeholder={mainCosts || 'Основнaя з/п'} value={mainCosts} onChange={handlerMainCosts} className="input" /></td>
                            <td><input type="text" placeholder={equipCosts || 'Оборудование'} value={equipCosts} onChange={handlerEquipCosts} className="input" /></td>
                            <td><input type="text" placeholder={overheads || 'Накладные расходы'} value={overheads} onChange={handlerOverheads} className="input" /></td>
                            <td><input type="text" placeholder={estimated || 'Сметная прибыль'} value={estimated} onChange={handlerEstimated} className="input" /></td>
                        </>
                    )
                    :
                    (
                        <>
                            <EditMode isEdit={isEdit} count={count} createParent={createParent} createChild={createChild} deleteRow={deleteRow} />
                            <td>{data.rowName}</td>
                            <td>{data.mainCosts}</td>
                            <td>{data.equipmentCosts}</td>
                            <td>{data.overheads}</td>
                            <td>{data.estimatedProfit}</td>
                        </>
                    )
                }
            </tr>
            {data?.child?.length ? (data.child.map((chil) => (
                <ProjItem data={chil} count={++count} key={chil.id} />
            ))) : null}
            {add && <AddNew parentId={parantId} />}
        </>
    )
}
