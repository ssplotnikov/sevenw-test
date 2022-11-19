import React, { useEffect } from "react";
import { fetchRowsThunk } from "../../store/RowSlice/rowSlice";
import ProjContent from "../ProjContent";
import "./ProjectContent.style.sass";


export default function ProjectContent() {
    useEffect(() => {
        fetchRowsThunk()
    }, [])
    return (
        <div className="container">
            <div className="header-box">
                <div className="header-box__head">
                    Header contetn
                </div>
            </div>
            <div className="content">
                <ProjContent />
            </div>
        </div>
    )
}
