import React from 'react';
import './ProjectList.style.sass'

export default function ProjectList() {
    return (
        <div className="project-list">
            <div className="name-proj">
                <div>
                    <div >
                        NameProject
                    </div>
                    <div>
                        Абрревиатура
                    </div>
                </div>
                <div>
                    стрелочка
                </div>
            </div>
            <div className='list'>
                <div className='list__item' >
                    <div className="list__item__icon" />
                    <div>
                        NameSpace
                    </div>
                </div>
            </div>
        </div>
    )
}
