import React from 'react';
import './ProjectList.style.sass'

export default function ProjectList() {
    return (
        <div className="porject-list">
            <div className="name-proj">
                <div >
                    NameProject
                </div>
                <div>
                    Абрревиатура
                </div>
            </div>
            <div className='list'>
                <div className='list__item' >
                    <div className="list__item__icon">
                        Icon
                    </div>
                    <div>
                        NameSpace
                    </div>
                </div>
            </div>
        </div>
    )
}
