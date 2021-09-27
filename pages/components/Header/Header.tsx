import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import style from './Header.module.css'

const Header: NextPage = () => {
  return (
    <>
      <Head>
        <title>Diego Marcelo</title>
        <meta name="description" content="My Portfoli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="wrapper">
          <div className={style.container}>
            <div className={style.images}>
              <div className={style.images__container}>
                <Image src="/ale.jpg" alt="Vercel Logo" width={97} height={115} />
              </div>
              <span className={style.images__before}></span>
            </div>
            <div className={style.resume}>
              <div className={style.title}>Diego Marcelo</div>
              <div className={style.description}>About me About me About me About me About me AAbout me About me</div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
