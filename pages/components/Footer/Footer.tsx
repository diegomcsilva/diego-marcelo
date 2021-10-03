import type { NextPage } from 'next'
import Image from 'next/image'

import { LANGUAGES } from '../../../utils/contants'
import styles from './Footer.module.css'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      {console.log({ LANGUAGES })}
      {LANGUAGES.map(language =>
        <span key={language} className={styles.footerItem}>
          <Image key={language} src={`/icons-languages/${language}.png`} alt={language} width={50} height={50}/>
        </span>
      )}
    </footer>
  )
}

export default Footer;


