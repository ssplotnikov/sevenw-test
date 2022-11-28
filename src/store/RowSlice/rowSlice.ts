import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import addTree from '../../helps/addTree';
import deleteTree from '../../helps/deleteTree';
import updateTree from '../../helps/updateTree';
import { API } from '../../services/api';
import { Rows, StateType, AddRow } from './rowSlice.types';

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
        toggleEdit: (state, action: PayloadAction<boolean>) => {
            state.isEdit = action.payload
        },
        getRows: (state, action: PayloadAction<Rows[]>) => {
            state.rows = action.payload
        },
        updateRow: (state, action: PayloadAction<Rows>) => {
            state.rows = updateTree(state.rows, action.payload)
        },
        addRow: (state, action: PayloadAction<AddRow>) => {
            state.rows = addTree(state.rows, action.payload.newRow, action.payload.parentId)
        },
        deleteRow: (state, action: PayloadAction<Rows>) => {
            state.rows = deleteTree(state.rows, action.payload)
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload
        }
    }
})

export const fetchRowsThunk = () => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.getRowList()
        dispatch(getRows(response.data))
    } catch (err) {
        dispatch(setError(err))
    }
}
export const updateRowThunk = (row: any) => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.updateRow(row)
        dispatch(updateRow(response.data.current))
        response.data.changed.map((change: Rows) => {
            dispatch(updateRow(change))

        })
    } catch (err) {
        dispatch(setError(err))
    }
}

export const addRowThunk = (row: any) => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.createRow(row)
        if (response.status === 200) {
            dispatch(addRow({ newRow: response.data.current, parentId: row.parentId }))
            response.data.changed.map((change: Rows) => {
                dispatch(updateRow(change))

            })
        }
    } catch (err) {
        dispatch(setError(err))
    }
}

export const deleteRowThunk = (row: Rows) => async (dispatch: (arg0: { payload: any; type: `rows/${string}`; }) => void) => {
    try {
        const response = await API.deleteRow(row.id)
        if (response.status === 200) {
            dispatch(deleteRow(row))
            response.data.changed.map((change: Rows) => {
                dispatch(updateRow(change))

            })
        }
    } catch (err) {
        dispatch(setError(err))
    }
}
export const { setError, toggleEdit, getRows, addRow, deleteRow, updateRow, } = rowSlice.actions
