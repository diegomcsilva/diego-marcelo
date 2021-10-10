import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Projects.module.css'

import { Project } from './../../../utils/types';

const ProjectsItem: FunctionComponent<Project> = ({ name, date, color, link, tec }, index: number) => {
  
  return (
    <div key={index} className={styles.projectsItem} style={{ backgroundColor: `${color}` }}>
      <div className={`${styles.projectWrapper} wrapper`}>
        <div className={styles.projectsDate}>
          {date}
        </div>
        <Link href={link} passHref>
          <a className={styles.projectsName} target="_blank" >
            {name}
          </a>
        </Link>
        <div className={styles.markSpace}></div>
        <div className={styles.projectsTec}>
          <ul className={styles.projectsList}>
            {
              tec.map((language, key) =>
                <li key={key} title={language}>
                  <Image key={language} src={`/icons-languages/${language}.png`} alt={language} width={40} height={40} objectFit='contain'/>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem