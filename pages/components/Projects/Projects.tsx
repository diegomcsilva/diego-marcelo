import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

import ProjectsItem from './Projects_Item';
import { Project } from './../../../utils/types';

import styles from './Projects.module.css'


const Projects: NextPage = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const res = fetch('/api/projects')
      .then(res => res.json())
      .then(res => setProjects(res));

    return () => {
      setProjects([])
    };
  }, [])

  return (
    <div className={styles.projects}>
      <div className="wrapper">
        <div className={styles.projectsContainer}>
          { console.log(projects)}
          {projects.sort((a:Project, b:Project) => b.date - a.date).map((item:Project, index:number) => ProjectsItem(item, index))}
        </div>
      </div>
    </div>
  )
}

export default Projects