import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import NavBar from './shared/navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Zotian</title>
      </Head>

      <NavBar></NavBar>

      <main>
      </main>
    </div>
  )
}
