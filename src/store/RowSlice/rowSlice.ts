import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { API } from '../../services/api';
import { Rows, StateType } from './rowSlice.types';

const initialState: StateType = {
    rows: [
        {
            child: null,
            equipmentCosts: 0,
            estimatedProfit: 0,
            id: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            rowName: 'string',
            salary: 0,
            supportCosts: 0,
            total: 0,
        }
    ],
    edit: null,
    status: 'loading',
    error: ''
}
export const rowSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        getRows: (state, action) => {
            state.rows = action.payload
        },
        updateRow: (state, action: any) => {
            state.rows.map((row) => {
                if (row.id === action.payload.id) {
                    return { ...row, ...action.payload }
                }
                return row
            })
        },
        addRow: (state, action) => {
            state.rows.push(action.payload)
        },
        deleteRow: (state, action) => {
            state.rows.filter((row) => row.id === action.payload)
        }
    }
})

export const fetchRowsThunk = () => async (dispatch: (arg0: { payload: any; type: "rows/getRows"; }) => void) => {
    try {
        const response = await API.getRowList()
        dispatch(getRows(response.data))
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}
// change type for row
export const updateRowThunk = (row: any) => async (dispatch: (arg0: { payload: undefined; type: "rows/updateRow"; } | { payload: any; type: "rows/updateRow"; }) => void) => {
    try {
        const response = await API.updateRow(row)
        dispatch(updateRow(response.data))
    } catch (err) {
        console.log(err)
    }
}

// change type for row
export const addRowThunk = (row: any) => async (dispatch: (arg0: { payload: any; type: "rows/addRow"; }) => void) => {
    try {
        const response = await API.createRow(row)
        if (response.status === 200) {
            dispatch(addRow(response.data.current))
        }
    } catch (err) {
        console.log(err)
    }
}

export const deleteRowThunk = (id: number) => async (dispatch: (arg0: { payload: any; type: "rows/deleteRow"; }) => void) => {
    try {
        const response = await API.deleteRow(id)
        if (response.status === 200) {
            dispatch(deleteRow(id))
        }
    } catch (err) {
        console.log(err)
    }
}
export const { getRows, addRow, deleteRow, updateRow } = rowSlice.actions
