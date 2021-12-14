/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from '../styles/Home.module.scss';
import Modal from './modal';
import Footer from './shared/footer';
import NavBar from './shared/navbar';

export default function Home() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings_fade = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings_sec = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 4024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

    ]
  };
  return (
    <div >
      <Head>
        <title>Zotian</title>
      </Head>

      <nav>
        <NavBar />
      </nav>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title={"Ingresa tu correo electrónico para que puedas agendar una reunión con nosotros"}
        actionName={"Contáctanos"}
      />
      <main>

        <section id={styles.hero}>
          <div className={styles.container}>
            <div className={styles.hero_text}>

              <h1>
                Contamos con todo<br />
                lo necesario para que<br />
                puedas disfrutar de<br />
                tu pasión motera<br />
                sin fronteras.<br />

              </h1>
              <p className='subtitle'>Te ofrecemos motos, repuestos,<br />
                lubricantes, accesorios y más.</p>
              <button>Contáctanos</button>
            </div>

            <div className={styles.hero_img}>
              <img src="/img/hero_main_816x603.png" alt="" />
            </div>

          </div>
        </section>
        <section id={styles.miedos}>
          <div className={styles.container}>
            <h2>
              Estas buscando comprar
              una motocicleta<br /> o hacerle
              mantenimiento y
              te ha pasado que...
            </h2>
            <div className={styles.miedos_elements}>
              <div className={styles.miedo_element}>
                <img src="/img/miedos_1.svg" height={400} width={400} alt="Profesional" />
                <p>No encuentras un lugar profesional
                  con un servicio completo.</p>


              </div>
              <div className={styles.miedo_element}>
                <img src="/img/miedos_2.svg" height={400} width={400} alt="Moto" />
                <p>El funcionamiento de tu moto
                  no mejora a pesar de varias
                  revisiones.</p>
              </div>
              <div className={styles.miedo_element}>
                <img src="/img/miedos_3.svg" height={400} width={400} alt="Garantía" />
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

              <h2>Somos <br />Zotian</h2>
              <p>
                Somos una empresa de trayectoria<br />
                en el mercado peruano.
              </p>
              <p>
                Queremos ayudar a más personas<br />
                amantes de las motocicletas a<br />
                encontrar todo lo que necesitan<br />
                para disfrutar su pasión<br />
                en un solo lugar.
              </p>
              <p>
                Si necesitas un servicio completo<br />
                de calidad, con mantenimiento,<br />
                garantía y asesoramiento...
              </p>
              <p className={styles.last}>
                !Estas en el lugar correcto!
              </p>
            </div>
          </div>
          <img src="/img/quien_soy_1_1800x1195.png" height={1800} width={1195} alt="Zotian Moto" />
        </section>
        <section id={styles.propuesta}>
          <div className={styles.container}>
            <div className={styles.propuesta_hero}>
              <div className={styles.propuesta_title}>
                <h2>Conversa con uno de nuestros asesores de ventas</h2>
                <button id="desktop">Contactanos</button>

              </div>

              <div id="main-slider" className={styles.main_slider}>
                <Slider {...settings}
                  asNavFor={nav2}
                  ref={slider => (setNav1(slider))}>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto1.png" alt="VIPER 200 DKR" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto2.png" alt="PATAGONIA 169" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto3.png" alt="BENELLI 180S" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto4.png" alt="BENELLI TNT150I" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto5.png" alt="BAJAJ CT125" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto6.png" alt="BENELLI TNT25" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto7.png" alt="BENELLI 302S" />
                  </div>
                  <div className={styles.img_slider}>
                    <img src="/img/propuesta_producto8.png" alt="SUPERLIGHT 200" />
                  </div>
                </Slider>
              </div>
            </div>
            <div id="secondary-slider" className={styles.secondary_slider}>
              <Slider
                {...settings_sec}
                asNavFor={nav1}
                ref={slider => (setNav2(slider))}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto1.png" alt="VIPER 200 DKR" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto2.png" alt="PATAGONIA 169" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto3.png" alt="BENELLI 180S" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto4.png" alt="BENELLI TNT150I" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto5.png" alt="BAJAJ CT125" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto6.png" alt="BENELLI TNT25" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto7.png" alt="BENELLI 302S" />
                </div>
                <div className={styles.img_slider_sec}>
                  <img src="/img/propuesta_producto8.png" alt="SUPERLIGHT 200" />
                </div>
              </Slider>
            </div>
            <button id="mobile">
              Contáctanos
            </button>

          </div>
        </section>
        <section id={styles.testimonios}>
          <div className={styles.container}>
            <h2 id="mobile">
              Nuestros<br /> clientes
            </h2>
            <h2 id="desktop">
              Nuestros clientes
            </h2>

            <div className={styles.testimonios_elements} >
              <div id='mobile'>
                <div className={styles.testimonio_element}>
                  <p>“Definitivamente recomendaría
                    Zotian, tienen la mejor atención
                    que jamas he recibido”</p>
                  <h3>Andy Lopez</h3>
                </div>

                <div className={styles.testimonio_element}>
                  <p>“Las motos cuentan con una
                    garantía que te da una gran
                    confianza por el servicio”</p>
                  <h3>dany morelo</h3>
                </div>

                <div className={styles.testimonio_element}>
                  <p>“El servicio brindado por Zotian fue excelente, lo recomiendo totalmente a quienes amen el mundo de las motos”</p>
                  <h3>MIGUEL FLORES</h3>
                </div>

              </div>

              <div id='desktop'>

                <div id='secondary-slider' className={styles.secondary_slider}>

                  <Slider {...settings_fade}>
                    <div className={styles.testimonio_element}>
                      <p>“Definitivamente recomendaría
                        Zotian, tienen la mejor atención
                        que jamas he recibido”</p>
                      <h3>Andy Lopez</h3>
                    </div>

                    <div className={styles.testimonio_element}>
                      <p>“Las motos cuentan con una
                        garantía que te da una gran
                        confianza por el servicio”</p>
                      <h3>dany morelo</h3>
                    </div>

                    <div className={styles.testimonio_element}>
                      <p>“El servicio brindado por Zotian fue excelente, lo recomiendo totalmente a quienes amen el mundo de las motos”</p>
                      <h3>MIGUEL FLORES</h3>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <img src="/img/testimonios_bg.png" alt="" />


        </section>
        <section id={styles.lead_magnet}>
          <div className={styles.container}>
            <h2>LAS 10
              mejores
              motos
              para
              principiantes  </h2>
            <button>
              Descargar
            </button>
          </div>
        </section>
        <section id={styles.hero_footer}>
          <div className={styles.container}>
            <h2>
              ¿Estas listo para<br />
              disfrutar de tu<br />
              pasión motera?
            </h2>
            <p>
              Escríbenos para conocer cuales<br/>
              son tus problemas y necesidades
            </p>
            <button>
              Contáctanos
            </button>

          </div>
          <img src="/img/hero_footer_main_1095x917.png" alt="" />
        </section>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
