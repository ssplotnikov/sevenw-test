import React from 'react';
import NavBar from '../components/NavBar';
import ProjectContent from '../components/ProjectContent';
import ProjectList from '../components/ProjectList';

export default function ViewPage() {
    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex', width: ' 100%' }}>

                <ProjectList />
                <ProjectContent />
            </div>
        </div>
    )
}
