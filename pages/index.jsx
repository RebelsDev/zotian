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
      <section id={styles.deseos}>
        <div className={styles.container}>
          <h2>
            Sin embargo, te gustaría
          </h2>
          <div className={styles.deseos_elements}>
            <div className={styles.deseos_element}>
              <img src="/img/deseos_1_416x511.png" height={416} width={511} alt="Técnicos expertos" />
              <p>Orientación y asesoría
                de la mano de técnicos
                expertos.</p>
            </div>
            <div className={styles.deseos_element}>
              <img src="/img/deseos_2_415x511.png" height={415} width={511} alt="Información detallada" />
              <p>Información clara
                y detallada de los
                productos que ofrecen.</p>
            </div>
            <div className={styles.deseos_element}>
              <img src="/img/deseos_3_419x511.png" height={419} width={511} alt="Información detallada" />
              <p>Información clara
                y detallada de los
                productos que ofrecen.</p>
            </div>
          </div>
        </div>

      </section>
      <section id={styles.quien_soy}>
        <div className={styles.container}>

          <div className={styles.quien_soy_text}>

            <h2>Somos Zotian</h2>
            <p>
              Somos una empresa de trayectoria
              en el mercado peruano.
            </p>
            <p>
              Queremos ayudar a más personas
              amantes de las motocicletas a
              encontrar todo lo que necesitan
              para disfrutar su pasión
              en un solo lugar.
            </p>
            <p>
              Si necesitas un servicio completo
              de calidad, con mantenimiento,
              garantía y asesoramiento...
            </p>
            <p className={styles.last}>
              !Estas en el lugar correcto!
            </p>
          </div>
        </div>
        <img src="/img/quien_soy_1_1800x1195.png" height={1800} width={1195} alt="Zotian Moto" />
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
