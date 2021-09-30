import type { NextPage } from 'next'

import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>
        <Filter />

        <Projects />
      </main>

      <Footer />
    </div>
  )
}

export default Home
