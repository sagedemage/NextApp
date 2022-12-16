import Head from 'next/head'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title> Next App </title>
        <meta name="description" content="Home page of Salmaan Saeed" />
      </Head>
      <main>
		<h1> Next App </h1>
		<p>
			App written in Next.js
		</p>
		<p className={styles.purple}>
			Purple
		</p>
      </main>
    </div>
  )
}

