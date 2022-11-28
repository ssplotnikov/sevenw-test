import React, { useState } from "react";
import './EditMode.style.sass'
import { Props } from "./EditMode.types";


export default function EditMode({ count, createParent, createChild, deleteRow, isEdit }: Props) {
    const [isHover, setIsHover] = useState(false)
    return (
        <td onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {count === 1 &&
                <div className={`box ${isHover && !isEdit ? "hover" : ""}`}>
                    <div className="blue main" onClick={createParent} />
                    <div className="green" />
                    <div className="file" onClick={createChild} />
                    <div className="delete" onClick={deleteRow} />
                </div>
            }
            {count === 2 &&
                <div className={`box ${isHover && !isEdit ? "hover" : ""}`} >
                    <div className="green main" />
                    <div className="file" onClick={createChild} />
                    <div className="delete" onClick={deleteRow} />
                </div>
            }
            {count >= 3 &&
                <div className={`box ${isHover && !isEdit ? "hover" : ""}`}>
                    <div className="file main" onClick={createChild} />
                    <div className="delete" onClick={deleteRow} />
                </div>
            }
        </td >
    )
}
