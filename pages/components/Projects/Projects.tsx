import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

import ProjectsItem from './Projects_Item';

import styles from './Projects.module.css'

type Data = {
  name: string,
  date: string,
  color: string
}

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
          {projects.map((item:Data, index:number) => ProjectsItem(item, index))}
        </div>
      </div>
    </div>
  )
}

export default Projects