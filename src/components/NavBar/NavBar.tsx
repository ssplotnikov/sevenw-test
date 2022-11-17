import React from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addRowThunk, deleteRowThunk, fetchRowsThunk, getRows, updateRowThunk } from '../../store/RowSlice/rowSlice';
import './NavBar.style.sass';

export default function NavBar() {
    const dispatch = useAppDispatch()
    const add = () => {
        dispatch(addRowThunk({
            "equipmentCosts": 2,
            "estimatedProfit": 0,
            "machineOperatorSalary": 0,
            "mainCosts": 0,
            "materials": 0,
            "mimExploitation": 0,
            "overheads": 0,
            "parentId": null,
            "rowName": "string",
            "salary": 0,
            "supportCosts": 0
        }))
    }
    const update = () => {
        dispatch(updateRowThunk({
            "equipmentCosts": 0,
            "estimatedProfit": 0,
            "machineOperatorSalary": 0,
            "mainCosts": 0,
            "materials": 0,
            "mimExploitation": 0,
            "overheads": 0,
            "rowName": "string",
            "salary": 0,
            "supportCosts": 0,
            "id": 4462
        }))
    }
    const deleteRow = () => {
        dispatch(deleteRowThunk(4462))
    }
    const fetch = () => {
        dispatch(fetchRowsThunk())
    }
    return (
        <div className="navbar">
            <div className="leftBox">
                <div className="apps" />
                <div className="reply" />
                <div onClick={add}>Просмотр</div>
                <div onClick={update}>Управление</div>
                <div onClick={deleteRow}>Deelete</div>
                <div onClick={fetch}>fetch</div>
            </div>
            <div>
                <div>
                    Icon
                </div>
                <div>
                    Full Name
                </div>
            </div>
        </div>
    )
}
