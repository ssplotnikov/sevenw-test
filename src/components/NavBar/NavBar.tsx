import React from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addRowThunk, deleteRowThunk, fetchRowsThunk, getRows, updateRowThunk } from '../../store/RowSlice/rowSlice';
import './NavBar.style.sass';

export default function NavBar() {
    const dispatch = useAppDispatch()
    return (
        <div className="navbar">
            <div className="leftBox">
                <div className="apps" />
                <div className="reply" />
                <div>Просмотр</div>
                <div>Управление</div>
            </div>
        </div>
    )
}
