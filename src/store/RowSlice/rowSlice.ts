import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchTree } from "../../helps/searchTree";
import { API } from '../../services/api';
import { StateType } from './rowSlice.types';

const initialState: StateType = {
    rows: [
    ],
    status: 'loading',
    error: '',
    isEdit: false,
}
export const rowSlice = createSlice({
    name: 'rows',
    initialState,
    reducers: {
        toggleEdit: (state) => {
            state.isEdit = !state.isEdit
        },
        getRows: (state, action: any) => {
            state.rows = action.payload
        },
        updateRow: (state, action: any) => {
            return state.rows.map((row: any) => {
                if (row.id === action.payload.current.id) {
                    return { ...row, ...action.payload.current }
                }
                if (row.id !== action.payload.current.id) {
                    return row?.child.map((chi: any) => {
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

export const fetchRowsThunk = () => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.getRowList()
        dispatch(getRows(response.data))
    } catch (err) {
        console.log(err)
    }
}
export const updateRowThunk = (row: any) => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.updateRow(row)
        dispatch(updateRow(response.data))
    } catch (err) {
        console.log(err)
    }
}

export const addRowThunk = (row: any) => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.createRow(row)
        if (response.status === 200) {
            dispatch(addRow(response.data.current))
        }
    } catch (err) {
        console.log(err)
    }
}

export const deleteRowThunk = (id: number) => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.deleteRow(id)
        if (response.status === 200) {
            dispatch(deleteRow(id))
        }
    } catch (err) {
        console.log(err)
    }
}
export const { toggleEdit, toggleAdd, getRows, addRow, deleteRow, updateRow, fetchList } = rowSlice.actions
