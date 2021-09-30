import type { NextPage } from 'next'

import styles from './Filter.module.css'

const Filter: NextPage = () => {
  return (
    <div className="wrapper">
      <div className={styles.filter}>
        <input className={styles.input} type="text" />
        <div className={styles.icon}>
          <svg className={styles.svg} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2963 0H0.704034C0.0794829 0 -0.235663 0.757793 0.206866 1.20032L5.62509 6.61937V12.6562C5.62509 12.8857 5.73703 13.1007 5.925 13.2323L8.26875 14.8723C8.73114 15.196 9.37509 14.868 9.37509 14.2963V6.61937L14.7935 1.20032C15.2351 0.758672 14.9221 0 14.2963 0Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Filter