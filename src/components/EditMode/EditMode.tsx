import React from "react";
import './EditMode.style.sass'


export default function EditMode({ count }) {
    return (
        <td onMouseEnter={() => console.log('test')}>
            {count === 1 &&
                <div className="box">
                    <div className="blue" />
                    <div className="green" />
                    <div className="file" />
                    <div className="delete" />
                </div>
            }
            {count === 2 &&
                <div className="box">
                    <div className="green" />
                    <div className="file" />
                    <div className="delete" />
                </div>
            }
            {count === 3 &&
                <div className="box">
                    <div className="file" />
                    <div className="delete" />
                </div>
            }
        </td >
    )
}
