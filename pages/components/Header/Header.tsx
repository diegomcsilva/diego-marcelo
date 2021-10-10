import { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HEADER_CONFIG } from './../../../utils/contants'

import style from './Header.module.css'


const Header: NextPage = () => {
  const refEls: any = []
  const [photo, setPhoto] = useState<number>(0)
  const { interval, limitPhotos } = HEADER_CONFIG
  
  Array(limitPhotos)
    .fill('')
    .map(
      // eslint-disable-next-line react-hooks/rules-of-hooks
      (ref, index) => refEls[index] = useRef()   
    )

  useEffect(() => {
    let counter = 0;
    
    setInterval(() => {
      refEls[counter].current.classList.remove('images__item__show')

      counter++

      if (counter === limitPhotos) {
        counter = 0
      }

      refEls[counter].current.classList.add('images__item__show')

    }, interval);

    return () => { }
  }, [])

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
                {
                  Array(limitPhotos)
                  .fill('')
                    .map((_, index) => <div
                      className='images__item__hide'
                      ref={refEls[index]}
                      key={index}
                    >
                      <Image
                      src={`/photos/photo_${index}.jpg`}
                      alt="Imagens"
                      width={97}
                      height={115}
                      objectFit='contain' />
                    </div>)
                }
              </div>
              <span className={style.images__before}></span>
            </div>
            <div className={style.resume}>
              <div className={style.title}>Diego Marcelo</div>
              <div className={style.description}>My experiences have made me evolve, but I know that I have a lot to learn.</div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
