import React, { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { addRowThunk, deleteRowThunk, updateRowThunk, toggleEdit } from '../../store/RowSlice/rowSlice';
import EditMode from '../EditMode';
import AddNew from '../AddNew/AddNew';
import { Obj, Props } from './ProjItem.types'
import './ProjItem.style.sass'

export default function ProjItem({ data, count = 0 }: Props) {
    const dispatch = useAppDispatch()
    const isEdit = useAppSelector((state) => state.rows.isEdit)

    const [add, setAdd] = useState(false)
    const [change, setChange] = useState(false)
    const [parentId, setParentId] = useState<number | null>(null)
    const counter = count + 1

    const [editForm, setEditForm] = useState({
        rowName: data.rowName,
        mainCosts: data.mainCosts || null,
        equipCosts: data.equipmentCosts || null,
        overheads: data.overheads || null,
        estimated: data.equipmentCosts || null
    })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const addRow = (id: any, obj: any) => {
        dispatch(addRowThunk({
            "equipmentCosts": obj.equipCosts,
            "estimatedProfit": obj.estimated,
            "machineOperatorSalary": 0,
            "mainCosts": obj.mainCosts,
            "materials": 0,
            "mimExploitation": 0,
            "overheads": obj.overheads,
            "parentId": id || null,
            "rowName": obj.rowName,
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
                "equipmentCosts": editForm.equipCosts,
                "estimatedProfit": editForm.estimated,
                "machineOperatorSalary": 0,
                "mainCosts": editForm.mainCosts,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": editForm.overheads,
                "rowName": editForm.rowName,
                "salary": 0,
                "supportCosts": 0,
                "id": data.id
            })) {
            dispatch(updateRowThunk({
                "equipmentCosts": editForm.equipCosts,
                "estimatedProfit": editForm.estimated,
                "machineOperatorSalary": 0,
                "mainCosts": editForm.mainCosts,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": editForm.overheads,
                "rowName": editForm.rowName,
                "salary": 0,
                "supportCosts": 0,
                "id": data.id
            }))
        }
    }

    const Submit = (e: { code: string; }, obj: Obj): void => {
        console.log(obj)
        if (e.code === 'Enter' && data === 0) {
            addRow(parentId, obj)
            changeIsEdit(false)
            setAdd(false)
            setChange(false)
        }
        if (add && e.code === 'Enter') {
            addRow(parentId, obj)
            changeIsEdit(false)
            setAdd(false)
            setChange(false)
        }
        if (e.code === 'Enter') {
            updateRow()
            changeIsEdit(false)
            setAdd(false)
            setChange(false)
        }
    }

    const changeIsEdit = (param: boolean): void => {
        dispatch(toggleEdit(param))
    }

    const handlerChangeEdit = () => {
        setChange(true)
        changeIsEdit(true)
    }

    const createParent = () => {
        setAdd(true)
        changeIsEdit(true)
    }

    const createChild = () => {
        setParentId(data.id)
        setAdd(true)
        changeIsEdit(true)
    }

    const deleteRow = () => {
        dispatch(deleteRowThunk(data))
    }
    useEffect(() => {
        if (data === 0) {
            handlerChangeEdit()
        } else {
            setChange(false)
            changeIsEdit(false)
        }
    })

    console.log(data)
    return (
        <>
            <tr onDoubleClick={handlerChangeEdit} onKeyDown={(e) => Submit(e, editForm)} >
                {change ?
                    (
                        <>
                            <EditMode isEdit={isEdit} count={count} createParent={createParent} createChild={createChild} deleteRow={deleteRow} />
                            <td><input type="text" name="rowName" placeholder={editForm.rowName || 'Наименование работ'} value={editForm.rowName} onChange={handleForm} className="input" /></td>
                            <td><input type="text" name="mainCosts" placeholder={editForm.mainCosts || 'Основнaя з/п'} value={editForm.mainCosts} onChange={handleForm} className="input" /></td>
                            <td><input type="text" name="equipCosts" placeholder={editForm.equipCosts || 'Оборудование'} value={editForm.equipCosts} onChange={handleForm} className="input" /></td>
                            <td><input type="text" name="overheads" placeholder={editForm.overheads || 'Накладные расходы'} value={editForm.overheads} onChange={handleForm} className="input" /></td>
                            <td><input type="text" name="estimated" placeholder={editForm.estimated || 'Сметная прибыль'} value={editForm.estimated} onChange={handleForm} className="input" /></td>
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
            {add && <AddNew Submit={Submit} isEdit={isEdit} parentId={parentId} />}
            {
                data?.child?.length ? (data.child.map((chil) => (
                    <ProjItem data={chil} count={counter} key={chil.id} />
                ))) : null
            }
        </>
    )
}
