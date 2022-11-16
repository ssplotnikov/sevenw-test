import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ProjectContent from '../components/ProjectContent/ProjectContent';
import ProjectList from '../components/ProjectList';

export default function ViewPage() {
    return (
        <div>
            <NavBar />
            <div style={{display: 'flex', width:' 100%'}}>

                <ProjectList />
                <ProjectContent />
                {/*<Outlet />*/}
            </div>
        </div>
    )
}
