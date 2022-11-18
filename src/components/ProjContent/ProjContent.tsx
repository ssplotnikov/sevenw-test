import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchRowsThunk } from '../../store/RowSlice/rowSlice';
import ProjItem from '../ProjItem/ProjItem';
import './ProjContent.style.sass';


export default function ProjList() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchRowsThunk())
    }, [])
    const datas = useAppSelector(state => state.rows.rows)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Уровень</th>
                        <th>Наименование работ</th>
                        <th>Основная з/п</th>
                        <th>Оборудование</th>
                        <th>накладные расходы</th>
                        <th>Сметная прибыль</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.length ?
                        datas.map((data: any) => (
                            <ProjItem data={data} key={data.id} count={1} />
                        ))
                        : <ProjItem data={0} />}
                </tbody>
            </table>
        </div>
    )
}


