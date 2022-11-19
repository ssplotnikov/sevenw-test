import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { API } from '../../services/api';
import { Rows, StateType } from './rowSlice.types';

const initialState: StateType = {
    rows: [
    ],
    status: 'loading',
    error: ''
}
export const rowSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        fetchList: (state) => {
            state.rows
        },
        getRows: (state, action) => {
            state.rows = action.payload
        },
        updateRow: (state, action: any) => {
            return state.rows.map((row) => {
                console.log(row.id)
                console.log(action.payload.current)
                if (row.id === action.payload.current.id) {
                    return { ...row, ...action.payload.current }
                }
                if (row.id !== action.payload.current.id) {
                    return row?.child.map((chi) => {
                        if (chi.id === action.payload.current.id) {
                            return { ...chi, ...action.payload.current }

                        }
                    })
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
    } catch (err) {
        console.log(err)
    }
}
export const updateRowThunk = (row: any) => async (dispatch: (arg0: { payload: undefined; type: "rows/updateRow"; } | { payload: any; type: "rows/updateRow"; }) => void) => {
    try {
        const response = await API.updateRow(row)
        dispatch(updateRow(response.data))
    } catch (err) {
        console.log(err)
    }
}

export const addRowThunk = (row: any) => async (dispatch: (arg0: { payload: any; type: "rows/addRow"; }) => void) => {
    console.log('ADD_ROW_THUNK')
    try {
        console.log(row)
        const response = await API.createRow(row)
        console.log(response)
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
export const { getRows, addRow, deleteRow, updateRow, fetchList } = rowSlice.actions
