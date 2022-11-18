import React, { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput/useInput';
import { Props } from './ProjItem.types'
import './ProjItem.style.sass'
import { addRowThunk } from '../../store/RowSlice/rowSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { shallowEqual } from 'react-redux';
import EditMode from '../EditMode/EditMode';

export default function ProjItem({ data, edit = false, count }: Props) {
    const dispatch = useAppDispatch()
    const [toggle, setToggle] = useState(edit)

    const [rowName, handlerRowName] = useInput(data.rowName)
    const [mainCosts, handlerMainCosts] = useInput(data.mainCosts)
    const [equipCosts, handlerEquipCosts] = useInput(data.equipmentCosts)
    const [overheads, handlerOverheads] = useInput(data.overheads)
    const [estimated, handlerEstimated] = useInput(data.estimatedProfit)

    const addRow = () => {
        if (!shallowEqual(data, {
            "equipmentCosts": equipCosts,
            "estimatedProfit": estimated,
            "machineOperatorSalary": 0,
            "mainCosts": mainCosts,
            "materials": 0,
            "mimExploitation": 0,
            "overheads": overheads,
            "parentId": null,
            "rowName": rowName,
            "salary": 0,
            "supportCosts": 0

        })) {
            dispatch(addRowThunk({
                "equipmentCosts": equipCosts,
                "estimatedProfit": estimated,
                "machineOperatorSalary": 0,
                "mainCosts": mainCosts,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": overheads,
                "parentId": null,
                "rowName": rowName,
                "salary": 0,
                "supportCosts": 0
            }))
        }
    }
    const Submit = (e) => {
        if (e.code === 'Enter' && !data) {
            setToggle(false)
            addRow()
            console.log("add Row")
        }
    }
    console.log("data: ", data)
    if (!data) {
        return (
            <>
                <tr onDoubleClick={() => setToggle(true)} onKeyDown={Submit}>
                    <td>{count}</td>
                    <td><input type="text" placeholder={rowName || 'Наименование работ'} value={rowName} onChange={handlerRowName} className="input" /></td>
                    <td><input type="text" placeholder={mainCosts || 'Основнaя з/п'} value={mainCosts} onChange={handlerMainCosts} className="input" /></td>
                    <td><input type="text" placeholder={equipCosts || 'Оборудование'} value={equipCosts} onChange={handlerEquipCosts} className="input" /></td>
                    <td><input type="text" placeholder={overheads || 'Накладные расходы'} value={overheads} onChange={handlerOverheads} className="input" /></td>
                    <td><input type="text" placeholder={estimated || 'Сметная прибыль'} value={estimated} onChange={handlerEstimated} className="input" /></td>
                </tr>
            </>
        )
    }
    return (
        <>
            <tr onDoubleClick={() => setToggle(true)} onKeyDown={Submit} onMouseEnter={() => console.log("mouse up")}>
                {toggle ?
                    (
                        <>
                            <EditMode count={count} />
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
                            <EditMode count={count} />
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
        </>
    )
}
