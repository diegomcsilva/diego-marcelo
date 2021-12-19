import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'

import ProjectsItem from './Projects_Item'
import { FilterContext } from '../../common/context/filterContext'
import { Project } from './../../../utils/types'

import styles from './Projects.module.css'


const Projects: NextPage = () => {
  const [projects, setProjects] = useState({
    originDataProjcets: [],
    projectsCurrent: []
  })
  const { filter } = useContext(FilterContext)
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(res => setProjects({
        originDataProjcets: res.sort((a: Project, b: Project) => b.date - a.date),
        projectsCurrent: res.sort((a: Project, b: Project) => b.date - a.date),
      }))
    
    return () => {
      setProjects({
        originDataProjcets: [],
        projectsCurrent: []
      })
    }
  }, [])

  useEffect(() => {
    const projectsOrganization = filter ? projects.originDataProjcets
        .filter((item: Project) => item.tec
        .some((tec: string) => tec === filter)
      ) : projects.originDataProjcets
      
    setProjects({
      ...projects,
      projectsCurrent: projectsOrganization
    })
  }, [filter])

  return (
    <div className={styles.projects}>
      <div className="wrapper">
        <div className={styles.projectsContainer}>
          {
            projects.projectsCurrent
              .map((item: Project, index: number) => ProjectsItem(item, index))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects