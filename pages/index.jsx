/* eslint-disable @next/next/no-img-element */
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
          <button>Contáctanos</button>
          <div className={styles.hero_img}>
            <img src="/img/hero_main_816x603.png" alt="" />
          </div>

        </div>
      </section>
      <section id={styles.miedos}>
        <div className={styles.container}>
          <h2>
            Estas buscando comprar
            una motocicleta o hacerle
            mantenimiento y
            te ha pasado que...
          </h2>
          <div className={styles.miedos_elements}>
            <div className={styles.miedo_element}>
              <img src="/img/miedos_1_478x478.png" height={478} width={478} alt="Profesional" />
              <p>No encuentras un lugar profesional
                con un servicio completo.</p>


            </div>
            <div className={styles.miedo_element}>
              <img src="/img/miedos_2_479x478.png" height={479} width={478} alt="Moto" />
              <p>El funcionamiento de tu moto
                no mejora a pesar de varias
                revisiones.</p>
            </div>
            <div className={styles.miedo_element}>
              <img src="/img/miedos_3_479x479.png" height={479} width={479} alt="Garantía" />
              <p>Ningun lugar te inspira
                confianza ni te ofrece garantía.</p>
            </div>
          </div>
        </div>
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
