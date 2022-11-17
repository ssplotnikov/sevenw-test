import React from "react";
import ProjList from "../ProjContent/ProjContent";
import "./ProjectContent.style.sass";


export default function ProjectContent() {
    return (
        <div className="container">
            <div className="header-box">
                <div className="header-box__head">
                    Header contetn
                </div>
            </div>
            <div className="content">
                <ProjList />
            </div>
        </div>
    )
}
