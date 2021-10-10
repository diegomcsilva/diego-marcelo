// Ref to slider - https://react-slick.neostack.com/
import type { NextPage } from 'next'
import Image from 'next/image'
import Slider from 'react-slick'

import { LANGUAGES } from '../../../utils/contants'
import styles from './Footer.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Footer: NextPage = () => {

  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // centerMode: true,
  };

  return (
    <footer className={styles.footer}>
      <Slider {...settings}>
        {LANGUAGES.map(language =>
          <span key={language} className={styles.footerItem}>
            <Image key={language} title={language} src={`/icons-languages/${language}.png`} alt={language} width={50} height={50} objectFit='contain'/>
          </span>
        )}
      </Slider>
    </footer>
  )
}

export default Footer;


