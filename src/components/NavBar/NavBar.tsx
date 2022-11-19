import React from 'react';
import './NavBar.style.sass';

export default function NavBar() {
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
