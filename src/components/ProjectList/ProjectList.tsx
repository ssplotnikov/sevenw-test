import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link className='list__item' to="/" >
                    <div className="list__item__icon" />
                    <div>
                        NameSpace
                    </div>
                </Link>
            </div>
        </div>
    )
}
