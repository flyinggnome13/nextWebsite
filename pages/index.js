import Head from 'next/head'
import Header from "./header.tsx";
import Menu from "./menu.tsx";
import Footer from "./footer";
import styles from "./index.module.css"
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Menu/>
          <div className={styles.subheader}>
          <Header/>
        <p className="description">
          thid website was created by using <code>next.js</code>
        </p>
          </div>
      </main>
        <Footer/>
    </div>
  )
}
