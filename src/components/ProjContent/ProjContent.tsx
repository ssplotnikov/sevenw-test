import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import './ProjContent.style.sass';


export default function ProjList() {
    const datas = useAppSelector(state => state.rows.rows)
    console.log('list: ', datas)
    return (
        <div>
            <table className="table">
                <tr>
                    <th>Уровень</th>
                    <th>Наименование работ</th>
                    <th>Основная з/п</th>
                    <th>Оборудование</th>
                    <th>накладные расходы</th>
                    <th>Сметная прибыль</th>
                </tr>
                {datas.map((data) => (
                    <ProjItem data={data} />
                ))}
            </table>
        </div>
    )
}


function ProjItem({ data }) {
    return (
        <tr>
            <td>{data.child || 1}</td>
            <td>{data.rowName}</td>
            <td>{data.mainCosts}</td>
            <td>{data.equipmantCosts}</td>
            <td>{data.supportCosts}</td>
            <td>&nbsp;</td>
        </tr>
    )
}
