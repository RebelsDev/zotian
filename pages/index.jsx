import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NavBar from './shared/navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Zotian</title>
      </Head>

      <NavBar></NavBar>

      <section id={styles.hero}>
        <div className={styles.container}>

          <h1>
            Contamos con todo
            lo necesario para
            que puedas disfrutar
            de tu pasión motera sin fronteras.
          </h1>
          <p className='subtitle'>Te ofrecemos motos, repuestos,
            lubricantes, accesorios y más.</p>

        </div>
        <button>Contáctanos</button>
      </section>
      <section id='miedos'>

      </section>
      <section id='deseos'>

      </section>
      <section id='quien_soy'>

      </section>
      <section id='propuesta'>

      </section>
      <section id='testimonios'>

      </section>
      <section id='lead_magnet'>

      </section>
      <section id='hero_footer'>

      </section>
      <main>
      </main>
    </div>
  )
}
