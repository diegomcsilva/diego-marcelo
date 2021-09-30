import React, { FunctionComponent } from 'react'

import styles from './Projects.module.css'

type Props = {
  name: string,
  date: string,
  color: string
}

const ProjectsItem: FunctionComponent<Props> = ({ name, date, color }, index: number) => {
  
  return (
    <div key={index} className={styles.projectsItem} style={{ backgroundColor: `${color}` }}>
      <div className={`${styles.projectWrapper} wrapper`}>
        <div className={styles.projectsName}>
          {name}
        </div>
        <div className={styles.projectsDate}>
          {date}
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem